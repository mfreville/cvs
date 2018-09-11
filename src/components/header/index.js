import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import {isMobile} from 'react-device-detect';

import logo from '../../pictures/cvs-small.jpg';

const styles = theme => ({
  root: {
    marginTop: theme.spacing.unit * 2,
    marginBottom: theme.spacing.unit * 2,
    flexGrow: 1,
    backgroundColor: theme.palette.primaryColor,
    height: '53px',
  },
  flex: {
    flexGrow: 1,
    fontFamily: 'Wine Date',
    fontSize: '2em',
    color: theme.palette.textColorSecondary,
    backgroundColor: theme.palette.primaryColor,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
    backgroundColor: theme.palette.primaryColor,
  },
  bar: {
    backgroundColor: theme.palette.primaryColor,
  },
  logo: {
    width: '90px',
    height: '53px',
    margin: 'auto',
  }
});

function Header(props) {
  const {classes} = props;
  
  let title = 'Champagnes et Vins Service';
  if(isMobile) {
    title = '';
  }
  
  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.bar}>
        <Toolbar>
          <IconButton className={classes.menuButton} color="inherit" aria-label="Menu" onClick={props.interactMenu}>
            <MenuIcon/>
          </IconButton>
          <Typography variant="title" className={classes.flex}>
            {title}
          </Typography>
          <img src={logo} alt="logo" className={classes.logo}/>
        </Toolbar>
      </AppBar>
    </div>
  );
}


Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);