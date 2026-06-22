# สรุปบทเรียนรายวิชา Digital Computer Logic

เอกสารนี้ใช้ทบทวนภาพรวมก่อนสอบกลางภาคและสอบปลายภาค โดยเชื่อมโยงบทเรียน 10 บทกับทักษะที่ต้องทำได้จริงในการออกแบบวงจรดิจิทัล

## แผนที่แนวคิด

```text
ระบบตัวเลขและรหัส
      ↓
เกตตรรกะและนิพจน์ → พีชคณิตบูลีน → K-map → Quine-McCluskey
      ↓                                      ↓
วงจรเชิงผสม: adder/subtractor, decoder, encoder, MUX/DEMUX, tristate/timing
      ↓
วงจรเชิงลำดับ: latch/flip-flop → counter/register → FSM เบื้องต้น
```

## ตารางสรุป 10 บท

| บท | หัวข้อ | สิ่งที่ต้องทำได้ |
|:---:|---|---|
| 1 | ระบบตัวเลขและรหัส | แปลงฐาน 2/8/10/16, ใช้ two's complement, อธิบาย BCD/Gray/ASCII |
| 2 | เกตตรรกะ | เขียนตารางความจริงและสร้างวงจรจากเกตพื้นฐาน/เกตสากล |
| 3 | พีชคณิตบูลีน | ลดรูปด้วยกฎบูลีนและแปลง SOP/POS, minterm/maxterm |
| 4 | K-map | จับกลุ่ม K-map 2-5 ตัวแปรและใช้ don't care อย่างถูกต้อง |
| 5 | วิธีตาราง | หา prime implicant, essential PI และสร้าง PI chart |
| 6 | วงจรบวก/ลบ | ออกแบบ half/full adder, subtractor, BCD adder และตรวจ overflow |
| 7 | Decoder/Encoder/MUX | ใช้ decoder, encoder, MUX/DEMUX, 7-segment และวงจรแสดงผลพหุคูณ |
| 8 | Tristate/Timing | อธิบาย bus, delay, fan-out, glitch/hazard และการแก้ไข |
| 9 | Flip-flop | ใช้ characteristic/excitation table และวาด timing diagram |
| 10 | Counter/Register | ออกแบบ counter, register, shift register และ FSM เบื้องต้น |

## สูตรและกฎที่ใช้บ่อย

| เรื่อง | สูตร/กฎ |
|---|---|
| two's complement | กลับบิตแล้วบวก 1 |
| XOR | `A ⊕ B = A'B + AB'` |
| De Morgan | `(AB)' = A' + B'`, `(A+B)' = A'B'` |
| full adder | `S = A ⊕ B ⊕ Cin`, `Cout = AB + ACin + BCin` |
| overflow signed | `V = Cin(MSB) ⊕ Cout(MSB)` |
| D flip-flop | `Q_next = D` |
| T flip-flop | `Q_next = T ⊕ Q` |

## Checklist ก่อนสอบ

- [ ] ทำโจทย์แปลงฐานและ two's complement ได้โดยไม่ใช้เครื่องคิดเลข
- [ ] เขียน truth table จากวงจรและวาดวงจรจาก truth table ได้
- [ ] ลดรูปฟังก์ชันด้วย algebra, K-map และ tabulation อย่างน้อยวิธีละ 1 ข้อ
- [ ] ออกแบบ adder/subtractor 4 บิตและอธิบาย overflow ได้
- [ ] ใช้ MUX implement ฟังก์ชัน 3 ตัวแปรได้
- [ ] อ่าน timing diagram ของ flip-flop และ counter ได้
- [ ] ออกแบบ synchronous counter จาก state table ได้

## ลิงก์บทเรียน

- [บทที่ 1 ระบบตัวเลขและรหัส](ch01-number-systems/)
- [บทที่ 2 เกตตรรกะ](ch02-logic-gates/)
- [บทที่ 3 พีชคณิตบูลีน](ch03-boolean-algebra/)
- [บทที่ 4 ผังคาร์โนห์](ch04-karnaugh-map/)
- [บทที่ 5 วิธีการใช้ตาราง](ch05-tabulation-method/)
- [บทที่ 6 วงจรบวกและวงจรลบ](ch06-combinational-arithmetic/)
- [บทที่ 7 Decoder/Encoder/MUX](ch07-decoder-encoder-mux/)
- [บทที่ 8 Tristate และ Timing](ch08-tristate-timing/)
- [บทที่ 9 Sequential และ Flip-flop](ch09-sequential-flipflop/)
- [บทที่ 10 Counter และ Register](ch10-counter-register/)

## ลิงก์ปฏิบัติการ (Labs)

- [Lab 1 — รู้จัก Logisim และระบบตัวเลข/การแปลงฐาน](../labs/lab01-logisim-number-systems.html)
- [Lab 2 — รหัส BCD, Gray code และการแปลงรหัส](../labs/lab02-codes-bcd-gray.html)
- [Lab 3 — เกตตรรกะพื้นฐานและตารางความจริง](../labs/lab03-logic-gates.html)
- [Lab 4 — พิสูจน์ทฤษฎีบูลีน เดอมอร์แกน และ universal gates](../labs/lab04-boolean-demorgan.html)
- [Lab 5 — ลดรูปด้วยผังคาร์โนห์และสร้างวงจร](../labs/lab05-karnaugh-map.html)
- [Lab 6 — วิธีการใช้ตาราง (Quine–McCluskey)](../labs/lab06-tabulation-method.html)
- [Lab 7 — วงจรบวกครึ่งและบวกเต็ม](../labs/lab07-half-full-adder.html)
- [Lab 8 — วงจรบวก/ลบ 4 บิตและการตรวจ overflow](../labs/lab08-adder-subtractor.html)
- [Lab 9 — วงจรถอดรหัสและการขับ 7-segment](../labs/lab09-decoder-7segment.html)
- [Lab 10 — วงจรลงรหัสและ priority encoder](../labs/lab10-encoder-priority.html)
- [Lab 11 — มัลติเพล็กเซอร์/ดีมัลติเพล็กเซอร์](../labs/lab11-mux-demux.html)
- [Lab 12 — ฟลิปฟลอป SR/D/JK/T และ timing diagram](../labs/lab12-flip-flops.html)
- [Lab 13 — เคาน์เตอร์อะซิงโครนัสและซิงโครนัส](../labs/lab13-counters.html)
- [Lab 14 — เรจิสเตอร์และชิฟต์เรจิสเตอร์](../labs/lab14-shift-registers.html)
- [Lab 15 — โปรเจกต์ย่อย: ออกแบบวงจรดิจิทัล](../labs/lab15-mini-project.html)

## เอกสารที่เกี่ยวข้อง

- [แผนการจัดการเรียนรู้รายสัปดาห์ (ฉบับเต็ม)](../weekly-lesson-plan.html)
- [กลับหน้าแรกรายวิชา](../)
