import React, { Component } from 'react';
import appStyles from './App.css';

import Element from './shared/Element';
import { strokedIcon, filledIcon } from '../icons';

import { deepIn } from '../lib';

class App extends Component {
  render () {
    deepIn(strokedIcon)
    return (
      <div className="app">

        <div className="icon">
          <Element obj={strokedIcon} />
        </div>

        <div className="icon">
          <Element obj={filledIcon} />
        </div>

      </div>
    );
  }
}

export default App;
