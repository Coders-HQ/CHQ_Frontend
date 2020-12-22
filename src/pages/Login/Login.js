import React from "react";
import axios from "axios";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import {
  createMuiTheme,
  withStyles,
  ThemeProvider,
} from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";
import Logo from "../../components/GlobalComponents/Logo";

// Get User Function

const getUser = (e) => {
  e.preventDefault();
  const user = e.target.elements.username.value;
  const pass = e.target.elements.password.value;
  console.log(user);
  // send a POST request
  axios({
    method: "post",
    url: "https://coders-hq.herokuapp.com/auth/login/",
    data: {
      username: user,
      password: pass,
    },
    headers: { "Content-Type": "multipart/form-data" },
  }).then(
    (response) => {
      console.log(response.status);
      console.log(response.data);
    },
    (error) => {
      console.log(error);
      console.log(error.response.status);
    }
  );
};

const ColorButton = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText(red[500]),
    backgroundColor: red[500],
    "&:hover": {
      backgroundColor: red[700],
    },
  },
}))(Button);

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
}));

const Login = () => {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Logo />
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} noValidate onSubmit={getUser}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="username"
            label="Username"
            name="username"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <ColorButton
            type="submit"
            fullWidth
            variant="contained"
            color="secondary"
            className={classes.submit}
          >
            Sign In
          </ColorButton>
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
                href="#"
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
    </Container>
  );
};
export default Login;
