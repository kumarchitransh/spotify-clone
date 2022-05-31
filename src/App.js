import { useEffect } from "react";
import "./App.css";
import { getTokenFromUrl } from "./spotify";
import Login from "./Login";
import SpotifyWebApi from "spotify-web-api-js";
import Player from "./Player";
import { useDataLayerValue } from "./DataLayer";

const spotify = new SpotifyWebApi();

function App() {
  //useState is just like a short term memory management
  //intial token value null
  // const [token, setToken] = useState(null);
  //to pull info from datalayer remeber synntax
  const [{ user, token }, dispatch] = useDataLayerValue();

  //Run code based on a given condition
  //the empty[] shows that useeffects runs only once when the component loads and if there is spmething in dependency arraythem acc to 2 condition
  useEffect(() => {
    //code...
    const hash = getTokenFromUrl();
    window.location.hash = "";

    const _token = hash.access_token;

    //if there is token set token=token
    if (_token) {
      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });

      spotify.setAccessToken(_token);

      spotify.getMe().then((user) => {
        console.log(user);
        dispatch({
          type: "SET_USER",
          user: user,
        });
      });
      spotify.getUserPlaylists().then((playlists) => {
        dispatch({ type: "SET_PLAYLISTS", playlists: playlists });
      });

      //To get the user's discover weekly playlist
      spotify.getPlaylist("37i9dQZEVXcLz6XNImlEOj").then((response) => {
        dispatch({ type: "SET_DISCOVER_WEEKLY", discover_weekly: response });
      });
    }
  }, []);

  return (
    //Bem convention used so App not app.
    <div className="app">
      {/* if there is token go to player else go to login page */}
      {token ? <Player spotify={spotify} /> : <Login />}
    </div>
  );
}

export default App;
