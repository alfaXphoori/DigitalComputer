# ตรรกศาสตร์ของดิจิตอลคอมพิวเตอร์ (Digital Computer Logic)

> รายวิชา **3(2-3-6)** — ทฤษฎี 2 ชม. / ปฏิบัติ 3 ชม. / ศึกษาด้วยตนเอง 6 ชม. ต่อสัปดาห์  
> หลักสูตรวิศวกรรมศาสตรบัณฑิต สาขาวิชาวิศวกรรมคอมพิวเตอร์ สาขาวิชาวิศวกรรมคอมพิวเตอร์ — ชั้นปีที่ 1 ภาคการศึกษาที่ 2/2568  
> สถานที่เรียน: อาคารโรงงานวิศวกรรมคอมพิวเตอร์และระบบอัตโนมัติ · ออนไซต์ 100% · ผู้เรียนประมาณ 30 คน
>
> 📋 ดูแผนการจัดการเรียนรู้รายสัปดาห์ฉบับเต็ม: **[weekly-lesson-plan.md](weekly-lesson-plan.md)**  
> 🧭 ดูสรุปทบทวนทั้งรายวิชา: **[chapters/summary.md](chapters/summary.md)**

## โครงสร้างบทเรียน

| บท | หัวข้อ | สาระสำคัญ | เอกสาร | ปฏิบัติการที่เกี่ยวข้อง |
|:---:|:---|:---|:---|:---|
| **1** | **ระบบตัวเลขและรหัส** | เลขฐาน 2/8/10/16, การแปลงฐาน, จำนวนมีเครื่องหมาย, 1's/2's complement, BCD, Gray code, ASCII | [บทที่ 1](chapters/ch01-number-systems/) | [Lab 1](labs/lab01-logisim-number-systems.md) |
| **2** | **เกตตรรกะและนิพจน์ตรรกะ** | AND/OR/NOT/NAND/NOR/XOR/XNOR, ตารางความจริง, สัญลักษณ์ IEC/ANSI และ universal gates | [บทที่ 2](chapters/ch02-logic-gates/) | [Lab 2](labs/lab02-codes-bcd-gray.md) |
| **3** | **พีชคณิตบูลีน** | สัจพจน์ ทฤษฎีบท กฎเดอมอร์แกน SOP/POS minterm/maxterm และการลดรูปเชิงพีชคณิต | [บทที่ 3](chapters/ch03-boolean-algebra/) | [Lab 3](labs/lab03-logic-gates.md) |
| **4** | **ผังคาร์โนห์** | K-map 2-5 ตัวแปร การจับกลุ่ม don't care และ minimal SOP/POS | [บทที่ 4](chapters/ch04-karnaugh-map/) | [Lab 4](labs/lab04-boolean-demorgan.md) |
| **5** | **วิธีการใช้ตาราง** | prime implicant, prime implicant chart และ essential prime implicant | [บทที่ 5](chapters/ch05-tabulation-method/) | [Lab 5](labs/lab05-karnaugh-map.md) |
| **6** | **วงจรเชิงผสม: วงจรบวกและวงจรลบ** | half/full adder, ripple-carry, half/full subtractor, BCD adder และ overflow | [บทที่ 6](chapters/ch06-combinational-arithmetic/) | [Lab 6](labs/lab06-tabulation-method.md) |
| **7** | **วงจรถอดรหัส ลงรหัส มัลติเพล็กเซอร์** | decoder, 7-segment, encoder, priority encoder, MUX/DEMUX และวงจรแสดงผลพหุคูณ | [บทที่ 7](chapters/ch07-decoder-encoder-mux/) | [Lab 7](labs/lab07-half-full-adder.md) |
| **8** | **เกตไตรสเตดและเวลาหน่วงของวงจร** | tristate buffer, bus, propagation delay, fan-in/fan-out, glitch/hazard และการกำจัด | [บทที่ 8](chapters/ch08-tristate-timing/) | [Lab 8](labs/lab08-adder-subtractor.md) |
| **9** | **วงจรเชิงลำดับและฟลิปฟลอป** | latch vs flip-flop, SR/D/JK/T, edge-triggered, timing diagram, characteristic/excitation table | [บทที่ 9](chapters/ch09-sequential-flipflop/) | [Lab 9](labs/lab09-decoder-7segment.md) |
| **10** | **เคาน์เตอร์และเรจิสเตอร์** | async/sync counter, mod-N, ring/Johnson counter, register, shift register และ FSM เบื้องต้น | [บทที่ 10](chapters/ch10-counter-register/) | [Lab 10](labs/lab10-encoder-priority.md) |

