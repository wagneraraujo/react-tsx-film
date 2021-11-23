import React, { useState, useEffect } from "react";
import { SliderBox } from "react-native-image-slider-box";
import { Text, Box } from "native-base";
import { getPopularMovies, getUpcoming } from "../services/services";

const Home = () => {
  const [moviesImages, setMoviesImages] = useState<any>();
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    getUpcoming()
      .then((movies) => {
        const moviesImagesArray  = [] as string[];
        movies.forEach(movie  => {
          moviesImagesArray.push('https://image.tmdb.org/t/p/w500'+movie.poster_path)
        })
        setMoviesImages(moviesImagesArray);
      })
      .catch((err) => {
        setError(err);
      });

    getPopularMovies()
      .then((movies) => {})
      .catch((err) => {
        setError(err);
      });
  }, []);
  return (
    <>
      <Box flex={1} bg="#fff" alignItems="center" justifyConent="center">
        * <SliderBox images={moviesImages} /> 

      </Box>
    </>
  );
};

export default Home;
