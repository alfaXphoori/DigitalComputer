/**
 * ระบบเช็คชื่อเข้าห้อง — Backend (Google Apps Script)
 * รายวิชา ตรรกศาสตร์ของดิจิตอลคอมพิวเตอร์
 *
 * 2 สิทธิ์การใช้งาน:
 *   - นักศึกษา : ดูสถานะการเช็คชื่อทั้งห้องได้อย่างเดียว (doGet — สาธารณะ)
 *   - อาจารย์  : เช็ค/ยกเลิกการมาเรียน (doPost — ต้องมีรหัสผ่านอาจารย์)
 *
 * การติดตั้ง (ดูรายละเอียดใน attendance/README.md):
 *   1. เปิดสเปรดชีตทะเบียนรายชื่อ → เมนู Extensions → Apps Script
 *   2. ลบโค้ดเดิม แล้ววางไฟล์นี้ทั้งหมด → Save
 *   3. ตั้งรหัสผ่านอาจารย์: แก้ค่าในฟังก์ชัน setTeacherKey() ด้านล่าง แล้วกด Run 1 ครั้ง
 *      (รหัสจะถูกเก็บใน Script Properties ไม่อยู่ในซอร์สโค้ด)
 *   4. Deploy → Manage deployments → แก้ deployment เดิม → Version: New version
 *        - Execute as:      Me (เจ้าของชีต)
 *        - Who has access:  Anyone
 *   5. ใช้ลิงก์ /exec เดิมได้ต่อ
 *
 * - แท็บแรกของสเปรดชีต = ทะเบียนรายชื่อ (ต้องมีหัวคอลัมน์ studentId และ Fullname)
 * - สคริปต์จะสร้างแท็บ "Attendance" ให้อัตโนมัติเพื่อเก็บบันทึกการมาเรียน
 */

var ATT_SHEET_NAME = 'Attendance';
var TIMEZONE = 'Asia/Bangkok';

/**
 * ตั้งรหัสผ่านอาจารย์ — แก้ข้อความด้านล่างเป็นรหัสที่ต้องการ แล้วกด Run ฟังก์ชันนี้ 1 ครั้ง
 * (ทำซ้ำได้ทุกครั้งที่ต้องการเปลี่ยนรหัส)
 */
function setTeacherKey() {
  PropertiesService.getScriptProperties().setProperty('TEACHER_KEY', 'เปลี่ยนรหัสนี้');
}

function doGet() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var today = today_();
  return jsonOut_({
    ok: true,
    today: today,
    roster: readRoster_(ss),
    checked: checkedToday_(ss, today)
  });
}

function doPost(e) {
  try {
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var body = parseBody_(e);
    var action = String(body.action || 'check');

    // ตรวจสอบรหัสผ่านอาจารย์ (ใช้สำหรับล็อกอินโหมดอาจารย์)
    if (action === 'verify') {
      return jsonOut_({ ok: isTeacher_(body.key) });
    }

    // ทุกการเขียนข้อมูลต้องเป็นอาจารย์เท่านั้น
    if (!isTeacher_(body.key)) {
      return jsonOut_({ ok: false, error: 'unauthorized' });
    }

    var id = String(body.studentId || '').trim();
    if (!id) return jsonOut_({ ok: false, error: 'ไม่ได้ระบุรหัสนักศึกษา' });

    var roster = readRoster_(ss);
    var student = null;
    for (var i = 0; i < roster.length; i++) {
      if (roster[i].id === id) { student = roster[i]; break; }
    }
    if (!student) return jsonOut_({ ok: false, error: 'ไม่พบรหัสนี้ในทะเบียนรายชื่อ' });

    var today = today_();

    if (action === 'uncheck') {
      removeToday_(ss, today, id);
      return jsonOut_({ ok: true, action: 'uncheck', today: today, student: student });
    }

    // action = check (ค่าเริ่มต้น)
    if (checkedToday_(ss, today).indexOf(id) !== -1) {
      return jsonOut_({ ok: true, duplicate: true, today: today, student: student });
    }
    getAttSheet_(ss).appendRow([new Date(), today, id, student.name, String(body.session || '')]);
    return jsonOut_({ ok: true, duplicate: false, today: today, student: student });
  } catch (err) {
    return jsonOut_({ ok: false, error: String(err) });
  }
}

function isTeacher_(key) {
  var k = PropertiesService.getScriptProperties().getProperty('TEACHER_KEY') || '';
  return k !== '' && String(key || '') === k;
}

/** อ่านทะเบียนรายชื่อจากแท็บแรก คืน [{ id, name }] */
function readRoster_(ss) {
  var sheet = ss.getSheets()[0];
  var values = sheet.getDataRange().getValues();
  if (values.length < 2) return [];

  var header = values[0].map(function (h) { return String(h).trim().toLowerCase(); });
  var idCol = header.indexOf('studentid');
  var nameCol = header.indexOf('fullname');
  if (nameCol === -1) nameCol = header.indexOf('name');
  if (idCol === -1) idCol = 1;     // สำรอง: คอลัมน์ B
  if (nameCol === -1) nameCol = 2; // สำรอง: คอลัมน์ C

  var out = [];
  for (var r = 1; r < values.length; r++) {
    var id = String(values[r][idCol]).trim();
    var name = String(values[r][nameCol]).trim();
    if (id && name) out.push({ id: id, name: name });
  }
  return out;
}

/** คืนแท็บ Attendance (สร้างใหม่พร้อมหัวตารางถ้ายังไม่มี) */
function getAttSheet_(ss) {
  var sheet = ss.getSheetByName(ATT_SHEET_NAME);
  if (!sheet) {
    sheet = ss.insertSheet(ATT_SHEET_NAME);
    sheet.appendRow(['Timestamp', 'Date', 'studentId', 'Fullname', 'Session']);
  }
  return sheet;
}

/** คืนรายการ studentId ที่เช็คชื่อแล้วในวันที่ที่กำหนด */
function checkedToday_(ss, today) {
  var sheet = ss.getSheetByName(ATT_SHEET_NAME);
  if (!sheet) return [];
  var values = sheet.getDataRange().getValues();
  var out = [];
  for (var r = 1; r < values.length; r++) {
    if (String(values[r][1]) === today) out.push(String(values[r][2]).trim());
  }
  return out;
}

/** ลบบันทึกการมาเรียนของรหัสนี้ในวันนี้ (ใช้ตอนอาจารย์กดยกเลิก) */
function removeToday_(ss, today, id) {
  var sheet = ss.getSheetByName(ATT_SHEET_NAME);
  if (!sheet) return;
  var values = sheet.getDataRange().getValues();
  for (var r = values.length - 1; r >= 1; r--) {
    if (String(values[r][1]) === today && String(values[r][2]).trim() === id) {
      sheet.deleteRow(r + 1);
    }
  }
}

function today_() {
  return Utilities.formatDate(new Date(), TIMEZONE, 'yyyy-MM-dd');
}

function parseBody_(e) {
  if (e && e.postData && e.postData.contents) {
    try { return JSON.parse(e.postData.contents); } catch (x) {}
  }
  return (e && e.parameter) ? e.parameter : {};
}

function jsonOut_(obj) {
  return ContentService
    .createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}
