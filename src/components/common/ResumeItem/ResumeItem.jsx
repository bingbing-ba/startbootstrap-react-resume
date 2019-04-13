import React from 'react';
import { element, string } from 'prop-types';

/**
 * Resume Item
 *
 * @author Andrew Dyer <andrewdyer@outlook.com>
 */
const ResumeItem = ({ heading, subHeading, children, date }) => (
    <div className="resume-item d-flex flex-column flex-md-row justify-content-between">
        <div className="resume-content">
            <h3 className="mb-0">{heading}</h3>
            <div className="subHeading mb-3">{subHeading}</div>
            <div className="resume-content ">{children}</div>
        </div>
        <div className="resume-date text-md-right">
            <span className="text-primary">{date}</span>
        </div>
    </div>
);

ResumeItem.propTypes = {
    children: element.isRequired,
    date: string,
    subHeading: string,
    heading: string
};

ResumeItem.defaultProps = {
    date: '',
    subHeading: '',
    heading: ''
};

export { ResumeItem };
