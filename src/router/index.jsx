import MovieHome from "../pages/Home"
// import ComeSoonPage from "src/pages/comeSoonPage"
// import nowShowPage from "src/pages/nowShowPage"
// import  SearchPage from "src/pages/searchPage"
let routers = [
  {
    path:"/",
    componentName:MovieHome,
    exact:true,
    meta:{
      title:"正在热映",
      keepAlive:true
    }
  }
  ];
export default routers;