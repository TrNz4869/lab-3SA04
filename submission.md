# 6. งานหลังการทดลอง

## นายธีรยุทธ นุชผดุง 6210110149 Sec02

## 1.) หน้าเลือกจังหวัดและรหัสไปรษณีย์
<img src="./images/screenshots/zip_code.jpg" width="300" height="700">
1. เพิ่มส่วนของหัวตาราง
2. เพิ่มภาพพื้นหลัง และใส่พื้นหลังเป็นสีขาวแบบโปร่งใส
3. เพิ่มจังหวัด คือ Bangkok, Nakhon Ratchasima, Phayao, Samut Prakan, Yala

## 2.) หน้าแสดงสภาพอากาศ
<img src="./images/screenshots/broken_clouds.jpg" width="300" height="700">
1. เพิ่มข้อมูลในส่วนของ
    - ความเร็ว, ทิศทางลม
    - ความชื้นสัมพัทธ์, ความดันบรรยากาศ
    - อุณหภูมิต่ำสุดและสูงสุดของวัน
    โดยทำการดึงข้อมูลมาจาก https://openweathermap.org/current#current_JSON
2. เพิ่ม Icon ระบุสภาพอากาศใน Description
3. เพิ่มเงื่อนไขในการแสดงภาพพื้นหลัง โดย
    - หากมีเมฆ (Clouds) พื้นหลังจะเปลี่ยนเป็นรูปเมฆ
    <img src="./images/screenshots/few_clouds.jpg" width="300" height="700">
    - หากมีฝนตก (Rain) พื้นหลังจะเปลี่ยนเป็นรูปฝนตก
    <img src="./images/screenshots/rain.jpg" width="300" height="700">
    - หากท้องฟ้าแจ่มใส (Clear) พื้นหลังจะเป็นรูปท้องฟ้าแจ่มใส (เนื่องจากไม่มีที่ใดที่ท้องฟ้าแจ่มใส จึงใส่เป็นรูปแทนภาพหน้าจอ)
    <img src="./images/backgrounds/clear.jpg" width="900" height="700">
    - หากเกิดพายุฝนฟ้าคะนอง (Thunderstorm) พื้นหลังจะเป็นรูปฟ้าผ่า (เนื่องจากไม่มีที่ใดที่เกิดพายุฝนฟ้าคะนอง จึงใส่เป็นรูปแทนภาพหน้าจอ)
    <img src="./images/backgrounds/thunderstorm.jpg" width="300" height="700">
ข้อมูล Icon และเงื่อนไขสภาพอากาศ นำมาจาก https://openweathermap.org/weather-conditions
4. จัดตำแหน่งให้ข้อมูลทั้งหมดอยู่ตรงกลางหน้าจอ
5. ใส่พื้นหลังเป็นสีดำแบบโปร่งใส และทำตัวอักษรทั้งหมดให้เป็นสีขาว

## **ภาพหน้าจอทั้งหมดอยู่ใน wt-app/images/screenshots**