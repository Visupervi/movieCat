import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import DetailsComponent from '../../components/Movie/DetailsComponent'
import {getSubject} from '../../api';
import './index.less';
class Details extends Component {
  constructor(props) {
    super(props)
    this.state={
      title: '',
      imgUrl:"",
      moveDetail: {},
      relativeArr: [],
      commontArr: [],
      direactors:"",
      writers:'',
      cast:"",
      geners:'',
      countries:"",
      lan:"",
      aka:""
    }
  }

  UNSAFE_componentWillMount() {
    let id = this.props.match.params.id;
    this.getDetailsData(id)
  }

  //获取详情页数据
  async getDetailsData(id) {
    let temp = [];
    let tempCom = [];
    let dir = [];
    let wri = [];
    let actors = [];

    let res = await getSubject(id);
    temp = res.photos.slice(0, 5);
    tempCom = res.popular_comments;

    temp.map((item,index)=>{
      temp[index].image = "https://images.weserv.nl/?url=" + item.image.substring(8);
    });
   tempCom.map((item,index)=>{
     tempCom[index].author.avatar = "https://images.weserv.nl/?url=" + item.author.avatar.substring(8)

   });
   //处理导演
   res.directors.map((item,index)=>{
     dir.push(item.name)
   });
   //处理编剧
   res.writers.map((item,index)=>{
     wri.push(item.name)
   });
  // 处理演员
  res.casts.map((item,index)=>{
    actors.push(item.name)
  });
    //处理类型
    res.genres.map((item,index)=>{

    });
    this.setState({
      title:res.title + " (" + res.year + ")",
      moveDetail:res,
      imgUrl:"https://images.weserv.nl/?url=" + res.images.medium.substring(8),
      commontArr:tempCom,
      relativeArr:temp,
      direactors:dir.join(","),
      writers:wri.join(","),
      casts:actors.join(","),
      geners:res.genres.join(","),
      countries:res.countries.join(","),
      lan:res.languages.join(","),
      aka:res.aka.join(",")
    });
    console.log("详情数据", res);
  }

componentDidMount() {

}

  render() {
    const router = this.props;
    console.log("router", this.props);
    return (
      <DetailsComponent dataList = {this.state}/>
    )
  }
}

export default withRouter(Details);