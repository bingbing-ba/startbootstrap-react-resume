import React from 'react';
import { ResumeItem, ResumeSection, SectionHeading } from '../../common';

/**
 * Experience Section
 *
 * @author Andrew Dyer <andrewdyer@outlook.com>
 */
const ExperienceSection = () => (
    <ResumeSection name="experience">
        <div className="w-100">
            <SectionHeading heading="Experience" />
            <ResumeItem // mb-5
                heading="Senior Web Developer"
                subHeading="Intelitec Solutions"
                date="March 2013 - Present">
                <p>
                    Bring to the table win-win survival strategies to ensure proactive domination.
                    At the end of the day, going forward, a new normal that has evolved from
                    generation X is on the runway heading towards a streamlined cloud solution. User
                    generated content in real-time will have multiple touchpoints for offshoring.
                </p>
            </ResumeItem>
            <ResumeItem
                heading="Web Developer"
                subHeading="Intelitec Solutions"
                date="December 2011 - March 2013">
                <p>
                    Capitalize on low hanging fruit to identify a ballpark value added activity to
                    beta test. Override the digital divide with additional clickthroughs from
                    DevOps. Nanotechnology immersion along the information highway will close the
                    loop on focusing solely on the bottom line.
                </p>
            </ResumeItem>
            <ResumeItem
                heading="Junior Web Designer"
                subHeading="Shout! Media Productions"
                date="July 2010 - December 2011">
                <p>
                    Podcasting operational change management inside of workflows to establish a
                    framework. Taking seamless key performance indicators offline to maximise the
                    long tail. Keeping your eye on the ball while performing a deep dive on the
                    start-up mentality to derive convergence on cross-platform integration.
                </p>
            </ResumeItem>
            <ResumeItem
                heading="Web Design Intern"
                subHeading="Shout! Media Productions"
                date="September 2008 - June 2010">
                <p>
                    Collaboratively administrate empowered markets via plug-and-play networks.
                    Dynamically procrastinate B2C users after installed base benefits. Dramatically
                    visualize customer directed convergence without revolutionary ROI.
                </p>
            </ResumeItem>
        </div>
    </ResumeSection>
);

export default ExperienceSection;
