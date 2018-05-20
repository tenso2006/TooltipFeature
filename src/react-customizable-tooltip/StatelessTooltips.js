'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NumericHover = exports.MouseOverClickHover = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MouseOverClickHover = exports.MouseOverClickHover = function MouseOverClickHover(_ref) {
  var info = _ref.info,
      description = _ref.description,
      clickValues = _ref.clickValues,
      hoverStyle = _ref.hoverStyle,
      tooltipStyle = _ref.tooltipStyle;

  // console.log(description, clickValues)
  return _react2.default.createElement(
    'div',
    { style: { minWidth: '160px' } },
    _react2.default.createElement(
      'a',
      { style: hoverStyle,
        onMouseEnter: function onMouseEnter() {
          return info.onMouseEnter();
        },
        onMouseLeave: function onMouseLeave() {
          return info.onMouseLeave(clickValues.hover);
        },
        onClick: function onClick() {
          return info.onClick(clickValues);
        }
      },
      description
    ),
    info.state.wasClicked || info.state.hover ? _react2.default.createElement(
      'div',
      { style: tooltipStyle },
      'Hi There!!! I have been hovered :'
    ) : _react2.default.createElement('div', null)
  );
};

var NumericHover = exports.NumericHover = function NumericHover(_ref2) {
  var info = _ref2.info,
      description = _ref2.description,
      hoverVal = _ref2.hoverVal,
      hoverStyle = _ref2.hoverStyle,
      tooltipStyle = _ref2.tooltipStyle;

  // console.log(description, clickValues)
  return _react2.default.createElement(
    'div',
    { style: { minWidth: '160px' } },
    _react2.default.createElement(
      'a',
      { style: hoverStyle,
        onMouseEnter: function onMouseEnter() {
          return info.onMouseMany(hoverVal);
        },
        onMouseLeave: function onMouseLeave() {
          return info.onMouseLeave();
        }
      },
      description
    ),
    info.state.hoverVal > hoverVal - 1 ? _react2.default.createElement(
      'div',
      { style: tooltipStyle },
      'Hi There!!! I have been hovered :'
    ) : _react2.default.createElement('div', null)
  );
};

