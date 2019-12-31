import React from 'react';
import MacroChart from './charts/MacroChart.js';
import MacroTabs from './widgets/MacroTabs.js';
import macrojson from './json/MacroJson.js';

const macrodata = JSON.parse(macrojson);

const macroseries = {
  0: macrodata.ZCY.data,
  1: macrodata.SPT.data,
  2: macrodata.MS6.data,
  3: macrodata.MIR.data,
  4: macrodata.HPI.data
};

class MacroToolBox extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          currentData: macroseries[0],
      };
    }

    changeTab(index) {
      this.setState({currentData: macroseries[index]});
    }

    changeTabInterface = {
      onChangeTab: this.changeTab.bind(this),
    }

    render() {
      return (
        <div className='MacroToolBox'>
          <MacroTabs interface={this.changeTabInterface}/>
          <MacroChart data={this.state.currentData}/>
        </div>
      );
    }
  }

export default MacroToolBox;

