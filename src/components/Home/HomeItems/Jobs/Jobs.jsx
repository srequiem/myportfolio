import React from 'react';
import Slider from '/src/components/Home/HomeItems/Slider/Slider';
import '/src/components/Home/HomeItems/Jobs/Jobs.css';

const Jobs = () => {

    return (
        <div className='jobs'>
            <h1 className='jobs-title'>
                A few past projects I've worked on.<br />
                Want to see more? <a href="mailto:sacharequiem@live.fr">Contact me.</a>
            </h1>
            <Slider />
        </div>
    )
}

export default Jobs;
