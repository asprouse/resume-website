import axios from 'axios';
import * as ActionTypes from './ActionTypes';

function loadResume() {
  const url = __DEV__ ? '/resume.json' : 'https://raw.githubusercontent.com/asprouse/resume/master/resume.json';
  return {
    type: ActionTypes.LOAD_RESUME,
    payload: axios.get(url).then(res => res.data)
  };
}


export default {
  loadResume
};
