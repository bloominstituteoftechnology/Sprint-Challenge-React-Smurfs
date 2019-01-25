import React, { Component } from "react";

import Smurf from "./Smurf";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const styles = theme => ({
  root: {
    flexGrow: 1,
    padding: 20
  },
  paper: {
    height: 140,
    width: 100
  },
  control: {
    padding: theme.spacing.unit * 2
  },
  smurf: {
    margin: "0 auto",
    textAlign: "center"
  }
});
class Smurfs extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.smurf}>
        <h1>Smurf Village</h1>
        <ul>
          <Grid container className={classes.root} spacing={40}>
            <Grid item xs={12}>
              <Grid
                container
                className={classes.demo}
                justify="center"
                spacing={16}
              >
                {this.props.smurfs.map(smurf => {
                  return (
                    <Smurf
                      deleteSmurf={this.props.deleteSmurf}
                      name={smurf.name}
                      id={smurf.id}
                      age={smurf.age}
                      height={smurf.height}
                      key={smurf.id}
                      populateForm={this.props.populateForm}
                    />
                  );
                })}
              </Grid>
            </Grid>
          </Grid>
        </ul>
      </div>
    );
  }
}

Smurf.defaultProps = {
  smurfs: []
};

export default withStyles(styles)(Smurfs);
