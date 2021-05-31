import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { getImages } from '../store/actions/imageActions';

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

import Image from './layout/Image';
import Circular from './layout/circular';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
}));

const GetImages = ({ images, error, getImages }) => {
  const classes = useStyles();

  useEffect(() => {
    getImages();
  }, [getImages]);

  if (error) {
    return <h1>{error}</h1>;
  }

  if (!images) {
    return <Circular />;
  }
  return (
    <div className={classes.root}>
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <h1>List Images</h1>
          </Grid>
          {images.map((image) => (
            <Image
              id={image.id}
              url={image.thumbnailUrl}
              title={image.title}
              size={2}
              classes={classes}
              key={image.id}
            />
          ))}
        </Grid>
      </Container>
    </div>
  );
};

const mapStateToProps = (state) => ({
  images: state.imageReducer.images,
  error: state.imageReducer.error,
});

export default connect(mapStateToProps, { getImages })(GetImages);
