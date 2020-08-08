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
import Card from '../Card';

const CardList = ({ lists, title, width }) => {
  const [add, setAdd] = useState('');
  const handleHover = () => {
    setAdd((prev) => !prev);
  };

  return (
    <Wrapper width={width}>
      <Title>{title}</Title>
      <CardWrapper>
        {lists.map((v, i) => (
          <Card key={i} {...v}></Card>
        ))}
      </CardWrapper>
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
  width: PropTypes.number,
  title: PropTypes.string,
  lists: PropTypes.array,
};
CardList.defaultProps = {
  width: 272,
  title: null,
};

export default CardList;
