import React from 'react'
import './Card.css'
import { MdOutlineCalendarToday } from "react-icons/md";
import { BiUser } from "react-icons/bi";
import { IoChevronForwardOutline } from "react-icons/io5";

function Card() {
  return (
    <div className='cardbg'>
      <p className='newsize'>ข่าวสาร และบทความ ClickNext</p>
      <div className='cardflex'>
        <div className='card'>
          <a href='#'><img src='https://blog.clicknext.com/wp-content/uploads/2023/02/Pic1-400x225.jpg?v=202012190947' /></a>
          <p className='calendar'><MdOutlineCalendarToday className='calendaricon' /> February 10, 2023  | <BiUser className='calendaricon' /> Nunthaporn.T</p>
          <a className='cardheader' href='#'>ยกระดับการป้องกันภัยคุกคามทางไซเบอร์ในโรงพยาบาล ด้วย AI และ Automation</a>
          <p className='cardcontent'>ภัยคุกคามทางไซเบอร์ในโรงพยาบาลเพิ่มขึ้นอย่างรวดเร็ว! และเป็นที่น่าตกใจเมื่อหลายโรงพยาบาลในไทยถูกโจรกรรมข้อมูลในระยะเวลา</p>
          <a className='readmore' href='#'>Read more <IoChevronForwardOutline className='readmorear'/></a>
        </div>
        <div className='card'>
        <a href='#'><img src='https://blog.clicknext.com/wp-content/uploads/2023/02/Blog-Cover-2-400x225.jpg?v=202012190947' /></a>
          <p className='calendar'><MdOutlineCalendarToday className='calendaricon' /> February 06, 2023  | <BiUser className='calendaricon' /> Nunthaporn.T</p>
          <a className='cardheader' href='#'>ขอเชิญร่วมงาน Innovation & Security For Future Healthcare สัมมนาพิเศษสำหรับโรงพยาบาลโดยเฉพาะ</a>
          <p className='cardcontent'>ปัจจุบันโลกถูกขับเคลื่อนด้วยเทคโนโลยี และวิถีการดำเนินชีวิตที่เปลี่ยนไปในยุคดิจิตอล นำมาซึ่งความท้าทายในการให้บริการด้าน</p>
          <a className='readmore' href='#'>Read more <IoChevronForwardOutline className='readmorear'/></a>
        </div>
        <div className='card'>
        <a href='#'><img src='https://blog.clicknext.com/wp-content/uploads/2023/01/AW1-1-400x225.png?v=202012190947' /></a>
          <p className='calendar'><MdOutlineCalendarToday className='calendaricon' /> January 10, 2023  | <BiUser className='calendaricon' /> Nunthaporn.T</p>
          <a className='cardheader' href='#'>Sangfor HCI คืออะไร? ยกระดับ Data Center คุณให้ทรงพลัง และปลอดภัยยิ่งขึ้น</a>
          <p className='cardcontent'>Sangfor HCI คืออะไร? “Sangfor HCI” คือ โซลูชัน Hyper-Converged Infrastructure (HCI) ที่พัฒนาโดย Sangfor เป็นโซลูชัน</p>
          <a className='readmore' href='#'>Read more <IoChevronForwardOutline className='readmorear'/></a>
        </div>
      </div>
    </div>
  )
}

export default Card