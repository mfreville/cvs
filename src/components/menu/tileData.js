import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import ProviderIcon from '@material-ui/icons/Book';
import ContactIcon from '@material-ui/icons/ContactMail';

import Divider from '@material-ui/core/Divider';

export const mailFolderListItems = (
  <div>
    <ListItem button component="a" href="/">
      <ListItemIcon>
        <HomeIcon/>
      </ListItemIcon>
      <ListItemText primary="Accueil"/>
    </ListItem>
    <ListItem button component="a" href="/providers">
      <ListItemIcon>
        <ProviderIcon/>
      </ListItemIcon>
      <ListItemText primary="Les producteurs"/>
    </ListItem>
    <Divider/>
    <ListItem button component="a" href="/contact">
      <ListItemIcon>
        <ContactIcon/>
      </ListItemIcon>
      <ListItemText primary="Contact"/>
    </ListItem>
  </div>
);