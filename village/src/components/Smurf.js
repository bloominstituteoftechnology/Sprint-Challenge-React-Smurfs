import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import DeleteIcon from "@material-ui/icons/Delete";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
const styles = {
  card: {
    maxWidth: 345,
    margin: 20
  },
  media: {
    height: 140
  }
};

function Smurf(props) {
  const { classes } = props;
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="/static/images/cards/contemplative-reptile.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.name}
          </Typography>
          <Typography component="p">{props.height} tall</Typography>
          <Typography component="p">{props.age} smurf years old</Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <IconButton
          onClick={() => props.deleteSmurf(props.id)}
          aria-label="Delete"
        >
          <DeleteIcon />
        </IconButton>
        <Button
          size="small"
          onClick={() => props.populateForm(props.id)}
          color="primary"
        >
          Update Smurf
        </Button>
      </CardActions>
    </Card>
  );
}

Smurf.propTypes = {
  classes: PropTypes.object.isRequired
};

Smurf.defaultProps = {
  name: "",
  height: "",
  age: ""
};

export default withStyles(styles)(Smurf);
