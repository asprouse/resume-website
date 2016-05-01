import axios from 'axios';
import * as ActionTypes from './ActionTypes';

function loadResume() {
  const url = 'https://raw.githubusercontent.com/asprouse/resume/master/resume.json';
  return {
    type: ActionTypes.LOAD_RESUME,
    payload: axios.get(url).then(res => res.data).catch(error => {
      console.log('AXIOS ERROR', error);
      return Promise.reject(error);
    })
  };
}


export default {
  loadResume
};
