const options = {
  method: "GET",
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${import.meta.env.VITE_API_TOKEN}`
  }
}

export const getTrendingMovies = async (time_window: string) => {
  const apiUrl = `https://api.themoviedb.org/3/trending/movie/${time_window}?language=fr-FR`
  const response = await fetch(apiUrl, options)
  if (!response.ok) {
    throw new Error('Échec de la recherche de films à la mode')
  }
  const data = await response.json();

  return data.results;
}

export const getMovieDetails = async (movieId: number) => {
  const apiUrl = `https://api.themoviedb.org/3/movie/${movieId}?language=fr-FR`;
  const response = await fetch(apiUrl, options)

  if (!response.ok) {
    throw new Error('Échec de la recherche du film')
  }
  const data = await response.json()
  return data;
}