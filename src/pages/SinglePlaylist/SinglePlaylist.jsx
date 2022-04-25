import "./SinglePlaylist.css";
import { useParams } from "react-router-dom";
import { Sidebar, VideoCard } from "components";
import { usePlaylists } from "customHooks";

const SinglePlaylist = () => {
  const { playlistId } = useParams();

  const {
    playlistsState: { playlists },
  } = usePlaylists();

  const currentPlaylist = playlists?.find(
    (playlist) => playlist._id === playlistId
  );

  const videoCardInPlaylist = true;

  return (
    <section className="main-section">
      <Sidebar />

      <div className="component-container single-playlist">
        <div className="playlist-header">
          <h2 className="playlist-title">{currentPlaylist.title}</h2>
          <span className="playlist-length">
            {currentPlaylist.videos.length} videos
          </span>
        </div>

        <div className="playlist-videos">
          {currentPlaylist.videos.length ? (
            currentPlaylist.videos.map((video) => (
              <VideoCard
                video={video}
                key={video._id}
                videoCardInPlaylist={videoCardInPlaylist}
                currentPlaylist={currentPlaylist}
              />
            ))
          ) : (
            <p>No videos in Playlist</p>
          )}
        </div>
      </div>
    </section>
  );
};

export { SinglePlaylist };