import React from 'react'

//import children components here
import Square from './Square'

const Row = ({ number }) => {
  // push into the row array a square until it has 8 inside the row
  const row = [];
  for (let i = 0; i < 8; i++){
    row.push(<Square key={i} number={(number)*8+i}/>)
  }
  return (
    <div className="row">{row}   
    </div>
  )
}

export default Row;
