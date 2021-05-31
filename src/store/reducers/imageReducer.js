import * as actions from '../actions';
const initialState = {
  images: null,
  image: null,
  error: null,
};

const imageActs = (state = initialState, action) => {
  switch (action.type) {
    case actions.GET_IMAGES:
      return { ...state, images: action.images };
    case actions.GET_IMAGE:
      return { ...state, image: action.image };
    case actions.ERROR:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

export default imageActs;
