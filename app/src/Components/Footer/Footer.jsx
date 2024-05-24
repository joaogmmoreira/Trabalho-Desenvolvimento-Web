import React from 'react';
import './Footer.css'


export default function Footer() {
  return (
    <footer>
    <div className="footer-title">
      <span>Estácio</span>
    </div>
    <div className="dev-title">
      <span>
        Página criada pelo
        {' '}
      </span>
      <a href="https://www.linkedin.com/in/joao-moreira-dev/">Dev João Moreira</a>
    </div>
  </footer>
  );
}