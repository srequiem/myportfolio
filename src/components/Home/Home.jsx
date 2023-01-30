import { useState } from 'react';

import me from '/meme.png';

import '/src/components/Home/Home.css';
import Contact from '/src/components/Contact/Contact.jsx';
import Meetme from '/src/components/Home/HomeItems/Meetme/Meetme';
import Studies from '/src/components/Home/HomeItems/Studies/Studies';
import Jobs from '/src/components/Home/HomeItems/Jobs/Jobs';
import Feedback from '/src/components/Home/HomeItems/Feedback/Feedback';

const Home = () => {
  const [popupVisible, setPopupVisible] = useState(false);
  console.log(popupVisible, typeof (popupVisible));

  const handleMove = () => {
    window.scrollTo({ top: 4131, behavior: "slow" }); // here it goes
  }
  return (
    <>
      <div className='homeContainer'>
        <div className='homeItems'>
          <img src={me} style={{ maxHeight: '220px', maxWidth: '220px', margin: 'auto' }} alt="Myself logo" />
          <h1 className='title'>Sacha Requiem</h1>
        </div>
        <div className='homeItems'>
          <div className='inline_title'>Made by<br /> passion, Powered by <span className="stylish-passion">React</span></div>
        </div>

        <button className='homeContactButton' onClick={() => setPopupVisible(true)}>
          {'CONTACT'}
        </button>
      </div>
      <Contact isVisible={popupVisible} setVisible={setPopupVisible} />
      <Meetme />
      <Studies />
      <Jobs />
      {/* <Whoami /> */}
      <Feedback />
      <Contact isVisible={true} setVisible={setPopupVisible} />
    </>
  )
}

export default Home;
