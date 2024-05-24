import React from "react";
import { useNavigate } from "react-router-dom";
import './MovieCard';

export default function MovieCard(props) {
  const navigate = useNavigate();
  
  const handleClick = () => {
    navigate(`/sinopse/:${props.id}`)
  }

  return (
    <div className="movieCard">
      <a href="" onClick={handleClick}>
        <h4>{props.original_title}</h4>
        <img
          className="poster"
          src = { `https://image.tmdb.org/t/p/w500${props.poster_path}` }
          alt = { props.original_title }
        />
        <p>{ `Nota: ${props.vote_average}`}</p>
      </a>
    </div>
  )
}