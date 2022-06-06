import "./SinglePlaylist.css";
import { useParams } from "react-router-dom";
import { Sidebar, VideoCard, Loader } from "components";
import { usePlaylists } from "customHooks";

const SinglePlaylist = () => {
  const { playlistId } = useParams();

  const {
    playlistsState: { playlists, isLoading },
  } = usePlaylists();

  const currentPlaylist = playlists?.find(
    (playlist) => playlist._id === playlistId
  );

  const videoCardInPlaylist = true;

  return (
    <section className="main-section">
      <Sidebar />

      <div className="component-container single-playlist">
        {currentPlaylist?.videos ? (
          <>
            <div className="playlist-header">
              <h2 className="playlist-title">{currentPlaylist.title}</h2>
              {currentPlaylist.videos.length > 0 ? (
                <span className="playlist-length">
                  <span>{currentPlaylist.videos.length}</span>
                  <span>
                    {currentPlaylist.videos.length > 1 ? "videos" : "video"}
                  </span>
                </span>
              ) : (
                <span>No videos</span>
              )}
            </div>

            <div className="playlist-videos">
              {isLoading ? (
                <Loader />
              ) : (
                currentPlaylist.videos.map((video) => (
                  <VideoCard
                    video={video}
                    key={video._id}
                    videoCardInPlaylist={videoCardInPlaylist}
                    currentPlaylist={currentPlaylist}
                  />
                ))
              )}
            </div>
          </>
        ) : (
          <p>No videos in Playlist</p>
        )}
      </div>
    </section>
  );
};

export { SinglePlaylist };
