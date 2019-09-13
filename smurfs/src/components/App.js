import React from "react";
import "./App.css";

// Components
import SmurfForm from '../components/SmurfForm';
import SmurfCard from '../components/SmurfCard';

class App extends React.Component {

render() {
    return (
        <div className="App">
          <h1>SMURFS! 2.0 W/ Redux</h1>
          <div>Welcome to your state management version of Smurfs!</div>
          <div>Start inside of your `src/index.js` file!</div>
          <div>Have fun!</div>
          <SmurfForm/>
          <SmurfCard />
        </div>
    )
  };
}

export default App;
