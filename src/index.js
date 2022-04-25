import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { makeServer } from "./server";

import { BrowserRouter as Router } from "react-router-dom";
import {
  VideosProvider,
  AuthProvider,
  PlaylistsProvider,
  WatchLaterProvider,
  LikesProvider,
} from "contexts";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <AuthProvider>
        <VideosProvider>
          <PlaylistsProvider>
            <WatchLaterProvider>
              <LikesProvider>
                <App />
              </LikesProvider>
            </WatchLaterProvider>
          </PlaylistsProvider>
        </VideosProvider>
      </AuthProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
