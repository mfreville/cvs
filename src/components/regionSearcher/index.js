import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const styles = theme => ({
  root: {
    display: 'block',
    flexWrap: 'wrap',
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
  cssFocused: {
    borderBottomColor: theme.palette.primaryColor,
  },
});

class RegionSearcher extends Component {
  
  render() {
    const {classes} = this.props;
    const regionsOptions = this.props.regions.map(content => {
      return (<option value={content} key={content}>{content}</option>);
    });
    
    return (
      <div className={classes.root}>
        <FormControl className={classes.formControl}>
          <InputLabel
            FormLabelClasses={{
              root: classes.cssLabel,
              focused: classes.cssFocused,
            }}
            htmlFor="currentRegion-native-helper">Région</InputLabel>
          <Select
            className={classes.contentSelect}
            native
            value={this.props.currentRegion}
            onChange={this.props.handleChange('currentRegion')}
            inputProps={{
              name: 'currentRegion',
              id: 'currentRegion-native-helper',
            }}
          >
            {regionsOptions}
          </Select>
          <FormHelperText>Trier par région</FormHelperText>
        </FormControl>
      </div>
    );
  }
}

RegionSearcher.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RegionSearcher);

