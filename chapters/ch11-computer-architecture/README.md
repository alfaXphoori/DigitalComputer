# Chapter 11: สถาปัตยกรรมคอมพิวเตอร์และหน่วยประมวลผลกลางเบื้องต้น

## Introduction to Computer Architecture & CPU Design

---

**รายวิชา:** ตรรกศาสตร์ของดิจิตอลคอมพิวเตอร์ (Digital Computer Logic)  
**หลักสูตร:** วิศวกรรมคอมพิวเตอร์ ชั้นปีที่ 1  
**บทที่:** 11 — ส่วนขยายเชิงลึก  

---

## 11.1 สถาปัตยกรรมคอมพิวเตอร์เบื้องต้น (Computer Architecture Overview)

ในการเรียนดิจิทัลลอจิกตั้งแต่บทที่ 1 ถึง 10 เราได้เรียนรู้การทำงานของเกตลอจิก วงจรคำนวณ วงจรเชิงลำดับ (Sequential Circuits) ฟลิปฟลอป และหน่วยความจำมาแล้ว ในบทนี้เราจะนำวงจรพื้นฐานเหล่านั้นมารวมกันเพื่อสร้าง **หน่วยประมวลผลกลาง (CPU)** ซึ่งเป็นหัวใจสำคัญของสถาปัตยกรรมคอมพิวเตอร์

คอมพิวเตอร์ส่วนใหญ่ในปัจจุบันใช้แนวคิดโครงสร้างแบบ **สถาปัตยกรรมฟอนนอยมันน์ (Von Neumann Architecture)** ซึ่งเสนอร่างโดย John von Neumann ในปี 1945 โดยมีหลักการสำคัญคือ **โปรแกรมและข้อมูลถูกเก็บไว้ในหน่วยความจำร่วมกัน (Shared Memory)**

### ส่วนประกอบหลักของระบบคอมพิวเตอร์ตามแนวคิด Von Neumann:
1. **CPU (Central Processing Unit):** ทำหน้าที่ประมวลผลคำสั่งตามโปรแกรม
2. **Memory (หน่วยความจำหลัก):** เก็บทั้งข้อมูล (Data) และคำสั่ง (Instructions) ของโปรแกรม
3. **Input/Output (I/O):** ช่องทางติดต่อกับอุปกรณ์ภายนอก เช่น คีย์บอร์ด จอแสดงผล
4. **System Bus:** เส้นทางเชื่อมโยงการส่งผ่านข้อมูล ประกอบด้วย Address Bus, Data Bus และ Control Bus

<svg viewBox="0 0 720 300" role="img" aria-label="สถาปัตยกรรมฟอนนอยมันน์ (Von Neumann Architecture)" style="width:100%; max-width:680px; height:auto; display:block; margin:1.25rem auto; font-family:'Segoe UI',system-ui,sans-serif;">
  <!-- Background -->
  <rect width="720" height="300" fill="#f8fafc" rx="8"/>
  
  <!-- CPU Boundary -->
  <rect x="30" y="30" width="320" height="240" rx="8" fill="#eff6ff" stroke="#2563eb" stroke-width="2" stroke-dasharray="4 4"/>
  <text x="190" y="55" text-anchor="middle" font-size="15" font-weight="700" fill="#1e40af">CPU (Central Processing Unit)</text>

  <!-- ALU -->
  <polygon points="50,90 190,90 170,140 190,190 50,190 70,140" fill="#eedffc" stroke="#9333ea" stroke-width="2"/>
  <text x="110" y="145" text-anchor="middle" font-size="14" font-weight="600" fill="#6b21a8">ALU</text>

  <!-- Control Unit -->
  <rect x="210" y="90" width="120" height="100" rx="6" fill="#ecfdf5" stroke="#059669" stroke-width="2"/>
  <text x="270" y="130" text-anchor="middle" font-size="13" font-weight="600" fill="#065f46">Control Unit</text>
  <text x="270" y="150" text-anchor="middle" font-size="13" font-weight="600" fill="#065f46">(CU)</text>

  <!-- Registers -->
  <rect x="50" y="210" width="280" height="45" rx="6" fill="#fff7ed" stroke="#ea580c" stroke-width="2"/>
  <text x="190" y="238" text-anchor="middle" font-size="13" font-weight="600" fill="#9a3412">Registers (PC, AC, IR, MAR, MDR)</text>

  <!-- Memory -->
  <rect x="490" y="30" width="180" height="110" rx="8" fill="#fef2f2" stroke="#dc2626" stroke-width="2"/>
  <text x="580" y="75" text-anchor="middle" font-size="14" font-weight="700" fill="#991b1b">Shared Memory</text>
  <text x="580" y="105" text-anchor="middle" font-size="12" fill="#7f1d1d">Instructions + Data</text>

  <!-- Input/Output -->
  <rect x="490" y="160" width="180" height="110" rx="8" fill="#fafafa" stroke="#52525b" stroke-width="2"/>
  <text x="580" y="215" text-anchor="middle" font-size="14" font-weight="700" fill="#27272a">Input / Output</text>
  <text x="580" y="235" text-anchor="middle" font-size="12" fill="#3f3f46">(I/O Devices)</text>

  <!-- System Bus System -->
  <g fill="none" stroke="#475569" stroke-width="3">
    <!-- CPU to Memory/IO -->
    <path d="M 350,110 L 490,110" marker-end="url(#arrow-rtl)"/>
    <path d="M 490,190 L 350,190" marker-end="url(#arrow-rtl)"/>
    <!-- Bidirectional paths -->
    <path d="M 350,150 L 490,150" marker-end="url(#arrow-rtl)"/>
    <path d="M 490,150 L 350,150" marker-end="url(#arrow-rtl)"/>
  </g>
  <text x="420" y="140" text-anchor="middle" font-size="11" fill="#475569" font-weight="600">System Bus</text>
