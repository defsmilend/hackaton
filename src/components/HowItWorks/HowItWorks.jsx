import Layout from '../Layout/Layout';
import classNames from 'classnames';
import styles from './styles.module.css';
import stepLogo from './assets/stepLogo.svg';
import stepLogoMob from './assets/stepLogoMob.svg';
import Banner from './assets/Banner.png';
import BannerMob from './assets/BannerMob.png';

const workSteps = [
  {
    step: '1. Register Online',
  },
  {
    step: '2. Team Formation',
  },
  {
    step: '3. Hackathon Day Activities',
  },
  {
    step: '4. Project Presentations',
  },
  {
    step: '5. Judging and Awards',
  },
];

const workStepsMob = [
  {
    step: '1. Register<br />Online',
  },
  {
    step: '2. Team<br />Formation',
  },
  {
    step: '3. Hackathon<br />Day Activities',
  },
  {
    step: '4. Project<br />Presentations',
  },
  {
    step: '5. Judging and<br />Awards',
  },
];

function HowItWorks() {
  return (
    <div id="howItWorks" className={styles.HowItWorks}>
      <Layout>
        <div className={styles.content}>
          <h1 className={classNames(styles.title, 'wubba-text-style')}>
            How Our Hackathons Work
          </h1>
          <div className={styles.stepsBlock}>
            <img
              className={classNames(styles.banner, 'hide-on-mobile')}
              src={Banner}
              alt="banner"
            />
            <div className={styles.step}>
              {workSteps.map((el) => {
                return (
                  <div className={styles.stepItem} key={el.step}>
                    <img src={stepLogo} alt="logo" />
                    <span>{el.step}</span>
                  </div>
                );
              })}
            </div>
          </div>
          <div className={styles.stepsBlockMob}>
            <div className={classNames(styles.stepMob, styles.stepMobFirst)}>
              {workStepsMob.slice(0, 3).map((el) => {
                return (
                  <div className={styles.stepItem} key={el.step}>
                    <img src={stepLogoMob} alt="logo" />
                    <span dangerouslySetInnerHTML={{ __html: el.step }} />
                  </div>
                );
              })}
            </div>
            <div className={styles.stepMob}>
              <img className={styles.bannerMob} src={BannerMob} alt="" />
              {workStepsMob.slice(3, workStepsMob.length).map((el) => {
                return (
                  <div className={styles.stepItem} key={el.step}>
                    <img src={stepLogoMob} alt="logo" />
                    <span dangerouslySetInnerHTML={{ __html: el.step }} />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
}

export default HowItWorks;
