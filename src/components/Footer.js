import React from 'react'
import './Footer.css'
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

function Footer() {
    return (
        <div>
        <div className='flexfooter'>
            <div className=''>
                <p className='topicfoot'>CLICKNEXT COMPANY LIMITED</p>
                <p className='address'>128/323-333 30th FL. Phayathai Plaza Bldg. Phayathai road, Thung Phayathai, Ratchathewi, Bangkok, 10400, Thailand.</p>
                <p className='phone'>Phone : <a href='#'>+66-2217-7900</a></p>
                <p className='email'>E-mail : <a href='#'>info@clicknext.com</a></p>
                <p className='phone'>Social <FaFacebook className='facebook' /><FaYoutube className='youtube' /><FaLinkedin className='linkedin' /> </p>
                
            </div>

            <div className='gridfooter'>
                <p className='topicf'>Company</p>
                <p className='menu'><a className='linkmenu' href='#'>Team</a></p>
                <p className='menu1'><a className='linkmenu' href='#'>Career</a></p>
                <p className='menu1'><a className='linkmenu' href='#'>Success Story</a></p>
                <p className='menu1'><a className='linkmenu' href='#'>Contact</a></p>
            </div>

            <div className='gridfooter'>
                <p className='topicf'>Service</p>
                <p className='menu'><a className='linkmenu' href='#'>Software Development</a></p>
                <p className='menu1'><a className='linkmenu' href='#'>Mobile Application</a></p>
                <p className='menu1'><a className='linkmenu' href='#'>Interactive Media</a></p>
            </div>

            <div className='gridfooter'>
                <p className='topicf'>Products</p>
                <p className='menu'><a className='linkmenu' href='#'>MakeWebEasy</a></p>
                <p className='menu1'><a className='linkmenu' href='#'>ChatCone</a></p>
                <p className='menu1'><a className='linkmenu' href='#'>SMS Marketing</a></p>
                <p className='menu1'><a className='linkmenu' href='#'>CMS</a></p>
                <p className='become'>Become to ClickNexter</p>
                <a className='centerbutton' href='#' ><img  className='marginfoot' src='https://image.makewebeasy.net/makeweb/0/m14BHwk4P/Home/12__btn.png?v=202012190947'/></a>
            </div>
            
        </div>
        <p className='copyr'>Copyright © ClickNext Co.,Ltd All right reserved.</p>
        </div>
    )
}

export default Footer