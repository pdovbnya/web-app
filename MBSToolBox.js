import React from 'react';
import './fancy.scss';
import './App.css';
import ReactTooltip from 'react-tooltip'
import Calendar from './widgets/Calendar.js';
import ComboMBS from './widgets/ComboMBS.js';



class MBSToolBox extends React.Component {
    constructor(props) {
      super(props);
      this.state = {}
    }

    render() {
      return (
        <div className='MBSToolBox'>
            <span className="close black fat" data-tip="Закрыть" onClick={() => this.props.interface.onCloseMBSToolBox(this.props.boxId)}></span>
            <ComboMBS />
            <ReactTooltip className="tooltip" place="bottom" effect="solid" delayShow={500}/>
            <Calendar />
        </div>
      );
    }
  }

export default MBSToolBox;