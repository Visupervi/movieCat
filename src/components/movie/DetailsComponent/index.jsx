import React, {Component} from 'react';
import './index.less';

class DetailsComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      imgUrl: "",
      detailList: {},
      moveDetail: {},
      relativeArr: [],
      commontArr: [],
    }
  }

  UNSAFE_componentWillMount() {

  }

  componentDidMount() {

  }

  //组装导演数据


  //组装编者数据

  render() {
    const {dataList} = this.props;
    console.log("dataList", dataList);
    return (
      <div className="app">
        <h2 className="movieName">{}</h2>
        <div className="detail">
          <div className="image">
            <img src={dataList.imgUrl} alt=""/>
          </div>
          <div className="description">
            <ul>
              <li><span>导演：</span>{dataList.direactors}</li>
              <li><span>编剧：</span>{dataList.writers}</li>
              <li><span>主演：</span>{dataList.casts}</li>
              <li><span>类型：</span>{dataList.geners}</li>
              <li><span>制片国家/地区：</span>{dataList.countries}</li>
              <li><span>语言：</span>{dataList.lan}</li>
              <li><span>上映日期：</span>{dataList.moveDetail.mainland_pubdate}</li>
              <li><span>片长：</span>{dataList.moveDetail.durations}</li>
              <li><span>又名：</span>{dataList.aka}</li>
            </ul>
          </div>
        </div>
        <div className="summary">
          <h3>{dataList.moveDetail.title}简介：</h3>
          <div className="summaryContent">
            {dataList.moveDetail.summary}
          </div>
        </div>
        <div className="relativPhoto">
          <h3>{dataList.moveDetail.title}的图片:</h3>
          <ul>
            {
              dataList.relativeArr.map((item, index) => {
                return (<li key={index + new Date().getUTCDate()}>
                  <img src={item.image} alt=""/>
                </li>)
              })
            }
          </ul>
        </div>
        <div className="hotCommont">
          <h3>热门评论：</h3>
          <ul>
            {
              dataList.commontArr.map((item, index) => {
                return (
                  <li className="commontWrap" key={index+new Date().getUTCDate()}>
                  <div className="header">
                    <div className="avatar">
                      <img src={item.author.avatar} alt=""/>
                    </div>
                    <div className="name">{item.author.name}</div>
                  </div>
                  <div className="content">
                    <p>{item.content}</p>
                    <div className="time">
                      <p>{item.created_at}</p>
                    </div>
                  </div>
                </li>
                )
              })
            }
          </ul>
        </div>
      </div>
    )
  }
}

export default DetailsComponent;