import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faAngular,
    faCss3Alt,
    faGrunt,
    faGulp,
    faHtml5,
    faLess,
    faNpm,
    faNodeJs,
    faReact,
    faSass,
    faJsSquare,
    faWordpress
} from '@fortawesome/free-brands-svg-icons';

/**
 * Technologies List
 *
 * @author Andrew Dyer <andrewdyer@outlook.com>
 */
const TechnologiesList = () => (
    <ul className="list-inline technologies-list">
        <li className="list-inline-item">
            <FontAwesomeIcon icon={faHtml5} />
        </li>
        <li className="list-inline-item">
            <FontAwesomeIcon icon={faCss3Alt} />
        </li>
        <li className="list-inline-item">
            <FontAwesomeIcon icon={faJsSquare} />
        </li>
        <li className="list-inline-item">
            <FontAwesomeIcon icon={faAngular} />
        </li>
        <li className="list-inline-item">
            <FontAwesomeIcon icon={faReact} />
        </li>
        <li className="list-inline-item">
            <FontAwesomeIcon icon={faNodeJs} />
        </li>
        <li className="list-inline-item">
            <FontAwesomeIcon icon={faSass} />
        </li>
        <li className="list-inline-item">
            <FontAwesomeIcon icon={faLess} />
        </li>
        <li className="list-inline-item">
            <FontAwesomeIcon icon={faWordpress} />
        </li>
        <li className="list-inline-item">
            <FontAwesomeIcon icon={faGulp} />
        </li>
        <li className="list-inline-item">
            <FontAwesomeIcon icon={faGrunt} />
        </li>
        <li className="list-inline-item">
            <FontAwesomeIcon icon={faNpm} />
        </li>
    </ul>
);

export default TechnologiesList;