</svg>

---

## 11.2 โครงสร้างภายในและรีจิสเตอร์ของ CPU (Registers and Internal CPU Structure)

เพื่อให้ CPU สามารถดำเนินการตามคำสั่งได้ มันต้องมีหน่วยเก็บข้อมูลชั่วคราวที่มีความเร็วสูงมากๆ อยู่ภายใน ซึ่งเราเรียกว่า **รีจิสเตอร์ (Registers)** โดยสร้างขึ้นจาก D Flip-Flops หลายๆ ตัวต่อขนานกัน

### รีจิสเตอร์ที่สำคัญภายใน CPU:

1. **Program Counter (PC):**
   * เก็บ **ตำแหน่งที่อยู่ (Address)** ของคำสั่งถัดไปในหน่วยความจำที่จะถูกนำมาประมวลผล
   * ค่าของ PC จะเพิ่มขึ้นทีละ 1 (หรือตามขนาดคำสั่ง) โดยอัตโนมัติหลังจากที่มีการดึงคำสั่งไปใช้งานแล้ว
2. **Instruction Register (IR):**
   * เก็บ **รหัสคำสั่ง (Instruction Code)** ที่กำลังถูกประมวลผลอยู่ ณ ขณะนั้น
3. **Accumulator (AC หรือ ACC):**
   * รีจิสเตอร์เอนกประสงค์ที่ใช้เก็บข้อมูลนำเข้าและผลลัพธ์จากการคำนวณของ ALU
4. **Memory Address Register (MAR):**
   * เก็บที่อยู่ของหน่วยความจำที่จะทำกิจกรรมอ่าน (Read) หรือเขียน (Write) ข้อมูล
5. **Memory Data Register (MDR) หรือ Memory Buffer Register (MBR):**
   * เก็บตัวข้อมูลที่เพิ่งอ่านมาจากหน่วยความจำ หรือข้อมูลที่กำลังจะเขียนลงหน่วยความจำ

---

## 11.3 วงจรการทำงานของคำสั่ง (Instruction Cycle)

การทำงานของคอมพิวเตอร์คือวงรอบที่เกิดขึ้นซ้ำๆ อย่างไม่มีที่สิ้นสุด ตราบเท่าที่มีกระแสไฟฟ้าเลี้ยงระบบ เรียกว่า **วงจรอ่านและประมวลผลคำสั่ง (Instruction Cycle)** แบ่งออกเป็น 3 ขั้นตอนหลัก:

```mermaid
graph TD
    A[เริ่มสัญญาณนาฬิกา] --> B[1. Fetch ดึงคำสั่ง]
    B --> C[2. Decode ถอดรหัสคำสั่ง]
    C --> D[3. Execute ประมวลผลคำสั่ง]
    D --> B
```

### รายละเอียดในแต่ละขั้นตอน:
1. **Fetch (การดึงคำสั่ง):**
   * CPU ส่งค่าจาก **PC** ไปยัง **MAR** เพื่อบอกตำแหน่งหน่วยความจำ
   * ส่งสัญญาณลอจิกระดับต่ำ/สูงเพื่อสั่ง Read
   * หน่วยความจำส่งรหัสคำสั่งกลับมาทาง Data Bus เข้าสู่ **MDR**
   * ย้ายข้อมูลจาก **MDR** ไปเก็บไว้ใน **IR**
   * เพิ่มค่าของ **PC** เพื่อชี้ไปยังคำสั่งถัดไป ($PC \leftarrow PC + 1$)
