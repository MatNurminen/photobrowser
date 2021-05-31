import axios from 'axios';
import * as actions from './index';

export const getImages = () => async (dispatch) => {
  try {
    const res = await axios.get(
      `http://jsonplaceholder.typicode.com/photos?_limit=100`
    );
    dispatch({ type: actions.GET_IMAGES, images: res.data });
  } catch (error) {
    dispatch({ type: actions.ERROR, payload: error.message });
  }
};

export const getImage = (image_id) => async (dispatch) => {
  try {
    const res = await axios.get(
      `http://jsonplaceholder.typicode.com/photos/${image_id}`
    );
    dispatch({ type: actions.GET_IMAGE, image: res.data });
  } catch (error) {
    dispatch({ type: actions.ERROR, payload: error.message });
  }
};
