import axios from 'axios';

// Action Types (variables to prevent bugs such as spelling)
export const  GET_SMURF_DATA_START = " GET_SMURF_DATA_START";
export const  GET_SMURF_DATA_SUCCESS = "GET_SMURF_DATA_SUCCESS";
export const  GET_SMURF_DATA_FAIL = "GET_SMURF_DATA_FAIL";

// Action Creator(s)

export const getSmurfData = () => {
    return dispatch => {
        dispatch({ type: GET_SMURF_DATA_START });
        axios.get(`http://localhost:3333/smurfs`)
        .then(res => {
            console.log('Res Request = ', res)
            dispatch({ type: GET_SMURF_DATA_SUCCESS, payload: res.data });
        })
        .catch(err => {
            console.log(err)
            dispatch({ type: GET_SMURF_DATA_FAIL, payload: err.res })
        });
    };
};