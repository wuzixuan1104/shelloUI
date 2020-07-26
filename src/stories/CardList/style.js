import styled from 'styled-components';

const Wrapper = styled('div')`
  position: relative;
  display: flex;
  flex-direction: column;
  width: ${(props) => props.width + 'px'};
  background: rgba(235, 236, 240, 1);
  border-radius: 5px;
`;

const CardWrapper = styled('div')`
  display: grid;
  grid-template-row: 1fr;
  grid-gap: 10px;
  padding: 0 10px;
`;

const Title = styled('b')`
  font-size: 15px;
  color: rgba(22, 43, 77, 1);
  padding: 10px 15px;
`;

const NewCardWrapper = styled('div')`
  display: flex;
  align-items: center;
  margin: 10px;
  color: rgba(94, 108, 132, 1);
  font-size: 14px;
  padding: 5px;
  border-radius: 5px;

  &:hover {
    background-color: rgba(9, 30, 66, 0.08);
    color: rgba(22, 43, 77, 1);
    cursor: pointer;
  }
`;

const PlusBlock = styled('div')`
  display: flex;
  align-items: center;
  margin-right: 5px;
  > svg {
    width: ${(props) => props.size + 'px'};
    height: ${(props) => props.size + 'px'};

    path {
      fill: ${(props) => props.color || 'rgba(94, 108, 132, 1)'};
    }
  }
`;

export { Wrapper, Title, CardWrapper, NewCardWrapper, PlusBlock };
