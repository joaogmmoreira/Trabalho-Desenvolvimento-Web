import React from "react";
import {useEffect, useState} from 'react';
import Header from '../../Components/Header/Header';
import Loading from '../../Components/Loading/Loading';
import { fetchMovies } from "../../Services/Api";
import MovieCard from "../../Components/MovieCard/MovieCard";
import './Videos.css';

export default function Videos() {
  const [moviesList, setMoviesList] = useState();

  const getMovies = async () => {
    const movies = await fetchMovies();
    setMoviesList(movies);
  }

  const renderMovies = () => {
    const { results } = moviesList;

    console.log(results)

    const movies = results.map((element) => {
      const { id, original_title, poster_path, vote_average } = element;
      return (
        <MovieCard
          key = {original_title}
          id = { id }
          original_title = {original_title}
          poster_path = {poster_path}
          vote_average = {vote_average}
        />
    )})

    return movies
  }


  useEffect(() => {
    getMovies();
  }, []);

  return(
    <>
      <Header/>
      <div className="cards">
        {moviesList ? renderMovies() : <Loading /> }
      </div>
    </>
  )
}