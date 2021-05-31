import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';

const Image = ({ id, url, title, size, disabled, classes: { img } }) => {
  return (
    <Grid item md={size}>
      <Box component={disabled ? 'div' : Link} to={'images/' + id}>
        <img className={img} src={url} alt={title} />
      </Box>
    </Grid>
  );
};

export default Image;
