# เค้าโครง Concept Animations — Digital Computer Logic

> เอกสารวางแผน animation เชิงการเรียนรู้ (concept animation) สำหรับทุกบท
> ใช้เป็นสเปกให้ agent ทำต่อ — ยึด convention กลางด้านล่างให้สไตล์เดียวกันทั้งเว็บ
>
> **หลักคิด:** animation ตกแต่ง (fade/reveal) มีพอแล้ว — ห้ามเพิ่ม. โฟกัสที่ animation ที่ทำให้นักศึกษา *เห็นกระบวนการที่เปลี่ยนตามเวลา* (สัญญาณวิ่ง, นาฬิกา, การนับ, การเลื่อนบิต, การเดิน state)

---

## 1. Convention กลาง (ต้องยึดทุกชิ้น)

### สถาปัตยกรรม
- **CSS** รวมที่ไฟล์เดียว: `assets/css/style.css` — เพิ่มท้ายไฟล์ ใต้คอมเมนต์ระบุ widget
- **JS** รวมใน `<script>` เดียวท้าย `_includes/footer.html` (อยู่ร่วมกับ scroll-reveal observer เดิม) — โหลดครั้งเดียวทั้งเว็บ
- **Partial** ใน `_includes/*.html` มี **เฉพาะ markup** ห้ามมี `<script>`/`<style>`
- เรียกใช้ใน Markdown ด้วย {% raw %}`{% include ชื่อ.html ... %}`{% endraw %} ฝังในบทพร้อม label ไทย `**🔬 ... (Interactive):**`
- Vanilla JS ล้วน ไม่มี external library / ไม่มี build step เพิ่ม

### Design tokens (ใช้ตัวแปร ห้าม hardcode hex)
`--indigo #4f46e5` · `--indigo-dark #4338ca` · `--cyan #06b6d4` · `--amber #f59e0b` · `--amber-soft #fef3c7` · `--ink #0f172a` · `--text #1e293b` · `--muted #64748b` · `--line #e2e8f0` · `--card #fff` · `--radius 16px` · `--shadow-sm` · `--shadow-md` · `--grad`
- ฟอนต์: body = `IBM Plex Sans Thai` · ตัวเลข/สัญญาณ/label = `JetBrains Mono`
- Easing มาตรฐานทั้งเว็บ: `cubic-bezier(0.16, 1, 0.3, 1)`
- สีสัญญาณ: **HIGH/1 = `--amber`** · LOW/0 = `--line`/`--muted` · ไฮไลต์ active/output = `--cyan`

### กฎเหล็ก
- **Accessibility:** ทุก animation ต้องเคารพ `@media (prefers-reduced-motion: reduce)` (มี block กลางอยู่แล้วใน style.css) + JS ที่ auto-run ต้องเช็ค `matchMedia('(prefers-reduced-motion: reduce)').matches` แล้วไม่เริ่มเอง
- class root ของ widget ต้อง **ไม่ตรง** กับ selector ของ scroll-reveal (`.prose h2/h3/table/pre/blockquote/img` ฯลฯ) ไม่งั้นจะโดนซ่อน (opacity:0)
- ทุก widget ต้อง **degrade ได้** เมื่อปิด JS (โชว์ default state ที่ถูกต้อง)
- UI ภาษาไทยทั้งหมด · responsive (wrap บนจอแคบ)

### Component ที่ทำแล้ว (ใช้ซ้ำ/ต่อยอดได้)
- `_includes/logic-gate.html` — เกตโต้ตอบ (root `.lg-demo`)
- `_includes/binary-counter.html` — ตัวนับ + clock (root `.clk-counter`)
- helper ที่ควรสกัดเป็นของกลาง: **signal lamp** (จุด 0/1), **wire** (สายเปลี่ยนสี), **clock LED/pulse**, **play/pause/step/reset + speed control bar**

---

## 2. สถานะปัจจุบัน

| บท | ทำแล้ว | จุดฝัง |
|:--|:--|:--|
| 2 เกตตรรกะ | ✅ Interactive Logic Gate | ใต้รูป AND, OR, NOT, XOR |
| 7 วงจรนับ | ✅ Clock-driven 4-bit Counter | ใต้ตารางอินโทร |
| ทั้งเว็บ | ✅ prefers-reduced-motion | global |

---

## 3. เค้าโครงรายบท (เรียงตามความคุ้มค่า)

### 🥇 Priority 1 — ผลตอบแทนสูงสุด

**บทที่ 2 — Animated Timing Diagram** `_includes/timing-diagram.html`
- *สอน:* แทน ASCII `_____|‾‾‾‾` ด้วยกราฟสัญญาณจริง มีเส้นเวลา (playhead) วิ่งซ้าย→ขวา
- *โต้ตอบ:* ไฮไลต์ rising/falling edge ตอน playhead ผ่าน · ปุ่ม play/pause · เลือกชุดสัญญาณตาม gate (รับ param waveform A/B/Y)
- *ใช้ซ้ำ:* component กลาง ใช้ได้ทั้ง ch02 (gate), ch06 (clock/FF), ch07 (counter)

