import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export let MoviesContext = createContext();

const movieBaseUrl = "https://api.themoviedb.org/3";
const apiKey = "9813ce01a72ca1bd2ae25f091898b1c7";
const imgPath = "https://image.tmdb.org/t/p/w500/";

 


export default function MoviesProvider({ children }) {
    const [trendingMovies, setTrendingMovies] = useState([]);
    const [loading, setLoading] = useState(true);

    

    const fetchTrendingMovies = async () => {
        try {
            const response = await axios.get(`${movieBaseUrl}/trending/all/day?api_key=${apiKey}`);
            setTrendingMovies(response.data.results);
        } catch (error) {
            console.error("Error fetching trending movies:", error);
        } finally {
            setLoading(false);
        }
    };

   
    const getMovieDetails = async (id) => {
        try {
            const response = await axios.get(`${movieBaseUrl}/movie/${id}?api_key=${apiKey}`);
            return response.data;
        } catch (error) {
            console.error("Error fetching movie details:", error);
        }
    };

    useEffect(() => {
        fetchTrendingMovies();
    }, []);

    return (
        <MoviesContext.Provider value={{ trendingMovies, getMovieDetails, imgPath, loading }}>
            {children}
        </MoviesContext.Provider>
    );
}
