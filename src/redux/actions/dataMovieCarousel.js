export const getMovieNowPlaying = () => async dispatch => {
  const api = "https://api.themoviedb.org/3/movie/now_playing";
  const Authorization = `Bearer ${process.env.REACT_APP_TOKEN}`;
  try {
    const dataAPI = await fetch(api, {
      headers: {
        Authorization: Authorization
      }
    })
    const result = await dataAPI.json(dataAPI)

    const filteredData = result.results.filter(movie => movie.poster_path).map(movie => ({
      id: movie.id,
      title: movie.title,
      overview: movie.overview,
      poster_path: "https://image.tmdb.org/t/p/w500" + movie.poster_path,
      popularity: movie.popularity,
      rate: movie.vote_average
    })).sort((a, b) => b.rate - a.rate);


    dispatch({
      type: 'SET_MOVIE_NOW_PLAYING',
      payload: filteredData
    })
  } catch (error) {
    console.log(error)
  }
}

export const getMovieTopRated = () => async dispatch => {
  const api = "https://api.themoviedb.org/3/movie/top_rated";
  const Authorization = `Bearer ${process.env.REACT_APP_TOKEN}`;
  try {
    const dataAPI = await fetch(api, {
      headers: {
        Authorization: Authorization
      }
    })
    const result = await dataAPI.json(dataAPI)

    const filteredData = result.results.filter(movie => movie.poster_path).map(movie => ({
      id: movie.id,
      title: movie.title,
      overview: movie.overview,
      poster_path: "https://image.tmdb.org/t/p/w500" + movie.poster_path,
      popularity: movie.popularity,
      rate: movie.vote_average
    })).sort((a, b) => b.rate - a.rate);


    dispatch({
      type: 'SET_MOVIE_TOP_RATED',
      payload: filteredData
    })
  } catch (error) {
    console.log(error)
  }
}

export const getMovieTrendingDay = () => async dispatch => {
  const api = "https://api.themoviedb.org/3/trending/movie/day";
  const Authorization = `Bearer ${process.env.REACT_APP_TOKEN}`;
  try {
    const dataAPI = await fetch(api, {
      headers: {
        Authorization: Authorization
      }
    })
    const result = await dataAPI.json(dataAPI)

    const filteredData = result.results.filter(movie => movie.poster_path).map(movie => ({
      id: movie.id,
      title: movie.title,
      overview: movie.overview,
      poster_path: "https://image.tmdb.org/t/p/w500" + movie.poster_path,
      popularity: movie.popularity,
      rate: movie.vote_average
    })).sort((a, b) => b.rate - a.rate);


    dispatch({
      type: 'SET_MOVIE_TRENDING_DAY',
      payload: filteredData
    })
  } catch (error) {
    console.log(error)
  }
}

export const getMovieTrendingWeek = () => async dispatch => {
  const api = "https://api.themoviedb.org/3/trending/movie/week";
  const Authorization = `Bearer ${process.env.REACT_APP_TOKEN}`;
  try {
    const dataAPI = await fetch(api, {
      headers: {
        Authorization: Authorization
      }
    })
    const result = await dataAPI.json(dataAPI)

    const page = result.page;

    const filteredData = result.results.filter(movie => movie.poster_path).map(movie => ({
      page: page,
      id: movie.id,
      title: movie.title,
      overview: movie.overview,
      poster_path: "https://image.tmdb.org/t/p/w500" + movie.poster_path,
      popularity: movie.popularity,
      rate: movie.vote_average
    })).sort((a, b) => b.rate - a.rate);


    dispatch({
      type: 'SET_MOVIE_TRENDING_WEEK',
      payload: filteredData
    })
  } catch (error) {
    console.log(error)
  }
}

