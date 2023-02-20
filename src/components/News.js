import React from 'react'
import './News.css'

function News() {
  return (
    <div className='newsbg'>
        <p className='topicsize'>ข่าวสารและบทความ ClickNext</p>
        <div className='flexnewscon'>
            <div className='newscontent'>
                <div className='imgborder'>
                <a href='#'><img src='https://image.makewebeasy.net/makeweb/r_409x273/m14BHwk4P/Portfolio/thumbnail_smart_meet_msdbkk.png'/></a>
                </div>
                <a href='#' className='newscontenttext'>Smart Meeting Room : สำนักการแพทย์</a>
            </div>
            <div className='newscontent'>
                <div className='imgborder'>
                <a href='#'><img src='https://image.makewebeasy.net/makeweb/r_409x273/m14BHwk4P/Portfolio/Cover_MIS.png'/></a>
                </div>
                <a href='#' className='newscontenttext'>ระบบ MIS สําหรับการกํากับตรวจสอบสหกรณ์ทางการเงิน</a>
            </div>
            <div className='newscontent'>
                <div className='imgborder'>
                <a href='#'><img src='https://image.makewebeasy.net/makeweb/r_409x273/m14BHwk4P/Portfolio/Cover_OIC.png'/></a>
                </div>
                <a href='#' className='newscontenttext'>OIC ระบบฐานข้อมูลการประกันภัย-ชีวิต</a>
            </div>
        </div>
        <button className='morebutton'>ดูเพิ่มเติม</button>
        <div className='bgwhite'></div>
    </div>
  )
}

export default News