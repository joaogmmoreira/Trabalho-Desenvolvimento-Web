import React from 'react';
import Header from '../../Components/Header/Header';
import './Home.css';
import Footer from '../../Components/Footer/Footer';
import Trailer from '../../Components/Trailer/Trailer';


export default function Home() {
  return (
    <>
    	<Header />
    	<div className="hero container">
      	<h1>Estácio Streaming Company</h1>
				<h1>Por apenas R$ 14,90</h1>
    	</div>
			<Trailer />
    	<Footer />
  	</>
  );
}