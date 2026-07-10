# ตรรกศาสตร์ของดิจิตอลคอมพิวเตอร์ (Digital Computer Logic)

> รายวิชา **3(2-3-6)** — ทฤษฎี 2 ชม. / ปฏิบัติ 3 ชม. / ศึกษาด้วยตนเอง 6 ชม. ต่อสัปดาห์
> หลักสูตรวิศวกรรมศาสตรบัณฑิต สาขาวิชาวิศวกรรมคอมพิวเตอร์ — ชั้นปีที่ 1 ภาคการศึกษาที่ 1
>
> 📋 ดูแผนการจัดการเรียนรู้รายสัปดาห์ฉบับเต็ม (CLO/LLO, การวัดประเมินผล): **[weekly-lesson-plan.md](weekly-lesson-plan.md)**

## แผนการสอน (15 สัปดาห์)

| สัปดาห์ที่ | หัวข้อการเรียน | รายละเอียดเนื้อหา | ไฟล์อ้างอิง |
|:---:|:---|:---|:---|
| **1** | **บทนำรายวิชาและระบบตัวเลข** | สัญญาณแอนะล็อกกับดิจิทัล, ระบบเลขฐาน (2, 8, 10, 16), รหัสดิจิทัล (BCD, Gray, ASCII) | [บทที่ 1 ระบบตัวเลขและรหัส](chapters/ch01-number-systems/) |
| **2** | **เลขคณิตในระบบดิจิทัล** | การบวก/ลบเลขฐานสอง, คอมพลีเมนต์ 1's และ 2's, การแทนเลขมีเครื่องหมาย | [บทที่ 1 ระบบตัวเลขและรหัส](chapters/ch01-number-systems/) |
| **3** | **เกตตรรกะและนิพจน์ตรรกะ** | AND, OR, NOT, NAND, NOR, XOR, XNOR, ตารางความจริง, เกตสากล, ดาต้าชีต IC 74xx | [บทที่ 2 เกตตรรกะและคุณสมบัติดิจิทัลไอซี](chapters/ch02-logic-gates/) |
| **4** | **คุณสมบัติดิจิทัลไอซีและการเชื่อมต่อ** | ตระกูล TTL/CMOS, ระดับแรงดันลอจิก, fan-in/fan-out, noise margin, propagation delay | [บทที่ 2 เกตตรรกะและคุณสมบัติดิจิทัลไอซี](chapters/ch02-logic-gates/) |
| **5** | **พีชคณิตบูลีนและการลดรูปสมการ** | ทฤษฎีบทพีชคณิตบูลีน, ทฤษฎีบทเดอมอร์แกน, SOP/POS | [บทที่ 3 พีชคณิตบูลีน](chapters/ch03-boolean-algebra/) |
| **6** | **ผังคาร์โนห์ (Karnaugh Map)** | K-Map 2–4 ตัวแปร, รูปแบบ SOP/POS, เงื่อนไข don't-care | [บทที่ 4 ผังคาร์โนห์](chapters/ch04-karnaugh-maps/) |
| **7** | **วงจรคอมบิเนชันและวงจรคำนวณ** | ขั้นตอนการออกแบบ, เกตสากล, Half/Full Adder, วงจรบวก/ลบ, ไอซี 7483 | [บทที่ 5 วงจรคอมบิเนชันและการประยุกต์](chapters/ch05-combinational-circuits/) |
| **8** | **วงจรเปรียบเทียบ ถอด/ลงรหัส และมัลติเพล็กเซอร์** | Comparator, Encoder/Decoder, 7-segment, MUX/DEMUX | [บทที่ 5 วงจรคอมบิเนชันและการประยุกต์](chapters/ch05-combinational-circuits/) |
| **—** | **🟧 สอบกลางภาค (Midterm Exam)** | **ครอบคลุมเนื้อหาสัปดาห์ที่ 1–8 \| สัดส่วน 20%** | - |
| **9** | **สัญญาณนาฬิกาและแลตช์** | Clock, duty cycle, มัลติไวเบรเตอร์/ไอซี 555, SR/Gated Latch | [บทที่ 6 สัญญาณนาฬิกาและฟลิปฟลอป](chapters/ch06-flip-flops/) |
| **10** | **ฟลิปฟลอป** | ฟลิปฟลอป D/JK/T, Trigger, ตารางสถานะ/ตารางกระตุ้น, timing diagram | [บทที่ 6 สัญญาณนาฬิกาและฟลิปฟลอป](chapters/ch06-flip-flops/) |
| **11** | **วงจรนับและเรจิสเตอร์** | ตัวนับ asynchronous/synchronous, mod-N, โครงสร้างเรจิสเตอร์, โหมด SISO/SIPO/PISO/PIPO | [บทที่ 7 วงจรนับและเรจิสเตอร์](chapters/ch07-counters-registers/) |
| **12** | **การออกแบบวงจรเชิงลำดับและ FSM** | Mealy/Moore, state diagram, state table, การออกแบบ FSM | [บทที่ 8 การออกแบบวงจรเชิงลำดับและ FSM](chapters/ch08-fsm/) |
| **13** | **หน่วยความจำ PLD และการแปลงสัญญาณ** | RAM/ROM, PLD, DAC/ADC, ความละเอียดและอัตราการสุ่ม | [บทที่ 9 หน่วยความจำ PLD และ ADC/DAC](chapters/ch09-memory-interfacing/) |
| **14** | **แนะนำ HDL: Verilog + EDA Playground** | module/port, assign/always, testbench, การจำลองบน EDA Playground | [บทที่ 10 แนะนำ HDL: Verilog](chapters/ch10-hdl-verilog/) |
| **15** | **สถาปัตยกรรมคอมพิวเตอร์เบื้องต้น** | โครงสร้าง CPU, Von Neumann, Instruction Cycle, 8-bit ALU/PC Verilog | [บทที่ 11 สถาปัตยกรรมคอมพิวเตอร์](chapters/ch11-computer-architecture/) |
| **—** | **🟧 สอบปลายภาค (Final Exam)** | **ครอบคลุมเนื้อหาสัปดาห์ที่ 9–15 \| สัดส่วน 25%** | [summary.md](chapters/summary.md) |

