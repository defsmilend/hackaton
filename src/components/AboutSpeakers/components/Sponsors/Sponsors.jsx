import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
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
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 767);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 767);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    centerMode: true,
    centerPadding: '30px', // Adjust this value to control the visibility of the adjacent slides
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: '60px', // Adjust this value to control the visibility of the adjacent slides on mobile
        },
      },
    ],
  };

  return (
    <div className={styles.wrapper}>
      <h1 className="wubba-text-style">Our Corporate Sponsors</h1>
      {isMobile ? (
        <Slider {...settings} className={styles.sponsorsBlock}>
          {sponsorsData.map((el) => (
            <div key={el.name} className={styles.sponsor}>
              <img src={el.logo} alt="logo" className={styles.logo} />
              <span className={classNames(styles.name, 'wubba-text-style')}>
                {el.name}
              </span>
              <span className={styles.description}>{el.description}</span>
            </div>
          ))}
        </Slider>
      ) : (
        <div className={styles.sponsorsBlock}>
          {sponsorsData.map((el) => (
            <div key={el.name} className={styles.sponsor}>
              <img src={el.logo} alt="logo" className={styles.logo} />
              <span className={classNames(styles.name, 'wubba-text-style')}>
                {el.name}
              </span>
              <span className={styles.description}>{el.description}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
