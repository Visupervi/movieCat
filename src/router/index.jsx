import MovieHome from "../pages/Home";
import ComeSoonPage from "../pages/comeSoon";
import Top250 from "../pages/Top250";
// import  SearchPage from "..//pages/searchPage"
let routers = [
  {
    path:"/",
    componentName:MovieHome,
    exact:true,
    meta:{
      title:"正在热映",
      keepAlive:true
    }
  },
  {
    path:"/ComeSoonPage",
    componentName:ComeSoonPage,
    exact:false,
    meta:{
      title:"即将上映",
      keepAlive:true
    }
  },
  {
    path:"/Top250",
    componentName:Top250,
    exact:false,
    meta:{
      title:"Top250",
      keepAlive:true
    }
  }
  ];
export default routers;