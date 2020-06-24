import React from 'react';
import '../index.css';

const Square = ({ number }) => {

  //check to see if the square is an even or odd square. if so then render the appropriate classNAme depending sqr  number
  let className = 'square ';
  let rowNum = Math.ceil(number / 8);
  if (rowNum % 2) {
    className += 'odd';
    // console.log('even clasName',number)
  } else {
    className += 'even';
    // console.log('odd clasName',number)
  }
  return <div className={className}>{number}</div>;
};

export default Square;
