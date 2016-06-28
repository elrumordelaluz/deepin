import React, { Component } from 'react';
import appStyles from './App.css';
import ColorPicker from 'coloreact';
import Element from './shared/Element';
import { strokedIcon, filledIcon, strokedIconLayers } from '../icons';
import { deepInColor, deepInStroke } from '../lib';

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      color1: '#f00',
      color2: '#f0f',
      iconStroke: strokedIcon,
      iconStrokeLayers: strokedIconLayers,
      iconFill: filledIcon,
      showSecondary: false,
    }
    this.handleToggleSecondary = this.handleToggleSecondary.bind(this);
    this.handleChangeColor1 = this.handleChangeColor1.bind(this);
    this.handleChangeColor2 = this.handleChangeColor2.bind(this);
    this.handleChangeStrokeWidth = this.handleChangeStrokeWidth.bind(this);
    this.handleChangeStrokeLinecap = this.handleChangeStrokeLinecap.bind(this);
    this.handleChangeStrokeLinejoin = this.handleChangeStrokeLinejoin.bind(this);
  }

  handleToggleSecondary () {
    this.setState({
      showSecondary: !this.state.showSecondary
    })
  }

  handleChangeColor1 (color) {
    this.setState({
      color1: color.hex,
      iconFill: deepInColor(this.state.iconFill, color.hex, this.state.showSecondary ? 'color-2' : null, true),
      iconStroke: deepInColor(this.state.iconStroke, color.hex, this.state.showSecondary ? 'color-2' : null, true),
      iconStrokeLayers: deepInColor(this.state.iconStrokeLayers, color.hex, this.state.showSecondary ? 'color-2' : null, true)
    })
  }

  handleChangeColor2 (color) {
    this.setState({
      color2: color.hex,
      iconFill: deepInColor(this.state.iconFill, color.hex, 'color-2'),
      iconStroke: deepInColor(this.state.iconStroke, color.hex, 'color-2'),
      iconStrokeLayers: deepInColor(this.state.iconStrokeLayers, color.hex, 'color-2'),
    })
  }

  handleChangeStrokeWidth (event) {
    this.setState({
      iconStroke: deepInStroke(this.state.iconStroke, {
        strokeWidth: event.target.value
      }),
      iconStrokeLayers: deepInStroke(this.state.iconStrokeLayers, {
        strokeWidth: event.target.value
      })
    })
  }

  handleChangeStrokeLinejoin (event) {
    this.setState({
      iconStroke: deepInStroke(this.state.iconStroke, {
        strokeLinejoin: event.target.value
      }),
      iconStrokeLayers: deepInStroke(this.state.iconStrokeLayers, {
        strokeLinejoin: event.target.value
      }),
    })
  }

  handleChangeStrokeLinecap (event) {
    this.setState({
      iconStroke: deepInStroke(this.state.iconStroke, {
        strokeLinecap: event.target.value
      }),
      iconStrokeLayers: deepInStroke(this.state.iconStrokeLayers, {
        strokeLinecap: event.target.value
      })
    })
  }

  render () {
    return (
      <div className="app">
        <div className="controls">
          width
          <input
            type="number"
            defaultValue="1"
            max="4"
            min="1"
            step="1"
            onChange={this.handleChangeStrokeWidth}/>
          {' '}
          linecap
          {' '}
          <label>
            round
            <input
              type="radio"
              name="linecap"
              onChange={this.handleChangeStrokeLinecap}
              value="round"/>
          </label>
          <label>
            square
            <input
              type="radio"
              name="linecap"
              onChange={this.handleChangeStrokeLinecap}
              value="square"/>
          </label>
          {' '}
          linejoin
          {' '}
          <label>
            round
            <input
              type="radio"
              name="linejoin"
              onChange={this.handleChangeStrokeLinejoin}
              value="round"/>
          </label>
          <label>
            miter
            <input
              type="radio"
              name="linejoin"
              onChange={this.handleChangeStrokeLinejoin}
              value="miter"/>
          </label>

          <button onClick={this.handleToggleSecondary}>color2</button>
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
          <Element obj={this.state.iconStrokeLayers.paths} />
        </div>

        <div className="icon">
          <Element obj={this.state.iconFill.paths} />
        </div>

      </div>
    );
  }
}

export default App;
