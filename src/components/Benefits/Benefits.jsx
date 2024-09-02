import Layout from '../Layout/Layout';
import classNames from 'classnames';
import styles from './styles.module.css';
import Logo1 from './assets/stepLogo1.svg';
import Logo2 from './assets/stepLogo2.svg';
import Logo3 from './assets/stepLogo3.svg';
import Logo4 from './assets/stepLogo4.svg';
import Logo5 from './assets/stepLogo5.svg';
import Logo6 from './assets/stepLogo6.svg';
import Logo7 from './assets/stepLogo7.svg';
import LogoMob1 from './assets/stepLogoMob1.svg';
import LogoMob2 from './assets/stepLogoMob2.svg';
import LogoMob3 from './assets/stepLogoMob3.svg';
import LogoMob4 from './assets/stepLogoMob4.svg';
import LogoMob5 from './assets/stepLogoMob5.svg';
import LogoMob6 from './assets/stepLogoMob6.svg';
import LogoMob7 from './assets/stepLogoMob7.svg';
import BannerImg from './assets/BenefitsEnd.png';

const benefitsSteps = [
  {
    logo: Logo1,
    logoMob: LogoMob1,
    name: 'Hands-On Learning Experience',
    description:
      'Our hackathons provide a dynamic, hands-on environment where students can apply theoretical knowledge to real-world challenges. Participants work in teams to develop innovative solutions, fostering collaboration, creativity, and critical thinking',
  },
  {
    logo: Logo2,
    logoMob: LogoMob2,
    name: 'Expert Mentorship',
    description:
      'Students will have the opportunity to learn from industry leaders and experienced professionals. Our mentors offer guidance, share their knowledge, and inspire students to push the boundaries of their capabilities.',
  },
  {
    logo: Logo3,
    logoMob: LogoMob3,
    name: 'Cutting-Edge Technology',
    description:
      'Participants will have access to the latest tools and technologies, ensuring they stay ahead of the curve. From coding and robotics to AI and cybersecurity, our hackathons cover a wide array of STEM disciplines.',
  },
  {
    logo: Logo4,
    logoMob: LogoMob4,
    name: 'College and Career Readiness:',
    description:
      'Students will have the opportunity to learn from industry leaders and experienced professionals. Our mentors offer guidance, share their knowledge, and inspire students to push the boundaries of their capabilities.',
  },
  {
    logo: Logo5,
    logoMob: LogoMob5,
    name: 'Inclusive & Supportive Environment',
    description:
      'We believe that diversity drives innovation. Our hackathons are inclusive, welcoming students of all skill levels and backgrounds. We provide a supportive atmosphere where everyone can thrive and contribute.',
  },
  {
    logo: Logo6,
    logoMob: LogoMob6,
    name: 'Networking Opportunities',
    description:
      'Students will connect with like-minded peers, potential mentors, and industry professionals. These connections can lead to internships, scholarships, and lifelong friendships.',
  },
  {
    logo: Logo7,
    logoMob: LogoMob7,
    name: 'Corporate Sponsorship & Partnership',
    description:
      'Our hackathons are judged by corporate sponsors and partners who are keen to discover young talent. High school students have the unique opportunity to be considered for summer internships, providing them with early exposure to the professional world',
  },
  {
    banner: BannerImg,
  },
];

function Benefits() {
  return (
    <div id="benefits" className={styles.Benefits}>
      <Layout>
        <div className={styles.content}>
          <h1 className={classNames(styles.title, 'wubba-text-style')}>
            Benefits
          </h1>
          <div className={styles.steps}>
            {benefitsSteps.map((el) => {
              return (
                <div className={styles.benefit} key={el.name}>
                  {el?.logo && (
                    <>
                      <img className={styles.logoMob} src={el.logoMob} alt="" />
                      <img
                        className={styles.logoDesc}
                        src={el.logo}
                        alt="logo"
                      />
                      <span
                        className={classNames(styles.name, 'wubba-text-style')}
                      >
                        {el.name}
                      </span>
                      <span className={styles.description}>
                        {el.description}
                      </span>
                    </>
                  )}
                  {el?.banner && (
                    <img
                      className={classNames(styles.bannerImg, 'hide-on-mobile')}
                      src={el?.banner}
                      alt="bannerImg"
                    />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </Layout>
    </div>
  );
}

export default Benefits;
