import React, { useState, useEffect } from 'react'

import './Feedback.css';
import FeedbackTile from './FeedbackTile/FeedbackTile';

const feedbackData = [{
	name: 'Justine Reverdell',
	position: 'Senior product manager, Deezer',
	title: 'Super experience !',
	text: "J'ai pu collaborer avec Sacha chez Deezer sur le développement d'une plateforme dédiée aux artistes et labels. Sacha est un développeur front-end talentueux sur le plan technique. Il fait preuve d'une très bonne compréhension des problèmes utilisateurs ainsi que d'une forte sensibilité UX/UI. Ils est très impliqué et rigoureux dans son travail et n'hésite pas à proposer des solutions adaptées aux besoins. Son esprit créatif et son oeil pour le design sont d'autant plus d'atouts qui font de lui un excellent collaborateur au quotidien!  Je recommande vivement Sacha à toute personne qui serait à la recherche d'un développeur front-end!"
},
{
	name: 'José Barcelon Godfrey',
	position: 'Fractional Product Manager, Designer & Advisor',
	title: 'Creative and quick',
	text: "Sacha is a versatile front-end engineer and has always shown interest in shipping cool features with quality code. We worked together on several projects at Deezer and I found him creative and quick on his feet."
},
{
	name: 'Dimitri Hauet',
	position: 'Développeur Fullstack, Lumi thd',
	title: 'Une belle decouverte',
	text: "Je collabore avec Sacha sur le développement front-end d'un projet depuis quelques semaines. Sacha est un développeur impliqué et rigoureux dans son travail, sur le plan technique et via ses conseils. Si vous recherchez un développeur front-end compétent et agréable, c’est la personne que vous recherchez !"
}
];

const Feedback = () => {

	const [scrollPosition, setScrollPosition] = useState(0);

	useEffect(() => {
		window.addEventListener('scroll', handleScroll, { passive: true });

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	const handleScroll = () => {
		const position = window.pageYOffset;
		setScrollPosition(position);
	};

	return (
		<div className='Feedback'>
			<h1 className='bigTitle darkfont'>Testimonials</h1>
			<h3 className='subtitles'>They talk about me</h3>
			<ul className='feedback_container'>
				{feedbackData.map((item, key) => (
					<li className='feedback_items' key={key}>
						<FeedbackTile
							name={item.name}
							position={item.position}
							title={item.title}
							text={item.text}
						/>
					</li>
				))}
			</ul>
		</div>
	)
}

export default Feedback