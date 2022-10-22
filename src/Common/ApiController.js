const API_DOMAIN = "http://localhost:3003/";
// const API_DOMAIN = "http://10.88.55.39:3001/";

export const API_MOVIE = {
  MOVIE: API_DOMAIN + "movie",
  DETAIL: API_DOMAIN + "movie/detail?apiFilmId=",
  COMMENT: API_DOMAIN + "movie/comment?apiFilmId=",
  SCHEDULE: API_DOMAIN + "movie/schedule?apiFilmId=",
};

export const API_CINEMA = {
  CINEMA: API_DOMAIN + "cinema",
  BRANCH: API_DOMAIN + "cinema/branch?cineplex=",
  DETAIL : API_DOMAIN + "cinema/branch/detail?cineplex=",
  SCHEDULE: API_DOMAIN + "cinema/branch/schedule?apiCinemaId=",
};

export const API_ACCOUNTS = {
  SIGNIN: API_DOMAIN + "user/login",
  SIGNUP: API_DOMAIN + "user/register",
};
