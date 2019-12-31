import React from 'react';
import MBSToolBox from './MBSToolBox.js';


class ResultsToolBox extends React.Component {
    constructor(props) {
      super(props);
      this.state = {mbsToolBoxes: [], 
                    nextBoxId: 0,
                    maxNumberOfBoxes: 4};
    }
  
    addNewMBSToolBox() {
      if (this.state.maxNumberOfBoxes > this.state.mbsToolBoxes.length) {
        this.setState({mbsToolBoxes: this.state.mbsToolBoxes.concat([this.state.nextBoxId])});
        this.setState({nextBoxId: this.state.nextBoxId + 1});
      } 
    }
  
    closeMBSToolBox(boxId) {
      let indexToBeRemoved = this.state.mbsToolBoxes.indexOf(boxId)
      this.state.mbsToolBoxes.splice(indexToBeRemoved, 1)
      this.setState({mbsToolBoxes: this.state.mbsToolBoxes})
    }
  
    mbsToolBoxInterface = {
      onCloseMBSToolBox: this.closeMBSToolBox.bind(this),
    }
  
    render() {
      let addMBSToolBox = undefined
      if (this.state.maxNumberOfBoxes > this.state.mbsToolBoxes.length) {
        addMBSToolBox = <div className='AddMBSToolBox' onClick={() => this.addNewMBSToolBox()}>
                          <p className='PlusSign'>&#5161;</p> 
                        </div>
      }
  
      return (
        <div className='ResultsToolBox'>
          {
            this.state.mbsToolBoxes.map((id) => <MBSToolBox key={id} boxId={id} interface={this.mbsToolBoxInterface}/>)
          }
          {addMBSToolBox}
        </div>
      );
    }
  }
  


export default ResultsToolBox;