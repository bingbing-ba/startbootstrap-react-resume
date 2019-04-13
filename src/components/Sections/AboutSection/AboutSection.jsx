import React from 'react';
import { ResumeSection } from '../../common';
import SocialIcons from '../../SocialIcons';

/**
 * About Section
 *
 * @author Andrew Dyer <andrewdyer@outlook.com>
 */
const AboutSection = () => (
    <ResumeSection>
        <div className="w-100">
            <h1 className="mb-0">
                Clarence
                <span className="text-primary">Taylor</span>
            </h1>
            <div className="subHeading mb-5">
                3542 Berry Street · Cheyenne Wells, CO 80810 · (317) 585-8468 ·
                <a href="mailto:name@email.com">name@email.com</a>
            </div>
            <p className="lead mb-5">
                I am experienced in leveraging agile frameworks to provide a robust synopsis for
                high level overviews. Iterative approaches to corporate strategy foster
                collaborative thinking to further the overall value proposition.
            </p>
            <SocialIcons />
        </div>
    </ResumeSection>
);

export default AboutSection;
