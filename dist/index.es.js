import React from 'react';
import styled from 'styled-components';

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

export { Button };
//# sourceMappingURL=index.es.js.map
