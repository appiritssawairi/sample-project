import React from 'react';
import PrimaryButton from './atom';

const CardPreset = (props) =>{
    return(
        <div>
            <p>{props.name}</p>
            <PromaryButton 
             label={props.label}
             handleClick={props.handleClick}/>
        </div>
    );
}

export default CardPreset;