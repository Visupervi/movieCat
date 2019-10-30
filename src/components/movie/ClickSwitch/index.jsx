import React, {Component} from 'react';
import {Tabs, WhiteSpace} from 'antd-mobile';
import {StickyContainer, Sticky} from 'react-sticky';
import {withRouter} from 'react-router-dom'
import {hotNow, commingSoon, Top250} from '../TabsName';

function renderTabBar(props) {
  console.log("tabSwitch", props);
  return (<Sticky>
    {({style}) => <div style={{...style, zIndex: 1}}><Tabs.DefaultTabBar {...props} /></div>}
  </Sticky>);
}

const tabs = [
  {title: hotNow, key: 't1', path: '/'},
  {title: commingSoon, key: 't2', path: '/ComeSoonPage'},
  {title: Top250, key: 't3', path: '/Top250'},
];

class ClickSwitch extends Component {
  constructor(props) {
    super(props)
  }
renderTabs = ()=>{
    console.log("this.props.history.location.pathname",this.props.history.location.pathname);
    tabs.map((item,index)=>{

      if(item.path === this.props.history.location.pathname){
        return item.key
      }
    });

}
  render() {
    return (
      <div className={'tab-switch'}>
        <StickyContainer>
          <Tabs
            tabs={tabs}
            initialPage={'t1'}
            renderTabBar={renderTabBar}
            onChange={(tab, index) => {
              this.props.history.push(tab.path);
            }
            }
          >
          </Tabs>
        </StickyContainer>
      </div>
    )
  }
}

export default withRouter(ClickSwitch)