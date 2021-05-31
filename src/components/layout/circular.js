import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
}));

export default function Circular() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container direction='column' alignItems='center' justify='center'>
        <Grid item xs={12} className={classes.gridCirc}>
          <CircularProgress />
        </Grid>
      </Grid>
    </div>
  );
}
