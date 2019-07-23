import React from 'react';
import ContentWrapper from '../ContentWrapper';
import Link from '../Link';
import styles from './Footer.css';

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
  <footer className={styles.footer}>
    <ContentWrapper>
      <div className={styles['links-container']}>
        {linksData.map(item => (
          <Link key={item.title} href={item.href} className={'footer'}>{item.title}</Link>
        ))}
      </div>
      <span>
        Lint, a FREE dashboard by <Link href="#" className={'author'}>Piksl</Link>
      </span>
    </ContentWrapper>
  </footer>
);

export default Footer;
