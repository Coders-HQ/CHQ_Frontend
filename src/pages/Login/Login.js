import React, { useState, useRef } from "react";
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
import Logo from "../../Images/Logo/png/dark_text.png";
import { login, getCurrentUserData } from "../../Services/auth.service";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import Overlay from "./Overlay";
import Background from "./Background";
import history from "../../history";
import { Link as RouterLink } from "react-router-dom";

const required = (value) => {
  if (!value) {
    console.log("");
  }
};

const Login = (props) => {
  const classes = useStyles();

  // Form Validation
  const form = useRef();
  const checkBtn = useRef();

  // User Credentials
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // Loading Effect for API
  const [loading, setLoading] = useState("");

  // Error Handling
  const [isError, setError] = useState(false);
  const [message, setMessage] = useState("");

  const onChangeUsername = (e) => {
    const username = e.target.value;
    setUsername(username);
  };

  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  const handleLogin = (e) => {
    e.preventDefault();

    setMessage("");
    setLoading(true);

    form.current.validateAll();

    if (checkBtn.current.context._errors.length === 0) {
      login(username, password).then(
        async () => {
          await getCurrentUserData().then();
          await history.push("/");
          window.location.reload();
        },
        (error) => {
          const resMessage = error.response && error.response.data;
          if (!(resMessage.password === undefined)) {
            setMessage("Fields cannot not be empty.");
          } else if (!(resMessage.non_field_errors === undefined)) {
            setMessage(resMessage.non_field_errors[0]);
          } else {
            setMessage("Unknown Error");
          }
          setLoading(false);
          setError(true);
        }
      );
    } else {
      setLoading(false);
      setError(true);
    }
  };

  return (
    <div>
      <Container className={classes.wrapper} component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <img
            className={classes.img}
            src={Logo}
            width="300rem"
            alt="Coders HQ Logo"
          />
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Message
            status={isError} // This decides if the error should show or not
            errorMessage={message}
          />
          <Form
            className={classes.form}
            noValidate
            onSubmit={handleLogin}
            ref={form}
          >
            <Input
              type="hidden"
              name="username"
              value={username}
              validations={[required]}
            />

            <Input
              type="hidden"
              name="password"
              value={password}
              validations={[required]}
            />
            <TextField
              className={classes.field}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="username"
              label="Username"
              autoFocus
              autoComplete="off"
              name="username"
              value={username}
              onChange={onChangeUsername}
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
              value={password}
              onChange={onChangePassword}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="secondary"
              className={classes.submit}
              disabled={false}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link
                  to="#"
                  variant="body2"
                  color="red"
                  className={classes.link}
                  component={RouterLink}
                >
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link
                  to="/register"
                  variant="body2"
                  color="red"
                  className={classes.link}
                  component={RouterLink}
                >
                  {"Not a member yet? Join us!"}
                </Link>
              </Grid>
            </Grid>
            <CheckButton style={{ display: "none" }} ref={checkBtn} />
          </Form>
        </div>
      </Container>
      <div>
        <Loading loading={loading} />
        <Overlay />
        <Background />
      </div>
    </div>
  );
};

// Material-UI Styling

const useStyles = makeStyles((theme) => ({
  wrapper: {
    backgroundColor: "#FFF",
    maxHeight: "60rem",
    borderRadius: "8px",
    boxShadow: "2px 2px 50px rgba(0, 0, 0, 0.35)",
    margin: "0",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  },
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
    marginBottom: "2rem",
  },
  img: {
    marginTop: "1rem",
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
        borderColor: "black",
      },
    },
  },
}));

export default Login;
