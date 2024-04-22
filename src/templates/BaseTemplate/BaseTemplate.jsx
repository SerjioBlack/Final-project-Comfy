import React from 'react';
import PropTypes from 'prop-types';

const BaseTemplate = ({title, children, id}) => {
    return (
        <main id={id}>
           {title && <h1 className="mt-lg-5 text-center">{title}</h1>}
           {children}
        </main>
    );
};

BaseTemplate.propTypes = {
    title: PropTypes.string,
    children: PropTypes.element,
    id: PropTypes.string.isRequired,
}

export default BaseTemplate;
