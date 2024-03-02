export const normalizedMovies = arr =>
  arr.map(({ id, poster_path, title }) => ({
    id,
    poster_path,
    title,
  }));

export const normalizedReviews = arr => {
  return arr.map(({ id, content }) => ({
    id,
    content,
  }));
};

export const normalizedCast = arr => {
  return arr.map(({ cast_id, character, name, profile_path }) => ({
    cast_id,
    character,
    name,
    profile_path,
  }));
};
