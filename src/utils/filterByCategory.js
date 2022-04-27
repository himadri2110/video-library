const filterByCategory = (videos, filterText) => {
  if (filterText === "All") {
    return videos;
  }
  return [...videos].filter((video) => video.category === filterText);
};

export { filterByCategory };
