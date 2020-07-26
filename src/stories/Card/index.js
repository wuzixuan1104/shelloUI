import React, { useState } from 'react';
import { Wrapper, Tag, Title, EditBlock } from './style';
import PropTypes from 'prop-types';
import { ReactComponent as EditPen } from '../../icons/edit-outline.svg';

const Card = ({ width, title, tag, tagColor }) => {
  const [edit, setEdit] = useState(false);
  const handleHover = () => {
    setEdit((prev) => !prev);
  };

  return (
    <Wrapper
      onMouseEnter={handleHover}
      onMouseLeave={handleHover}
      width={width}
    >
      {tag && <Tag color={tagColor}></Tag>}
      <Title>{title}</Title>
      {edit && (
        <EditBlock size={20}>
          <EditPen></EditPen>
        </EditBlock>
      )}
    </Wrapper>
  );
};

Card.displayName = 'Card';
Card.propTypes = {
  width: PropTypes.number,
  tagColor: PropTypes.string,
  title: PropTypes.string,
  tag: PropTypes.bool,
};
Card.defaultProps = {
  width: 256,
  tagColor: null,
  title: null,
  tag: false,
};

export default Card;
