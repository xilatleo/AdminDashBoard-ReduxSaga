import React, { Component } from "react";
import { withStyles } from "@material-ui/core";
import styles from "./styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Fab from "@material-ui/core/Fab";
import Icon from '@material-ui/core/Icon';

class TaskItem extends Component {
  render() {
    const { classes, task, status } = this.props;
    const { id, title } = task;
    return (
      <Card key={id} className={classes.card}>
        <CardContent>
          <Grid container justify="space-between">
            <Grid item md={8}>
              <Typography component="h2">{title}</Typography>
            </Grid>
            <Grid item md={4}>
              {status.label}
            </Grid>
          </Grid>
          <p>{task.description}</p>
        </CardContent>
        <CardActions className={classes.CardActions}>
          <Fab color="primary" aria-label="Edit" className={classes.fab} size='small'>
           <Icon fontSize='small'>
               edit_icon
           </Icon>
          </Fab>
          <Fab color="secondary" aria-label="Delete" className={classes.fab} size='small'>
           <Icon fontSize='small'>
               delete_icon
           </Icon>
          </Fab>
          
        </CardActions>
      </Card>
    );
  }
}

export default withStyles(styles)(TaskItem);
