import { useState } from 'react';

// Components
import Contact from '/src/components/Contact/Contact.jsx';
import Meetme from '/src/components/Meetme/Meetme';
import Studies from '/src/components/Studies/Studies';
import Jobs from '/src/components/Jobs/Jobs';
import Feedback from '/src/components/Feedback/Feedback';

// Styles
import '/src/containers/Home/Home.css';

// Image
import me from '/meme.png';

const Home = () => {
  const [popupVisible, setPopupVisible] = useState(false);
  console.log(popupVisible, typeof (popupVisible));

  const handleMove = () => {
    const element = document.getElementById('Contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
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

        <button className='homeContactButton' onClick={handleMove}>
          {'CONTACT'}
        </button>
      </div>
      <Contact isVisible={popupVisible} setVisible={setPopupVisible} />
      <Meetme />
      <Studies />
      <Jobs />
      <Feedback />
      <Contact isVisible={true} setVisible={setPopupVisible} />
    </>
  )
}

export default Home;
