import React from 'react';
import { string } from 'prop-types';

/**
 * Section Heading
 *
 * @author Andrew Dyer <andrewdyer@outlook.com>
 */
const SectionHeading = ({ heading }) => <h2 className="mb-5">{heading}</h2>;

SectionHeading.propTypes = {
    heading: string.isRequired
};

export { SectionHeading };
