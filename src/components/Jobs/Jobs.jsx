import React from 'react';
import Slider from '/src/components/Slider/Slider';
import '/src/components/Jobs/Jobs.css';

const Jobs = () => {

	return (
		<div className='jobs'>
			<h1 className='bigTitle'>A few projects I've worked on.</h1>
			<h3 className='subtitles'>Want to see more? <a href="mailto:sacharequiem@live.fr">Contact me.</a></h3>
			<Slider />
		</div>
	)
}

export default Jobs;
