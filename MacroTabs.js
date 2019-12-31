import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { createMuiTheme } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";


const macroTabsTheme = createMuiTheme({
    overrides: {
      MuiTab: {
        root: {
          minWidth: 'auto !important',
          fontSize: '0.7rem',
          '@media (min-width:600px)': {
            minWidth: 'auto !important',
            fontSize: '0.7rem',
        },
        }
      },
    }
  },);

class MacroTabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0
    };
  }

  render() {

    let handleChange = (event, newValue) => {
      this.setState({value: newValue})
      this.props.interface.onChangeTab(newValue)
    }

  return (
    <div>
      <ThemeProvider theme={macroTabsTheme}>
        <AppBar position="static" color="default">
          <Tabs
            value={this.state.value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            variant="fullWidth"
            aria-label="full width tabs example"
          >
            <Tab label="КБД" {...a11yProps(0)} />
            <Tab label="Короткая ставка" {...a11yProps(1)} />
            <Tab label="МосПрайм-6" {...a11yProps(2)} />
            <Tab label="Ипотечная ставка" {...a11yProps(3)} />
            <Tab label="Индекс цен на недвижимость" {...a11yProps(4)} />
          </Tabs>
        </AppBar>
      </ThemeProvider>
    </div>
  );
  }
}

function TabPanel(props) {
    const {children, value, index} = props;
  
    return (
      <Typography
        component="div"
        role="tabpanel"
        hidden={value !== index}
        id={`full-width-tabpanel-${index}`}
        aria-labelledby={`full-width-tab-${index}`}
      >
        {value === index && <Box p={3}>{children}</Box>}
      </Typography>
    );
  }
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `full-width-tab-${index}`,
      'aria-controls': `full-width-tabpanel-${index}`,
    };
  }

  export default MacroTabs;