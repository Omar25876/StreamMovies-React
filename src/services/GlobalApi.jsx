import axios from "axios";


const movieBaseUrl = "https://api.themoviedb.org/3";
const apiKey = "9813ce01a72ca1bd2ae25f091898b1c7";
const path = "/discover/movie?sort_by=popularity.desc";

// const apiUrl = url + path + apiKey; 

// HandleImages : 
// https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=9813ce01a72ca1bd2ae25f091898b1c7
// const imgPath = "https://image.tmdb.org/t/p/w500/";
// src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
// src ={"https://image.tmdb.org/t/p/w500/" + poster_path}


const getTrendingMovies = async () => {
    const response = await axios.get(
      `${movieBaseUrl}/trending/all/day?api_key=${apiKey}`
    );
    return response;
}

 const getMovieDetails = async (id) => {
    const response = await axios.get(
      `${movieBaseUrl}/movie/${id}?api_key=${apiKey}`
    );
    return response;
}

const getNowPlayingMovies = async ()=>{
  const response = await axios.get(
    `${movieBaseUrl}/movie/now_playing?api_key=${apiKey}`
  );
  return response;
}

const getTopRatedMovies = async ()=>{
  const response = await axios.get(
    `${movieBaseUrl}/movie/top_rated?api_key=${apiKey}`
  );
  return response;
}

const getUpcomingMovies = async ()=>{
  const response = await axios.get(
    `${movieBaseUrl}/movie/upcoming?api_key=${apiKey}`
  );
  return response;
}


const getAiringTodayTV= async ()=>{
  const response = await axios.get(
    `${movieBaseUrl}/tv/airing_today?api_key=${apiKey}`
  );
  return response;
}

const getPopularTV= async ()=>{
  const response = await axios.get(
    `${movieBaseUrl}/tv/popular?api_key=${apiKey}`
  );
  return response;
}

const getTopRatedTV= async ()=>{
  const response = await axios.get(
    `${movieBaseUrl}/tv/top_rated?api_key=${apiKey}`
  );
  return response;
}

const getOnTheAirTV= async ()=>{
  const response = await axios.get(
    `${movieBaseUrl}/tv/on_the_air?api_key=${apiKey}`
  );
  return response;
}

const searchMovies = async (query) => {
  const response = await axios.get(
    `${movieBaseUrl}/search/movie?api_key=${apiKey}&query=${encodeURIComponent(query)}`
  );
  return response.data.results;
};

export default {
  getMovieDetails,
    getTrendingMovies,
    getNowPlayingMovies,
    getTopRatedMovies,
    getUpcomingMovies,
    getAiringTodayTV,
    getPopularTV,
    getTopRatedTV,
    getOnTheAirTV,
    searchMovies
   
}