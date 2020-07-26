import React, { useState } from 'react';
import {
  Wrapper,
  Title,
  CardWrapper,
  NewCardWrapper,
  PlusBlock,
} from './style';
import PropTypes from 'prop-types';
import { ReactComponent as PlusIcon } from '../../icons/outline-plus.svg';

const CardList = ({ children, title, width }) => {
  const [add, setAdd] = useState(false);
  const handleHover = () => {
    setAdd((prev) => !prev);
  };

  return (
    <Wrapper width={width}>
      <Title>{title}</Title>
      <CardWrapper>{children}</CardWrapper>
      <NewCardWrapper onMouseEnter={handleHover} onMouseLeave={handleHover}>
        <PlusBlock size={18} color={add && 'rgba(22, 43, 77, 1)'}>
          <PlusIcon></PlusIcon>
        </PlusBlock>
        <span>新增另一張卡片</span>
      </NewCardWrapper>
    </Wrapper>
  );
};

CardList.displayName = 'CardList';
CardList.propTypes = {
  children: PropTypes.node,
  width: PropTypes.number,
  title: PropTypes.string,
};
CardList.defaultProps = {
  width: 272,
  title: null,
};

export default CardList;
