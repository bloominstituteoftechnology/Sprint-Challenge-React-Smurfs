import React from "react";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const styles = theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200
  },
  dense: {
    marginTop: 19
  },
  menu: {
    width: 200
  },
  button: {
    margin: theme.spacing.unit
  },
  smurf: {
    margin: "0 auto",
    textAlign: "center"
  }
});

const SmurfForm = props => {
  const { classes } = props;

  return (
    <div className={classes.smurf}>
      <form onSubmit={props.addSmurf}>
        <TextField
          id="standard-name"
          label="Name"
          className={classes.textField}
          margin="normal"
          onChange={props.handleInputChange}
          value={props.state.name}
          name="name"
        />
        <TextField
          id="standard-name"
          label="Age"
          className={classes.textField}
          margin="normal"
          onChange={props.handleInputChange}
          value={props.state.age}
          name="age"
        />
        <TextField
          id="standard-name"
          label="Height"
          className={classes.textField}
          margin="normal"
          onChange={props.handleInputChange}
          value={props.state.height}
          name="height"
        />

        <Button
          type="submit"
          variant="contained"
          color="primary"
          className={classes.button}
        >
          Add to the Village
        </Button>
      </form>
    </div>
  );
};

export default withStyles(styles)(SmurfForm);
