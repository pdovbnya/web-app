import React from 'react';
import { createMuiTheme } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";
import { Autocomplete } from '@material-ui/lab';
import TextField from '@material-ui/core/TextField';


class ComboMBS extends React.Component {

    render() {
      return (
        <ThemeProvider theme={comboBoxTheme}>
        <Autocomplete options={bonds} disableClearable={true} renderInput={params => (<TextField {...params} label="ИЦБ" variant="outlined"/>)}/>
        </ThemeProvider>
      );
    }
  }

export default ComboMBS;

const bonds = ['ВТБ-1', 'ВТБ-2', 'ВТБ-3', 'ВТБ-4', 'ВТБ-5', 'РАЙФ-1', 'ДКБ-1', 'СБР-1', 'СБР-2', 'БЖФ-1', 'БЖФ-2', 'БЖФ-3',]

const comboBoxTheme = createMuiTheme({
    overrides: {
        MuiAutocomplete: {
            root: {
                minWidth: 'auto',
                minHeight: 'auto',
                maxHeight: 'auto',
                maxWidth: 'auto',
                width: '33%',
                height: '12%',
                margin: '0px',
                position: 'absolute',
                left: '16%', 
                top: '20%',
                padding: '0',
                paddingLeft: '0',
                paddingRight: '0',
            },
            inputRoot: {
                flexWrap: 'nowrap',
            },
            paper: {
                maxHeight: 'auto',
                overflow: 'visible',
            },
            popper: {
                maxHeight: '20vh',
            },
            listbox: {
                maxHeight: '20vh',
                height: '20vh',
            },
        },
        MuiFormControl: {
            root: {
                minWidth: 'auto',
                minHeight: 'auto',
                maxHeight: 'auto',
                maxWidth: 'auto',
                width: '100%',
                height: '100%',
                margin: '0px',
                position: 'absolute',
            },
        },
        MuiFormLabel: {
            root: {
                position: 'absolute',
                bottom: '30% !important',
                '@media (max-height:650px)': {
                    fontSize: '0.9rem',
                },
                '@media (min-height:650px)': {
                    fontSize: '1.0rem',
                },
                '@media (min-height:800px)': {
                    fontSize: '1.3rem',
                },
                '@media (min-height:950px)': {
                    fontSize: '1.4rem',
                },
                '@media (min-height:1100px)': {
                    fontSize: '1.5rem',
                },
                '@media (min-height:1250px)': {
                    fontSize: '1.6rem',
                },
            }
        },
        MuiInputLabel: {
            formControl: {
                top: 'auto',
                bottom: 'auto',
            },
            outlined: {
                transform: 'translate(0%, 0%) scale(1)',
                position: 'absolute',
                top: 'auto',
                bottom: 'auto',
                left: '10%'
            },
            shrink: {
                position: 'relative',
                top: '0%',
                // fontSize: '1rem !important',
                bottom: '0% !important',
                '@media (min-height:0px)': {
                    fontSize: '0.9rem !important',
                },
                '@media (min-height:1000px)': {
                    fontSize: '1.05rem !important',
                },
            },
        },
        MuiInputBase: {
            root: {
                minWidth: 'auto',
                minHeight: 'auto',
                maxHeight: 'auto',
                maxWidth: 'auto',
                width: '100%',
                height: '100%',
                margin: '0px',
                position: 'absolute',
                padding: '0',
                paddingLeft: '0',
                paddingRight: '0',
                '& fieldset': {
                    paddingLeft: '0',
                },
                '@media (max-height:650px)': {
                    fontSize: '0.9rem',
                },
                '@media (min-height:650px)': {
                    fontSize: '1.0rem',
                },
                '@media (min-height:800px)': {
                    fontSize: '1.3rem',
                },
                '@media (min-height:950px)': {
                    fontSize: '1.4rem',
                },
                '@media (min-height:1100px)': {
                    fontSize: '1.5rem',
                },
                '@media (min-height:1250px)': {
                    fontSize: '1.6rem',
                },
            },
        },
    },
},);