2. **Decode (การถอดรหัสคำสั่ง):**
   * **Control Unit (CU)** จะอ่านค่ารหัสการทำงาน (Opcode) จาก **IR**
   * ถอดรหัสผ่านวงจรถอดรหัส (Decoder) เพื่อสร้างสัญญาณควบคุมไปยังส่วนต่างๆ ของ CPU
3. **Execute (การทำงานตามคำสั่ง):**
   * ดำเนินการตามความหมายของคำสั่ง เช่น:
     * ดึงข้อมูลจาก RAM มาบวกกับ AC
     * บันทึกข้อมูลจาก AC ลง RAM
     * กระโดดไปยังตำแหน่งอื่น (Jump) โดยการเขียนค่าใหม่ลงใน PC

---

## 11.4 ตัวอย่างสถาปัตยกรรมอย่างง่าย: SAP-1 (Simple-As-Possible CPU)

**SAP-1** เป็นโมเดลคอมพิวเตอร์อย่างง่ายที่ออกแบบโดย Albert Paul Malvino เพื่อประกอบการสอนสถาปัตยกรรมคอมพิวเตอร์เบื้องต้น มีขนาดบัสข้อมูล 8 บิต และบัสที่อยู่ 4 บิต (อ้างอิงหน่วยความจำได้ 16 Bytes)

### ชุดคำสั่งของ SAP-1 (Instruction Set):
| คำสั่ง (Mnemonic) | รหัสการทำงาน (Opcode) | คำอธิบายการทำงาน |
|:---:|:---:|---|
| **LDA** (Load RAM to AC) | `0000` | โหลดข้อมูลจากตำแหน่งหน่วยความจำที่ระบุ เข้าสู่ Accumulator |
| **ADD** (Add to AC) | `0001` | นำข้อมูลใน Accumulator บวกกับข้อมูลในตำแหน่ง RAM ที่ระบุ แล้วเก็บผลลัพธ์ไว้ที่ AC |
| **SUB** (Subtract from AC) | `0010` | นำข้อมูลใน Accumulator ลบด้วยข้อมูลในตำแหน่ง RAM ที่ระบุ แล้วเก็บผลลัพธ์ไว้ที่ AC |
| **OUT** (Output AC) | `1110` | ส่งข้อมูลใน Accumulator ไปยังพอร์ตแสดงผลภายนอก (LED) |
| **HLT** (Halt) | `1111` | หยุดการทำงานของ CPU ทั้งหมด |

---

## 11.5 การออกแบบชิ้นส่วน CPU ด้วย Verilog

เราสามารถสร้างโมดูลย่อยของ CPU ได้ด้วยภาษา Verilog ตัวอย่างด้านล่างคือการออกแบบ **หน่วยคำนวณและประมวลผลทางคณิตศาสตร์ (ALU)** ขนาด 8 บิต และ **Program Counter (PC)**

### ตัวอย่างที่ 11.1: โค้ด Verilog สำหรับ ALU 8 บิตอย่างง่าย

```verilog
module alu_8bit (
    input  [7:0] A,          // อินพุตตัวแรก
    input  [7:0] B,          // อินพุตตัวที่สอง
    input  [1:0] op,         // รหัสการทำงาน (00: บวก, 01: ลบ, 10: AND, 11: OR)
    output reg [7:0] out,    // ผลลัพธ์
    output reg zero          // แฟล็กแสดงผลลัพธ์เป็นศูนย์ (Zero Flag)
);

    always @(*) begin
        case (op)
            2'b00: out = A + B;       // Addition
            2'b01: out = A - B;       // Subtraction
            2'b10: out = A & B;       // Bitwise AND
            2'b11: out = A | B;       // Bitwise OR
            default: out = 8'b0;
        endcase
        
        // กำหนดสถานะ Zero Flag
        if (out == 8'b0)
            zero = 1'b1;
        else
            zero = 1'b0;
    end

endmodule
```

### ตัวอย่างที่ 11.2: โค้ด Verilog สำหรับ Program Counter (PC) 4 บิต

```verilog
module program_counter (
    input clk,               // สัญญาณนาฬิกา
    input reset,             // สัญญาณรีเซ็ตลอจิก Active-High
    input enable,            // สัญญาณอนุญาตให้เพิ่มค่า (Count Enable)
    output reg [3:0] pc_out  // ค่าที่อยู่อินสตรักชันเอาต์พุต
);

    always @(posedge clk or posedge reset) begin
        if (reset) begin
            pc_out <= 4'b0000;
        end else if (enable) begin
            pc_out <= pc_out + 1'b1;
        end
    end

endmodule
```

