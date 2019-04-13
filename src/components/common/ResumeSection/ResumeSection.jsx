import React from 'react';
import { element } from 'prop-types';

/**
 * Resume Section
 *
 * @author Andrew Dyer <andrewdyer@outlook.com>
 */
const ResumeSection = ({ children }) => (
    <section className="resume-section p-3 p-lg-5 d-flex align-items-center">{children}</section>
);

ResumeSection.propTypes = {
    children: element.isRequired
};

export { ResumeSection };
