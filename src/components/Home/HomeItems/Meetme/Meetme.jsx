import React from 'react';
import './Meetme.css';
import logo from '/memoji.gif';

const Meetme = () => {
    return (
        <div className="Meetme">
            <img src={logo} alt="loading..." />
            <h2 className='Meetme_titlebig'>Hey, I’m Sacha. Nice to meet you.</h2>
            <h3 className='Meetme_subtitle'>Developer & Design lover<br />
                Javascript & React are my favorites</h3>
        </div>
    )
}



export default Meetme