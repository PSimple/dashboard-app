import React from 'react';
import PropTypes from 'prop-types';
import ContentWrapper from '../ContentWrapper';
import Link from '../Link';

const linksData = [
  {
    href: '#',
    title: 'Dashboard',
  },
  {
    href: '#',
    title: 'Projects',
  },
  {
    href: '#',
    title: 'Invoices',
  },
  {
    href: '#',
    title: 'Documents',
  },
  {
    href: '#',
    title: 'Settings',
  },
];

const Navigation = () => (
  <nav className="navigation">
    <ContentWrapper className="navigation__content">
      {linksData.map(item => (
        <Link key={item.title} className="navigation__link" href="{item.href}">{item.title}</Link>
      ))}
    </ContentWrapper>
  </nav>
);

Navigation.propTypes = {
  children: PropTypes.element,
};

export default Navigation;
