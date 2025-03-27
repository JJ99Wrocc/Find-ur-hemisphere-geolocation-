import React from "react";
import './hemisphere.css';
import northPic from './img/northern-hemisphere.png';
import southPic from './img/southern-hemisphere.png';

const hemisphereConfig = {
    'Northern hemisphere': {
        text: 'It is the northern hemisphere',
        picture: northPic
    },
    'Southern hemisphere': {
        text: 'It is the southern hemisphere',
        picture: southPic
    }
};

const HemispreheGlobal = ({latitude}) => {


    const hemisphere = latitude > 0 ? 'Northern hemisphere' : 'Southern hemisphere';
    const {text, picture} = hemisphereConfig[hemisphere];

    return(
        <div className={hemisphere}>
            <div className="ui raised text container segment">
                <div className="image">
                <img src={picture} alt="hemisphere" />
                </div>
                <div className="ui teal bottom attached label">
                    <h1>{text}</h1>
                </div>
            </div>
            
            
        </div>
    );
}

export default HemispreheGlobal;
