import axios from 'axios';

export const FETCHING = 'FETCHING';
export const SUCCESS = 'SUCCESS';
export const ERROR = 'ERROR';

export const fetch = () => {
  return dispatch => {
    dispatch({type: FETCHING})
    axios.get('http://localhost:3333/smurfs')
    .then(res => {
      console.log(res);
    })
    .catch(err => {
      console.log(err);
    })
  }
}
