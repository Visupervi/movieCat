import Ajax from "./api";
//top250
export const getTop250 = (page,count) => Ajax("/api/movie/top250",{start:page,count:count},"GET");
//in_theaters
export const getInTheaters = () => Ajax("/api/movie/in_theaters","GET");
//in_theatersMore
export const getInTheatersMore = (page,count) => Ajax("/api/movie/in_theaters",{page:page,count:count},"GET");
//subject
export const getSubject = (id) => Ajax("/api/movie/subject/"+id,{},"GET");
//comingsoon
export const getComingSoon = (page,count) => Ajax("/api/movie/coming_soon",{start:page,count:count},"GET");