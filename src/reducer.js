export const initialState = {
  user: null,
  playlist: [],
  playing: false,
  item: null,
  token:
    "BQAYRxfrR4VQJLgnbH2jUBF2stgz57CWtTTipPje6bc-BSSePnfr6nEou5HiGkp28aTgcfF5JbimA4nwamRiI8LmeIKdV_u2P8KUGZW4CWsPzVH53CGaRo6BRS9BOtX1KzBN0yNJtDzijoOf8hOHVz3NPG9boNkvqZktxGOpCZuTMZ1gahQq",
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

    default:
      return state;
  }
};

export default reducer;
