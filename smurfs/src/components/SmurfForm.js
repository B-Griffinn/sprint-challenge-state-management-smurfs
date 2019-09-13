import React, { useState } from 'react';
import axios from 'axios';
import SmurfCard from './SmurfCard';

const SmurfForm = props => {

    const [state, setState] = useState({
        name: "",
        age: "",
        height: ""
      });
    
      const handleNameChange = e => {
        setState({ ...state, name: e.target.value });
      };
    
      const handleAgeChange = e => {
        setState({ ...state, age: parseInt(e.target.value) });
      };
    
      const handleHeightChange = e => {
        setState({ ...state, height: e.target.value });
      };
    
      const handleSubmit = e => {
        e.preventDefault();
        console.log("Form Submission", state);
        
        // Post REQ - do not forget our state as second arg
        const myPost = axios
          .post(`http://localhost:3333/smurfs`, state)
          .then(res => console.log("POST res ", res))
          .catch(err => console.log("POST Err", err.response));

//  const  addSmurfCard = e => {
//           e.preventDefault();
//           {myPost(smurf => {
//         <SmurfCard 
//         smurf={smurf}
//         />
//         })}
//     }
          setState({
          name: "",
          age: 0,
          height: ""
        });
      };

     
        

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                value={state.name}
                name="name"
                placeholder="Smerf Name"
                onChange={handleNameChange}
            />
            <input 
                type="number"
                value={state.age}
                name="age"
                placeholder="Enter Smerf Age"
                onChange={handleAgeChange}
            />
            <input 
                type="text"
                value={state.height}
                name="height"
                placeholder="Enter Smerfs Height"
                onChange={handleHeightChange}
            />
            <button>Add Smerf</button>
        </form>
    )
}

export default SmurfForm;