export const getMovieSearch = (id) => async dispatch => {
  const api = "https://api.themoviedb.org/3/search/movie?query="+id;
  const Authorization = `Bearer ${process.env.REACT_APP_TOKEN}`;
  try {
    const dataAPI = await fetch(api, {
      headers: {
        Authorization: Authorization
      }
    })
    const result = await dataAPI.json(dataAPI)

    const filteredData = result.results.filter(movie => movie.poster_path).map(movie => ({
        id: movie.id,
        title: movie.title,
        overview: movie.overview,
        poster_path: "https://image.tmdb.org/t/p/w500"+movie.poster_path,
        popularity: movie.popularity,
        rate: movie.vote_average
    })).sort((a, b) => b.rate - a.rate);

    dispatch({
      type: 'SET_MOVIE_SEARCH',
      payload: filteredData
    })
  } catch (error) {
    console.log(error)
  }
}

export const getMovieSimilar = (id) => async dispatch => {
  const api = "https://api.themoviedb.org/3/movie/"+id+"/similar";
  const Authorization = `Bearer ${process.env.REACT_APP_TOKEN}`;
  try {
    const dataAPI = await fetch(api, {
      headers: {
        Authorization: Authorization
      }
    })
    const result = await dataAPI.json(dataAPI)

    const filteredData = result.results.filter(movie => movie.poster_path).map(movie => ({
      id: movie.id,
      title: movie.title,
      overview: movie.overview,
      poster_path: "https://image.tmdb.org/t/p/w500" + movie.poster_path,
      popularity: movie.popularity,
      rate: movie.vote_average
    })).sort((a, b) => b.rate - a.rate);


    dispatch({
      type: 'SET_MOVIE_SIMILAR',
      payload: filteredData
    })
  } catch (error) {
    console.log(error)
  }
}

export const getMovieRecommendation = (id) => async dispatch => {
  const api = "https://api.themoviedb.org/3/movie/"+id+"/recommendations";
  const Authorization = `Bearer ${process.env.REACT_APP_TOKEN}`;
  try {
    const dataAPI = await fetch(api, {
      headers: {
        Authorization: Authorization
      }
    })
    const result = await dataAPI.json(dataAPI)

    const filteredData = result.results.filter(movie => movie.poster_path).map(movie => ({
      id: movie.id,
      title: movie.title,
      overview: movie.overview,
      poster_path: "https://image.tmdb.org/t/p/w500" + movie.poster_path,
      popularity: movie.popularity,
      rate: movie.vote_average
    })).sort((a, b) => b.rate - a.rate);


    dispatch({
      type: 'SET_MOVIE_RECOMMENDATION',
      payload: filteredData
    })
  } catch (error) {
    console.log(error)
  }
}

export const getMovieCast = (id) => async dispatch => {
  const api = "https://api.themoviedb.org/3/movie/"+id+"/credits";
  const Authorization = `Bearer ${process.env.REACT_APP_TOKEN}`;
  try {
    const dataAPI = await fetch(api, {
      headers: {
        Authorization: Authorization
      }
    })
    const result = await dataAPI.json(dataAPI)
    const cast = result.cast.slice(0,10)

    const filteredData = cast.map(actor => ({
        id: actor.id,
        name: actor.name,
        character: actor.character,
        profile_path: "https://image.tmdb.org/t/p/w500"+actor.profile_path,
    }));

    dispatch({
      type: 'SET_MOVIE_CAST',
      payload: filteredData
    })
  } catch (error) {
    console.log(error)
  }
}

export const getMovieVideo = (id) => async dispatch => {
  const api = "https://api.themoviedb.org/3/movie/"+id+"/videos";
  const Authorization = `Bearer ${process.env.REACT_APP_TOKEN}`;
  try {
    const dataAPI = await fetch(api, {
      headers: {
        Authorization: Authorization
      }
    })
    const data = await dataAPI.json(dataAPI)
      // Filter YouTube videos and sort by published_at
      const youtubeVideos = data.results
          .filter(video => video.site === 'YouTube')
          .sort((a, b) => new Date(b.published_at) - new Date(a.published_at));

      // Get the most recent YouTube video (if any)
      const latestYouTubeVideo = youtubeVideos[0];

      if (latestYouTubeVideo && latestYouTubeVideo.key) {
          dispatch({
            type: 'SET_MOVIE_VIDEO',
            payload: latestYouTubeVideo.key
          })
      } else {
          console.error('No YouTube video found or no key provided.');
      }
  } catch (error) {
    console.log(error)
  }
}

