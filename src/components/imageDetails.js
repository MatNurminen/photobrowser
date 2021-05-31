import React, { useEffect } from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';

import { getImage } from '../store/actions/imageActions';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import HomeIcon from '@material-ui/icons/Home';
import { makeStyles } from '@material-ui/core/styles';

import Image from './layout/Image';
import Circular from './layout/circular';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: 20,
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 500,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
}));

const ImageDetails = ({ image, error, match, getImage }) => {
  const classes = useStyles();

  useEffect(() => {
    getImage(match.params.id);
  }, [getImage, match]);

  if (error) {
    return <h1>{error}</h1>;
  }

  if (!image) {
    return <Circular />;
  }
  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <h1>Image Details</h1>
          </Grid>
          <Image
            id={image.id}
            url={image.url}
            title={image.title}
            size={12}
            classes={classes}
            key={image.id}
            disabled
          />
          <Grid item xs={12} sm container>
            <Grid item xs container direction='column' spacing={2}>
              <Grid item xs>
                <Typography variant='body2' color='textSecondary'>
                  {'ID: ' + image.id}
                </Typography>
                <Typography variant='overline'>{image.title}</Typography>
                <Typography variant='body2' color='textSecondary'>
                  {'Album ID: ' + image.albumId}
                </Typography>
              </Grid>
              <Grid item>
                <Button
                  variant='contained'
                  color='primary'
                  startIcon={<HomeIcon />}
                  component={Link}
                  to='/'
                >
                  Back
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

const mapStateToProps = (state) => ({
  image: state.imageReducer.image,
  error: state.imageReducer.error,
});

export default connect(mapStateToProps, { getImage })(withRouter(ImageDetails));
