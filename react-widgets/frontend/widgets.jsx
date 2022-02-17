import React from 'react';
import ReactDOM from 'react-dom';
import Clock from './clock';
import Tabs from './tabs';
import Weather from './weather';
import Autocomplete from './autocomplete';


const panes = [
    {title: 'one', content: 'I am the first'},
    {title: 'two', content: 'Second pane here'},
    {title: 'three', content: 'Third pane here'}
];

const names = [
  'Dave',
  'Kira',
  'Chuck',
  'Alice',
  'Susie',
  'Becky',
  'Pam',
  'Wally',
  'Tim',
  'Paul'
]

function Root() {
    return(
      <div>
        <Clock />
        <div className="second-row">
          <Tabs panes={panes} />
          <Weather />
        </div>

        <div className="third-row">
          <Autocomplete names={names} />
        </div>
       
        
      </div>
    );
  }
  

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root");
    ReactDOM.render(<Root/>, root);
    

});