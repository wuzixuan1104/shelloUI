'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault(ex) {
  return ex && typeof ex === 'object' && 'default' in ex ? ex['default'] : ex;
}

var React = _interopDefault(require('react'));
var styled = _interopDefault(require('styled-components'));

var Wrapper = styled('div').withConfig({
  displayName: 'style__Wrapper',
  componentId: 'g9uyn1-0',
})(['padding:8px 0 0;background:red;']);

/**
 *
 * Button
 *
 */

var Button = function Button(_ref) {
  var onClick = _ref.onClick;
  return /*#__PURE__*/ React.createElement(
    Wrapper,
    {
      onClick: onClick,
    },
    /*#__PURE__*/ React.createElement('button', null, 'haha'),
  );
};

Button.displayName = 'Button';
Button.propTypes = {};

exports.Button = Button;
//# sourceMappingURL=index.js.map
