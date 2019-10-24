import React, {Component} from 'react';
import {Carousel, WingBlank} from 'antd-mobile';
import './index.less';

class Moviecarousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imgHeight: 176,
      carouselImg: [1, 2, 3],
      slideIndex:"",
    }
  }

  UNSAFE_componentWillMount() {

  }

  componentDidMount() {
    console.log("props属性的值", this.props)
    console.log(this.state.carouselImg);
  }

  //获取轮播图数据函数
  /**
   * 需要把image的地址暂存，要不然取不到图片
   * @returns {Promise<void>}
   */
  render() {

    console.log("props属性的值", this.props.carouselImg);
    const imgData = this.props.carouselImg;
    imgData.map((item, index) => {

      console.log(index, item);
    });
    return (

      <Carousel className="space-carousel"
                autoplay
                infinite
                beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                afterChange={index => console.log('slide to', index)}
                frameOverflow="visible"
                cellSpacing={10}
                slideWidth={0.8}
      >
        {imgData.map((item, index) => (

          <a
            key={item}
            href={item.alt}
            style={{ display: 'block',
              position: 'relative', width: '100%',
              top: this.state.slideIndex === index ? -10 : 0,
              height: '100%',
              boxShadow: '2px 1px 1px rgba(0, 0, 0, 0.2)',
            }}
          >
            <img
              src={item.images}
              alt=""
              style={{width: '100%', verticalAlign: 'top'}}
              onLoad={() => {
                // fire window resize event to change height
                window.dispatchEvent(new Event('resize'));
                // this.setState({imgHeight: 'auto'});
              }}
            />
          </a>
        ))}
      </Carousel>
    )
  }
}

export default Moviecarousel