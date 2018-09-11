import React from 'react'
import {render} from 'react-dom'
import {BrowserRouter} from 'react-router-dom'
import App from './App';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primaryColor: '#800001',
    textColorSecondary: '#FFFFFF',
  },
});

render((
  <BrowserRouter>
    <MuiThemeProvider theme={theme}>
      <App/>
    </MuiThemeProvider>
  </BrowserRouter>
), document.getElementById('root'));