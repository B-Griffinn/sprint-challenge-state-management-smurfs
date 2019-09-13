// take in the smurf data and display them to the screen.
import React from 'react';
import SmurfCard from './SmurfCard';

import { connect } from 'react-redux';
import { getSmurfData } from '../actions';

// import myPost from './SmurfForm';

const SmurfList = props => {

    return (
        <div className="smurf-list">
            {props.smurf.map(smurf => {
                <SmurfCard 
                  smurf={smurf}  
                />
            })}
        </div>
      
    )
}

mapStateToProps = state => {
    return {
        name: state.name,
        age: state.name,
        height: state.height
    }
}

export default connect(
    mapStateToProps,
    {getSmurfData}
)(SmurfList);