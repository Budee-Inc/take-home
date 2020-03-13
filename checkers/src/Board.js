import React from 'react';

function Square(props) {

    const squareClassees = props['squareClasses'];
    const onClick = props['onClick'];

    return (
        <button className = { "square" + (squareClassees) } onClick={onClick} />
    );
}

export default class Board extends React.Component {
    
    renderSquare(coordinates, squareClassees) {
        return (
            <Square
                key = {coordinates}
                squareClassees = {squareClassees}
                onClick = {() => this.props.onClick(coordinates) }
            />
        );
    }

    redner() {
        let boardRender = [];
        let columnsRender = [];

        const moves = this.props.move;
        
        for(let coordinates in this.props.boardState) {

            if (!this.props.boardState.hasOwnProperty(coordinates)) {
                continue;
            }

            const col = utils.getColAsInt(this.props.columns, coordinates);
            const row = utils.getRowAsInt(coordinates);

            const currentPlayer = utils.returnPlayerName(this.props.currentPlayer);

            const colorClass  = ( (utils.isOdd(col) && utils.isOdd(row)) || (!utils.isOdd(col) && !(utils.isOdd(row)) ) ) ? 'white' : 'black';

            let squareClasses = [];

            squareClasses.push(coordinates);
            squareClasses.push(colorClass);

            if (this.props.activePiece === coordinates) {
                squareClasses.push('isActive');
            }

            if (moves.indexOf(coordinates) > -1) {
                let moveClass = 'movable ' + currentPlayer + '-move';
                squareClasses.push(moveClass);
            }

            if (this.props.boardState[coordinates] !== null) {
                squareClasses.push(this.props.boardState[coordinates].player + ' piece');

                if (this.props.boardState[coordinates].isKing === true ) {
                    squareClasses.push('king');
                }
            }

            squareClasses = squareClasses.join(' ');

            columnsRender.push(this.renderSquare(coordinates, squareClasses, this.props.boardState[coordinates]));

            if (columnsRender.length >= 8) {
                columnsRender = columnsRender.reverse();
                boardRender.push(<div key={boardRender.length} className="board-col">{columnsRender}</div>);
                columnsRender = [];
            }
        }

        return (boardRender);
    }
};
