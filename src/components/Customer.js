import React from 'react'
import './Customer.css'

function Customer() {
    return (
        <div>
        <div className='centerCus'>
            <img className='cusimg' src='https://image.makewebeasy.net/makeweb/0/m14BHwk4P/Home/07__Logo.png?v=202012190947' />
            <div className='gridcontent'>
                <p className='client'>CLIENT</p>
                <p className='success'>SUCCESS</p>
                <p className='cust'>ส่วนหนึ่ง จากลูกค้า ที่ไว้วางใจ ให้เราดูแลธุรกิจ</p>
                <img src='https://image.makewebeasy.net/makeweb/0/m14BHwk4P/Home/07__Stack.png?v=202012190947'/>
            </div>
        </div>
        <div className='bgwhitec'></div>
        </div>
    )
}

export default Customer