/** @jsxImportSource @emotion/core */

import React, { useState, useEffect } from "react";

import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Register/Register";
import Logout from "../../Pages/Logout/Logout";
import Dashboard from "../../Pages/Dashboard/Dashboard";
import NotFound from "../../Pages/NotFound/NotFound";
import Loading from "../GlobalComponents/Loading";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { authHeader } from "../../Services/auth-header";
import history from "../../history";

const Main = ({ props }) => {
  const [isAuthenticated, userHasAuthenticated] = useState(false);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    onLoad();
  }, []);

  // Checks user Authentication before a page is loaded
  async function onLoad() {
    try {
      await authHeader();
      userHasAuthenticated(true);
      setLoading(false);
      // for Development Purposes
      console.log("User is Authenticated");
      console.log(isAuthenticated);
    } catch (e) {
      userHasAuthenticated(false);
      setLoading(false);
      // for Development Purposes
      console.log("User not Authenticated");
      console.log(isAuthenticated);
    }
  }

  const getTheme = () => {
    if (
      localStorage.getItem("themePreference") !== undefined ||
      localStorage.getItem("themePreference") !== null
    ) {
      return localStorage.getItem("themePreference");
    } else {
      return "light";
    }
  };

  const setThemeStorage = (theme) => {
    if (
      (localStorage.getItem("themePreference") !== undefined ||
        localStorage.getItem("themePreference") !== null) &&
      theme !== undefined &&
      theme !== null
    ) {
      localStorage.setItem("themePreference", theme);
    } else {
      localStorage.setItem("themePreference", "light");
    }
  };

  const setTheme = async (theme) => {
    await setThemeStorage(theme);
    refreshTheme(getTheme());
    window.location.reload();
  };

  const [themePreference, refreshTheme] = useState(getTheme());
  const prefersDarkMode = useMediaQuery(
    "(prefers-color-scheme: " +
      (themePreference === "dark" ? "dark" : "light") +
      ")"
  );

  const theme = React.useMemo(
    () =>
      createMuiTheme({
        palette: {
          type: prefersDarkMode ? "dark" : "light",
          primary: {
            light: "rgb(242, 245, 250)",
            main: "#da0202",
            dark: "rgb(38, 45, 55)",
            // contrastText: will be calculated to contrast with palette.primary.main
          },
          secondary: {
            light: "rgb(218, 214, 214)",
            main: "#b71c1c",
            dark: "rgb(48, 55, 65)",
          },
          // Used by `getContrastText()` to maximize the contrast between
          // the background and the text.
          contrastThreshold: 3,
          // Used by the functions below to shift a color's luminance by approximately
          // two indexes within its tonal palette.
          // E.g., shift from Red 500 to Red 300 or Red 700.
          tonalOffset: 0.2,
        },
      }),
    [prefersDarkMode]
  );

  return (
    <ThemeProvider theme={theme}>
      <Router history={history}>
        <Switch>
          <Route path="/u">
            {isLoading ? (
              <Loading loading={isLoading} />
            ) : (
              <Dashboard
                isAuthenticated={isAuthenticated}
                themePreference={themePreference}
                setTheme={setTheme}
              />
            )}
          </Route>

          <Route exact path="/login">
            {isLoading ? (
              <Loading loading={isLoading} />
            ) : isAuthenticated ? (
              <Redirect to="/u" />
            ) : (
              <Login />
            )}
          </Route>
          <Route exact path="/register">
            {isLoading ? (
              <Loading loading={isLoading} />
            ) : isAuthenticated ? (
              <Redirect to="/u" />
            ) : (
              <Register />
            )}
          </Route>
          <Route exact path="/logout">
            {isLoading ? (
              <Loading loading={isLoading} />
            ) : isAuthenticated ? (
              <Logout />
            ) : (
              <Redirect to="/" />
            )}
          </Route>
          <Route path="/w">
            {isLoading ? (
              <Loading loading={isLoading} />
            ) : isAuthenticated ? (
              <Redirect to="/u" />
            ) : (
              <Home />
            )}
          </Route>
          <Route exact path="/">
            {isLoading ? (
              <Loading loading={isLoading} />
            ) : isAuthenticated ? (
              <Redirect to="/u" />
            ) : (
              <Redirect to="/w/home" />
            )}
          </Route>
          <Route>
            {isLoading ? <Loading loading={isLoading} /> : <NotFound />}
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
};
export default Main;
