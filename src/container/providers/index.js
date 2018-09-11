import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';

import _ from 'lodash';

import RegionSearcher from '../../components/regionSearcher';
import ProviderDisplayer from '../../components/providerDisplayer';
import providersData from '../../datas/providers';

// Get all regions in the providers information and assign it in an array with a first blank value
const regionsData = [''];
const regionFromProvider = _.orderBy(_.uniqBy(providersData, 'region').map(provider => {
  return provider.region;
}), [region => region.toLowerCase()], ['asc']);
regionFromProvider.map(region => {
  regionsData.push(region);
  return null;
});

const styles = theme => ({
  root: {
    primary: theme.primaryColor,
  }
});

class Provider extends Component {
  
  state = {
    currentRegion: '',
    regions: regionsData,
    providers: providersData,
  };
  
  handleChange = name => event => {
    this.setState({[name]: event.target.value});
  };
  
  render() {
    const {classes} = this.props;
    return (
      <div className={classes.root}>
        <RegionSearcher
          handleChange={this.handleChange}
          regions={this.state.regions}
          currentRegion={this.state.currentRegion}
        />
        <ProviderDisplayer
          providers={this.state.providers}
          region={this.state.currentRegion}
        />
      </div>
    );
  }
}

Provider.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Provider);

