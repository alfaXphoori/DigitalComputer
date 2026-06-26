/**
 * ระบบเช็คชื่อเข้าห้อง — Backend (Google Apps Script)
 * รายวิชา ตรรกศาสตร์ของดิจิตอลคอมพิวเตอร์
 *
 * การติดตั้ง (ดูรายละเอียดใน attendance/README.md):
 *   1. เปิดสเปรดชีตทะเบียนรายชื่อ → เมนู Extensions → Apps Script
 *   2. ลบโค้ดเดิม แล้ววางไฟล์นี้ทั้งหมด → Save
 *   3. Deploy → New deployment → ประเภท "Web app"
 *        - Execute as:      Me (เจ้าของชีต)
 *        - Who has access:  Anyone
 *   4. คัดลอกลิงก์ที่ลงท้ายด้วย /exec ไปวางในตัวแปร API_URL ของหน้า check-in
 *
 * - แท็บแรกของสเปรดชีต = ทะเบียนรายชื่อ (ต้องมีหัวคอลัมน์ studentId และ Fullname)
 * - สคริปต์จะสร้างแท็บ "Attendance" ให้อัตโนมัติเพื่อเก็บบันทึกการมาเรียน
 */

var ATT_SHEET_NAME = 'Attendance';
var TIMEZONE = 'Asia/Bangkok';

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
    var id = String(body.studentId || '').trim();
    if (!id) return jsonOut_({ ok: false, error: 'ไม่ได้ระบุรหัสนักศึกษา' });

    var roster = readRoster_(ss);
    var student = null;
    for (var i = 0; i < roster.length; i++) {
      if (roster[i].id === id) { student = roster[i]; break; }
    }
    if (!student) return jsonOut_({ ok: false, error: 'ไม่พบรหัสนี้ในทะเบียนรายชื่อ' });

    var today = today_();
    if (checkedToday_(ss, today).indexOf(id) !== -1) {
      return jsonOut_({ ok: true, duplicate: true, today: today, student: student });
    }

    var att = getAttSheet_(ss);
    att.appendRow([new Date(), today, id, student.name, String(body.session || '')]);
    return jsonOut_({ ok: true, duplicate: false, today: today, student: student });
  } catch (err) {
    return jsonOut_({ ok: false, error: String(err) });
  }
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
