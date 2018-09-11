import React from 'react';
import {Parallax} from 'react-parallax';

import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import picture1 from '../../pictures/vignobles1.jpg';
import picture2 from '../../pictures/vignobles2.jpg';
import picture3 from '../../pictures/vin1.jpg';

const styles = theme => ({
  inParallax: {
    width: '70%',
    margin: '0 auto',
  },
  textInParallax: {
    width: '60%'
  },
  outParallax: {
    width: '70%',
    margin: '30px auto',
  },
});

function Home(props) {
  const {classes} = props;
  return (
    <div>
      <Parallax
        blur={{min: -15, max: 15}}
        bgImage={picture1}
        bgImageAlt="vignoble"
        strength={200}
      >
        <div style={{height: '50px'}}/>
        <div className={classes.textInParallax}>
          <Typography variant="headline" className={classes.inParallax}>
            Depuis Janvier 2005, CVS (Champagnes et Vins Services) est en recherche permanente de vignerons talentueux,
            dans tous les vignobles de France.
          </Typography>
        </div>
        <div style={{height: '100px'}}/>
      </Parallax>
      
      <Typography variant="display1" className={classes.outParallax}>
        Notre philosophie n'est pas de vendre en priorité des vins de marque, dont la notoriété est déjà faite; mais
        plus certainement de mettre en avant des vins AOC, des Vins de pays, mais aussi des champagnes, des
        crémants, des méthodes traditionnelles et des vins mousseux.
      </Typography>
      
      <Parallax
        blur={{min: -15, max: 15}}
        bgImage={picture2}
        bgImageAlt="vignoble"
        strength={200}
      >
        <div style={{height: '400px'}}/>
      </Parallax>
      <Typography variant="display1" className={classes.outParallax}>
        Notre objectif est de vous faire découvrir des vins d'un très bon rapport qualité / prix, grâce à notre relation
        commerciale directe avec les producteurs.
      </Typography>
      <Parallax
        blur={{min: -15, max: 15}}
        bgImage={picture3}
        bgImageAlt="vignoble"
        strength={200}
      >
        <div style={{height: '100px'}}/>
        <Typography variant="display1" className={classes.inParallax}>
          Vous trouverez dans notre gamme : des vins rouge, rosé (sec ou fruité) et blanc (moelleux, doux, fruité, sec).
          Ces vins sélectionnés vous permettront d'apporter une réponse à tous les instants de dégustation comme à tous
          les plats...
        </Typography>
        <div style={{height: '350px', clear: 'both'}}/>
      </Parallax>
      <Typography variant="title" className={classes.outParallax}>
        L'abus d'alcool est dangereux pour la santé
      </Typography>
    </div>
  );
}

Home.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(Home);


