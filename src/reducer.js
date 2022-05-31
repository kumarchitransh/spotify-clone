export const intialState = {
  user: null,
  playlist: [],
  playing: false,
  item: null,
  //REMOVE after finishing develoing
  // token:
  //   "BQBLpwzh_XBRVfUE1NiHAbn5nuNCqryBVLlhahlHEFARaEeMD6ApBQHqjOW6Z7GhfcDJ5xlzPaFuZiyOCNMrqVJIq1jAH-nzd1bauAQHER8wXq-c3zuL-1IbqFmAHD0-KPenRxVd_jI2YblsV_yR4KlQNx6xs57DPUWkOTt99uZ86g55",
};

const reducer = (state, action) => {
  console.log(action);

  //Action -> type,[payload]

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
    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };
    default:
      return state;
  }
};

export default reducer;
