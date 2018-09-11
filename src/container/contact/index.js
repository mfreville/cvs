import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import FormControl from '@material-ui/core/FormControl';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import SendIcon from '@material-ui/icons/Send';

const styles = theme => ({
  root: {
    display: 'block',
    flexWrap: 'wrap',
    width: '90%',
    margin: 'auto',
  },
  title: {
    textAlign: 'left',
    marginBottom: 20,
  },
  formControl: {
    margin: theme.spacing.unit,
    width: '90%',
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2,
  },
  contentSelect: {
    '&:after': {
      borderBottomColor: theme.palette.primaryColor,
    },
  },
  cssLabel: {
    '&$cssFocused': {
      color: theme.palette.primaryColor,
    },
  },
  cssFocused: {},
  cssUnderline: {
    '&:after': {
      borderBottomColor: theme.palette.primaryColor,
    },
  },
  button: {
    margin: theme.spacing.unit,
    backgroundColor: theme.palette.primaryColor,
    color: theme.palette.textColorSecondary,
    marginTop: 40,
    marginBottom: 90,
  },
  extendedIcon: {
    marginRight: theme.spacing.unit,
  },
});

class Contact extends Component {
  
  state = {
    name: '',
    mail: '',
    content: '',
  };
  
  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };
  
  render() {
    const {classes} = this.props;
    
    return (
      <div className={classes.root}>
        <Typography variant="headline" className={classes.title}>
          Le formulaire de contact est indisponible.
        </Typography>
        <FormControl className={classes.formControl}>
          <InputLabel
            FormLabelClasses={{
              root: classes.cssLabel,
              focused: classes.cssFocused,
            }}
            htmlFor="custom-css-name"
          >
            Votre nom
          </InputLabel>
          <Input
            required={true}
            value={this.state.name}
            classes={{
              underline: classes.cssUnderline,
            }}
            id="custom-css-name"
          />
        </FormControl>
        <br/>
        <FormControl className={classes.formControl}>
          <InputLabel
            FormLabelClasses={{
              root: classes.cssLabel,
              focused: classes.cssFocused,
            }}
            htmlFor="custom-css-mail"
          >
            Votre adresse mail
          </InputLabel>
          <Input
            required={true}
            value={this.state.mail}
            classes={{
              underline: classes.cssUnderline,
            }}
            id="custom-css-mail"
          />
        </FormControl>
        <br/>
        <FormControl className={classes.formControl}>
          <InputLabel
            FormLabelClasses={{
              root: classes.cssLabel,
              focused: classes.cssFocused,
            }}
            htmlFor="custom-css-content"
          >
            Votre commentaire
          </InputLabel>
          <Input
            required={true}
            multiline={true}
            rows='4'
            value={this.state.content}
            classes={{
              underline: classes.cssUnderline,
            }}
            id="custom-css-content"
          />
        </FormControl>
        <br/>
        <Button variant="extendedFab" className={classes.button} disabled={true}>
          <SendIcon className={classes.extendedIcon} />
          Envoyer
        </Button>
      </div>
    );
  }
}

Contact.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Contact);

