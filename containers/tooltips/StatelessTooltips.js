import React, {Component} from 'react';
export const MouseOverClickHover = ({info, description, clickValues, hoverStyle, tooltipStyle}) => {
	// console.log(description, clickValues)
	return (
    <div style={{ minWidth: '160px'}}>
      <a style={hoverStyle}
        onMouseEnter={() => info.onMouseEnter()}
        onMouseLeave={() => info.onMouseLeave(clickValues.hover)}
        onClick={ () => info.onClick(clickValues)}
      >
        {description}
      </a>
      { info.state.wasClicked || info.state.hover ? <div style={tooltipStyle}>Hi There!!! I have been hovered :</div> : <div /> }
    </div>
  )
}

export const NumericHover = ({info, description, hoverVal, hoverStyle, tooltipStyle}) => {
  // console.log(description, clickValues)
  return (
    <div style={{ minWidth: '160px'}}>
      <a style={hoverStyle}
        onMouseEnter={()=>info.onMouseMany(hoverVal)}
        onMouseLeave={()=>info.onMouseLeave()}
      >
        {description}
      </a>
      { info.state.hoverVal > hoverVal-1 ? <div style={tooltipStyle}>Hi There!!! I have been hovered :</div> : <div /> }
    </div>
  )
}
