import React, { Component } from 'react';
import appStyles from './App.css';
import ColorPicker from 'coloreact';
import Element from './shared/Element';
import { strokedIcon, filledIcon } from '../icons';
import { deepInColor, deepInStroke } from '../lib';

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      color1: '#f00',
      color2: '#f0f',
      iconStroke: strokedIcon,
      iconFill: filledIcon,
      showSecondary: false,
    }
    this.handleToggleSecondary = this.handleToggleSecondary.bind(this);
    this.handleChangeColor1 = this.handleChangeColor1.bind(this);
    this.handleChangeColor2 = this.handleChangeColor2.bind(this);
  }

  handleToggleSecondary () {
    this.setState({
      showSecondary: !this.state.showSecondary
    })
  }

  handleChangeColor1 (color) {
    this.setState({
      color1: color.hex,
      iconFill: deepInColor(this.state.iconFill, color.hex, this.state.showSecondary ? 'color-1' : 'all'),
      iconStroke: deepInColor(this.state.iconStroke, color.hex, this.state.showSecondary ? 'color-1' : 'all')
    })
  }

  handleChangeColor2 (color) {
    this.setState({
      color2: color.hex,
      iconFill: deepInColor(this.state.iconFill, color.hex, 'color-2'),
      iconStroke: deepInColor(this.state.iconStroke, color.hex, 'color-2'),
    })
  }

  render () {
    return (
      <div className="app">
        <div className="controls">
          <button onClick={this.handleToggleSecondary}>Show secondary</button>
          <div className="pickers">
            <div className="colorpicker">
              <ColorPicker
                opacity={false}
                color={this.state.color1}
                onChange={this.handleChangeColor1} />
            </div>
            <div className="colorpicker" style={{ opacity: this.state.showSecondary ? 1 : 0  }}>
              <ColorPicker
                opacity={false}
                color={this.state.color2}
                onChange={this.handleChangeColor2} />
            </div>
          </div>
        </div>

        <div className="icon">
          <Element obj={this.state.iconStroke.paths} />
        </div>

        <div className="icon">
          <Element obj={this.state.iconFill.paths} />
        </div>

      </div>
    );
  }
}

export default App;
