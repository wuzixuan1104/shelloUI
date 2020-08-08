import React from 'react';
import { Wrapper } from './style';
import PropTypes from 'prop-types';

const Header = ({ title, color }) => {
  return (
    <Wrapper color={color}>
      <h1>{title}</h1>
      {/* <ChoresBlock>
        <span>123</span>
        <Spliter></Spliter>
        <span>哈哈哈</span>
      </ChoresBlock> */}
    </Wrapper>
  );
};

Header.displayName = 'Header';
Header.propTypes = {
  title: PropTypes.string,
  color: PropTypes.string,
};
Header.defaultProps = {
  title: null,
  color: 'white',
};

export default Header;
