# My Understanding for find my hat

1. เตรียมโฟลเดอร์ และ ไฟล์ต่าง ๆ สำหรับโปรเจ็ค / `npm init -y` / `npm install prompt-sync`
2. เตรียม github repo / `git init` --> `git push`
3. เรียก prompt = require('prompt-sync') มาใช้ และตั้งค่าแต่ละ field
4. สร้าง const สำหรับค่าตัวแปลต่าง ๆ
5. สร้าง class และ constructor
6. สร้าง map 3x3
7. สร้างฟังก์ชั่น checkField สำหรับย้ายตำแหน่งตัวผู้เล่น โดยกำหนดให้ใช้ w/s/a/d
8. สร้างฟังก์ชั่น if เช็คว่ากดแล้วออกนอก field หรือไหม
9. สร้างฟังก์ชั่น if เช็คตำแหน่งที่อยู่ว่าตรงกับ hole = ออกจากเกม
10. สร้างฟังก์ชั่น if เช็คตำแหน่งที่อยู่ว่าตรงกับ hat = ชนะเกม
11. ระบุบตำแหน่งของ player ไว้ท้ายสุดในโค้ด play()
12. ระบุบตำแหน่งของ ground ไว้บนต่อจาก output field ในโค้ด play()
13. ใส่ console.clear(); เพื่อล้าง Output field อันเก่าออกด้วย