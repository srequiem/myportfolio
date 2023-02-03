import React, { useState, useEffect } from 'react'

import './Feedback.css';

const Feedback = () => {

    return (
        <div className='Feedback'>
            <h1 className='bigTitle darkfont'>They talk about me</h1>
            <ul className='item_container'>
                <li className='items'>
                    <div className='items_tile whitebgrd'>
                        <h2 className='feedback-title'>Justine Reverdell</h2>
                        <h3 className='feedback-subtitle'>Senior product manager, Deezer</h3>
                        <h4 className='title-stars'>Super experience !</h4>
                        <h4 className='stars'>
                            <i class="fa-solid fa-star stars-color"></i>
                            <i class="fa-solid fa-star stars-color"></i>
                            <i class="fa-solid fa-star stars-color"></i>
                            <i class="fa-solid fa-star stars-color"></i>
                            <i class="fa-solid fa-star stars-color"></i>
                        </h4>
                        <p className='long-text'>"J'ai pu collaborer avec Sacha chez Deezer sur le développement
                            d'une plateforme dédiée aux artistes et labels.
                            Sacha est un développeur front-end talentueux sur le plan technique.
                            Il fait preuve d'une très bonne compréhension des problèmes utilisateurs
                            ainsi que d'une forte sensibilité UX/UI. Ils est très impliqué et
                            rigoureux dans son travail et n'hésite pas à proposer des solutions
                            adaptées aux besoins. Son esprit créatif et son oeil pour le design sont
                            d'autant plus d'atouts qui font de lui un excellent collaborateur
                            au quotidien!  Je recommande vivement Sacha à toute personne
                            qui serait à la recherche d'un développeur front-end!"</p>
                    </div>
                </li>
                <li className='items'>
                    <div className='feedback-item-tile whitebgrd'>
                        <h2 className='feedback-title'>Dimitri Hauet</h2>
                        <h3 className='feedback-subtitle'>Développeur Fullstack, Lumi thd</h3>
                        <h4 className='title-stars'>Super experience !</h4>
                        <h4 className='stars'>
                            <i class="fa-solid fa-star stars-color"></i>
                            <i class="fa-solid fa-star stars-color"></i>
                            <i class="fa-solid fa-star stars-color"></i>
                            <i class="fa-solid fa-star stars-color"></i>
                            <i class="fa-solid fa-star stars-color"></i>
                        </h4>
                        <p className='long-text'>"Je collabore avec Sacha sur le développement
                            front-end d'un projet depuis quelques semaines.
                            Sacha est un développeur impliqué et rigoureux dans son travail,
                            sur le plan technique et via ses conseils. Si vous recherchez un
                            développeur front-end compétent et agréable, c’est la personne que
                            vous recherchez !"</p>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default Feedback