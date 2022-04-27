const getTrimmedViewCount = (viewCount) => {
  let views = Number(viewCount.toString().split(",").join(""));

  if (views < 1000) {
    return views;
  } else if (views >= 1000 && views < 1000000) {
    return `${parseInt(views / 1000)}k`;
  } else if (views >= 1000000) {
    return `${parseInt(views / 1000000)}M`;
  }
};

export { getTrimmedViewCount };
