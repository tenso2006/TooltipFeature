import React, {Component} from 'react';
import {MouseOverClickHover, NumericHover} from './../node_modules/react-customizable-tooltip/StatelessTooltips.js';

let hoverStyle, appStyle, tooltipStyle = {}

export default class Example extends Component {

  constructor (props) {
    super (props);
    this.state = {
      hover: false,
      wasClicked: false,
      hoverVal:0
    }
  }

  onMouseEnter = (e) => {
    this.setState({
      hover: true
    })
  }
  onMouseMany = (hoverVal) => {
    this.setState({
      hoverVal: hoverVal
    })
  }

  onMouseLeave = (hover) => {
    this.setState({
      hover: hover,
      hoverVal:0
    })
  }

  onClick = (clickValues) => {
    this.setState({
      hover: !clickValues.hover,
      wasClicked: !clickValues.wasClicked
    })
  }

  set = (val) => {
    return !val
  }

  render () {
    appStyle = {
      textAlign: 'center',
      lineHeight: '50px',
      display: 'flex',
      justifyContent: 'space-around',
      minHeight: '220px'
    }
    if (this.state.wasClicked || this.state.hover || this.state.hoverVal > 0) {
      hoverStyle = {backgroundColor: 'blue',color: 'white'}
      tooltipStyle = {boxShadow: '3px 2px 3px 3px green',width: '150px',margin: '30px auto',borderRadius: '3px',backgroundColor: 'grey'}
    } else {
      hoverStyle = {backgroundColor: 'white'}
      tooltipStyle = {boxShadow: '1px 1px 1px white',width: '150px',margin: '30px auto',borderRadius: '3px'}
    }
    // console.log('hover:',this.state.hover, 'click:',this.state.wasClicked)
    return (
      <div style={{textAlign:'center'}}>
        <h3 >Tool Tip App</h3>
        <div style={appStyle}>
          <MouseOverClickHover info={this} description={'Normal Hover Me'} clickValues={{hover:this.set(true), wasClicked:this.state.wasClicked}}
            hoverStyle={hoverStyle} tooltipStyle={tooltipStyle}
          />
          <MouseOverClickHover info={this} description={'Persistent Hover OFF Click(ON/OFF)'} clickValues={{hover:this.state.wasClicked , wasClicked:this.state.wasClicked}}
            hoverStyle={hoverStyle} tooltipStyle={tooltipStyle}
          />
          <MouseOverClickHover info={this} description={'Persistent Hover ON Click(OFF/ON)'} clickValues={{hover:this.state.hover, wasClicked:this.set(false)}}
            hoverStyle={hoverStyle} tooltipStyle={tooltipStyle}
          />
        </div>
        <div style={appStyle}>
          < NumericHover info={this} description={'Hover ONE'} hoverVal={1}
            hoverStyle={hoverStyle} tooltipStyle={tooltipStyle}
          />
          < NumericHover info={this} description={'Hover ONE and TWO'} hoverVal={2}
            hoverStyle={hoverStyle} tooltipStyle={tooltipStyle}
          />
          < NumericHover info={this} description={'Hover ONE and TWO and THREE'} hoverVal={3}
            hoverStyle={hoverStyle} tooltipStyle={tooltipStyle}
          />
        </div>
      </div>
    )
  }
}
