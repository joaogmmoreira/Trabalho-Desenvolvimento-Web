import React from 'react';
import {
  BrowserRouter as Routers,
  Route,
  Routes,
} from 'react-router-dom';
import { AuthProvider } from './Context/Auth';
import Private from './Components/Private/Private';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Videos from './Pages/Videos/Videos'
import Sinopse from './Pages/Sinopse/Sinopse';

export default function AppRoutes() {
  return (
    <Routers>
      <AuthProvider>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route
            path="/videos"
            element={(
              <Private>
                <Videos />
              </Private>
            )}
          />
          <Route
            path="/sinopse"
            element={(
              <Private>
                <Sinopse />
              </Private>
            )}
          />
        </Routes>
      </AuthProvider>
    </Routers>
  );
}