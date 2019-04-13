import React from 'react';
import { Container } from 'reactstrap';
import { SectionDivider } from './components/common';
import Navigation from './components/Navigation';
import AboutSection from './components/Sections/AboutSection';
import AwardsSection from './components/Sections/AwardsSection';
import EducationSection from './components/Sections/EducationSection';
import ExperienceSection from './components/Sections/ExperienceSection';
import InterestsSection from './components/Sections/InterestsSection';
import SkillsSection from './components/Sections/SkillsSection';

/**
 * App
 *
 * @author Andrew Dyer <andrewdyer@outlook.com>
 */
const App = () => (
    <div className="app">
        <Navigation />
        <Container fluid className="p-0">
            {/* About Section */}
            <AboutSection />
            <SectionDivider />

            {/* Experience Section */}
            <ExperienceSection />
            <SectionDivider />

            {/* Education Section */}
            <EducationSection />
            <SectionDivider />

            {/* Skills Section */}
            <SkillsSection />
            <SectionDivider />

            {/* Interests Section */}
            <InterestsSection />
            <SectionDivider />

            {/* Awards Section */}
            <AwardsSection />
        </Container>
    </div>
);

export default App;
