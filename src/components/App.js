import React from "react";
import User from "./User";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  menuText: {
    marginLeft: theme.spacing(2),
    padding: theme.spacing(1),
  },
}));

function App() {
  const classes = useStyles();

  return (
    <div className="App">
      <AppBar position="static">
        <Typography variant="h6" className={classes.menuText}>
          Personal information system
        </Typography>
      </AppBar>
      <User />
    </div>
  );
}

export default App;
