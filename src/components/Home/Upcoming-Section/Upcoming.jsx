import React, { use, useEffect, useState } from 'react';
import GlobalApi from '../../../Services/GlobalApi';
import { useNavigate } from 'react-router-dom';

export default function Upcoming() {
  const [movies, setMovies] = useState([]);
  const navigateToMovieDetails = useNavigate();
  function handleMovieClick (movie) {
    navigateToMovieDetails(`/movie/${movie.id}`);
  }
  useEffect(() => {
    GlobalApi.getUpcomingMovies()
      .then((res) => setMovies(res.data.results))
      .catch((err) => console.log(err));
  }, []);

 
  console.log(movies)
  return <>

    <div className="p-8 pb-10 ">
      <h2 className="text-white text-2xl font-bold mb-10 ">Upcoming</h2>
      <div className="flex space-x-4 overflow-x-auto scrollbar-none">
        {movies.map((movie, index) => (
          <div key={index} className="flex-none w-48 " onClick={() => handleMovieClick(movie)}>
            <img src={'https://image.tmdb.org/t/p/original/'+movie.backdrop_path} alt={movie.title} className="w-full h-72 object-cover rounded-2xl  bg-indigo-500 shadow-lg shadow-violet-500/50 mb-0.5" />
          </div>
        ))}
      </div>
    </div>
  </>
  
  
}
