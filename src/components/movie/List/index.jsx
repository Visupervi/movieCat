import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {ListView} from "antd-mobile";
import {withRouter, BrowserRouter as Router} from 'react-router-dom'

import './index.less'

//自定义容器
/**
 * @author Visupervi
 * @date 2019/10/29 16:55
 * @name MyBody
 * @param props
 * @return 返回一个组件
 */
function MyBody(props) {
  return (
    <div className="am-list-body my-body">
      <span style={{display: 'none'}}></span>
      {props.children}
    </div>
  );
}

class MovieList extends Component {
  constructor(props) {
    super(props);
    //使用dataSource格式的数据，这个地方参考react-native里面的数据格式
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    this.state = {
      dataSource: ds,
      pullLoading: false,
      pages: 1,
      height: 0,
    };
  }

//上拉加载
  /**
   * @author Visupervi
   * @date 2019/10/29 16:54
   * @name onEndReached
   * @param page, lastPage，请求页码，总页数
   * @return
   */
  onEndReached(page, lastPage) {
    //当前页小于总页数继续请求下一页数据，否则停止请求数据
    if (Number(page) <= Number(lastPage)) {
      //把参数传给父组件，让父组件去请求数据
      // console.log("传给父组件的值", this.props.list);
      let num = ++this.props.list.page;
      this.props.getNextPage({page: num, count: this.props.list.count});
      this.setState({upLoading: true})
    }
  };

//路由跳转
  goToDetails = (id) => {
    let str = "";
    let str1 = "";
    if (this.props.location.pathname === "/") {
      str = `/MovieHome/Details/${id}`;
    } else {
      str = this.props.location.pathname + `/Details/${id}`
    }
    this.props.history.push(str);
  };
//获取item进行展示
  /**
   * @author Visupervi
   * @date 2019/10/29 16:56
   * @name row
   * @param dataRow,rowID dataRow要渲染的一行数据，rowId
   * @return 组装好的list组件
   */
  row = (dataRow, rowID) => {
    console.log("row", this.props.children);
    return (
      <div key={rowID} onClick={() => this.goToDetails(dataRow.id)}>
        <div className={"item-name"}>
          <p className={"item-movie-name"}>《{dataRow.title}》</p>
          <div className={"item-name-content"}>
            <div className={"item-movie-left"}>
              <img src={dataRow.images} alt=""/>
            </div>
            <div className={"item-movie-right"}>
              <p><span className={'directors'}>导演：</span>{dataRow.directors.join("，")}</p>
              <p><span className={'casts'}>演员：</span>{dataRow.casts.join("，")}</p>
              <p><span className={'casts'}>类型：</span>{dataRow.genres.join("，")}</p>
              <p><span className={'casts'}>评分：</span>{dataRow.rating.average}</p>
              <p><span className={'year'}>上映时间：</span>{dataRow.year}</p>
            </div>
          </div>
        </div>
      </div>
    )
  };

  componentDidMount() {
    let header = document.querySelector(".movie-header");
    let footer = document.querySelector('.footerWrap');
    let carousel = document.querySelector(".carouse");
    let tabSwitch = document.querySelector(".tab-switch");
    const hei = document.documentElement.clientHeight - ReactDOM.findDOMNode(header).offsetHeight - ReactDOM.findDOMNode(footer).offsetHeight - ReactDOM.findDOMNode(carousel).offsetHeight - ReactDOM.findDOMNode(tabSwitch).offsetHeight;
    this.setState((state) => ({height: hei}));
  }

  render() {
    const {list} = this.props;
    console.log("List", this.props.children);
    return (
      <div className={"goodDetail"}>
        {
          list.listImg.length ?
            <ListView
              dataSource={this.state.dataSource.cloneWithRows(list.listImg)}
              renderRow={this.row}
              initialListSize={list.count}
              pageSize={list.count}
              renderFooter={() => (<div style={{padding: 0, textAlign: 'center'}}>
                {(list.page < list.totalPage) ? 'Loading...' : 'Loaded'}
              </div>)}
              onEndReached={() => this.onEndReached(list.page, list.totalPage)}
              onScroll={() => {
                // console.log('scroll');
              }}
              onEndReachedThreshold={20}
              renderBodyComponent={() => <MyBody/>}
              scrollRenderAheadDistance={300}
              style={{width: '100vw', height: this.state.height}}
            />
            :
            !list.listImg.length ?
              <div className={"goodEntry"}>
                <p>暂无数据</p>
              </div> : null
        }
      </div>

    )
  }
}

export default withRouter(MovieList);