import React from 'react';
import linkedinIcon from '../../assets/image/Vector.png';
import githubIcon from '../../assets/image/Vector (1).png';
import mailIcon from '../../assets/image/fluent_mail-20-filled.png';
import twitterIcon from '../../assets/image//Vector (2).png';

const Footer = () => {
    return (
        <footer>
            <div className="Contactlog">
                <a href="https://www.linkedin.com/in/munyeshuri-manzi-70715420b/">
                    <img src={linkedinIcon} alt="LinkedIn" />
                </a>
                <a href="https://github.com/MUNYESHURImanzi">
                    <img src={githubIcon} alt="GitHub" />
                </a>
                <a href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox">
                    <img src={mailIcon} alt="Email" />
                </a>
                <a href="https://twitter.com/m_munyeshuri">
                    <img src={twitterIcon} alt="Twitter" />
                </a>
            </div>
            <p>&copy; 2024 My Blog. All rights reserved.</p>
        </footer>
    );
};

export default Footer;
