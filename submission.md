# 6. งานหลังการทดลอง

## นายธีรยุทธ นุชผดุง 6210110149 Sec02

## 1.) หน้าเลือกจังหวัดและรหัสไปรษณีย์
<img src="./images/screenshots/zip_code.jpg" width="300" height="700">
1. เพิ่มส่วนของหัวตาราง<br />
2. เพิ่มภาพพื้นหลัง และใส่พื้นหลังเป็นสีขาวแบบโปร่งใส<br />
3. เพิ่มจังหวัด คือ Bangkok, Nakhon Ratchasima, Phayao, Samut Prakan, Yala

## 2.) หน้าแสดงสภาพอากาศ
<img src="./images/screenshots/broken_clouds.jpg" width="300" height="700">
1. เพิ่มข้อมูลในส่วนของ<br />
    - ความเร็ว, ทิศทางลม<br />
    - ความชื้นสัมพัทธ์, ความดันบรรยากาศ<br />
    - อุณหภูมิต่ำสุดและสูงสุดของวัน<br />
    โดยทำการดึงข้อมูลมาจาก https://openweathermap.org/current#current_JSON<br />
2. เพิ่ม Icon ระบุสภาพอากาศใน Description<br />
3. เพิ่มเงื่อนไขในการแสดงภาพพื้นหลัง โดย<br />
    - หากมีเมฆ (Clouds) พื้นหลังจะเปลี่ยนเป็นรูปเมฆ<br />
    <img src="./images/screenshots/few_clouds.jpg" width="300" height="700">
    - หากมีฝนตก (Rain) พื้นหลังจะเปลี่ยนเป็นรูปฝนตก<br />
    <img src="./images/screenshots/rain.jpg" width="300" height="700">
    - หากท้องฟ้าแจ่มใส (Clear) พื้นหลังจะเป็นรูปท้องฟ้าแจ่มใส (เนื่องจากไม่มีที่ใดที่ท้องฟ้าแจ่มใส จึงใส่เป็นรูปแทนภาพหน้าจอ)<br />
    <img src="./images/backgrounds/clear.jpg" width="900" height="700">
    - หากเกิดพายุฝนฟ้าคะนอง (Thunderstorm) พื้นหลังจะเป็นรูปฟ้าผ่า (เนื่องจากไม่มีที่ใดที่เกิดพายุฝนฟ้าคะนอง จึงใส่เป็นรูปแทนภาพหน้าจอ)<br />
    <img src="./images/backgrounds/thunderstorm.jpg" width="300" height="700">
ข้อมูล Icon และเงื่อนไขสภาพอากาศ นำมาจาก https://openweathermap.org/weather-conditions<br />
4. จัดตำแหน่งให้ข้อมูลทั้งหมดอยู่ตรงกลางหน้าจอ<br />
5. ใส่พื้นหลังเป็นสีดำแบบโปร่งใส และทำตัวอักษรทั้งหมดให้เป็นสีขาว<br />

## -ภาพหน้าจอทั้งหมดอยู่ใน wt-app/images/screenshots-