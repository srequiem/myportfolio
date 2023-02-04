import React, { useState, useEffect } from 'react'

import './Feedback.css';
import FeedbackTile from './FeedbackTile/FeedbackTile';

const feedbackData = [{
    name: 'Justine Reverdell',
    position: 'Senior product manager, Deezer',
    title: 'Super experience !',
    text: "J'ai pu collaborer avec Sacha chez Deezer sur le développement d'une plateforme dédiée aux artistes et labels. Sacha est un développeur front-end talentueux sur le plan technique. Il fait preuve d'une très bonne compréhension des problèmes utilisateurs ainsi que d'une forte sensibilité UX/UI. Ils est très impliqué et rigoureux dans son travail et n'hésite pas à proposer des solutions adaptées aux besoins. Son esprit créatif et son oeil pour le design sont d'autant plus d'atouts qui font de lui un excellent collaborateur au quotidien!  Je recommande vivement Sacha à toute personne qui serait à la recherche d'un développeur front-end!"
}, {
    name: 'Dimitri Hauet',
    position: 'Développeur Fullstack, Lumi thd',
    title: 'Une belle decouverte',
    text: "Je collabore avec Sacha sur le développement front-end d'un projet depuis quelques semaines. Sacha est un développeur impliqué et rigoureux dans son travail, sur le plan technique et via ses conseils. Si vous recherchez un développeur front-end compétent et agréable, c’est la personne que vous recherchez !"
}];

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

    console.log('scrollPosition: ', scrollPosition);

    return (
        <div className='Feedback'>
            <h1 className='bigTitle darkfont'>They talk about me</h1>
            <ul className='item_container'>
                {feedbackData.map((item, key) => (
                    <li className='items' key={key}>
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