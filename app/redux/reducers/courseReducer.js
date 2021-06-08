const courseReducer = (state = null, action) => {
  switch (action.type) {
    case 'GET_ALL_COURSE':
      return action.payload;
    default:
      return state;
  }
};

export default courseReducer;
