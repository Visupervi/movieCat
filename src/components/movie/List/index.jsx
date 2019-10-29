import React, {Component} from 'react';
import ReactDOM from 'react-dom'
import {ListView} from "antd-mobile";

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
    if (Number(page) < Number(lastPage)) {
      this.setState({upLoading: true})
      //接口请求下一页数据,完成后将upLoading设为false
      //TODO 这个地方让父组件去请求书据
    }
  };
//获取item进行展示
  renderRow = (item, i) => {
    return (
      <div>
        //每个item
        <div className={"item-name"}>
          <p className={"item-movie-name"}>《{item.title}》</p>
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
    console.log("list",list);
    console.log("子页面接收的数据", list);
    return (
      <div className={"goodDetail"}>
        {
          list.listImg.length ?
            <ListView
              dataSource={this.state.dataSource.cloneWithRows(list)}
              renderRow={(rowData, id1, i) => this.renderRow(rowData, i)}
              initialListSize={list.count}
              pageSize={list.count}
              renderFooter={() => (<div style={{padding: 30, textAlign: 'center'}}>
                {(list.page < list.totalPage) && this.state.pullLoading ? <Icon type="loading"/> : null}
              </div>)}
              onEndReached={() => this.onEndReached(list.page, list.totalPage)}
              onEndReachedThreshold={20}
              renderBodyComponent={() => <MyBody/>}
              style={{width: '100vw'}}
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