import Layout from '../Layout/Layout';
// import Sponsors from './components/Sponsors/Sponsors';
import styles from './styles.module.css';

const aboutDescription =
  'Welcome to Hack.Nerd! Our organization is founded by a team of venture capital investors, serial entrepreneurs, and innovation lab builders. With over a decade of experience in building and investing in startups, we are now dedicated to fostering the next generation of builders and tech enthusiasts. Our mission is to inspire and equip high school students with the skills and confidence needed to thrive in the fast-evolving world of STEM (Science, Technology, Engineering, and Mathematics). Through our monthly hackathons, we create a platform where young minds can innovate, collaborate, and excel.';

function AboutSpeakers() {
  return (
    <div id="about" className={styles.AboutSpeakers}>
      <Layout>
        <div className={styles.AboutSpeakers__wrapper}>
          <div className={styles.aboutBlock}>
            <h1 className="wubba-text-style">about</h1>
            <p>{aboutDescription}</p>
          </div>
          {/* <Sponsors /> */}
        </div>
      </Layout>
    </div>
  );
}

export default AboutSpeakers;
