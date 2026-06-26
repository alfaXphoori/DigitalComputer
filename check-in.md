---
layout: default
title: เช็คชื่อเข้าห้อง
description: เช็คชื่อเข้าเรียนรายวิชา ตรรกศาสตร์ของดิจิตอลคอมพิวเตอร์ (บันทึกลง Google Sheet)
---

<style>
.ci-bar { display: flex; flex-wrap: wrap; gap: 10px 18px; align-items: center; margin: .4em 0 1em; font-size: .95rem; }
.ci-bar .ci-date { font-weight: 700; }
.ci-stat { background: #eef2ff; color: var(--indigo-dark, #3730a3); border-radius: 999px; padding: 4px 14px; font-weight: 600; font-size: .9rem; }
.ci-search { width: 100%; padding: 11px 14px; border: 1px solid var(--line); border-radius: 10px; font-size: 1rem; box-sizing: border-box; margin-bottom: 12px; }
.ci-search:focus { outline: none; border-color: var(--indigo, #4f46e5); box-shadow: 0 0 0 3px rgba(79,70,229,.15); }
.ci-msg { min-height: 1.2em; margin: 6px 0 12px; font-size: .92rem; }
.ci-msg--warn { color: #b45309; }
.ci-msg--error { color: #dc2626; }
.ci-msg--success { color: #15803d; font-weight: 600; }
.ci-list { display: grid; gap: 8px; }
.ci-item { display: flex; align-items: center; justify-content: space-between; gap: 12px; padding: 11px 14px; border: 1px solid var(--line); border-radius: 10px; background: #fff; }
.ci-item.is-done { background: #f0fdf4; border-color: #bbf7d0; }
.ci-info { display: flex; flex-direction: column; line-height: 1.35; min-width: 0; }
.ci-name { font-weight: 600; }
.ci-id { font-family: "JetBrains Mono", monospace; font-size: .8rem; color: #64748b; }
.ci-btn { flex: none; padding: 8px 16px; border-radius: 8px; font-weight: 600; font-size: .9rem; border: 1px solid transparent; background: var(--indigo, #4f46e5); color: #fff; cursor: pointer; transition: opacity .12s ease, transform .12s ease; }
.ci-btn:hover:not(:disabled) { opacity: .9; transform: translateY(-1px); }
.ci-btn:disabled { background: #16a34a; cursor: default; opacity: 1; }
.ci-empty { color: #94a3b8; padding: 16px; text-align: center; }
</style>

# ✅ เช็คชื่อเข้าห้อง

> ค้นหาชื่อหรือรหัสของคุณ แล้วกด **เช็คชื่อ** เพื่อบันทึกการเข้าเรียนของวันนี้

<div class="ci-bar">
  <span>📅 วันที่: <span class="ci-date" id="ci-date">—</span></span>
  <span class="ci-stat" id="ci-stat">—</span>
</div>

<input class="ci-search" id="ci-search" type="text" placeholder="🔍 ค้นหาชื่อหรือรหัสนักศึกษา…" autocomplete="off">

<div class="ci-msg" id="ci-msg"></div>

<div class="ci-list" id="ci-list"></div>

{% raw %}
<script>
(function () {
  // ===== ตั้งค่า: วางลิงก์ Web App (ลงท้าย /exec) จาก Google Apps Script ตรงนี้ =====
  var API_URL = "https://script.google.com/macros/s/AKfycbwLrcghvgnMIYfchF4ywXCD9O0KpZEBmfouO11mjUmHT6qbK6rd1Ft6FSLQaCQezvqXcg/exec";
  // ดูวิธีสร้าง/ติดตั้งใน attendance/README.md
  // ============================================================================

  var elDate = document.getElementById('ci-date');
  var elSearch = document.getElementById('ci-search');
  var elList = document.getElementById('ci-list');
  var elStat = document.getElementById('ci-stat');
  var elMsg = document.getElementById('ci-msg');

  var roster = [];
  var checked = {};
  var today = '';

  function setMsg(text, type) {
    elMsg.textContent = text || '';
    elMsg.className = 'ci-msg' + (type ? ' ci-msg--' + type : '');
  }

  if (!API_URL) {
    elStat.textContent = 'ยังไม่พร้อมใช้งาน';
    setMsg('⚠️ ผู้สอนยังไม่ได้ตั้งค่าระบบ (API_URL) — ดูวิธีตั้งค่าในไฟล์ attendance/README.md', 'warn');
    return;
  }

  function counts() {
    var done = roster.filter(function (s) { return checked[s.id]; }).length;
    return done + ' / ' + roster.length;
  }

  function render() {
    var q = (elSearch.value || '').trim().toLowerCase();
    var rows = roster.filter(function (s) {
      return !q || s.name.toLowerCase().indexOf(q) !== -1 || s.id.toLowerCase().indexOf(q) !== -1;
    });
    elStat.textContent = 'เช็คแล้ว ' + counts();
    elList.innerHTML = '';
    if (!rows.length) {
      var empty = document.createElement('div');
      empty.className = 'ci-empty';
      empty.textContent = 'ไม่พบรายชื่อที่ค้นหา';
      elList.appendChild(empty);
      return;
    }
    rows.forEach(function (s) {
      var done = !!checked[s.id];
      var row = document.createElement('div');
      row.className = 'ci-item' + (done ? ' is-done' : '');

      var info = document.createElement('div');
      info.className = 'ci-info';
      var nm = document.createElement('span');
      nm.className = 'ci-name';
      nm.textContent = s.name;
      var idEl = document.createElement('span');
      idEl.className = 'ci-id';
      idEl.textContent = s.id;
      info.appendChild(nm);
      info.appendChild(idEl);

      var btn = document.createElement('button');
      btn.className = 'ci-btn';
      btn.type = 'button';
      if (done) {
        btn.disabled = true;
        btn.textContent = '✓ เช็คแล้ว';
      } else {
        btn.textContent = 'เช็คชื่อ';
        btn.addEventListener('click', function () { checkin(s, btn); });
      }

      row.appendChild(info);
      row.appendChild(btn);
      elList.appendChild(row);
    });
  }

  function checkin(s, btn) {
    btn.disabled = true;
    btn.textContent = 'กำลังบันทึก…';
    fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'text/plain;charset=utf-8' },
      body: JSON.stringify({ studentId: s.id })
    })
      .then(function (r) { return r.json(); })
      .then(function (data) {
        if (!data.ok) throw new Error(data.error || 'บันทึกไม่สำเร็จ');
        checked[s.id] = true;
        render();
        setMsg((data.duplicate ? 'มีการเช็คชื่อไว้แล้ว: ' : '✓ เช็คชื่อสำเร็จ: ') + s.name, 'success');
      })
      .catch(function (err) {
        btn.disabled = false;
        btn.textContent = 'เช็คชื่อ';
        setMsg('บันทึกไม่สำเร็จ: ' + err.message, 'error');
      });
  }

  function load() {
    setMsg('กำลังโหลดรายชื่อ…');
    fetch(API_URL, { method: 'GET' })
      .then(function (r) { return r.json(); })
      .then(function (data) {
        if (!data.ok) throw new Error(data.error || 'โหลดไม่สำเร็จ');
        roster = data.roster || [];
        today = data.today || '';
        checked = {};
        (data.checked || []).forEach(function (id) { checked[id] = true; });
        if (elDate) elDate.textContent = today;
        render();
        setMsg('');
      })
      .catch(function (err) {
        setMsg('โหลดรายชื่อไม่สำเร็จ: ' + err.message + ' (ตรวจสอบ API_URL และการตั้งค่าสิทธิ์ Web App)', 'error');
      });
  }

  elSearch.addEventListener('input', render);
  load();
})();
</script>
{% endraw %}
