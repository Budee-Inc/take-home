import React from 'react';
import '../index.css';

const Square = ({ number }) => {
  // let singleSqr = Math.ceil(number / 8);
  // let className = 'square';
  // if (singleSqr % 2 === 0 || singleSqr === 0) {
  //   className += 'even';
  //   // console.log('evensquare', className);
  // } else {
  //   className += 'odd';
  //   // console.log('oddsquare', className);
  // }
//check to see if the square is an even or odd square. if so then render the appropriate classNAme depending sqr  number
  let className = 'square';
  if (number % 2 === 0 || number === 0) {
    className += 'even';
    console.log('even clasName',number)
  } else {
    className += 'odd';
    console.log('odd clasName',number)
  }
  return (
    <div className="square">
      <button className={className}></button>
    </div>
  );
};

export default Square;
