Feature: สร้างสภาพแวดล้อมสำหรับทดสอบแบบ BDD
  In Order To ทดสอบแบบ BDD ได้อย่างถูกต้อง
  As A นักทดสอบ
  I Want To ทดสอบระบบแบบ end-to-end ด้วย mobile simulator

Scenario Outline: เพิ่มชื่อ
  Given ผมเปิด Appium Test Server
  When พิมพ์ <name> และพิมพ์ <phone>
  Then ควรจะเห็น <name> และ <phone>

  Examples:
    | name     | phone      |
    | Tanakorn | 0830664647 |
    | Dump     | 08306xxxxx |
    | Pone     | 08306yyyyy |

Scenario Outline: เพิ่มอีเมล์
  Given ผู้ใช้ที่ชื่อว่า <name> และมีโทรศัพท์คือ <phone>
  When กรอก <email>
  Then ต้องเห็น <name>, <phone> และ <email>

  Examples:
    | name     | phone      | email             |
    | Tanakorn | 0830664647 | tanakorn@test.com |
    | Dump     | 08306xxxxx | dump@test.com     |
    | Pone     | 08306yyyyy | pone@test.com     |
