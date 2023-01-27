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
                            <div className='title contact-title'>Contact</div>
                            <div className='menu'>
                                <div className='items'>
                                    <p className='title items-title'>Email</p>
                                    <a href="mailto:sacharequiem@live.fr">sacharequiem@live.fr</a>
                                </div>
                                <div className='items'>
                                    <p className='title items-title'>LinkedIn</p>
                                    <a href="https://www.linkedin.com/in/sacharequiem/">linkedIn/sacharequiem</a>
                                </div>
                                <div className='items'>
                                    <p className='title items-title'>Freelance</p>
                                    <a href="https://www.malt.fr/profile/sacharequiem">malt/sacharequiem</a>
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