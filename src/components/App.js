import React, { Component } from 'react';
import appStyles from './App.css';

import Element from './shared/Element';
import { strokedIcon, filledIcon } from '../icons';

import { deepInColor, deepInStroke } from '../lib';

class App extends Component {
  render () {
    const strokeChanged = deepInColor(strokedIcon, 'red');
    console.log(deepInStroke(strokedIcon, {
      strokeWidth: 1,
      stroke: 'red'
    }))
    const fillChanged = deepInColor(filledIcon, 'green', 'color-2')
    return (
      <div className="app">

        <div className="icon">
          <Element obj={strokeChanged.paths} />
        </div>

        <div className="icon">
          <Element obj={fillChanged.paths} />
        </div>

      </div>
    );
  }
}

export default App;
