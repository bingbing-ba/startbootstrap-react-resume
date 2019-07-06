import React from 'react';
import { element, string } from 'prop-types';
import { Element } from 'react-scroll';

/**
 * Resume Section
 *
 * @author Andrew Dyer <andrewdyer@outlook.com>
 */
const ResumeSection = ({ name, children }) => (
    <Element name={name} className="resume-section p-3 p-lg-5 d-flex align-items-center">
        {children}
    </Element>
);

ResumeSection.propTypes = {
    name: string.isRequired,
    children: element.isRequired
};

export { ResumeSection };
