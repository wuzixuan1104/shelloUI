import styled from 'styled-components';

const Wrapper = styled('div')`
  position: relative;
  display: flex;
  flex-direction: column;
  width: ${(props) => (props.width || 256) + 'px'};
  padding: 6px 8px;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0 1px 0 rgba(9, 30, 66, 0.25);
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    color: rgba(8, 30, 66, 1);
    background: rgb(244 245 247);
    border-bottom-color: rgba(9, 30, 66, 0.25);
  }
`;

const Tag = styled('label')`
  width: 40px;
  height: 8px;
  margin-bottom: 10px;
  border-radius: 30px;
  background: ${(props) => props.color || 'rgba(97, 189, 79, 1)'};
`;

const Title = styled('span')`
  font-size: 14px;
  color: rgba(22, 43, 77, 1);
`;

const EditBlock = styled('span')`
  position: absolute;
  top: 10px;
  right: 10px;
  width: ${(props) => props.size + 'px'};
  height: ${(props) => props.size + 'px'};
  background: transparent;

  > svg {
    width: ${(props) => props.size - 2 + 'px'};
    height: ${(props) => props.size - 2 + 'px'};

    path {
      fill: gray;
    }
  }
`;

export { Wrapper, Tag, Title, EditBlock };