---

## 📊 เกณฑ์การวัดและประเมินผล

| รายการประเมิน | สัดส่วน (%) | CLO ที่สัมพันธ์ |
|:---|:---:|:---|
| จิตพิสัย การเข้าเรียนและการมีส่วนร่วมในชั้นเรียน | 10 | CLO4 |
| ใบงานและแบบฝึกหัด | 30 | CLO1, CLO2, CLO3 |
| สอบปฏิบัติ | 15 | CLO3, CLO4 |
| สอบกลางภาค | 20 | CLO1, CLO2 |
| สอบปลายภาค | 25 | CLO2, CLO3 |
| **รวม** | **100** | |

---

## 🛠️ Simulator ที่ใช้ในวิชา

| Simulator | ลิงก์ | ใช้สำหรับ |
|:---|:---|:---|
| **Tinkercad Circuits** | [tinkercad.com/circuits](https://www.tinkercad.com/circuits) | ต่อวงจร IC จริง (7408, 7432, 7473, 4511), Lab หลักของวิชา |
| **CircuitVerse** | [circuitverse.org](https://circuitverse.org/) | วาด Logic Gate ลาก-วาง, เหมาะ Lab สัปดาห์ 1–7 |
<!-- ซ่อนไว้ก่อน
| **Logisim Evolution** | [github.com/logisim-evolution](https://github.com/logisim-evolution/logisim-evolution/releases) | ออกแบบ FSM, Counter, Memory (Desktop App) |
| **Falstad Circuit Sim** | [falstad.com/circuit](https://www.falstad.com/circuit/) | จำลองวงจรแบบเห็นกระแสไหล animation |
-->

---

## 📖 เอกสารอ้างอิงเพิ่มเติม

- **[ตารางตำแหน่งขาไอซี (IC Pinout Reference)](labs/ic-pinouts.md)** - เอกสารแนะนำตำแหน่งและหน้าที่ของขาชิปไอซี 74xx และ CD45xx สำหรับการทดลองต่อวงจร
- **[สรุปภาพรวมวิชา (Course Summary)](chapters/summary.md)** - สรุปทฤษฎีสำคัญ สูตรลัด และตารางอ้างอิง

