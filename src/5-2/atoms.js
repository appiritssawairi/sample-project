import React, {Component} from 'react';

export default (props) => <h2>{props.heading}</h2>;

import React from 'react';

const PrimaryButton = ({handleClick,label}) => {
    return(
        <button onClick={handleClick,label}>
            {label}
        </button>
    );
}

export default PrimaryButton;