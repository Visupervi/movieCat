import React, {Component} from 'react';
import {Carousel, WingBlank} from 'antd-mobile';
import {getInTheaters} from '../../../api'
import './index.less';

class Moviecarousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imgHeight: 176,
      carouselImg: []
    }
  }

  componentWillUpdate(nextProps, nextState, nextContext) {

  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    this.getImage();
  }

  componentWillMount() {

  }

  componentDidMount() {
    // simulate img loading
    // setTimeout(() => {
    //   this.setState({
    //     : ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
    //   });
    // }, 100);
  }

  //获取轮播图数据函数
  /**
   * 需要把image的地址暂存，要不然取不到图片
   * @returns {Promise<void>}
   */
  async getImage() {
    let res = await getInTheaters();
    console.log(res);
    let tempArr = [];
    for (let i = 0; i < 5; i++) {
      tempArr[i] = res.subjects[i];
      let _u = tempArr[i].images.medium.substring(8);
      tempArr[i].images.medium = 'https://images.weserv.nl/?url=' + _u;
    }
    this.setState({
      carouselImg:tempArr
    })

  }

  render() {
    return (
      <WingBlank>
        <Carousel
          autoplay={true}
          infinite
          beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
          afterChange={index => console.log('slide to', index)}
        >
          {this.state.carouselImg.map((item,index) => (
            <a
              key={index}
              href="http://www.alipay.com"
              style={{display: 'inline-block', width: '100%', height: this.state.imgHeight}}
            >
              <img
                src={item.images.medium}
                alt=""
                style={{width: '100%', verticalAlign: 'top'}}
                onLoad={() => {
                  // fire window resize event to change height
                  window.dispatchEvent(new Event('resize'));
                  this.setState({imgHeight: 'auto'});
                }}
              />
            </a>
          ))}
        </Carousel>
      </WingBlank>
    )
  }
}

export default Moviecarousel