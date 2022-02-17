import React from "react";

class Autocomplete extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            inputVal: ""
        }
        this.handleInput = this.handleInput.bind(this);
        this.selectName = this.selectName.bind(this);
    }

    handleInput(event) {
        this.setState({ inputVal: event.currentTarget.value });
    }

    selectName(event) {
        this.setState({ inputVal: event.currentTarget.innerText })
    }

    matches() {
        let matches = [];
        if (this.state.inputVal.length === 0) {
            return this.props.names;
        } 

        this.props.names.forEach(name => {
            let subStringOfName = name.slice(0, this.state.inputVal.length);
            if (subStringOfName.toLowerCase() === this.state.inputVal.toLowerCase()) {
                matches.push(name);
            }
        })

        if (matches.length === 0) {
            matches.push('no matches');
        }

        return matches;
        
    }

    render() {
        const names = this.matches().map((match, i) => {
            return (
                <li className="names-li" onClick={this.selectName} key={i}>{match}</li>
            );
        });

        return (
            <div>
                <h1 className="auto-h1">Autocomplete</h1>
                <div className="auto">
                    <input placeholder="Search..." value={this.state.inputVal} onChange={this.handleInput}></input>
                    <ul className="names-ul">
                        {names}
                    </ul>
            </div>
            </div>
            
        )    
        
    }
}

export default Autocomplete;