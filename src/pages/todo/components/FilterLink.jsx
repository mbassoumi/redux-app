import PropTypes from 'prop-types'
import React from 'react';


const FilterLink = ({onClick, children}) => {

    return (
        <div>
            <a href="#" onClick={(e) => {
                e.preventDefault();
                onClick();
            }}>
                {children}
            </a>
        </div>
    )
};

FilterLink.propTypes = {
    children: PropTypes.any,
    onClick: PropTypes.func.isRequired
};

export default FilterLink;
