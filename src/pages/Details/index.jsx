import React,{Component}from 'react'
import {withRouter} from 'react-router-dom'
class Details extends Component{
  constructor(props){
    super(props)
  }
  render() {
    const router = this.props;
    console.log("router",this.props);
    return(
      <div>
        我是详情页
      </div>
    )
  }
}
export default Details