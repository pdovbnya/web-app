import React from 'react';
import './App.css';
import FunctionsToolBox from './FunctionsToolBox.js';
import MacroToolBox from './MacroToolBox.js';
import ResultsToolBox from './ResultsToolBox.js';


class App extends React.Component {
  render() {
    return (
      <div className="app">
  
        <div className="ModelsToolBox">
          <MacroToolBox />
          <FunctionsToolBox />
        </div>
  
          <ResultsToolBox />

      </div>
    );
  }
}

export default App;
