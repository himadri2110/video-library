const getSearchedVideos = (videos, searchText) => {
  return [...videos].filter(
    (video) =>
      video.title.toLowerCase().includes(searchText.toLowerCase()) ||
      video.creator.toLowerCase().includes(searchText.toLowerCase())
  );
};

export { getSearchedVideos };
