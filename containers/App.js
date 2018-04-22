import React, {Component} from 'react';

let hoverStyle = {}
let appStyle = {}
let tooltipStyle = {}
const ContactRow = ({info, description, clickValues}) => {
	// console.log(description, clickValues)
	return (
    <div style={{ minWidth: '160px'}}>
      <a style={hoverStyle}
				onMouseEnter={()=>info.onMouseEnter()}
				onMouseLeave={()=>info.onMouseLeave()}
				onClick={()=>info.onClick(clickValues)}
			>
				{description}
      </a>
      { info.state.wasClicked || info.state.hover ? <div style={tooltipStyle}>Hi There!!! I have been hovered :</div> : <div /> }
    </div>
  )
}

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

  onClick = (clickValues) => {
		// console.log(clickValues)
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
        backgroundColor: 'white'
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
          <ContactRow info={this} description={'Normal Hover Me'							 } clickValues={{hover:this.set(true)  , wasClicked:this.set(false)}}/>
					<ContactRow info={this} description={'Persistent Hover Click(OFF/ON)'} clickValues={{hover:this.state.hover, wasClicked:this.set(false)}}/>
					<ContactRow info={this} description={'Persistent Hover Click(ON/OFF)'} clickValues={{hover:this.set(false) , wasClicked:this.state.wasClicked}}/>
        </div>
      </div>
    )
  }
}
