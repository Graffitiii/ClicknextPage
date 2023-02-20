import React from 'react'
import './Form.css'
import { GrMail } from "react-icons/gr";

function Form() {
    return (
        <div className='flexform'>
            <p className='formword'>Are you ready to take your business to the next level with <span>CLICKNEXT</span></p>
            <div className='gridinput'>
                <input className='inputsize' type='text' placeholder='ชื่อ'></input>
                <input className='inputsize' type='text' placeholder='E-mail'></input>
                <input className='inputsize' type='text' placeholder='เบอร์โทรศัพท์'></input>
                <select className='inputsize'>
                    <option>เลือกประเภทการติดต่อ</option>
                    <option value="สมัครงาน / ฝึกงาน">สมัครงาน / ฝึกงาน</option>
                    <option value="สนใจผลิตภัณฑ์">สนใจผลิตภัณฑ์</option>
                    <option value="สนใจบริการ">สนใจบริการ</option>
                    <option value="อื่นๆ">อื่นๆ</option>
                </select>
                <textarea className='formcontent' type='text' placeholder='ข้อความ'></textarea>
                <button className='buttonform'><GrMail className='mailicon'/> ส่งข้อความ</button>
            </div>
        </div>
    )
}

export default Form