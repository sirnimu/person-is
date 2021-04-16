import React from "react";
import { DatePicker } from "@material-ui/pickers";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import InputLabel from "@material-ui/core/InputLabel";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(1),
    marginTop: theme.spacing(3),
  },
}));

export default function DateInput(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <InputLabel>{props.label}</InputLabel>
        <div>
          <DatePicker
            value={props.value}
            format="yyyy/MM/dd"
            openTo="year"
            onChange={props.onChange}
            maxDate={new Date()}
          />
        </div>
      </MuiPickersUtilsProvider>
    </div>
  );
}
