import Axios from 'axios';
// import Toast from '../components/Toast'
import {Modal, Toast} from 'antd-mobile';

export default function Ajax(url, data = {}, type = "GET") {
  return new Promise((resolve, reject) => {
    let promise;
    if (type.toLocaleLowerCase() === "get") {
      promise = Axios.get(url, {params: data})
    } else {
      promise = Axios.post(url, data)
    }
    promise.then(res => {
      resolve(res.data)
    }).catch(err => {
      Modal.alert("提示", err.message, [{text: '确定', onPress: () => console.log('ok')},])
      return
    })
  })
}

