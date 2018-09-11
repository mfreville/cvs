import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import ContactPhoneIcon from '@material-ui/icons/ContactPhoneOutlined';
import LocationIcon from '@material-ui/icons/LocationOnOutlined';


const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    backgroundColor: theme.palette.primaryColor,
  },
  content: {
    color: theme.palette.textColorSecondary,
    display: 'inline',
  },
  icon: {
    margin: theme.spacing.unit,
    fontSize: 32,
    color: theme.palette.textColorSecondary,
    display: 'inline',
  }
});

function Footer(props) {
  const {classes} = props;
  return (
    <div>
      <Paper className={classes.root} elevation={1}>
        <IconButton component="a" target="blank"
                    href="https://www.google.fr/maps/place/10B+Rue+Henri+Velay,+62120+Aire-sur-la-Lys/@50.6368541,2.3980405,17z/data=!3m1!4b1!4m5!3m4!1s0x47dd02959eafaa97:0x5214a612fa0ac1ae!8m2!3d50.6368541!4d2.4002292">
          <LocationIcon className={classes.icon}/>
        </IconButton>
        <Typography component="h3" className={classes.content}>
          10 bis rue Henri Velay, 62120 Aire Sur La Lys
        </Typography>
        <br/>
        <IconButton component="a" target="blank" href="tel:+33688234793">
          <ContactPhoneIcon className={classes.icon}/>
        </IconButton>
        <Typography component="h3" className={classes.content}>
          06 88 23 47 93
        </Typography>
      </Paper>
    </div>
  );
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(Footer);


