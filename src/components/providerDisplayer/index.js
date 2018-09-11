import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import VisibilityIcon from '@material-ui/icons/Visibility';
import _ from 'lodash';
import {isMobile} from 'react-device-detect';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';

import Designation from '../../components/designation';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    marginTop: '20px',
    marginBottom: '20px'
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
  cardHeader: {
    float: 'left',
    width: '55%',
    display: 'block',
    textAlign: 'left',
  },
  card: {
    maxWidth: isMobile ? '100%' : '45%',
    margin: 10,
  },
  media: {
    height: 250,
    maxWidth: 500,
    clear: 'both',
    margin: 'auto',
  },
  actions: {
    display: 'block',
    width: '35%',
    float: 'right',
  },
  button: {
    float: 'right',
  },
  cardContent: {
    textAlign: 'justify',
  },
});

function ProviderDisplayer(props) {
  const {classes} = props;
  let providersToDisplay = props.providers;
  if (props.region) {
    providersToDisplay = _.filter(props.providers, {region: props.region});
  }
  return (
    <div className={classes.root}>
      {providersToDisplay.map((provider, index) => (
        <Card
          key={'provider' + index}
          className={classes.card}
        >
          <CardHeader
            title={provider.name}
            subheader={provider.region}
            className={classes.cardHeader}
          />
          <CardActions className={classes.actions} disableActionSpacing>
            <IconButton
              aria-label="Visitez le site web"
              className={classes.button}
              href={provider.webSite}
              disabled={_.isEmpty(provider.webSite)}
              target='blank'
            >
              <VisibilityIcon/>
            </IconButton>
            <div className={classes.designation}>
              <Designation
                bio={provider.bio}
                vegan={provider.vegan}
              />
            </div>
          </CardActions>
          <CardMedia
            className={classes.media}
            image={require('../../pictures/' + provider.image)}
            title={provider.name}
          />
          <CardContent>
            <Typography component="p" className={classes.cardContent}>
              {provider.description}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

ProviderDisplayer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProviderDisplayer);