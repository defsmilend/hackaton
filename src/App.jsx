import MainBanner from './components/MainBanner/MainBanner';
import AboutSpeakers from './components/AboutSpeakers/AboutSpeakers';
import HowItWorks from './components/HowItWorks/HowItWorks';
import Benefits from './components/Benefits/Benefits';
import Faq from './components/Faq/Faq';
import ReadyYoJoin from './components/ReadyToJoin/ReadyYoJoin';
import GetInTouch from './components/GetInTouch/GetInTouch';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  return (
    <>
      <MainBanner />
      <AboutSpeakers />
      <HowItWorks />
      <Benefits />
      <Faq />
      <ReadyYoJoin />
      <GetInTouch />
      <Footer />
    </>
  );
}

export default App;
