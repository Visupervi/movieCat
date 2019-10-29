import React, {Component} from "react";

import MovieCarouse from "../../components/Movie/Carousel";
import MovieList from '../../components/Movie/List'
import {getInTheaters, getInTheatersMore} from '../../api';
import './index.less';

class MovieHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imgHeight: 176,
      carouselImg: [0, 0, 0, 0, 0],
      listImg: [],
      page: 1,
      count: 12,
      allLoaded: false,
      totalPage: ""
    }
  }

  UNSAFE_componentWillMount() {

  }

  componentDidMount() {
    this.getImage();
    this.getInTheatersData(this.state.page, this.state.count)
  }

  //获取轮播图的数据
  async getImage() {
    let res = await getInTheaters();
    console.log(res);
    let tempArr = [];
    for (let i = 0; i < 5; i++) {
      tempArr[i] = res.subjects[i];
      let _u = tempArr[i].images.medium.substring(8);
      tempArr[i].images = 'https://images.weserv.nl/?url=' + _u;
    }
    this.setState({
      carouselImg: tempArr
    }, (preState, props) => {
      console.log("回调函数", this.state.carouselImg)
    })

  }

  //获取数据列表的数据
  async getInTheatersData(page, count) {

    let res = await getInTheatersMore(page, count);
    let total = Math.ceil(res.total / res.count);
    let moveArr = [];
    moveArr = res.subjects;
    //js生成for循环的快捷键 itar
    let directorsTemp = [];
    let castsTemp = [];
    moveArr.map((item, index) => {
      let _u = item.images.medium.substring(8);

      //处理导演
      if (item.directors) {
        item.directors.map((key, index) => {
          directorsTemp[index] = key.name
        })
      }
      //处理演员
      if (item.casts) {
        item.casts.map((key, index) => {
          castsTemp[index] = key.name
        })
      }

      moveArr[index].directors = directorsTemp;
      moveArr[index].casts = castsTemp;
      moveArr[index].images = 'https://images.weserv.nl/?url=' + _u;
    });
    console.log("请求电影列表数据",moveArr);
    this.setState({listImg: moveArr,totalPage:total})
  }

  render() {
    return (
      <div className={"homeContent"}>
        <div className={"carouse"}>
          <MovieCarouse carouselImg={this.state.carouselImg}/>
        </div>
        <div className={"mvieList"}>
          <MovieList list={this.state}/>
        </div>
      </div>
    )
  }
}

export default MovieHome