import MovieHome from "../pages/Home";
import ComingSoon from "../pages/ComeSoon";
import Top250 from "../pages/Top250";
import Details from '../pages/Details'
// import  SearchPage from "..//pages/searchPage"
let routers = [
  {
    path: "/",
    componentName: MovieHome,
    exact: true,
    meta: {
      title: "正在热映",
      keepAlive: true
    }
  },
  {
    path: "/ComingSoon",
    componentName: ComingSoon,
    exact: true,
    meta: {
      title: "即将上映",
      keepAlive: true
    }
  },
  {
    path: "/Top250",
    componentName: Top250,
    exact: true,
    meta: {
      title: "Top250",
      keepAlive: true
    }
  },
  {
    path: "/:name/Details/:id",
    componentName: Details,
    exact: true,
    meta: {
      title: "Top250详情",
      keepAlive: true
    }
  }
];
export default routers;