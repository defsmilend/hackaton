import React from 'react';
import classNames from 'classnames';
import LocationLogo from './assets/LocationLogo.svg';
import EmailLogo from './assets/EmailLogo.svg';
import styles from './styles.module.css';

const buttonInfo = [
  {
    logo: LocationLogo,
    buttonText: 'Location',
  },
  {
    logo: LocationLogo,
    buttonText: 'Phone',
  },
  {
    logo: EmailLogo,
    buttonText: 'Email',
  },
];

export default function GetInTouch() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <h1 className={classNames(styles.title, 'wubba-text-style')}>
          Get in Touch
        </h1>
        <div className={styles.buttonSection}>
          {buttonInfo.map((el) => {
            return (
              <button className={styles.submitButton} key={el.buttonText}>
                <img src={el.logo} alt="logo" />
                <span className={styles.buttonText}>{el.buttonText}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
