import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';

import bioImage from '../../pictures/bio.jpg';
import veganImage from '../../pictures/logo-vegan.png';

const styles = theme => ({
  root: {
  },
  icon: {
    width: '50px',
    height: '20px',
    margin: 1,
  }
});

function Designation(props) {
  const {classes} = props;
  if(props.bio && !props.vegan) {
    return (
      <div className={classes.root}>
        <img src={bioImage} alt='Bio' className={classes.icon}/>
      </div>
    );
  } else if(props.bio && props.vegan) {
    return (
      <div className={classes.root}>
        <img src={bioImage} alt='Bio' className={classes.icon}/><img src={veganImage} alt='Vegan' className={classes.icon}/>
      </div>
    );
  } else if(!props.bio && props.vegan) {
    return (
      <div className={classes.root}>
        <img src={veganImage} alt='Vegan' className={classes.icon}/>
      </div>
    );
  }else {
    return (
      <div></div>
    );
  }
}

Designation.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Designation);