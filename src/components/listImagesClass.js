import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { getImages } from '../store/actions/imageActions';

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import { withStyles } from '@material-ui/core/styles';

import Circular from './layout/circular';

const styles = (theme) => ({
  root: {
    flexGrow: 1,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
});

export class GetImages extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [],
    };
  }

  componentDidMount() {
    this.props.getImages();
  }
  render() {
    const { images, error, classes } = this.props;

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
              <Grid item md={2}>
                <Box component={Link} to={'images/' + image.id}>
                  <img
                    className={classes.img}
                    src={image.thumbnailUrl}
                    alt={image.title}
                  />
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  images: state.imageReducer.images,
  error: state.imageReducer.error,
});

export default connect(mapStateToProps, { getImages })(
  withStyles(styles)(GetImages)
);
