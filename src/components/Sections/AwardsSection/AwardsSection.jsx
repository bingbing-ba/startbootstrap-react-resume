import React from 'react';
import { ResumeSection, SectionHeading } from '../../common';
import AwardsListItem from './AwardsListItem';

/**
 * Awards Section
 *
 * @author Andrew Dyer <andrewdyer@outlook.com>
 */
const AwardsSection = () => (
    <ResumeSection name="awards">
        <div className="w-100">
            <SectionHeading heading="Awards &amp; Certifications" />
            <ul className="fa-ul mb-0">
                <AwardsListItem item="Google Analytics Certified Developer" />
                <AwardsListItem item="Mobile Web Specialist - Google Certification" />
                <AwardsListItem item="1st Place - University of Colorado Boulder - Emerging Tech Competition 2009" />
                <AwardsListItem item="1st Place - University of Colorado Boulder - Adobe Creative Jam 2008 (UI Design Category)" />
                <AwardsListItem item="2nd Place - University of Colorado Boulder - Emerging Tech Competition 2008" />
                <AwardsListItem item="1st Place - James Buchanan High School - Hackathon 2006" />
                <AwardsListItem item="3rd Place - James Buchanan High School - Hackathon 2005" />
            </ul>
        </div>
    </ResumeSection>
);

export default AwardsSection;
