import React from 'react';
import { ResumeItem, ResumeSection, SectionHeading } from '../../common';

/**
 * Education Section
 *
 * @author Andrew Dyer <andrewdyer@outlook.com>
 */
const EducationSection = () => (
    <ResumeSection name="education">
        <div className="w-100">
            <SectionHeading heading="Education" />
            <ResumeItem //mb-5
                heading="University of Colorado Boulder"
                subHeading="Bachelor of Science"
                date="August 2006 - May 2010">
                <div>
                    <div>Computer Science - Web Development Track</div>
                    <p>GPA: 3.23</p>
                </div>
            </ResumeItem>
            <ResumeItem
                heading="James Buchanan High School"
                subHeading="Technology Magnet Program"
                date="August 2002 - May 2006">
                <p>GPA: 3.56</p>
            </ResumeItem>
        </div>
    </ResumeSection>
);

export default EducationSection;
