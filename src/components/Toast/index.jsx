import React, {Component} from 'react'
import {Modal, Button, WhiteSpace, WingBlank, Toast} from 'antd-mobile';

const alert = Modal.alert;

class Toast extends Component{
  constructor(props) {
    super(props);

  }

  let
  propMsg = this.props.msg;
  const
  showAlert = (title, msg) => {
    const alertInstance = alert(title, msg, [
      {text: "取消", onPress: () => console.log("取消"), style: 'default'}
      {text: "确定", onPress: () => console.log("确定"), style: 'default'}
    ])
  };

  render() {
    return (
      <WingBlank>
        <Button
          onClick={() => this.showAlert(this.propMsg.title, this.propMsg.msg)
            >
            < /Button>
            </WingBlank>
            )
          }
        }