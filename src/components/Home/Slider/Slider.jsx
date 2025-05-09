import React, { useCallback, useEffect, useState } from 'react';
import GlobalApi from '../../../Services/GlobalApi';

export default function HeroSlider() {
  const [movies, setMovies] = useState([]);
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    GlobalApi.getNowPlayingMovies()
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
    <div className=" relative w-full top-0 end-0 start-0">
      <div
        className={`min-w-full h-[700px] relative flex items-center justify-center text-white rounded-md transition-opacity duration-700 ease-in-out ${
          fade ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`,
          backgroundSize: 'cover',
          backgroundPosition: 'top center',
          backgroundRepeat: 'no-repeat',
        }}
      >

        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/5 to-transparent w-full "></div>

        <div className="relative z-10 flex flex-col justify-center h-full px-6 md:px-24 max-w-full space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">{movie.title}</h1>

          <div className="flex items-center gap-4 text-sm font-medium">
            <div className="bg-yellow-400 text-black px-2 py-1 rounded font-semibold">
              IMDb {movie.vote_average.toFixed(1)}
            </div>
            <div className="text-red-500">🔴 {Math.floor(movie.popularity)}%</div>
          </div>

          <p className="text-gray-300 line-clamp-3">{movie.overview}</p>

          <div className="flex gap-4">
            <button className="bg-[#5857B0] hover:bg-purple-700 text-white px-6 py-2 rounded-lg font-semibold shadow-md transition">
              ▶ Watch Now
            </button>
            <button className="border border-white px-6 py-2 rounded-lg font-semibold hover:bg-white hover:text-black transition">
              🎬 Watch trailer
            </button>
          </div>
        </div>

        {/* Arrows */}
        <button
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 text-white text-4xl hover:scale-110 transition-transform  p-2 rounded-full"
          onClick={handlePrev}
        >
          ❮
        </button>
        <button
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 text-white text-4xl hover:scale-110 transition-transform p-2 rounded-full"
          onClick={handleNext}
        >
          ❯
        </button>
      </div>
    </div>
  );
}
