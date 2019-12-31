import React from 'react';
import { createMuiTheme } from "@material-ui/core";
import DateFnsUtils from '@date-io/date-fns';
import { DatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers'
import { ThemeProvider } from "@material-ui/styles";
import ruLocale from "date-fns/locale/ru";

class Calendar extends React.Component {
    constructor(props) {
      super(props);
      this.state = {selectedDate: new Date(),}
    }

    handleDateChange (date) {   
        this.setState({selectedDate: date})
    }
  
    render() {
      return (
        <ThemeProvider theme={calendarTheme}>
            <MuiPickersUtilsProvider utils={DateFnsUtils} locale={ruLocale}>
                <DatePicker views={["year", "month"]}
                            value={this.state.selectedDate}
                            onChange={(date) => this.handleDateChange(date)} 
                            disableFuture="True" 
                            minDate={new Date('2017-05-01')}
                            maxDate={new Date()}
                            variant="static"
                            width={100}/>
            </MuiPickersUtilsProvider>
        </ThemeProvider>
      );
    }
  }


export default Calendar;


const mainBackColor = 'rgb(47, 68, 78)'
const selectedBackColor = 'rgba(47, 68, 78, 0.7)'
const selectedTextColor = 'white'
const hoverBackColor = 'rgba(139, 197, 64, 0.8)'
const hoverTextColor = 'white'

const calendarTheme = createMuiTheme({
    overrides: {

     MuiPickersStaticWrapper: {
        staticWrapperRoot: {
            minWidth: 'auto',
            minHeight: 'auto',
            maxHeight: 'auto',
            maxWidth: 'auto',
            width: '31%',
            height: '40%',
            margin: '0px',
            position: 'absolute',
            right: '16%', 
            top: '20%',
            border: '1px solid',
            borderColor: mainBackColor,
            userSelect: 'none',
        }
     },

     MuiToolbar: {
        root: {
          backgroundColor: mainBackColor,
          minWidth: 'auto',
          minHeight: 'auto',
          maxHeight: 'auto',
          maxWidth: 'auto',
          height: '30%',
          width: '100%',
        },
        gutters: {
            paddingLeft: '9%',
            paddingRight: '9%',
            '@media (min-width:600px)': {
                paddingLeft: '9%',
                paddingRight: '9%',
            },
        }
      },

     MuiPickersToolbar: {
        toolbar: {
          backgroundColor: mainBackColor,
          minWidth: 'auto',
          minHeight: 'auto',
          maxHeight: 'auto',
          maxWidth: 'auto',
          height: '30%',
          width: '100%',
          
        },
      },

     MuiPickersBasePicker: {
        container: {
            width: '100%',
            height: '100%',
        },
        pickerView: {
            minWidth: 'auto',
            minHeight: 'auto',
            maxHeight: 'auto',
            maxWidth: 'auto',
            width: '100%',
            height: '70%',
        }
     },

     MuiPickersMonthSelection: {
        container: {
            minWidth: 'auto',
            maxWidth: 'auto',
            minHeight: 'auto',
            maxHeight: 'auto',
            width: '100%',
            height: '100%',
            overflowY: 'hidden',
        }
     },

     MuiPickersYearSelection: {
        container: {
            minWidth: 'auto',
            maxWidth: 'auto',
            minHeight: 'auto',
            maxHeight: 'auto',
            width: '100%',
            height: '100%',
            overflowY: 'hidden',
            display: 'flex',
            flexDirection: 'column',
        }
     },

      MuiPickersMonth: {
          root: {
            minWidth: 'auto',
            maxWidth: 'auto',
            minHeight: 'auto',
            maxHeight: 'auto',
            width: 'auto',
            height: 'auto',
            '&:focus': {
                color: 'white',
            },
            '&:hover': {
                color: hoverTextColor,
                backgroundColor: hoverBackColor,
            }
        },
          monthSelected: {
            backgroundColor: selectedBackColor,
            color: selectedTextColor,
            fontWeight: 'normal',
            '&:hover': {
                color: selectedTextColor,
                backgroundColor: selectedBackColor,
            }
          },
          monthDisabled: {
            backgroundColor: "white",
            color: "white",
          },
        //   current: {
        //     color: "rgb(43, 100, 52)",
        //   },
        },
    
    MuiPickersYear: {
        root: {
            height: 'auto',
            flex: '1',
            '&:focus': {
                color: 'white',
            },
            '&:hover': {
                color: hoverTextColor,
                backgroundColor: hoverBackColor,
            }
          },

        yearSelected: {
            backgroundColor: selectedBackColor,
            color: selectedTextColor,
            margin: '0',
            '&:hover': {
                color: selectedTextColor,
                backgroundColor: selectedBackColor,     
        }
    },
},
    
    MuiTypography: {
        colorPrimary: {
            color: 'black',
        },
        subtitle1: {
            marginBlockEnd: '0px',
            marginBlockStart: '0px',
            lineHeight: '1',
            '@media (min-width:680px)': {
                fontSize: '0.9rem',
            },
            '@media (min-width:1080px)': {
                fontSize: '1rem',
            },
            '@media (min-width:1280px)': {
                fontSize: '1.1rem',
            },
            '@media (min-width:1680px)': {
                fontSize: '1.2rem',
            },
            '@media (max-height:625px)': {
                fontSize: '0.9rem',
            },
        },
        h6: {
            marginBlockEnd: '0px',
            marginBlockStart: '0px',
            lineHeight: '1'
        },
        h5: {
            fontSize: '1rem',
            fontWeight: '700',
            lineHeight: '1',
            '@media (min-width:680px)': {
                fontSize: '0.9rem',
            },
            '@media (min-width:1080px)': {
                fontSize: '1rem',
            },
            '@media (min-width:1280px)': {
                fontSize: '1.1rem',
            },
            '@media (min-width:1680px)': {
                fontSize: '1.2rem',
            },
            '@media (max-height:625px)': {
                fontSize: '0.9rem',
            },
        },
        h4: {
            fontSize: '1.7rem',
            fontWeight: '400',
            marginBlockEnd: '0px',
            marginBlockStart: '0px',
            lineHeight: '1',
            '@media (min-width:680spx)': {
                fontSize: '1.1rem',
            },
            '@media (min-width:1000px)': {
                fontSize: '1.3rem',
            },
            '@media (min-width:1280px)': {
                fontSize: '1.5rem',
            },
            '@media (min-width:1680px)': {
                fontSize: '1.7rem',
            },
            '@media (max-height:540px)': {
                fontSize: '0.9rem',
            },
            '@media (max-height:640px)': {
                fontSize: '1.1rem',
            },
            '@media (max-height:740px)': {
                fontSize: '1.2rem',
            },
        },
      },
  
},});