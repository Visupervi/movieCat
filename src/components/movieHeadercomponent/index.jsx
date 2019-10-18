import React,{Component}from 'react';
import ReactDOM from 'react-dom';
import { NavBar,Icon} from "antd-mobile";
class MovieHeader extends Component{
  constructor(props){
    super(props);
  }
  //返回
  onLeftClick(){
    console.log("点击返回");
  }
  //搜索
  onRightClick(){
    console.log("点击搜索");
  }
  render() {
    return(
      <div>
        <NavBar
          mode="light"
          icon={<Icon type="left" />}
          onLeftClick={this.onLeftClick.bind(this)}
          rightContent={[
            <Icon key="0" type="search" style={{ marginRight: '16px' }} onClick={this.onRightClick.bind(this)}/>,
          ]}
        >豆瓣电影</NavBar>
      </div>
    )
  }
}
export default MovieHeader;
