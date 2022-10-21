import { useReducer } from "react";
function GetMovies(state, { type, payload }) {
  switch (type) {
    case "NOW":
      return { ...state, listMovie: payload };
    case "SOON":
      state.listMovie = payload;
      return { ...state };
    case "DETAIL":
      return { ...state, detail: payload };
    case "COMMENT":
      return { comment: payload };
    case "SCHEDULE":
      return { ...state, schedule: payload };
    default:
      return state;
  }
}

function ListMovie() {
  return useReducer(GetMovies, []);
}

export default ListMovie;
