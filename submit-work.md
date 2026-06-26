---
layout: default
title: ส่งงานรายสัปดาห์
description: ช่องทางส่งใบงานและงานปฏิบัติรายสัปดาห์ผ่าน Google Drive

# 🔧 อาจารย์: แก้เฉพาะค่า drive: ของแต่ละสัปดาห์ให้เป็นลิงก์โฟลเดอร์ Google Drive
#    (แชร์โฟลเดอร์แบบ "ผู้มีลิงก์" = ผู้แก้ไข เพื่อให้นักศึกษาอัปโหลดได้)
#    ลิงก์ที่ยังเป็น "#" จะแสดงป้าย "รอลิงก์" บนหน้าเว็บ
drive_root: "#"

assignments:
  - n: 1
    topic: บทนำรายวิชาและระบบดิจิทัล
    work: ใบงานที่ 1 — รู้จักชุดทดลอง/เครื่องมือวัด และฝึกแทนค่า–นับในเลขฐานต่าง ๆ
    lab: /labs/lab01-number-systems.html
    due: ก่อนคาบสัปดาห์ที่ 2
    drive: "#"
  - n: 2
    topic: เลขคณิตในระบบดิจิทัลและรหัสดิจิทัล
    work: ใบงานที่ 2 — การคำนวณเลขฐานสอง (บวก/ลบด้วยคอมพลีเมนต์) และรหัส BCD/Gray/Parity
    lab: /labs/lab02-digital-codes.html
    due: ก่อนคาบสัปดาห์ที่ 3
    drive: "#"
  - n: 3
    topic: ลอจิกเกตพื้นฐาน
    work: ใบงานที่ 3 — ต่อและทดสอบลอจิกเกต 7408/7432/7404/7400/7402/7486
    lab: /labs/lab03-logic-gates.html
    due: ก่อนคาบสัปดาห์ที่ 4
    drive: "#"
  - n: 4
    topic: คุณสมบัติดิจิทัลไอซีและการเชื่อมต่อลอจิกเกต
    work: ใบงานที่ 4 — วัดระดับแรงดันลอจิก TTL/CMOS และทดลองผลของโหลด (ทำในคาบ)
    lab: "#"
    due: ก่อนคาบสัปดาห์ที่ 5
    drive: "#"
  - n: 5
    topic: พีชคณิตบูลีนและทฤษฎีบทเดอมอร์แกน
    work: ใบงานที่ 5 — พิสูจน์/ลดรูปสมการลอจิก และทดสอบวงจรก่อน–หลังลดรูป
    lab: /labs/lab04-demorgan.html
    due: ก่อนคาบสัปดาห์ที่ 6
    drive: "#"
  - n: 6
    topic: แผนผังคาร์โนห์ (Karnaugh Map)
    work: ใบงานที่ 6 — ออกแบบวงจรจากตารางความจริง ลดรูปด้วย K-map แล้วต่อทดสอบ
    lab: /labs/lab05-kmap.html
    due: ก่อนคาบสัปดาห์ที่ 7
    drive: "#"
  - n: 7
    topic: วงจรคอมบิเนชันและวงจรคำนวณ
    work: ใบงานที่ 7 — ต่อ Half/Full Adder และวงจรบวกขนาน 4 บิตด้วย 7483
    lab: /labs/lab06-adder.html
    due: ก่อนคาบสัปดาห์ที่ 8
    drive: "#"
  - n: 8
    topic: วงจรเปรียบเทียบ ถอด/ลงรหัส และมัลติเพล็กเซอร์
    work: ใบงานที่ 8 — ต่อ decoder ขับ 7-segment และทดลอง MUX 74151 / DEMUX 74138
    lab: /labs/lab07-7segment.html
    due: ก่อนคาบสัปดาห์ที่ 9 · 🟧 สอบกลางภาค (สัปดาห์ 1–8)
    drive: "#"
  - n: 9
    topic: สัญญาณนาฬิกาและแลตช์
    work: ใบงานที่ 9 — ต่อ 555 astable วัด duty cycle และทดลอง SR Latch จาก NAND
    lab: /labs/lab08-sr-latch.html
    due: ก่อนคาบสัปดาห์ที่ 10
    drive: "#"
  - n: 10
    topic: ฟลิปฟลอป
    work: ใบงานที่ 10 — ทดลอง D-FF (7474) และ JK-FF (7476/74112) สังเกต timing
    lab: /labs/lab09-jk-flipflop.html
    due: ก่อนคาบสัปดาห์ที่ 11
    drive: "#"
  - n: 11
    topic: วงจรนับ (Counters)
    work: ใบงานที่ 11 — ทดลอง ripple counter 7493 และ synchronous counter 74161/74190
    lab: /labs/lab10-ripple-counter.html
    due: ก่อนคาบสัปดาห์ที่ 12
    drive: "#"
  - n: 12
    topic: เรจิสเตอร์และวงจรเลื่อนข้อมูล
    work: ใบงานที่ 12 — ทดลอง Shift Register 7495/74164/74165 (ขนาน/อนุกรม)
    lab: /labs/lab11-shift-register.html
    due: ก่อนคาบสัปดาห์ที่ 13
    drive: "#"
  - n: 13
    topic: การออกแบบวงจรเชิงลำดับและ FSM
    work: ใบงานที่ 13 — ออกแบบและสร้าง FSM ตัวตรวจจับลำดับ/วงจรไฟจราจรด้วยฟลิปฟลอป
    lab: /labs/lab12-fsm-design.html
    lab2: /labs/lab13-fsm-implementation.html
    due: ก่อนคาบสัปดาห์ที่ 14
    drive: "#"
  - n: 14
    topic: หน่วยความจำ PLD และการแปลงสัญญาณ ADC/DAC
    work: ใบงานที่ 14 — สร้างฟังก์ชันลอจิกด้วย ROM และทดลอง DAC0808/ADC0804
    lab: /labs/lab14-rom-logic.html
    due: ก่อนคาบสัปดาห์ที่ 15
    drive: "#"
  - n: 15
    topic: แนะนำ HDL — Verilog, EDA Playground และโปรเจกต์ย่อย
    work: ใบงานที่ 15 — Verilog (full adder/counter) + testbench บน EDA Playground และส่งโปรเจกต์ย่อย (นำเสนอในคาบ)
    lab: /labs/lab16-verilog-eda.html
    lab2: /labs/lab15-mini-project.html
    due: 🟧 สอบปลายภาค (สัปดาห์ 9–15) · นำเสนอในคาบสุดท้าย
    drive: "#"