---

## แบบฝึกหัดท้ายบท

1. อธิบายความแตกต่างระหว่างสถาปัตยกรรมแบบ **Von Neumann** และ **Harvard Architecture**
2. หน้าที่ของ **Program Counter (PC)** ในจังหวะ Fetch มีความสำคัญอย่างไรต่อการทำงานของ CPU
3. หากรหัสคำสั่งในหน่วยความจำของสถาปัตยกรรมคอมพิวเตอร์ระบบหนึ่งมีขนาด 16 บิต โดยกำหนดให้ 6 บิตแรกเป็น Opcode และ 10 บิตหลังเป็น Address จงระบุว่า:
   * ระบบคอมพิวเตอร์นี้มีคำสั่งได้สูงสุดกี่คำสั่ง
   * ระบบคอมพิวเตอร์นี้รองรับหน่วยความจำได้สูงสุดกี่คำ (Words)
4. เขียนขั้นตอนการดึงคำสั่ง (Fetch Cycle) อย่างละเอียดในระดับ Micro-operations (การเปลี่ยนสถานะของรีจิสเตอร์)
5. จงเขียนโค้ด Verilog สำหรับรีจิสเตอร์สะสม (Accumulator: AC) ขนาด 8 บิต โดยให้ทำงานสอดคล้องกับสัญญาณนาฬิกาขาขึ้น มีขาโหลดข้อมูล (`load`) และขารีเซ็ตข้อมูล (`reset`) แบบซิงโครนัส

---

<details>
<summary>คลิกเพื่อดูเฉลยแนวคิดแบบฝึกหัด</summary>

### เฉลยแนวคิดแบบฝึกหัด

1. **เฉลย:** 
   * **Von Neumann Architecture:** ใช้หน่วยความจำและบัสชุดเดียวกันร่วมกันสำหรับข้อมูลและคำสั่ง ทำให้การอ่านโปรแกรมและการอ่านข้อมูลต้องทำสลับกันทีละจังหวะ (เกิดปรากฏการณ์คอขวด หรือ Von Neumann Bottleneck)
   * **Harvard Architecture:** แยกหน่วยความจำและบัสของโปรแกรม (Instruction Memory) และข้อมูล (Data Memory) ออกจากกันโดยเด็ดขาด ทำให้สามารถดึงคำสั่งพร้อมกับอ่าน/เขียนข้อมูลได้ในเวลาเดียวกัน ส่งผลให้ทำงานเร็วขึ้น

2. **เฉลย:** 
   * ในจังหวะ Fetch ตัว PC จะทำหน้าที่ชี้ตำแหน่งของคำสั่งที่เราต้องการดึงออกมาจากหน่วยความจำเพื่อถอดรหัส หากไม่มี PC หน่วยประมวลผลจะไม่ทราบเลยว่าจะต้องเริ่มทำงานคำสั่งใดถัดไป และเมื่อดึงเสร็จแล้ว PC จะต้องบวกค่าเพิ่มเพื่อเตรียมรอรับจังหวะถัดไป

3. **เฉลย:**
   * **คำสั่งสูงสุด (Opcodes):** $2^6 = 64$ คำสั่ง
   * **ขนาดหน่วยความจำสูงสุด:** $2^{10} = 1,024$ คำ (Words)

4. **เฉลย:**
   * $t_1: MAR \leftarrow PC$ (ส่งค่าตำแหน่งชี้คำสั่งไปชี้หน่วยความจำ)
   * $t_2: MDR \leftarrow Memory[MAR]; \quad PC \leftarrow PC + 1$ (อ่านคำสั่งจากหน่วยความจำและเพิ่มค่าตัวนับโปรแกรม)
   * $t_3: IR \leftarrow MDR$ (ย้ายคำสั่งจากรีจิสเตอร์ข้อมูลหน่วยความจำเข้าสู่รีจิสเตอร์คำสั่งเพื่อเตรียมถอดรหัส)

5. **เฉลย:** โค้ด Verilog สำหรับ Accumulator:
   ```verilog
   module accumulator (
       input clk,
       input reset,
       input load,
       input [7:0] data_in,
       output reg [7:0] ac_out
   );
       always @(posedge clk) begin
           if (reset) begin
               ac_out <= 8'b00000000;
           end else if (load) begin
               ac_out <= data_in;
           end
       end
   endmodule
   ```

</details>
