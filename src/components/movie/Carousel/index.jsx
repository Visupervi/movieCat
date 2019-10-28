import React, {Component} from 'react';
import {Swiper,CellsTitle,Flex,FlexItem} from 'react-weui';
import 'weui';
import 'react-weui/build/packages/react-weui.css';
import './index.less';
class Moviecarousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imgHeight: 176,
      carouselImg: [],
      slideIndex:0,
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
      <div style={{border: '1px solid #eee', background: '#f8f8f8'}}>
        <Swiper
          height={200}
          onChange={ (prev, next) => this.setState({slideIndex: next}) }
          auto={true}
        >
          {
            imgData.map((item,index)=>{
              return (
                <div key={index+Math.round(new Date().getTime())} style={{width:'100%'}}>
                  <img src={item.images} alt="" style={
                    {width:"100%",height:'100%'}
                  }/>
                </div>
              )
            })
          }
        </Swiper>
      </div>
    )
  }
}

export default Moviecarousel