import React, { useState } from "react";
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import HomePage from "./Pages/HomePage/HomePage";
import FallBack from "./Pages/FallBack/FallBack";

const ROUTES = createRoutesFromElements(
  <Route>
    <Route path="/" element={<HomePage/>} />
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
    const darkTheme = createTheme({
      palette: {
        mode: 'light',
        primary: {
          main: '#90caf9',
        },
        secondary: {
          main: '#131052',
        },
      },
    });

  React.useEffect(() => {
    document.body.style = 'background: #f3f8fe;';
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <RouterProvider router={ROUTER} />
    </ThemeProvider>
  );
}

export default App;