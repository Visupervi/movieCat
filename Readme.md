#### 1. npm run dev
```javascript
npm install
npm run dev
```

#### 2. 报错信息及解决办法
##### <1>Cannot update during an existing state transition (such as within `render`)
这个报错是因为我在绑定事件的时候绑定的this不对，在事件绑定中 onClick = {()=> this.fn()},使用类似的箭头函数才可以
##### <2>   当编译的时候报解析不了箭头函数，如下所示
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

#### 3. 解决listView不显示
查看页面元素里面的数据都渲染上了，但是就是不显示，然后查看元素的高度，返现antd-mobile里面的元素有一个高度是0；
就是能够滚动的那个元素，所以需要加上高度才可以嗷。

#### 4.解决在详情页面刷新会报找不到app.js的错

客户端路由和服务端路由是有区别的，你在浏览器内可以由首页跳转到其他路由地址，是因为这是由前端自行渲染的，你在React Router定义了对应的路由，脚本并没有刷新网页访问后台，是JS动态更改了location。
当你刷新时，你首先是访问的后台地址，然后返回的页面内加载了React代码，最后在浏览器内执行；也就是说如果这个时候报404，是因为你后台并没有针对这个路由给出返回HTML内容，也谈不上执行React Router了。
使用HashRouter，不要使用BrowserRouter，这样所有的请求都会定位到index.html这一个页面，服务器端也不需要任何配置了。

作者：_鸭鸭
链接：https://www.jianshu.com/p/ffb7e3445414
来源：简书
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。