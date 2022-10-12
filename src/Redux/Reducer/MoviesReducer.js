import { useReducer } from "react";
function GetMovies(state, { type, payload }) {
  switch (type) {
    case "NOW":
      return { ...state, listMovie: payload };
    case "SOON":
      state.listMovie = payload;
      return { ...state };
    default:
      return state;
  }
}

function ListMovie() {
  return useReducer(GetMovies, []);
}

export default ListMovie;
