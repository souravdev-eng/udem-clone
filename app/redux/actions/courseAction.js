export const getAllCourse = (course) => {
  return {
    type: 'GET_ALL_COURSE',
    payload: course,
  };
};
