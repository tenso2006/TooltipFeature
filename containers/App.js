import React, {Component} from 'react';

export default class App extends Component {

  constructor (props) {
    super (props);
    this.state = {
      hover: false
    }
  }

  handleHover = (e) => {
    this.setState({
      hover: !this.state.hover
    })
  }

  render () {
    let hoverStyle;
    let tooltipStyle;
    let appStyle = {
      textAlign: 'center',
      lineHeight: '50px'
    }
    if (this.state.hover) {
      hoverStyle = {
        backgroundColor: 'blue',
        color: 'white'
      }
      tooltipStyle = {
        boxShadow: '3px 2px 3px 3px green',
        width: '150px',
        paddingTop: '1rem',
        margin: '30px auto',
        borderRadius: '3px',
        backgroundColor: 'grey'

      }
    } else {
      hoverStyle = {
        backgroundColor: 'white',

      }
      tooltipStyle = {
        boxShadow: '1px 1px 1px white',
        width: '150px',
        paddingTop: '1rem',
        margin: '30px auto',
        borderRadius: '3px'
      }
    }
    return (
      <div style={appStyle}>
        <h3>Tool Tip App</h3>
        <a style={hoverStyle}
          onMouseEnter={this.handleHover}
          onMouseLeave={this.handleHover}>Hover Me
        </a>
        {this.state.hover ?
          <div style={tooltipStyle}>Hi There!!! I have been hovered :)</div>
          :
          <div />
        }
      </div>
    )
  }
}
