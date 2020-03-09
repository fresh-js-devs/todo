import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import DeleteIcon from "@material-ui/icons/Delete";
import RedImg from "C:/skola/React/todolist/todo/src/images/DarkRed.jpg";
import YellowImg from "C:/skola/React/todolist/todo/src/images/Yellow.jpg";
import GreenImg from "C:/skola/React/todolist/todo/src/images/Green.png";

const useStyles = makeStyles({
  root: {
    maxWidth: 345
  },
  media: {
    height: 140
  }
});

export default function MediaCard({
  id,
  name,
  description,
  priority,
  handleDeleteCard,
  handleAdjustCard,
  handleStartTimer,
  timerState
}) {
  const classes = useStyles();
  let currectPriority;

  switch (priority) {
    case 1:
      currectPriority = RedImg;
      break;
    case 2:
      currectPriority = YellowImg;
      break;
    case 3:
      currectPriority = GreenImg;
      break;
  }

  const chooseButtonByTimerState = () => {
    if (timerState[0] == id && timerState[1] === true)
      return (
        <Button
          variant="contained"
          color="secondary"
          onClick={handleStartTimer}
        >
          Stop timer
        </Button>
      );

    return (
      <Button variant="contained" color="primary" onClick={handleStartTimer}>
        Start task
      </Button>
    );
  };

  if (priority)
    return (
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={currectPriority}
            title="Dont give up"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {description}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          {chooseButtonByTimerState()}
          <Button variant="contained" onClick={handleAdjustCard}>
            Adjust
          </Button>
          <Button
            variant="contained"
            color="secondary"
            className={classes.button}
            onClick={handleDeleteCard}
            startIcon={<DeleteIcon />}
          >
            Delete
          </Button>
        </CardActions>
      </Card>
    );
}
