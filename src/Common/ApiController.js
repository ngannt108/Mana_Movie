// const API_DOMAIN = "http://localhost:3003/";
const API_DOMAIN = "http://10.88.55.39:3003/";

export const API_MOVIE = {
  MOVIE: API_DOMAIN + "movie",
  DETAIL: API_DOMAIN + "movie/detail?apiFilmId=",
};

export const API_CINEMA = {
  CLUSTER: API_DOMAIN + "Cinema",
};

export const API_ACCOUNTS = {
  SIGNIN: API_DOMAIN + "user/login",
  SIGNUP: API_DOMAIN + "user/register",
};
