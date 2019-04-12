import axios from 'axios';

export const FETCHING = 'FETCHING';
export const SUCCESS = 'SUCCESS';
export const ERROR = 'ERROR';
export const ADD_SMURF ='ADD_SMURF';
export const ADD_SUCCESS = 'ADD_SUCCESS';

export const fetch = () => {
  return dispatch => {
    dispatch({type: FETCHING})
    axios.get('http://localhost:3333/smurfs')
    .then(res => {
      //console.log(res);
      dispatch({
        type: SUCCESS,
        payload: res.data
      })
    })
    .catch(err => {
      console.log(err);
      dispatch({
        type: ERROR,
        payload: 'ERROR'
      })
    })
  }
}

export const addSmurf = smurf => {
  return dispatch => {
    dispatch({type: ADD_SMURF})
    axios.post('http://localhost:3333/smurfs', smurf )
    .then(res => {
      dispatch({
        type: ADD_SUCCESS,
      payload: res.data
      })
    })
    .catch(err => {
      dispatch({
        type: ERROR,
        payload: err
      })
    })
  }
}