---

<style>
.submit-intro { background: #f8fafc; border: 1px solid var(--line); border-left: 4px solid var(--indigo, #4f46e5); border-radius: 10px; padding: 16px 20px; margin: 1.2em 0; }
.up-btn { display: inline-flex; align-items: center; gap: 6px; padding: 7px 14px; border-radius: 8px; font-weight: 600; font-size: .9rem; background: var(--indigo, #4f46e5); color: #fff !important; white-space: nowrap; }
.up-btn:hover { text-decoration: none; opacity: .9; transform: translateY(-1px); }
.up-pending { display: inline-block; padding: 5px 12px; border-radius: 8px; font-size: .85rem; background: #f1f5f9; color: #64748b; border: 1px dashed #cbd5e1; }
.wk-num { display: inline-grid; place-items: center; width: 30px; height: 30px; border-radius: 50%; background: var(--indigo, #4f46e5); color: #fff; font-weight: 700; font-size: .9rem; }
.muted-cell { color: #94a3b8; }
.submit-table td { vertical-align: top; }
.root-btn-wrap { margin: 1em 0 1.6em; }
</style>

# 📤 ส่งงานรายสัปดาห์

> ช่องทางส่ง **ใบงานและงานปฏิบัติ** ของรายวิชา ตรรกศาสตร์ของดิจิตอลคอมพิวเตอร์ — อัปโหลดไฟล์งานเข้าสู่ **โฟลเดอร์ Google Drive** ของแต่ละสัปดาห์ตามตารางด้านล่าง

<div class="root-btn-wrap">
{% if page.drive_root and page.drive_root != "#" %}
<a class="up-btn" href="{{ page.drive_root }}" target="_blank" rel="noopener">📁 เปิดโฟลเดอร์รวมทั้งหมด</a>
{% else %}
<span class="up-pending">📁 โฟลเดอร์รวม — รอลิงก์จากผู้สอน</span>
{% endif %}
</div>

## วิธีส่งงาน

<div class="submit-intro">

1. กดปุ่ม **📁 อัปโหลด** ของสัปดาห์ที่ต้องการ → จะเปิดโฟลเดอร์ Google Drive ของสัปดาห์นั้น
2. **ลงชื่อเข้า Google ด้วยอีเมลของมหาวิทยาลัย** (`@ksu.ac.th`) ก่อนอัปโหลด
3. ลากไฟล์งานเข้าโฟลเดอร์ หรือกด **New → File upload**
4. ตรวจสอบว่าไฟล์ขึ้นในโฟลเดอร์เรียบร้อยก่อนปิดหน้าต่าง

</div>

## กติกาการตั้งชื่อไฟล์

ตั้งชื่อไฟล์ตามรูปแบบนี้เพื่อให้ตรวจง่ายและไม่สับสน:

```
รหัสนักศึกษา_ชื่อ_labXX.pdf

ตัวอย่าง: 6701001_สมชาย_lab03.pdf
```

| ประเด็น | ข้อกำหนด |
|:---|:---|
| **รูปแบบไฟล์** | PDF เป็นหลัก (รูปวงจร/ภาพถ่ายรวมเป็น PDF เดียว) — โค้ด Verilog แนบ `.v` เพิ่มได้ |
| **ขนาดไฟล์** | ไม่เกิน 25 MB ต่อไฟล์ |
| **งานกลุ่ม** | ใส่รายชื่อ–รหัสสมาชิกทุกคนในหน้าแรก แล้วส่ง **ไฟล์เดียว** ต่อกลุ่ม |
| **กำหนดส่ง** | ภายในเวลาที่ระบุในคอลัมน์ "กำหนดส่ง" (โดยปริยายคือก่อนเริ่มคาบเรียนสัปดาห์ถัดไป) |

## ตารางส่งงานรายสัปดาห์

<div class="table-wrap">
<table class="submit-table">
<thead>
<tr>
<th>สัปดาห์</th>
<th>หัวข้อ</th>
<th>งานที่ต้องส่ง</th>
<th>ใบงาน</th>
<th>กำหนดส่ง</th>
<th>อัปโหลด</th>
</tr>
</thead>
<tbody>
{% for a in page.assignments %}
<tr>
<td><span class="wk-num">{{ a.n }}</span></td>
<td>{{ a.topic }}</td>
<td>{{ a.work }}</td>
<td>
{% if a.lab and a.lab != "#" %}<a href="{{ a.lab | relative_url }}">เปิดใบงาน</a>{% if a.lab2 and a.lab2 != "#" %} · <a href="{{ a.lab2 | relative_url }}">เพิ่มเติม</a>{% endif %}{% else %}<span class="muted-cell">ทำในคาบ</span>{% endif %}
</td>
<td>{{ a.due }}</td>
<td>
{% if a.drive and a.drive != "#" %}<a class="up-btn" href="{{ a.drive }}" target="_blank" rel="noopener">📁 อัปโหลด</a>{% else %}<span class="up-pending">รอลิงก์</span>{% endif %}
</td>
</tr>
{% endfor %}
</tbody>
</table>
</div>

## นโยบายการส่งช้า

| สถานการณ์ | ผลต่อคะแนน |
|:---|:---|
| ส่งตรงเวลา | ได้คะแนนเต็มตามเกณฑ์ |
| ส่งช้าไม่เกิน 1 สัปดาห์ | หักคะแนนตามดุลพินิจผู้สอน |
| ส่งช้าเกิน 1 สัปดาห์ | พิจารณาเป็นรายกรณี (แจ้งเหตุผลล่วงหน้า) |

> 💡 หากพบปัญหาการอัปโหลด (สิทธิ์เข้าถึงโฟลเดอร์ ฯลฯ) ให้แจ้งผู้สอนทันทีในคาบเรียนหรือทางช่องทางที่ประกาศไว้
