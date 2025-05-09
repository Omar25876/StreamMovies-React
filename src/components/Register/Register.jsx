import React, { useState } from 'react';
import {
  Box,
  Paper,
  TextField,
  Button,
  Typography,
  Grid,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  MenuItem,
  Checkbox,
  FormGroup,
  Rating,
  InputAdornment,
  inputBaseClasses,
  Autocomplete
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function Register() {
  const [gender, setGender] = useState('');
  const [skills, setSkills] = useState('');
  const [agree, setAgree] = useState(false);
  const [rating, setRating] = useState(0);
  const navigateToLogin = useNavigate();

  const handleSubmit = () => {
    navigateToLogin('/login');
  };

  return (
    <Box
      sx={{
        backgroundColor: 'black',
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 2,
      }}
    >
      <Paper
        elevation={10}
        sx={{
          padding: 4,
          width: 700,
          backgroundColor: '#1c1c1c',
          borderRadius: 3,
        }}
      >
        <Typography
          variant="h4"
          align="center"
          marginBottom={4}
          sx={{ color: '#fff', fontWeight: 'bold' }}
        >
          Create <Typography variant="span" sx={{ color: '#5857B0', fontWeight: 'bold' }}>Account</Typography>
        </Typography>

        <Grid container spacing={2} >
          <Grid item xs={6}>
            <TextField
              sx={
                {
                  color: '#fff',
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      borderColor: '#fff',
                    },
                    '&:hover fieldset': {
                      borderColor: '#fff',
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: '#fff',
                    },
                  },
                }
              }
              InputLabelProps={{ style: { color: '#fff' } }}
              InputProps={{ style: { color: '#fff' } }}
              label="First Name"

              id="outlined-basic"
              fullWidth
              variant="outlined"
              margin='normal'
              placeholder="Enter your first name"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              sx={
                {
                  color: '#fff',
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      borderColor: '#fff',
                    },
                    '&:hover fieldset': {
                      borderColor: '#fff',
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: '#fff',
                    },
                  },
                }
              }
              margin='normal'
              placeholder='Enter your last name'
              fullWidth
              label="Last Name"
              variant="outlined"
              InputLabelProps={{ style: { color: '#ccc' } }}
              InputProps={{ style: { color: '#fff' } }}
            />
          </Grid>
        </Grid>

        <Grid item xs={12}>
          <TextField
            fullWidth
            margin='normal'
            sx={
              {
                color: '#fff',
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: '#fff',
                  },
                  '&:hover fieldset': {
                    borderColor: '#fff',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: '#fff',
                  },
                },
              }
            }
            InputLabelProps={{ style: { color: '#fff' } }}
            InputProps={{ style: { color: '#fff' } }}
            label="Email"
            variant="outlined"
            slotProps={{
              htmlInput: {
                sx: { textAlign: 'left' },
                style: { color: '#fff' },
              },
              input: {
                endAdornment: (
                  <InputAdornment
                    position="end"
                    sx={{
                      alignSelf: 'flex-end',
                      opacity: 0,
                      fontSize: '0.8rem',
                      fontWeight: 'bold',
                      backgroundColor: '#5857B0',
                      borderRadius: '4px',
                      padding: '2px 4px',
                      marginLeft: '5px',
                      marginRight: '5px',
                      marginBottom: '15px',
                      pointerEvents: 'none',
                      color: '#fff',
                      [`[data-shrink=true] ~ .${inputBaseClasses.root} > &`]: {
                        opacity: 1,
                      },
                    }}
                  >
                    @gmail.com
                  </InputAdornment>
                ),
              },
            }}
          />
          <TextField
            sx={
              {
                color: '#fff',
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: '#fff',
                  },
                  '&:hover fieldset': {
                    borderColor: '#fff',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: '#fff',
                  },
                },
              }
            }
            fullWidth
            label="Phone"
            margin='normal'
            variant="outlined"
            InputLabelProps={{ style: { color: '#ccc' } }}
            InputProps={{ style: { color: '#fff' } }}
          />

          <TextField
            sx={
              {
                color: '#fff',
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: '#fff',
                  },
                  '&:hover fieldset': {
                    borderColor: '#fff',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: '#fff',
                  },
                },
              }
            }
            InputLabelProps={{ style: { color: '#fff' } }}
            InputProps={{ style: { color: '#fff' } }}

            fullWidth
            label="Password"
            type="password"
            margin='normal'
            variant="outlined"
          />
          <TextField
            sx={
              {
                color: '#fff',
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: '#fff',
                  },
                  '&:hover fieldset': {
                    borderColor: '#fff',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: '#fff',
                  },
                },
              }
            }
            InputLabelProps={{ style: { color: '#fff' } }}
            InputProps={{ style: { color: '#fff' } }}
            fullWidth
            label="Confirm Password"
            type="password"
            margin='normal'
            variant="outlined"
          />



        </Grid>


        <Grid item xs={12}>


          <FormControl>
            <FormLabel
              id="gender-label"
              sx={{
                color: '#fff',
                fontWeight: 'bold',
                fontSize: '1rem',
                mt: 2
              }}
              margin='normal'
            >
              Gender
            </FormLabel>
            <RadioGroup
              row
              aria-labelledby="gender-label"
              name="gender"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              sx={{ color: '#fff' }}
            >
              <FormControlLabel
                value="female"
                control={
                  <Radio
                    sx={{
                      color: '#ccc',
                      '&.Mui-checked': {
                        color: '#5857B0', // active color
                      },
                    }}
                  />
                }
                label="Female"
              />
              <FormControlLabel
                value="male"
                control={
                  <Radio
                    sx={{
                      color: '#ccc',
                      '&.Mui-checked': {
                        color: '#5857B0',
                      },
                    }}
                  />
                }
                label="Male"
              />
            </RadioGroup>
          </FormControl>


          <TextField
            sx={
              {
                color: '#fff',
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: '#fff',
                  },
                  '&:hover fieldset': {
                    borderColor: '#fff',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: '#fff',
                  },
                },
              }
            }
            InputLabelProps={{ style: { color: '#fff' } }}
            InputProps={{ style: { color: '#fff' } }}
            select
            fullWidth
            label="Select Skill"
            value={skills}
            margin='normal'
            onChange={(e) => setSkills(e.target.value)}
          >
            <MenuItem value="frontend">Frontend</MenuItem>
            <MenuItem value="backend">Backend</MenuItem>
            <MenuItem value="flutter">Flutter</MenuItem>
            <MenuItem value="fullstack">Full Stack</MenuItem>
          </TextField>

          <FormGroup
            sx={{
              marginTop: 2,

            }}>
            <FormControlLabel

              control={<Checkbox checked={agree} onChange={(e) => setAgree(e.target.checked)} sx={{ color: '#fff' }} />}
              label={<Typography sx={{ color: '#ccc' }}>I agree to the terms and conditions</Typography>}
            />
          </FormGroup>

          <Typography
            sx={{ color: '#fff', mb: 1, mt: 1 }}>Rate our website:</Typography>
          <Rating
            margin='normal'
            value={rating}
            onChange={(event, newValue) => setRating(newValue)}
            precision={0.5}
            size="large"
            sx={{
              color: '#5857B0',
              '& .MuiRating-iconFilled': {
                color: '#5857B0',
              },
              '& .MuiRating-iconEmpty': {
                color: '#ccc',
              },
            }}
          />

          <Autocomplete
            multiple
            id="tags-standard"
            options={top100Films}
            getOptionLabel={(option) => option.title}
            defaultValue={[top100Films[13]]}
            sx={{
              '& .MuiAutocomplete-tag': {
                backgroundColor: 'transparent',
                color: '#fff',
                border: '1px solid #fff',
              },
              '& .MuiAutocomplete-inputRoot': {
                color: '#fff',
              },
              '& .MuiSvgIcon-root': {
                color: '#fff',
              },
              '& .MuiAutocomplete-popupIndicator': {
                color: '#fff',
              },
              '& .MuiAutocomplete-clearIndicator': {
                color: '#fff',
              },

            }}
            renderInput={(params) => (
              <TextField
                {...params}
                variant="standard"
                label="Select Favorites Movies"
                placeholder="Favorites"
                sx={{
                  color: '#fff',
                  marginTop: 2,
                }}
                margin="normal"
                fullWidth
                InputLabelProps={{
                  style: {
                    color: '#fff',
                    fontWeight: 'bold',
                    fontSize: '1.15rem',
                  }

                }}
              />
            )}
          />


          <Button
            fullWidth
            variant="contained"
            margin='normal'
            sx={{
              marginTop: 4,
              backgroundColor: '#5857B0',
              '&:hover': { backgroundColor: '#5827B0' },
              fontWeight: 'bold',
              fontSize: '1.25rem',
              padding: 2,
              color: '#fff',
              textTransform: 'none',
              borderRadius: 4,
            }}
            onClick={handleSubmit}
          >
            Register
          </Button>



        </Grid >
      </Paper>
    </Box>
  );
}


const top100Films = [
  { title: 'The Shawshank Redemption', year: 1994 },
  { title: 'The Godfather', year: 1972 },
  { title: 'The Godfather: Part II', year: 1974 },
  { title: 'The Dark Knight', year: 2008 },
  { title: '12 Angry Men', year: 1957 },
  { title: "Schindler's List", year: 1993 },
  { title: 'Pulp Fiction', year: 1994 },
  { title: 'The Lord of the Rings: The Return of the King', year: 2003 },
  { title: 'The Good, the Bad and the Ugly', year: 1966 },
  { title: 'Fight Club', year: 1999 },
  { title: 'Forrest Gump', year: 1994 },
  { title: 'Inception', year: 2010 },
  { title: 'The Lord of the Rings: The Fellowship of the Ring', year: 2001 },
  { title: 'Star Wars: Episode V - The Empire Strikes Back', year: 1980 },
  { title: 'The Matrix', year: 1999 },
  { title: 'Goodfellas', year: 1990 }
]