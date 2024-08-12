import React from 'react';
import styles from './styles.module.css';

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

export default function Footer() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <ul className={styles.navbarLinks}>
          {navbarItemInfo.map((item) => (
            <li className={styles.navbarItem} key={item.text}>
              <a href={item.href} className={styles.navbarLink}>
                {item.text}
              </a>
            </li>
          ))}
        </ul>
        <hr />
        <div className={styles.subscribe}>
          <form>
            <label className={styles.inputLabel}>
              Subscribe to our newsletter
            </label>
            <div className={styles.inputWrapper}>
              <input
                placeholder="Email address"
                className={styles.inputField}
                type="text"
              />
              <button className={styles.submitButton}>
                <span className={styles.buttonText}>Subscribe</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
