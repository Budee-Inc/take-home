import React from 'react';
import '../index.css';

const Square = ({ number }) => {

  //check to see if the square is an even or odd square. if so then render the appropriate classNAme depending sqr  number
  let className = 'square';
  
  if (number % 2 === 0 || number === 0) {
    className += 'even';
  } else {
    className += 'odd';
  }
  return <div className={className}>{number}</div>;
};

export default Square;
