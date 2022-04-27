const sortByDate = (videos, sortBy) => {
  if (sortBy === "newest") {
    return [...videos].sort(
      (a, b) => new Date(b.releaseDate) - new Date(a.releaseDate)
    );
  } else if (sortBy === "oldest") {
    return [...videos].sort(
      (a, b) => new Date(a.releaseDate) - new Date(b.releaseDate)
    );
  }
  return videos;
};

export { sortByDate };
