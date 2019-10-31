import React, {Component} from 'react';
import {Tabs} from 'antd-mobile';
import {StickyContainer, Sticky} from 'react-sticky';
import {withRouter} from 'react-router-dom'
import {hotNow, commingSoon, Top250} from '../TabsName';

const renderTabBar = (props)=> {
  console.log("tabSwitch", props);
  return (<Sticky>
    {({style}) => <div style={{...style, zIndex: 1}}><Tabs.DefaultTabBar {...props} /></div>}
  </Sticky>);
}

const tabs = [
  {title: hotNow, key: 't1', path: '/'},
  {title: commingSoon, key: 't2', path: '/ComingSoon'},
  {title: Top250, key: 't3', path: '/Top250'},
];


class ClickSwitch extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const tabkey = this.props.tabkey;
    console.log("tabkey",tabkey);
    return (
      <div className={'tab-switch'}>
        <StickyContainer>
          <Tabs
            tabs={tabs}
            initialPage={tabkey}
            renderTabBar={renderTabBar}
            onTabClick={(tab, index) => {
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