import React from 'react';
import './Footer.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'; // Icônes GitHub et LinkedIn
import { faFileAlt } from '@fortawesome/free-solid-svg-icons'; // Icône CV

const Footer = () => {
    return (
        <footer id="footer"className="footer">
            <div className="footer-content">
                <div className="footer-info">
                    <h2>Wiam BOUCHAIB</h2>
                </div>
                <div className="footer-links">
                    <a href="https://www.linkedin.com/in/wiam-bouchaib-93a984162/" target="_blank" title="Contactez-moi">
                        <FontAwesomeIcon icon={faLinkedin} /> {/* Icône LinkedIn */}
                    </a>
                    <a href="https://github.com/Wiam-Bou" target="_blank" rel="noopener noreferrer" title="GitHub">
                        <FontAwesomeIcon icon={faGithub} /> {/* Icône GitHub */}
                    </a>
                    <a href="https://www.doyoubuzz.com/wiam-bouchaib" target="_blank" rel="noopener noreferrer" title="Télécharger mon CV">
                        <FontAwesomeIcon icon={faFileAlt} /> {/* Icône CV */}
                    </a>
                </div>
                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} Réalisé par Wiam BOUCHAIB. Tous droits réservés.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;