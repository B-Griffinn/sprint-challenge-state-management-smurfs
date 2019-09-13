import React from 'react';
import { connect } from 'react-redux';
// Action function needed
import { getSmurfData } from '../actions';

// Create Smurf 'card'
const SmurfCard = props => {
    return (
        <div className="smurf-card card-wrapper">
            <button
                onClick={() => props.getSmurfData}
            >
                Add Smerf to Page
                {props.smurfs}
            </button>
        </div>
    )
}


// Connect our component to the Redux Store!
const mapStateToProps = state => {
    return {
        // set our new smurf to our "initial state" key arr "smurfs" found in our reducer
        smurf: state.smurfs
    }
}

export default connect(
    mapStateToProps,
    // action function is needed in order to pass down the function from our store
    { getSmurfData }
)(SmurfCard);