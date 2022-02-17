import React from 'react';

class Tabs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: 0
        }

        this.changeTab = this.changeTab.bind(this);
    }

    changeTab(num) {
        this.setState({ selected: num });
    }

    render() {
        return  (
            <div className="tabs">
                <h1>Tabs</h1>
                <ul className="headers">
                    <li className={this.state.selected === 0 ? 'activated' : ''} onClick={() => this.changeTab(0)}>{this.props.panes[0].title}</li>
                    <li className={this.state.selected === 1 ? 'activated' : ''} onClick={() => this.changeTab(1)}>{this.props.panes[1].title}</li>
                    <li className={this.state.selected === 2 ? 'activated' : ''} onClick={() => this.changeTab(2)}>{this.props.panes[2].title}</li>
                </ul>
                <ul className="content">
                    <li>{this.props.panes[this.state.selected].content}</li>
                </ul>
            </div>
           
        )
    }
}

export default Tabs;
