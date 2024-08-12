import Layout from '../../../Layout/Layout';
import HeaderLogo from './assets/headerLogo.svg';
import styles from './styles.module.css';
import classNames from 'classnames';

const navbarItemInfo = [
  {
    href: '#home',
    text: 'Home',
  },
  {
    href: '#about',
    text: 'About',
  },
  {
    href: '#howItWorks',
    text: 'How it works',
  },
  {
    href: '#benefits',
    text: 'Benefits',
  },
  {
    href: '#faq',
    text: 'FAQ',
  },
  {
    href: '#apply',
    text: 'Apply',
  },
  {
    href: '#contact',
    text: 'Contact',
  },
];

function Header() {
  return (
    <Layout>
      <div className={styles.Header}>
        <img src={HeaderLogo} />
        <ul className={classNames(styles.navbarLinks, 'hide-on-mobile')}>
          {navbarItemInfo.map((item) => (
            <li className={styles.navbarItem} key={item.text}>
              <a href={item.href} className={styles.navbarLink}>
                {item.text}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  );
}

export default Header;
