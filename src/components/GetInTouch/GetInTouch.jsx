import React from 'react';
import classNames from 'classnames';
import LocationLogo from './assets/LocationLogo.svg';
import EmailLogo from './assets/EmailLogo.svg';
import styles from './styles.module.css';

const buttonInfo = [
  {
    logo: LocationLogo,
    buttonText: 'Location',
    link: 'https://www.google.com/maps?q=3101+Park+Blvd,+Palo+Alto,+CA+94306,+USA',
  },
  {
    logo: LocationLogo,
    buttonText: 'Phone',
    link: 'tel:+16506654710',
  },
  {
    logo: EmailLogo,
    buttonText: 'Email',
    link: 'mailto:info@thehacknerd.com',
  },
];

export default function GetInTouch() {
  return (
    <div id="contact" className={styles.wrapper}>
      <div className={styles.content}>
        <h1 className={classNames(styles.title, 'wubba-text-style')}>
          Get in Touch
        </h1>
        <div className={styles.buttonSection}>
          {buttonInfo.map((el) => {
            return (
              <a
                href={el.link}
                key={el.buttonText}
                className={styles.submitButton}
              >
                <img src={el.logo} alt="logo" />
                <span className={styles.buttonText}>{el.buttonText}</span>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}
