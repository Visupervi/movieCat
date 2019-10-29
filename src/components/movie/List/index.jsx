import React, {Component} from 'react';
import {ListView} from "antd-mobile";

import './index.less'

//自定义容器
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
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    this.state = {
      dataSource: ds,
      pullLoading: false,
      pages: 1,
      height: document.documentElement.clientHeight * 3 / 4,
    };
  }

//上拉加载
  onEndReached = (page, lastPage) => {
    //当前页小于总页数继续请求下一页数据，否则停止请求数据

    console.log("上拉加载数据触发");
    if (Number(page) < Number(lastPage)) {
      console.log("打印props值",this.props);
      console.log("打印props值",this.props.list.count);
      console.log("打印props值",this.props.list.page);
      let obj = {page:this.props.list.page++,count:this.props.list.count};
      this.props.getNextPage({page:this.props.list.page++,count:this.props.list.count});

      this.setState({upLoading: true})
      //接口请求下一页数据,完成后将upLoading设为false
      //TODO 这个地方让父组件去请求数据
    }
  };
//获取item进行展示
  row = (dataRow, rowID) => {
    return (
      <div key={rowID}>
        //每个item
        <div className={"item-name"}>
          <p className={"item-movie-name"}>{dataRow.title}</p>
          <div className={""}>
            <div className={"item-movie-left"}>
              <img src="" alt=""/>
            </div>
            <div className={"item-movie-right"}>
              右边数据
            </div>
          </div>
        </div>
      </div>
    )
  };

  componentDidMount() {
  }

  render() {
    const {list} = this.props;
    console.log("list", list);
    console.log("子页面接收的数据", list);
    return (
      <div className={"goodDetail"}>
        {
          list.listImg.length ?
            <ListView
              dataSource={this.state.dataSource.cloneWithRows(list.listImg)}
              renderRow={this.row}
              initialListSize={list.count}
              pageSize={list.count}
              renderFooter={() => (<div style={{padding: 30, textAlign: 'center'}}>
                {(list.page < list.totalPage) && this.state.pullLoading ? <Icon type="loading"/> : null}
              </div>)}
              onEndReached={() => this.onEndReached(list.page, list.totalPage)}
              onScroll={() => { console.log('scroll'); }}
              onEndReachedThreshold={20}
              renderBodyComponent={() => <MyBody/>}
              scrollRenderAheadDistance={300}
              style={{width: '100vw',height: '500px'}}
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

export default MovieList