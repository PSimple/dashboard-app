import React from 'react';
import { withRouter } from 'react-router-dom';

const filterByLocation = Component => withRouter(({ location, navLinks }) => {
  const currentRoute = navLinks.find(link => link.route === location.pathname);
  const links = [navLinks[0]];
  if (currentRoute.title !== 'Home') {
    links.push(currentRoute);
  }
  return <Component title={currentRoute.title} navLinks={links}/>;
});

export default filterByLocation;