**บทที่ 2 — ขยาย Logic Gate ที่มีอยู่**
- เพิ่ม include ใต้รูป NAND, NOR, XNOR, BUFFER (ตอนนี้ทำแค่ 4 ตัว) — แทบไม่ต้องเขียนโค้ดใหม่

**บทที่ 6 — Clock & Flip-Flop Timing** `_includes/flipflop-demo.html`
- *สอน:* ป้อน input + clock edge แล้วดู Q/Q̄ เปลี่ยนตาม (D/JK/T) · เน้น edge-triggered
- *โต้ตอบ:* ปุ่มสร้าง clock pulse ทีละจังหวะ · toggle input · ตาราง state/excitation ไฮไลต์แถวปัจจุบัน
- *ใช้ซ้ำ:* clock LED + signal lamp + timing-diagram component

### 🥈 Priority 2

**บทที่ 7 — Shift Register** `_includes/shift-register.html`
- *สอน:* บิต "ไหล" ทีละช่องทุก clock (SISO/SIPO/PISO) — แนวคิดที่นิ่งบนกระดาษเข้าใจยากสุด
- *โต้ตอบ:* ป้อนบิต serial in · กด clock · เห็นบิตเลื่อน + animation การไหล · เลือกโหมด
- *ใช้ซ้ำ:* clock control bar จาก binary-counter

**บทที่ 5 — Full Adder / Ripple-Carry** `_includes/adder-demo.html`
- *สอน:* carry "วิ่ง" จาก LSB → MSB เห็น propagation delay
- *โต้ตอบ:* ตั้งเลข 2 ตัว (4-bit) · กด "บวก" แล้ว animate carry ไหลทีละหลัก · โชว์ sum

**บทที่ 8 — FSM State Diagram** `_includes/fsm-demo.html`
- *สอน:* Mealy/Moore — ไฮไลต์ state ปัจจุบัน, ป้อน input แล้ว "เดิน" ไป state ถัดไป
- *โต้ตอบ:* ปุ่ม input (0/1) · ลูกศร transition สว่างตามทางที่เดิน · ประวัติ input/output
- *หมายเหตุ:* ใช้ SVG วาด node + edge (ซับซ้อนสุดในชุดนี้)

### 🥉 Priority 3

**บทที่ 4 — K-Map Grouping** `_includes/kmap-demo.html`
- *สอน:* animate การวงกลุ่ม (group) ทีละกลุ่ม → ได้พจน์ SOP
- *โต้ตอบ:* คลิกช่อง 0/1 · กด "หากลุ่ม" แล้วกรอบกลุ่มค่อย ๆ ปรากฏ + แสดงพจน์

**บทที่ 1 — Number Base Converter / 2's Complement**
- *สอน:* แปลงฐาน 2/8/10/16 แบบเห็นการจัดกลุ่มบิต · animate ขั้นตอน 1's→2's complement (flip บิต + บวก 1)
- *โต้ตอบ:* พิมพ์เลข แล้วเห็นการแปลงทีละขั้น

**บทที่ 3 — Boolean / DeMorgan Visualizer**
- *สอน:* แสดงสองฝั่งของทฤษฎีบทแล้ว "ยุบ" ให้เห็นว่าเท่ากัน · DeMorgan: วงจรแปลงร่าง

**บทที่ 5 — MUX/DEMUX & Decoder** (เสริม ch05)
- *สอน:* เลื่อน select line แล้วเส้นทางสัญญาณที่ถูกเลือกสว่างขึ้น

**บทที่ 9 — ADC/DAC Sampling**
- *สอน:* เส้น analog ต่อเนื่อง + จุด sample จับตามอัตราสุ่ม · ปรับ resolution/sample rate เห็น quantization
- *โต้ตอบ:* slider ปรับ sample rate / bit depth

**บทที่ 10 — Verilog ↔ Waveform**
- *สอน:* โชว์โค้ด Verilog ข้าง ๆ timing diagram ที่ได้ · ลิงก์ EDA Playground (มีในตารางอยู่แล้ว)
- *หมายเหตุ:* ส่วนใหญ่อาจฝัง simulator ภายนอกแทนเขียนเอง

---

## 4. ลำดับลงมือที่แนะนำ

1. สกัด **timing-diagram component** ก่อน (ใช้ซ้ำได้ ch02/06/07) ← คุ้มสุด
2. ขยาย logic-gate ให้ครบ 8 ตัว (งานเล็ก)
3. flip-flop demo (ch06) → shift register (ch07) → adder (ch05)
4. FSM (ch08) — งานใหญ่ ทำเมื่อ component พื้นฐานนิ่งแล้ว
5. ที่เหลือตามต้องการ

> เป้าหมาย: ทุกชิ้นใช้ component กลางชุดเดียว (lamp / wire / clock / control-bar / timing) เพื่อให้หน้าตา + พฤติกรรมสอดคล้องกันทั้งวิชา
