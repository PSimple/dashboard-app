import React from 'react';
import PropTypes from 'prop-types';
import ContentWrapper from '../ContentWrapper';
import Link from '../Link';

const linksData = [
  {
    href: '#',
    title: 'Support',
  },
  {
    href: '#',
    title: 'Help Center',
  },
  {
    href: '#',
    title: 'Privacy',
  },
  {
    href: '#',
    title: 'Terms of Service',
  },
];

const Footer = () => (
  <footer className="footer">
    <ContentWrapper className="footer__content">
      <div className="footer__links-container">
        {linksData.map(item => (
          <Link key={item.title} className="footer__link" href="{item.href}">{item.title}</Link>
        ))}
      </div>
      <span className="footer__description">
        Lint, a FREE dashboard by <Link className="footer__author-link" href="#">Piksl</Link>
      </span>
    </ContentWrapper>
  </footer>
);

Footer.propTypes = {
  children: PropTypes.element,
};

export default Footer;
