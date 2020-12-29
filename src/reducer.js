export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  // token:
  //   "BQCI5OILqHLclMaCXzh7FQiBo7-Ne-N1l6A6-q8Xxdbg048qnxJ9gJQGT_2Q2jxcq2vm2g4gNJ-04jAzNSLz_M1s8aW1EhgsfZ3RWZSuWk8nM6myaYtBAI6lNMEUE0VN7FWGk9ugOGNqQpCV-hNdlheD2kzO4j6dcAyM9OgdQFpuRiKO",
};

const reducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };

    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };

    default:
      return state;
  }
};

export default reducer;
