import React, { useState, useEffect } from 'react'

import './Feedback.css';

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

        </div>
    )
}

export default Feedback