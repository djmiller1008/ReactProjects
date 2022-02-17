import React from 'react';
import * as Minesweeper from '../minesweeper';
import Board from './board';

class Game extends React.Component {
    constructor() {
        super();
        const board = new Minesweeper.Board(8, 8);
        
        this.state = { board: board };

        this.updateGame = this.updateGame.bind(this);
        this.restart = this.restart.bind(this);
    }

    restart(e) {
        e.preventDefault();
        const board = new Minesweeper.Board(8, 8);
        this.setState({ board: board });
    }

    updateGame(tile, flagging) {
        if (flagging) {
            tile.toggleFlag(); 
        } else {
            tile.explore();
        }
        
        this.setState({ board: this.state.board })
        
    }

    render() {
        let modal;
        if (this.state.board.lost()) {
            modal = <div className='modal-screen'>
                        <section className='modal-form'>
                            <p>Sorry you lost!</p>
                            <button onClick={this.restart}>Play again?</button>
                        </section>
        
                    </div>
        } else if (this.state.board.won()) {
            modal = <div className='modal-screen'>
                        <section className='modal-form'>
                            <p>You won!</p>
                            <button onClick={this.restart}>Play again?</button>
                        </section>
                    </div>
        }
        return (
            <div className="board">
                <Board board={this.state.board} update={this.updateGame}/>
                {modal}
            </div>
        )
    }
}

export default Game;