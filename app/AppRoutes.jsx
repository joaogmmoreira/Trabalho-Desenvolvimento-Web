import React from 'react';
import {
  BrowserRouter as Routers,
  Route,
  Routes,
} from 'react-router-dom';
import { AuthProvider } from './Context/Auth';
// import Private from './Components/General/Private';
import Home from './Pages/Home';
// import Login from './Pages/Login';
// import User from './Pages/User';

export default function AppRoutes() {
  return (
    <Routers>
      <AuthProvider>
        <Routes>
          <Route exact path="/" element={<Home />} />
          {/* <Route exact path="/login" element={<Login />} /> */}
          {/* <Route
            path="/user"
            element={(
              <Private>
                <User />
              </Private>
            )}
          /> */}
        </Routes>
      </AuthProvider>
    </Routers>
  );
}