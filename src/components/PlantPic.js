import React from 'react';
// import Placeholder from '../../assets/slicecat.svg';

export default function Plantpic(props) {
  let x = 'auto',
    y = 'auto',
    source = 'slicecat',
    name = 'specified plant';
  if (props != null) {
    x = props.width;
    y = props.height;
    name = props.name;
    source = props.id;
  }

  try {
    if(props.filtering != null && props.filtering)
        source = require('../../assets/4filtering/' + source + '.svg');
    else
        source = require('../../assets/' + source + '.svg');
    console.log(source);
  } catch (e) {
    if (e.code !== 'MODULE_NOT_FOUND') throw e;
    console.log(
      'Could not find ' + source + '.svg falling back to slicecat.svg'
    );
    source = require('../../assets/slicecat.svg');
    console.log(source);
  }

  // might need later
  // style={{height: y, width: x}}
  return (
    <>
      {/* I use string concat here because it wont work otherwise lol */}
      <img src={source} style={{height: y, width: x}} alt={`${name}`} />
    </>
  );
}
