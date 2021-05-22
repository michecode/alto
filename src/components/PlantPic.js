import React from 'react';
// import Placeholder from '../../assets/slicecat.svg';

export default function Plantpic(props) {
    let x='100%', y='auto', source='slicecat', name='specified plant';
    if(props != null) {
        x = props.width;
        y = props.height;
        name = props.name;
        source = props.id;
    }

    return (
        <>
            {/* I use string concat here because it wont work otherwise lol */}
            <img src={require('../../assets/' + source + '.svg')} style={{height: y, width: x}} alt={`${name}`}/>
        </>
    )
}
