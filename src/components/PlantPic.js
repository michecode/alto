import React from 'react';
import Placeholder from '../../assets/slicecat.svg';

export default function Plantpic(props) {
    let x='100%', y='100%';
    if(props != null) {
        x = props.width;
        y = props.height
    }

    return (
        <>
            <img src={Placeholder} style={{height: y, width: x}} alt={'picture of specified plant'}/>
        </>
    )
}
