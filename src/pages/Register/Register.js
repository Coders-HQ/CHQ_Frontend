import React, { useState, useRef } from "react";
import Error from "./Error";
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
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { red } from "@material-ui/core/colors";
import Logo from "../../Images/Logo/png/dark_text.png";
import { register } from "../../Services/auth.service";
import { isEmail } from "validator";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import Background from "./Background";
import Overlay from "./Overlay";
import Loading from "../../Components/GlobalComponents/Loading";

const required = (value) => {
  if (!value) {
    console.log("");
  }
};

const Register = (props) => {
  const classes = useStyles();

  const form = useRef();
  const checkBtn = useRef();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // Loading Effect for API
  const [loading, setLoading] = useState("");

  // Error Handling
  const [successful, setSuccessful] = useState(false);
  const [isError, setError] = useState(false);
  const [isEmailError, setEmailError] = useState(false);
  const [isUsernameError, setUsernameError] = useState(false);
  const [isPasswordError, setPasswordError] = useState(false);
  const [isConfirmPassError, setConfirmPassError] = useState(false);

  // Message Setters
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [emailMessage, setEmailMessage] = useState("");
  const [usernameMessage, setUsernameMessage] = useState("");
  const [passwordMessage, setPasswordMessage] = useState("");
  const [confirmPassMessage, setConfirmPassMessage] = useState("");

  const onChangeEmail = (e) => {
    const email = e.target.value;
    setEmail(email);
  };

  const onChangeUsername = (e) => {
    const username = e.target.value;
    setUsername(username);
  };

  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  const onChangeConfirmPassword = (e) => {
    const confirmPassword = e.target.value;
    setConfirmPassword(confirmPassword);
  };

  const handleRegister = (e) => {
    e.preventDefault();

    setMessage("");
    setSuccessful(false);
    setLoading(true);

    form.current.validateAll();

    if (checkBtn.current.context._errors.length === 0) {
      register(username, email, password, confirmPassword).then(
        (response) => {
          console.log(response);
          if (response.data.key) {
            setMessage("Success! Verification email sent to " + email);
            setSuccessful(true);
            setLoading(false);
            setEmailError(false);
            setUsernameError(false);
            setPasswordError(false);
            setConfirmPassError(false);
            setError(false);
          }
        },
        (error) => {
          console.log(error.response);
          const resMessage = error.response && error.response.data;
          if (!(resMessage.email === undefined)) {
            setEmailMessage(resMessage.email[0]);
            setSuccessful(false);
            setError(true);
            setEmailError(true);
          } else {
            setEmailError(false);
          }

          if (!(resMessage.username === undefined)) {
            setUsernameMessage(resMessage.username[0]);
            setSuccessful(false);
            setError(true);
            setUsernameError(true);
          } else {
            setUsernameError(false);
          }

          if (!(resMessage.password1 === undefined)) {
            setPasswordMessage(resMessage.password1[0]);
            setSuccessful(false);
            setError(true);
            setPasswordError(true);
          } else {
            setPasswordError(false);
          }

          if (!(resMessage.password2 === undefined)) {
            setConfirmPassMessage(resMessage.password2[0]);
            setSuccessful(false);
            setError(true);
            setConfirmPassError(true);
          } else {
            setConfirmPassError(false);
          }

          if (!(resMessage.non_field_errors === undefined)) {
            setErrorMessage(resMessage.non_field_errors[0]);
            setSuccessful(false);
            setError(true);
          } else {
            setMessage("Unknown Error");
            setSuccessful(false);
            setError(true);
          }
          setLoading(false);
        }
      );
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
            Register
          </Typography>
          <Error
            status={isError} // This decides if the error should show or not
            message={errorMessage}
          />
          <Message
            status={successful} // This decides if the error should show or not
            message={message}
          />
          <Form
            className={classes.form}
            noValidate
            onSubmit={handleRegister}
            ref={form}
          >
            <Input
              type="hidden"
              name="email"
              value={email}
              validations={[required]}
            />
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

            <Input
              type="hidden"
              name="confirmpassword"
              value={confirmPassword}
              validations={[required]}
            />
            <TextField
              className={classes.field}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="email"
              label="Email Address"
              type="email"
              id="email"
              autoComplete="off"
              autoFocus
              value={email}
              onChange={onChangeEmail}
              validations={[required]}
              error={isEmailError}
              helperText={isEmailError ? emailMessage : ""}
            />
            <TextField
              className={classes.field}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="username"
              label="Username"
              name="username"
              autoComplete="off"
              onChange={onChangeUsername}
              validations={[required]}
              error={isUsernameError}
              helperText={isUsernameError ? usernameMessage : ""}
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
              validations={[required]}
              error={isPasswordError}
              helperText={isPasswordError ? passwordMessage : ""}
            />

            <TextField
              className={classes.field}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="confirm-password"
              label="Confirm Password"
              type="password"
              id="confirm-password"
              autoComplete="current-password"
              value={confirmPassword}
              onChange={onChangeConfirmPassword}
              validations={[required]}
              error={isConfirmPassError}
              helperText={isConfirmPassError ? confirmPassMessage : ""}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="secondary"
              className={classes.submit}
            >
              Register
            </Button>
            <Grid container>
              <Grid item xs>
                <Link
                  href="/"
                  variant="body2"
                  color="red"
                  className={classes.link}
                >
                  Back to home page
                </Link>
              </Grid>
              <Grid item>
                <Link
                  href="/login"
                  variant="body2"
                  color="red"
                  className={classes.link}
                >
                  {"Already have an account? Login"}
                </Link>
              </Grid>
            </Grid>
            <CheckButton style={{ display: "none" }} ref={checkBtn} />
          </Form>
        </div>
        <Loading loading={loading} />
      </Container>
      <div>
        <Overlay />
        <Background />
      </div>
    </div>
  );
};

// Material-UI Styling

const useStyles = makeStyles((theme) => ({
  video: {
    backgroundColor: "#000",
    color: "#000",
  },
  wrapper: {
    zIndex: "10",
    backgroundColor: "#FFF",
    maxHeight: "50rem",
    borderRadius: "15px",
    boxShadow: "2px 2px 50px rgba(0, 0, 0, 0.35)",
    margin: "0",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  },
  paper: {
    zIndex: "10",
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    zIndex: "3",
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    zIndex: "3",
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
    marginBottom: "2rem",
  },
  img: {
    zIndex: "3",
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
    zIndex: "3",
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

export default Register;
