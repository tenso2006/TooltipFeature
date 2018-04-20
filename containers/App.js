import React, {Component} from 'react';

export default class App extends Component {

  constructor (props) {
    super (props);
    this.state = {
      hover: false,
      wasClicked: false
    }
  }

  onMouseEnter = (e) => {
    this.setState({
      hover: true
    })
  }
  onMouseLeave = (e) => {
    this.setState({
      hover: false
    })
  }
  onClick = (hover, wasClicked) => {
    this.setState({
      hover: !hover,
      wasClicked: !wasClicked
    })
  }

  render () {
    let hoverStyle;
    let tooltipStyle;
    let appStyle = {
      textAlign: 'center',
      lineHeight: '50px',
      display: 'flex',
      justifyContent: 'space-around'
    }
    if (this.state.wasClicked || this.state.hover) {
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
      <div style={{textAlign:'center'}}>
        <h3 >Tool Tip App</h3>
        <div style={appStyle}>
          <div>
            <a style={hoverStyle}
              onMouseEnter={()=>this.onMouseEnter()}
              onMouseLeave={()=>this.onMouseLeave()}
              >
                Normal Hover Me
            </a>
            {this.state.hover ? <div style={tooltipStyle}>Hi There!!! I have been hovered :)</div> : <div /> }
          </div>
          <div>
            <a style={hoverStyle}
              onMouseEnter={()=>this.onMouseEnter()}
              onClick={()=>this.onClick(this.state.hover, true)}>
                Persistent Hover Click(OFF/ON)
            </a>
            {this.state.hover ? <div style={tooltipStyle}>Hi There!!! I have been hovered :)</div> : <div /> }
          </div>
          <div>
            <a style={hoverStyle}
              onMouseEnter={()=>this.onMouseEnter()}
              onMouseLeave={()=>this.onMouseLeave()}
              onClick={()=>this.onClick(true, this.state.wasClicked)}>
                Persistent Hover Click(ON/OFF)
            </a>
            { this.state.wasClicked || this.state.hover ? <div style={tooltipStyle}>Hi There!!! I have been hovered :)</div> : <div /> }
          </div>
        </div>
      </div>
    )
  }
}
