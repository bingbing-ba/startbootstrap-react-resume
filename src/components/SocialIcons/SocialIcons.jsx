import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faGithub, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons';

/**
 * Social Icons
 *
 * @author Andrew Dyer <andrewdyer@outlook.com>
 */
const SocialIcons = () => (
    <div className="social-icons">
        <a href="/">
            <FontAwesomeIcon icon={faLinkedinIn} />
        </a>
        <a href="/">
            <FontAwesomeIcon icon={faGithub} />
        </a>
        <a href="/">
            <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a href="/">
            <FontAwesomeIcon icon={faFacebookF} />
        </a>
    </div>
);

export default SocialIcons;
