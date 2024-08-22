import Layout from '../Layout/Layout';
import classNames from 'classnames';
import styles from './styles.module.css';
import stepLogo from './assets/stepLogo.svg';

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
              src="src/components/HowItWorks/assets/Banner.png"
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
        </div>
      </Layout>
    </div>
  );
}

export default HowItWorks;
