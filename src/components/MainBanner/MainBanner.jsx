import CountdownTimer from './components/CountdownTimer/CountdownTimer';
import Header from './components/Header/Header';
import styles from './styles.module.css';
import classNames from 'classnames';
import mainBannerImg from './assets/MainBannerImage.png';
import mainBannerImgMob from './assets/MainBannerImageMob.png';
import ApplyButton from './assets/ApplyButton.png';

function MainBanner() {
  const targetDate = new Date('2024-12-31T23:59:59');

  return (
    <div id="home" className={styles.MainBanner}>
      <Header />
      <div className={styles.content}>
        <div className={styles.mainContent}>
          <span>
            Empower the Next Generation
            <br />
            of Innovators with Our Monthly
            <br />
            STEM Hackathons
          </span>
          <button
            style={{
              background: 'none',
              border: 'none',
              padding: 0,
              cursor: 'pointer',
            }}
            onClick={() =>
              window.open(
                'https://docs.google.com/forms/d/e/1FAIpQLSf0zdCVYPLfOT08vKwYPPYoKwOyXRzca5EjswMCxKItdsCkww/viewform?pli=1',
                '_blank'
              )
            }
          >
            <img src={ApplyButton} alt="button" />
          </button>
          <img
            className={styles.mainBannerImgMob}
            src={mainBannerImgMob}
            alt="MainBannerMob"
          />
          <CountdownTimer targetDate={targetDate} />
        </div>
        <img
          className={classNames(styles.mainBannerImg, 'hide-on-mobile')}
          src={mainBannerImg}
          alt="MainBanner"
        />
      </div>
    </div>
  );
}

export default MainBanner;
