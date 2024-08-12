import React from 'react';
import CompanyLogo from './assets/CompanyLogo.svg';
import styles from './styles.module.css';
import classNames from 'classnames';

const sponsorsData = [
  {
    logo: CompanyLogo,
    name: 'Company name1',
    description:
      'Company Our organization is founded by a team of venture capital investors',
  },
  {
    logo: CompanyLogo,
    name: 'Company name2',
    description:
      'Company Our organization is founded by a team of venture capital investors',
  },
  {
    logo: CompanyLogo,
    name: 'Company name3',
    description:
      'Company Our organization is founded by a team of venture capital investors',
  },
  {
    logo: CompanyLogo,
    name: 'Company name4',
    description:
      'Company Our organization is founded by a team of venture capital investors',
  },
];

export default function Sponsors() {
  return (
    <div className={styles.wrapper}>
      <h1 className="wubba-text-style">Our Corporate Sponsors</h1>
      <div className={styles.sponsorsBlock}>
        {sponsorsData.map((el) => (
          <div key={el.name} className={styles.sponsor}>
            <img src={el.logo} alt="logo" />
            <span className={classNames(styles.name, 'wubba-text-style')}>
              {el.name}
            </span>
            <span className={styles.description}>{el.description}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
