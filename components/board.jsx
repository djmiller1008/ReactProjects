import React from 'react';
import Tile from './tile';

class Board extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            this.props.board.grid.map((row, i) => {
                return (<ul id='row' key={i}>{this.renderTile(row)}</ul>)
            })
        )
    }

    renderTile(row) {
        return(
            row.map((tile, i) => {
                return(<li id='tile' key={i}>
                        <Tile tile={tile} updateGame={this.props.update} />
                            </li>)
            })
        )
    }
      
}

export default Board;