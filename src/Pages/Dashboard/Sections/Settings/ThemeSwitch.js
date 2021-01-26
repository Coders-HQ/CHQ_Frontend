import React from "react";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import { makeStyles } from "@material-ui/core/styles";
const ThemeSwitch = ({ darkMode, setTheme }) => {
  const useStyles = makeStyles((theme) => ({
    label: {
      fontFamily: ["Poppins", "sans-serif"].join(","),
      fontWeight: "300",
      textTransform: "none",
      color: darkMode ? "white" : "black",
    },
  }));

  const classes = useStyles();

  const [checked, setChecked] = React.useState({
    themeChecked: darkMode,
  });

  const handleChange = (event) => {
    if (checked.themeChecked) {
      setTheme("light");
    } else {
      setTheme("dark");
    }
    setChecked({ ...checked, [event.target.name]: event.target.checked });
  };

  return (
    <div>
      <FormControlLabel
        className={classes.label}
        control={
          <Switch
            checked={checked.themeChecked}
            onChange={handleChange}
            name="themeChecked"
          />
        }
        label={"Dark Mode"}
      />
    </div>
  );
};

export default ThemeSwitch;
