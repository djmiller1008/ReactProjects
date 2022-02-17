import React from 'react';

class Tile extends React.Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        const flagged = e.altKey ? true : false;
        this.props.updateGame(this.props.tile, flagged)
    }

    render() {
        let klass, value;
        if (!this.props.tile.explored && !this.props.tile.flagged) {
            klass = 'unexplored';
        } else {
            
            klass = 'revealed';
            value = this.props.tile.adjacentBombCount();
            if (value === 0) {
                value = " "
            }
            if (this.props.tile.flagged) {
                value = 'F';
            } else if (this.props.tile.bombed) {
                value = 'B';
            }
        }
        return (
            <p onClick={this.handleClick} className={klass}>{value}</p>
        );
    }
}

export default Tile;