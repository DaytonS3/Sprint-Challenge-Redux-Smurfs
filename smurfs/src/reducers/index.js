import { FETCHING, SUCCESS, ERROR } from "../actions";

/*
  Be sure to import in all of the action types from `../actions`
*/


 const initialState = {
   smurfs: [],
   fetchingSmurfs: false,
   addingSmurf: false,
   error: null
 }

const reducer =(state= initialState, action) => {
  switch(action.type) {
    case FETCHING:
      return {
        ...state,
        fetchingSmurfs: true,
        addingSmurf: false,
        error: null
      }
    case SUCCESS:
      return {
        ...state,
        fetchingSmurfs: false,
        smurfs: action.payload,
        error: null
      }
    case ERROR:
      return {
        ...state,
        fetchingSmurfs: false,
        error: action.payload
      }
    default:
      return state;
  }
}





/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/
export default reducer