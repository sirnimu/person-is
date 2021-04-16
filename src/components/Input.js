import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import SaveIcon from "@material-ui/icons/Save";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import ButtonGroup from "@material-ui/core/ButtonGroup";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(1),
    marginTop: theme.spacing(3),
  },
  buttonGroup: {
    marginLeft: theme.spacing(2),
  },
}));

export default function ControlledInput(props) {
  const [currentValue, setCurrentValue] = useState(props.value);
  const [isEdited, setIsEdited] = useState(false);
  const classes = useStyles();

  useEffect(() => {
    setCurrentValue(props.value);
  }, [props.value]);

  const handleInputChange = (e) => {
    if (props.value !== e.target.value) {
      setIsEdited(true);
    }
    setCurrentValue(e.target.value);
  };

  const saveChange = (e) => {
    e.preventDefault();
    props.updateUserData(props.name, currentValue);
    setIsEdited(false);
  };

  const cancelChange = (e) => {
    e.preventDefault();
    setIsEdited(false);
    setCurrentValue(props.value);
  };

  return (
    <div className={classes.root}>
      <InputLabel>{props.label}</InputLabel>
      {props.type === "text" && (
        <TextField
          name={props.name}
          type="text"
          value={currentValue}
          onChange={handleInputChange}
        />
      )}

      {props.type === "select" && (
        <Select
          name={props.name}
          value={currentValue}
          onChange={handleInputChange}
        >
          {props.children}
        </Select>
      )}

      {isEdited && (
        <ButtonGroup
          className={classes.buttonGroup}
          variant="contained"
          size="small"
        >
          <Button color="primary" onClick={saveChange} startIcon={<SaveIcon />}>
            Save
          </Button>
          <Button color="secondary" onClick={cancelChange}>
            Cancel
          </Button>
        </ButtonGroup>
      )}
    </div>
  );
}