## ปฏิบัติการ 15 สัปดาห์

- [Lab 1: รู้จัก Logisim และระบบตัวเลข/การแปลงฐาน](labs/lab01-logisim-number-systems.md)
- [Lab 2: รหัส BCD, Gray code และการแปลงรหัส](labs/lab02-codes-bcd-gray.md)
- [Lab 3: เกตตรรกะพื้นฐานและตารางความจริง (74xx)](labs/lab03-logic-gates.md)
- [Lab 4: พิสูจน์ทฤษฎีบูลีน กฎเดอมอร์แกน และ universal gates](labs/lab04-boolean-demorgan.md)
- [Lab 5: ลดรูปนิพจน์ด้วยผังคาร์โนห์และสร้างวงจร](labs/lab05-karnaugh-map.md)
- [Lab 6: ลดรูปด้วยวิธีตาราง Quine-McCluskey](labs/lab06-tabulation-method.md)
- [Lab 7: วงจรบวกครึ่งและบวกเต็ม](labs/lab07-half-full-adder.md)
- [Lab 8: วงจรบวก/ลบ 4 บิตและ overflow](labs/lab08-adder-subtractor.md)
- [Lab 9: วงจรถอดรหัสและการขับ 7-segment (7447)](labs/lab09-decoder-7segment.md)
- [Lab 10: วงจรลงรหัสและ priority encoder](labs/lab10-encoder-priority.md)
- [Lab 11: MUX/DEMUX และการ implement ฟังก์ชัน](labs/lab11-mux-demux.md)
- [Lab 12: ฟลิปฟลอป SR/D/JK/T และ timing diagram](labs/lab12-flip-flops.md)
- [Lab 13: เคาน์เตอร์อะซิงโครนัสและซิงโครนัส (mod-N)](labs/lab13-counters.md)
- [Lab 14: เรจิสเตอร์และชิฟต์เรจิสเตอร์](labs/lab14-shift-registers.md)
- [Lab 15: โปรเจกต์ย่อย: ออกแบบวงจรดิจิทัล](labs/lab15-mini-project.md)

## เกณฑ์การประเมิน

| รายการประเมิน | สัดส่วน | CLO |
|---|:---:|---|
| จิตพิสัย การเข้าเรียน และความรับผิดชอบในห้องปฏิบัติการ | 10% | CLO4 |
| ใบงานปฏิบัติการและรายงานผลทดลอง | 30% | CLO2, CLO3, CLO4 |
| งานมอบหมาย แบบฝึกหัด และ mini project | 15% | CLO1-CLO4 |
| สอบกลางภาค | 20% | CLO1, CLO2, CLO3 |
| สอบปลายภาค | 25% | CLO2, CLO3, CLO4 |
| **รวม** | **100%** | |

## เครื่องมือหลัก

- Logisim Evolution สำหรับจำลองวงจรดิจิทัล
- ไอซีตระกูล 74xx เช่น 7400, 7404, 7408, 7432, 7486, 7447, 7474, 7476, 7490, 74138, 74151, 74595
- Breadboard, power supply 5V, logic probe/oscilloscope ตามความพร้อมของห้องปฏิบัติการ

ปรับปรุงล่าสุด: 10 มิถุนายน พ.ศ. 2567
