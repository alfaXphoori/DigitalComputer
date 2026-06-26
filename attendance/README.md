# ระบบเช็คชื่อเข้าห้อง — คู่มือติดตั้ง

หน้าเว็บ `check-in.html` ให้นักศึกษากดเช็คชื่อเข้าเรียน แล้ว **บันทึกลง Google Sheet**
เนื่องจากเว็บนี้เป็น static (ไม่มี backend) จึงใช้ **Google Apps Script** เป็นตัวกลางเขียนลงชีต

```
นักศึกษา → หน้า check-in (เว็บ) → Apps Script Web App → Google Sheet (แท็บ Attendance)
```

## ฐานข้อมูล

- สเปรดชีต: <https://docs.google.com/spreadsheets/d/1dnJOUZGFSK1TAp06P94a6Gni1BnYcNZyQC6zmxvh99Q/edit>
- **แท็บแรก** = ทะเบียนรายชื่อ ต้องมีหัวคอลัมน์ `studentId` และ `Fullname`
- สคริปต์จะสร้างแท็บ **`Attendance`** ให้อัตโนมัติ (คอลัมน์: Timestamp, Date, studentId, Fullname, Session)

## ขั้นตอนติดตั้ง (ทำครั้งเดียว)

1. เปิดสเปรดชีต → เมนู **Extensions → Apps Script**
2. ลบโค้ดตัวอย่างเดิมทั้งหมด แล้ววางเนื้อหาจากไฟล์ [`Code.gs`](Code.gs) → กด **Save** (💾)
3. กด **Deploy → New deployment**
   - ไอคอนเฟือง ⚙️ → เลือก **Web app**
   - **Execute as:** `Me` (เจ้าของชีต)
   - **Who has access:** `Anyone`
   - กด **Deploy** แล้ว **Authorize access** (อนุญาตสิทธิ์)
4. คัดลอก **Web app URL** (ลงท้ายด้วย `/exec`)
5. เปิดไฟล์ `check-in.md` ในโปรเจกต์ แล้ววางลิงก์ลงในตัวแปร:

   ```js
   var API_URL = "https://script.google.com/macros/s/XXXXXXXX/exec";
   ```

6. commit + push → หน้า **เช็คชื่อ** บนเว็บจะใช้งานได้ทันที

## ทดสอบ

- เปิด Web app URL ตรง ๆ ในเบราว์เซอร์ → ควรเห็น JSON `{"ok":true,"today":...,"roster":[...]}`
- เปิดหน้า `check-in.html` → ค้นหาชื่อ กดเช็คชื่อ → ดูแถวใหม่ในแท็บ `Attendance`

## หมายเหตุ

- กันเช็คซ้ำ: นักศึกษา 1 คนเช็คได้ครั้งเดียว **ต่อวัน** (ยึดตามวันที่เขตเวลา Asia/Bangkok)
- ต้องการแยกตามคาบ/สัปดาห์: ส่งค่า `session` เพิ่มจากหน้าเว็บ แล้วปรับเงื่อนไขกันซ้ำใน `Code.gs`
- **แก้โค้ดใน Apps Script แล้วต้อง Deploy ใหม่** (Manage deployments → Edit → Version: New version) ลิงก์ `/exec` เดิมจึงจะอัปเดต
