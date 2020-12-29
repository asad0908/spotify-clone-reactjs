export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  token:
    "BQBytcQGN9NkzDoDhzTJYJJ79vcc6EiJq4M7dPeB9Zd9GKDFH6rOQpRyQhryicUqsSWKCBuDVrjNpdTqtpgO21jv40ogwED2fVfOcXCCWmwBq_yd2CizhXtic9ms3qmYPgXdIDdT30_cs8dv7UognwGl_l-8kVLdDS7yxT7ETOTuoqbW",
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
