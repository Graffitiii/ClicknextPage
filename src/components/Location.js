import React from 'react'
import './Location.css'

function Location() {
    return (
        <div className='bgwhitel'>
        <div className='gridlocation'>
            <p className='locationhead'>LOCATIONS</p>
            <div className='flexlocation'>
                <div className='gridcontent'>
                    <p className='province'>Bangkok, TH</p>
                    <p className='detail'>128/323-333 30th FL. Phayathai
                        Plaza Bldg. Phayathai road,
                        Thung Phayathai, Ratchathewi,
                        Bangkok, 10400, Thailand.</p>
                    <a className='telnum' href='#'>+66-2217-7900</a>
                </div>
                <div className='gridcontent'>
                    <p className='province'>Chonburi, TH</p>
                    <p className='detailT'>เลขที่ 22/14-15 ถนนบางแสนสาย 4 เหนือ
                        ตำบลแสนสุข อำเภอเมืองชลบุรี จังหวัดชลบุรี 20130</p>
                    <a className='telnum2' href='#'>+66-2217-7900</a>
                </div>
                <div className='gridcontent'>
                    <p className='province'>Jakarta, ID</p>
                    <p className='detail'>PT Klik Digital Nusantara AXA Tower
                        Lantai 36, Kuningan City Jl. Prof. Dr.
                        Satrio Kav. 18 Jakarta Selatan 12940</p>
                    <a className='telnum2' href='#'>+62-8111-9080-89</a>
                </div>
            </div>
        </div>
        <img className='worldimg' src='https://image.makewebeasy.net/makeweb/0/m14BHwk4P/Home%2F11_Slide.png?v=202012190947'/>
        </div>

    )
}

export default Location