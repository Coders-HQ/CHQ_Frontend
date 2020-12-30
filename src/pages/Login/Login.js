import React, { useState, useEffect } from "react";
import Message from "./Message";
import {
  Button,
  CssBaseline,
  TextField,
  FormControlLabel,
  Checkbox,
  Link,
  Grid,
} from "@material-ui/core";
import Loading from "../../Components/GlobalComponents/Loading";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { red } from "@material-ui/core/colors";
import Logo from "../../Components/GlobalComponents/Logo";
import { useDispatch } from "react-redux";
import { login } from "../../Features/userSlice";
import { useSelector } from "react-redux";
import { selectUser } from "../../Features/userSlice";
import axios from "axios";
import { Redirect } from "react-router-dom";
import { Auth } from "../../App/Auth";

const Login = () => {
  const classes = useStyles();

  // User Credentials
  const [username, setUsername] = useState("");
  const [pass, setPass] = useState("");
  const [token, setToken] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Loading Effect for API
  const [isLoading, setIsLoading] = useState("");

  // Error Handling
  const [loginError, setLoginError] = useState("");
  const [isBlank, setIsBlank] = useState("");
  const [isInvalid, setIsInvalid] = useState("");
  const [isUnknown, setIsUnknown] = useState("");
  const [errorMessage, setMessage] = useState("");

  const renderRedirect = () => {
    if (Auth || isAuthenticated) {
      return <Redirect to="/" />;
    }
  };

  const dispatch = useDispatch();

  const url = "https://coders-hq.herokuapp.com/auth/login/";
  const user = {
    username: username,
    password: pass,
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    axios
      .post(url, user)
      .then((res) => {
        localStorage.setItem("token", res.data.key);
        setIsLoading(true);
        setLoginError(false);
        setIsAuthenticated(Auth);
      })
      .catch((error) => {
        setLoginError(true);
        setIsLoading(false);
      });
  };

  return (
    <Container component="main" maxWidth="xs">
      {Auth || isAuthenticated ? renderRedirect() : ""}
      <CssBaseline />
      <div className={classes.paper}>
        <Logo />
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Message
          status={loginError} // This decides if the error should show or not
        />
        <form
          className={classes.form}
          noValidate
          onSubmit={(e) => handleSubmit(e)}
        >
          <TextField
            className={classes.field}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="username"
            label="Username/Email"
            name="username"
            autoFocus
            autoComplete="off"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            className={classes.field}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="secondary"
            className={classes.submit}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link
                href="#"
                variant="body2"
                color="red"
                className={classes.link}
              >
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link
                href="/register"
                variant="body2"
                color="red"
                className={classes.link}
              >
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Loading loading={isLoading} />
    </Container>
  );
};

// Material-UI Styling

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    color: theme.palette.getContrastText(red[500]),
    backgroundColor: red[500],
    "&:hover": {
      backgroundColor: red[700],
    },
    margin: theme.spacing(3, 0, 2),
  },
  link: {
    color: "red",
    "&:hover, &:focus": {
      color: "darkred",
    },
    "&:active": {
      color: "red",
    },
  },
  field: {
    "& label.Mui-focused": {
      color: "red",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "black",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "black",
      },
      "&:hover fieldset": {
        borderColor: "darkred",
      },
      "&.Mui-focused fieldset": {
        borderColor: "red",
      },
    },
  },
}));

export default Login;
