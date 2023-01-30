import '/src/components/Contact/Contact.css';

const Contact = ({ isVisible, setVisible }) => {

    return (
        <>
            {isVisible === true ? (
                <div className='Contact'>
                    <div className='contact-title'>
                        <h1 className='contact-title'>Thank you for your interest.</h1>
                        {/* <h2>Hits the links bellow to reach me</h2> */}
                    </div>
                    <h3>Hits the links bellow to reach me.</h3>
                    <div className='infos'>
                        {/* <button className='close-btn' onClick={() => setVisible(false)}>
                            ✕
                        </button> */}
                        <div className='contact-inner-menu'>
                            <div className='contact-inner-items'>
                                <div className='contact-inner-items-title'>Email</div>
                                <div><a href="mailto:sacharequiem@live.fr">sacharequiem@live.fr</a></div>
                            </div>
                            <div className='contact-inner-items'>
                                <div className='contact-inner-items-title'>LinkedIn</div>
                                <div><a href="https://www.linkedin.com/in/sacharequiem/">In/sacharequiem</a></div>
                            </div>
                            <div className='contact-inner-items'>
                                <div className='contact-inner-items-title'>Freelance</div>
                                <div><a href="https://www.malt.fr/profile/sacharequiem">malt/sacha</a></div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : ""}

        </>
    );
}

export default Contact;