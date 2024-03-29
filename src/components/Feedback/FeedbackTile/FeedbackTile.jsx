import React, { useEffect } from 'react'

import VanillaTilt from 'vanilla-tilt';

import './FeedbackTile.css';

const FeedbackTile = ({ name, position, title, text }) => {

	useEffect(() => {
		VanillaTilt.init(document.querySelectorAll(".feedback_tile"), {
			max: 15,
			speed: 400,
			glare: true,
			"max-glare": 0.1,
		})
	});

	return (
		<div className='feedback_tile whitebgrd'>
			<h2 className='feedback-title'>{name}</h2>
			<h3 className='feedback-subtitle'>{position}</h3>
			<h4 className='title-stars'>{title}</h4>
			<h4 className='stars'>
				<i className="fa-solid fa-star stars-color"></i>
				<i className="fa-solid fa-star stars-color"></i>
				<i className="fa-solid fa-star stars-color"></i>
				<i className="fa-solid fa-star stars-color"></i>
				<i className="fa-solid fa-star stars-color"></i>
			</h4>
			<p className='long-text'>{text}</p>
		</div>
	)
}

export default FeedbackTile;