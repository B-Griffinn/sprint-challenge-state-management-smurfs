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

          setState({
          name: "",
          age: "",
          height: ""
        });
      };

     
        

    return (
        <div className="row">
    <div className="row">
      <form className="col s12"
      onSubmit={handleSubmit}>
        <div className="row">
          <div className="input-field col s6">
            <input id="input_text" data-length="10"
               type="text"
                    value={state.name}
                    name="name"
                    placeholder="Smerf Name"
                    onChange={handleNameChange} 
            />
          </div>
        </div>
        <div className="row">
          <div className="input-field col s12">
          <input id="input_text" data-length="10"
              type="number"
                value={state.age}
                name="age"
                placeholder="Enter Smerf Age"
                onChange={handleAgeChange}
            />
          </div>
        </div>
        <div className="row">
          <div className="input-field col s12">
          <input id="input_text" data-length="10"
                type="text"
                value={state.height}
                name="height"
                placeholder="Enter Smerfs Height"
                onChange={handleHeightChange}
            />
            <button>Add Smerf</button>
          </div>
        </div>
      </form>
    </div>
    </div>
        // {/* <form 
        //     onSubmit={handleSubmit}
        //     classNameName="form-wrapper col s12"
        // >
        //     <input 
        //         type="text"
        //         value={state.name}
        //         name="name"
        //         placeholder="Smerf Name"
        //         onChange={handleNameChange}
        //     />
        //     <input 
        //         type="number"
        //         value={state.age}
        //         name="age"
        //         placeholder="Enter Smerf Age"
        //         onChange={handleAgeChange}
        //     />
        //     <input 
        //         type="text"
        //         value={state.height}
        //         name="height"
        //         placeholder="Enter Smerfs Height"
        //         onChange={handleHeightChange}
        //     /> */}
        //     {/* <button>Add Smerf</button>
        // </form>
        // </div> */}
    )
}

export default SmurfForm;
