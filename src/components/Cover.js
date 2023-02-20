import React from 'react'
import './Cover.css'

function Cover() {
  return (
    <div className='centerC'>
        <img className='coverimg' src='https://image.makewebeasy.net/makeweb/0/m14BHwk4P/Home%2Fsection_01_herobanner.jpg?v=202012190947'/>
        <div className='strate'>
            <p>STRATEGIC PARTNER</p>
            <img src='https://image.makewebeasy.net/makeweb/0/m14BHwk4P/Home/02_Partner.png?v=202012190947'/>
        </div>
        <div className='stats'>
            <img src='https://image.makewebeasy.net/makeweb/0/m14BHwk4P/Home/03___Stack_1_edite2.png?v=202012190947'/>
            <img src='https://image.makewebeasy.net/makeweb/0/m14BHwk4P/Home/03___Stack_2_edite2.png?v=202012190947'/>
        </div>
        <div className='service'>
            <h1>SERVICE</h1>
            <p>เราเป็นนักพัฒนาซอฟต์แวร์มืออาชีพที่เน้นกระบวนการพัฒนาซอฟต์แวร์แบบครบวงจร เพื่อให้ลูกค้าได้รับผลงานที่มีคุณภาพและส่งมอบตรงเวลา</p>
        </div>
    </div>
  )
}

export default Cover