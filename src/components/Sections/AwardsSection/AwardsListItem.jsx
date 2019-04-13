import React, { Fragment } from 'react';
import { string } from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrophy } from '@fortawesome/free-solid-svg-icons';

/**
 * Awards List Item
 *
 * @author Andrew Dyer <andrewdyer@outlook.com>
 */
const AwardsListItem = ({ item }) => (
    <Fragment>
        <li>
            <FontAwesomeIcon icon={faTrophy} className="text-warning" />
            {item}
        </li>
    </Fragment>
);

AwardsListItem.propTypes = {
    item: string.isRequired
};

export default AwardsListItem;
