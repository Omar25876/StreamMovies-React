import React from 'react'
import Style from './Footer.module.css'
import { useState , useEffect} from 'react'
import { Box, Grid, Typography, Link, IconButton, Divider } from '@mui/material';
import { Facebook, Twitter, Instagram, YouTube } from '@mui/icons-material';

export default function Footer() {
  return  <>
  <Box component="footer" sx={{ bgcolor: '#000', color: '#fff', mt: 2, pt: 6, pb: 3 }}>
      <Grid container spacing={15} maxWidth="lg" sx={{ mx: '10', px: 4 }}>
 
        <Grid item xs={12} md={3}>
          <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#fff' }}>
            Stream <span style={{ color: '#5857B0' }}>Movies</span>
          </Typography>
          <Typography variant="body2" color="gray" mt={1}>
            Watch your favorite movies and series in HD quality anytime.
          </Typography>
        </Grid>

        <Grid item xs={12} md={3}>
          <Typography variant="h6" gutterBottom>Categories</Typography>
          <Box display="flex" flexDirection="column" gap={1}>
            <Link href="#" color="gray" underline="hover">Action</Link>
            <Link href="#" color="gray" underline="hover">Drama</Link>
            <Link href="#" color="gray" underline="hover">Comedy</Link>
            <Link href="#" color="gray" underline="hover">Horror</Link>
          </Box>
        </Grid>

     
        <Grid >
          <Typography variant="h6" gutterBottom>About</Typography>
          <Box display="flex" flexDirection="column" gap={1}>
            <Link href="#" color="gray" underline="hover">Contact Us</Link>
            <Link href="#" color="gray" underline="hover">Terms of Use</Link>
            <Link href="#" color="gray" underline="hover">Privacy Policy</Link>
            <Link href="#" color="gray" underline="hover">FAQ</Link>
          </Box>
        </Grid>

        
        <Grid>
          <Typography variant="h6" gutterBottom>Follow Us</Typography>
          <Box display="flex" gap={1}>
            <IconButton color="inherit" href="#"><Facebook sx={{ color: 'gray' }} /></IconButton>
            <IconButton color="inherit" href="#"><Twitter sx={{ color: 'gray' }} /></IconButton>
            <IconButton color="inherit" href="#"><Instagram sx={{ color: 'gray' }} /></IconButton>
            <IconButton color="inherit" href="#"><YouTube sx={{ color: 'gray' }} /></IconButton>
          </Box>
        </Grid>
      </Grid>

      <Divider sx={{ bgcolor: '#222', mt: 4 }} />

      <Typography variant="body2" align="center" color="gray" mt={3}>
        © {new Date().getFullYear()} StreamMovies. All rights reserved.
      </Typography>
    </Box>
  </>

}
