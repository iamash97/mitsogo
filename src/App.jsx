import React from "react";
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import CssBaseline from "@mui/material/CssBaseline";
import FallBack from "./Pages/FallBack/FallBack";
import MenuCard from "./Components/MenuCard/MenuCard";
import Header from "./Components/Header/Header";
import Market from "./Pages/Market/Market";
import ErrorBoundary from "./Components/ErrorBoundary/ErrorBoundary";
import { CurrencyProvider } from "./Contexts/CurrencyContext";
import './App.css';

const ROUTES = createRoutesFromElements(
  <Route>
    <Route path="/" element={<Market />} />
    <Route path="/markets" element={<Market />} />
    <Route path='*' element={<FallBack />} />
  </Route>
);

const ROUTER = createBrowserRouter(ROUTES, {
  basename: '/'
});

function App() {
  return (
    <ErrorBoundary>
      <CurrencyProvider>
        <CssBaseline />
        <div className='app' >
          <MenuCard />
          <div className='rhs'>
            <Header />
            <RouterProvider router={ROUTER} />
          </div>
        </div>
      </CurrencyProvider>
    </ErrorBoundary>

  );
}

export default App;