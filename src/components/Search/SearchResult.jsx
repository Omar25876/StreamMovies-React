import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import GlobalApi from '../../services/GlobalApi';
import {
  Box,
  CircularProgress,
  Grid,
  Typography,
  Card,
  CardMedia,
  CardContent
} from '@mui/material';

export default function SearchResult() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const searchQuery = queryParams.get('q');

  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (searchQuery) {
      setLoading(true);
      GlobalApi.searchMovies(searchQuery)
        .then(setResults)
        .catch(console.error)
        .finally(() => setLoading(false));
    }
  }, [searchQuery]);

  return (
    <Box sx={{ p: 4, backgroundColor: '#121212', minHeight: '100vh', color: '#fff' }}>
      <Typography variant="h4" gutterBottom>
        Search Results for: "{searchQuery}"
      </Typography>

      {loading && (
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
          <CircularProgress color="secondary" />
        </Box>
      )}

      {!loading && results.length === 0 && (
        <Typography variant="h6">No results found.</Typography>
      )}

      <Grid container spacing={3} mt={2}>
        {results.map((movie) => (
          <Grid item xs={6} sm={4} md={3} lg={2.4} key={movie.id}>
            <Card sx={{ bgcolor: '#1e1e1e', height: '100%' }}>
              <CardMedia
                component="img"
                image={
                  movie.poster_path
                    ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                    : 'https://via.placeholder.com/500x750?text=No+Image'
                }
                alt={movie.title}
                sx={{ height: 300, objectFit: 'cover' }}
              />
              <CardContent>
                <Typography variant="subtitle1" color="white" gutterBottom noWrap>
                  {movie.title}
                </Typography>
                <Typography variant="body2" color="gray">
                  {movie.release_date}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
