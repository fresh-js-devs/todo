import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import DeleteIcon from "@material-ui/icons/Delete";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import BlueImg from "../../images/Blue.png";

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
  handleDeleteCard,
  onClickUpdateTask
}) {
  const classes = useStyles();

  const [priority, setPriority] = React.useState("");
  const [open, setOpen] = React.useState(false);
  const [editName, setEditName] = useState("");
  const [editDis, setEditDis] = useState("");

  const inputsAreEmpty = name === "" || description === "" || priority === "";

  const handleChange = event => {
    setPriority(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleUpdateTaskClick = () => {
    onClickUpdateTask(id, editName, editDis, priority);
  };

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={BlueImg}
          title="Dont give up"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            <TextField
              required
              id="standard-required"
              label="Name"
              value={editName}
              onChange={event => setEditName(event.target.value)}
            />
          </Typography>
          <Typography variant="body2" color="textSecondary" component="span">
            <TextField
              id="standard-multiline-flexible"
              label="Description"
              multiline
              rowsMax="4"
              rows="4"
              value={editDis}
              onChange={event => setEditDis(event.target.value)}
            />
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          disabled={inputsAreEmpty}
          variant="contained"
          color="primary"
          onClick={handleUpdateTaskClick}
        >
          Select
        </Button>
        <FormControl className={classes.formControl}>
          <Select
            labelId="demo-controlled-open-select-label"
            id="demo-controlled-open-select"
            open={open}
            onClose={handleClose}
            onOpen={handleOpen}
            value={priority}
            onChange={handleChange}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={1}>Important</MenuItem>
            <MenuItem value={2}>Normal</MenuItem>
            <MenuItem value={3}>No rush</MenuItem>
          </Select>
        </FormControl>
      </CardActions>
    </Card>
  );
}
