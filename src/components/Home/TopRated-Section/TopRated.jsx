import React, { useCallback, useEffect, useState } from 'react';
import GlobalApi from '../../../Services/GlobalApi';

export default function HeroSlider() {
  const [movies, setMovies] = useState([]);
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    GlobalApi.getTopRatedMovies()
      .then((res) => setMovies(res.data.results))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 6000);
    return () => clearInterval(interval);
  }, [movies]);

  // const handleNext = () => {
  //   setFade(false);
  //   setTimeout(() => {
  //     setIndex((prev) => (prev + 1) % movies.length);
  //     setFade(true);
  //   }, 300);
  // };

  // const handlePrev = () => {
  //   setFade(false);
  //   setTimeout(() => {
  //     setIndex(index === 0 ? movies.length - 1 : index - 1);
  //     setFade(true);
  //   }, 300);
  // };

  const handleNext = useCallback(() => {
    setFade(false);
    setTimeout(() => {
      setIndex((prev) => (prev + 1) % movies.length);
      setFade(true);
    }, 300);
  }, [movies.length]);

  const handlePrev = useCallback(() => {
    setFade(false);
    setTimeout(() => {
      setIndex((prev) => (prev - 1 + movies.length) % movies.length);
      setFade(true);
    }, 300);
  }, [movies.length]);



  if (!movies.length) return null;
  const movie = movies[index];

  return (
   <div className="mr-12 ml-12">
   <h2 className="text-white text-2xl font-bold mb-5 ">Top Rated</h2>
     <div className=" w-full top-0 end-0 start-0">
      <div
        className={`min-w-full h-[400px] relative flex items-center justify-center text-white rounded-md transition-opacity duration-1000 ease-in-out ${
          fade ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`,
          backgroundSize: 'cover',
          backgroundPosition: 'top center',
          backgroundRepeat: 'no-repeat',
        }}
      >
       

        <div className="absolute w-full "></div>

        <div className="relative z-10 flex flex-col justify-center h-full px-6 md:px-24 max-w-full space-y-4">
          <h1 className="text-2xl md:text-4xl font-bold leading-tight">{movie.title}</h1>

          <div className="flex items-center gap-6 text-sm font-medium">
            <div className="bg-yellow-400 text-black px-2 py-1 rounded font-semibold">
              IMDb {movie.vote_average.toFixed(1)}
            </div>
            <div className="text-red-500">🔴 {Math.floor(movie.popularity)}%</div>
          </div>

          <p className="text-gray-300 line-clamp-3">{movie.overview}</p>

         
        </div>

     
      </div>
    </div>
   </div>
  );
}
