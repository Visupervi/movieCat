####1. npm run dev
```javascript
npm install
npm run dev
```

####2 。报错信息及解决办法
#####<1>Cannot update during an existing state transition (such as within `render`)
这个报错是因为我在绑定事件的时候绑定的this不对，在事件绑定中 onClick = {()=> this.fn()},使用类似的箭头函数才可以
#####<2>   当编译的时候报解析不了箭头函数，如下所示
           100 |
         > 101 |   onEndReached = (event)=> {
               |                ^
           102 |     // load new data
           103 |     // hasMore: from backend data, indicates whether it is the last page, here is false
           104 |     if (this.state.isLoading && !this.state.hasMore) {
这个是因为我自己配置的babel有问题，需要下模块来解决，分别下载    
```javascript
@babel/plugin-transform-arrow-functions;
@babel/plugin-proposal-class-properties;
```
然后在babelrc中配置