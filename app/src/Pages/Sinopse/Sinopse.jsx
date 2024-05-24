import React, { useState, useEffect } from "react";
import Loading from "../../Components/Loading/Loading";
import './Sinopse.css';


export default function Sinopse() {
  
  const [movie, setMovie] = useState();

  const fetchMovie = async () => {
    const url = window.location.pathname;
    const id = url.split(":")
  
    console.log(url)
    const response = await fetch(`https://api.themoviedb.org/3/movie/${id[1]}?api_key=9d8386673aa992052592c1bf4b34598b`);
    const json = await response.json();

    setMovie(json);
  }

  useEffect(() => {
    fetchMovie();
  }, []);

  const renderSinopse = () => {
    const { original_title, poster_path, overview } = movie;
    return (
      <div className="overview">
        <div>
          <h1>{ movie.original_title }</h1>
          <img
            className="posterOverview"
            src = { `https://image.tmdb.org/t/p/w500${poster_path}` }
            alt = { original_title }
          />
        </div>
        <p>{overview}</p>
      </div>
    )
  }

  return (
    <>
      {movie ? renderSinopse() : <Loading /> }
    </>
  )
}