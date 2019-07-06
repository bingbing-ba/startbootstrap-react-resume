import React from 'react';
import { ResumeSection, SectionHeading, SectionSubHeading } from '../../common';
import SkillsListItem from './SkillsListItem';
import TechnologiesList from '../../TechnologiesList';

/**
 * Skills Section
 *
 * @author Andrew Dyer <andrewdyer@outlook.com>
 */
const SkillsSection = () => (
    <ResumeSection name="skills">
        <div className="w-100">
            <SectionHeading heading="Skills" />
            <SectionSubHeading subHeading="Programming Languages &amp; Tools" />
            <TechnologiesList />
            <SectionSubHeading subHeading="Workflow" />
            <ul className="fa-ul mb-0">
                <SkillsListItem item="Mobile-First, Responsive Design" />
                <SkillsListItem item="Cross Browser Testing &amp; Debugging" />
                <SkillsListItem item="Cross Functional Teams" />
                <SkillsListItem item="Agile Development &amp; Scrum" />
            </ul>
        </div>
    </ResumeSection>
);

export default SkillsSection;
