import React from "react";
import Carousel from './Carousel';
import "./Carouseluse.css";

class Carouseluse extends React.Component {


  render() {
    
    const items = [<img  src="https://image.makewebeasy.net/makeweb/0/m14BHwk4P/Home%2F06___Slide_6.png?v=202012190947"/>,
        <img  src="https://image.makewebeasy.net/makeweb/0/m14BHwk4P/Home%2F06___Slide_5.png?v=202012190947"/>,
        <img  src="https://image.makewebeasy.net/makeweb/0/m14BHwk4P/Home%2F06___Slide_4.png?v=202012190947"/>,
        <img  src="https://image.makewebeasy.net/makeweb/0/m14BHwk4P/Home%2F06___Slide_3_edit1.png?v=202012190947"/>,
        <img  src="https://image.makewebeasy.net/makeweb/0/m14BHwk4P/Home%2F06___Slide_2_edit1.png?v=202012190947"/>,
        <img  src="https://image.makewebeasy.net/makeweb/0/m14BHwk4P/Home%2F06___Slide_1_edit1.png?v=202012190947"/>]

    const setting = {
      dragSpeed: 1.25,
      itemWidth: 500,
      itemHeight: 700,
      itemSideOffsets: 70,
    }

    const itemStyle = {
      width: `${setting.itemWidth}px`,
      height: `${setting.itemHeight}px`,
      margin: `0px ${setting.itemSideOffsets}px`
    }

    return(
      <div className='container'>
        <Carousel _data={items} {...setting}>
          {
            items.map((i, _i) => (
              <div
                key={_i}
                className='item'
                style={{ ...itemStyle }}>
                <p>{i}</p>
              </div>
            ))
          }
        </Carousel>
      </div>
    )
  }
}

export default Carouseluse
