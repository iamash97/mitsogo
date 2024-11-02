import React, { useState } from "react";
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import FallBack from "./Pages/FallBack/FallBack";
import MenuCard from "./Components/MenuCard/MenuCard";
import Header from "./Components/Header/Header";

import './App.css';
import Market from "./Pages/Market/Market";
import ErrorBoundary from "./Components/ErrorBoundary/ErrorBoundary";
import { CurrencyProvider } from "./Contexts/CurrencyContext";

const ROUTES = createRoutesFromElements(
  <Route>
    <Route path="/" element={<Market/>} />
    <Route path='*' element={<FallBack />} />
  </Route>
);

const ROUTER = createBrowserRouter(ROUTES, {
  basename: '/'
});

function App() {
  const [data, setData] = useState(null);

    // state to manage the dark mode
    const [toggleDarkMode, setToggleDarkMode] = useState(true);

    // function to toggle the dark mode as true or false
    const toggleDarkTheme = () => {
      setToggleDarkMode(!toggleDarkMode);
    };
  
    // applying the primary and secondary theme colors
    const [toggleDark, settoggleDark] = useState(false);
    const myTheme = createTheme({
        // Theme settings
        palette: {
            type: toggleDark ? "dark" : "light",
        },
    });

  React.useEffect(() => {
    document.body.style = 'background: #f3f8fe;';
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

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