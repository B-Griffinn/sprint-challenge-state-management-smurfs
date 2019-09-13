// Import actions
import { GET_SMURF_DATA_START, GET_SMURF_DATA_SUCCESS, GET_SMURF_DATA_FAIL} from '../actions';

// Create InitialState 
const initialState = {
    smurfs: [],
    error: ""
}

// Create reducer - takes in reducer = initialState and an action

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        // START
        case GET_SMURF_DATA_START:
            return {
                // spread state and create the key value pair for an error (if needed)
                ...state,
                error: ''
            }
            case GET_SMURF_DATA_SUCCESS:
                return {
                    ...state,
                    smurfs: action.payload,
                    error: ''
                }
                case GET_SMURF_DATA_FAIL:
                    return {
                        ...state,
                        error: action.payload
                    }
        default:
            return state;
    }
}