import '/src/components/Contact/Contact.css';

const Contact = ({ isVisible, setVisible }) => {

    return (
        <>
            {isVisible === true ? (
                <div className='popup'>
                    <div className='popup-inner'>
                        <div className='infos'>
                            <button className='close-btn' onClick={() => setVisible(false)}>
                                ✕
                            </button>
                            <div className='popup-inner-title'>
                                <h1 className='contact-title'>Thank you for your interest.</h1>
                            </div>
                            <div className='popup-inner-menu'>
                                <div className='popup-inner-items'>
                                    <div className='popup-inner-items-title'>Email</div>
                                    <div><a href="mailto:sacharequiem@live.fr">sacharequiem@live.fr</a></div>
                                </div>
                                <div className='popup-inner-items'>
                                    <div className='popup-inner-items-title'>LinkedIn</div>
                                    <div><a href="https://www.linkedin.com/in/sacharequiem/">In/sacharequiem</a></div>
                                </div>
                                <div className='popup-inner-items'>
                                    <div className='popup-inner-items-title'>Freelance</div>
                                    <div><a href="https://www.malt.fr/profile/sacharequiem">malt/sacha</a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : ""}

        </>
    );
}

export default Contact;