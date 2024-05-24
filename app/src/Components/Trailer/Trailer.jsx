import React from "react";
import './Trailer.css';

export default function Trailer() {
  return(
    <div className="trailer">
      <h2>Confira aqui!</h2>
      <div className="video-responsive">
        <iframe 
          width="560"
          height="315"
          src="https://www.youtube.com/embed/OaPxK2SdEr4?si=bm6Ww_FhIcknQdPb"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen>
        </iframe>
        </div>
    </div>
  )
}