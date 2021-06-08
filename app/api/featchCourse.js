import axios from 'axios';

const baseURL = axios.create({
  baseURL: '',
});

export const getAllCourse = async () => {
  await axios.get(`http://127.0.0.1:4000/api/v1/course`, {
    headers: { 'Content-Type': 'application/json' },
  });
};
