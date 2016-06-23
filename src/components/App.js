import React, { Component } from 'react';
import appStyles from './App.css';

import Element from './shared/Element';
import { strokedIcon, filledIcon } from '../icons';

import { deepIn } from '../lib';

class App extends Component {
  render () {
    const strokeChanged = deepIn(strokedIcon, 'red');
    const fillChanged = deepIn(filledIcon, 'green')
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
