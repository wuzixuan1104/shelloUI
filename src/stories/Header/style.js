import styled from 'styled-components';

const Wrapper = styled('div')`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 10px;
  h1 {
    font-size: 20px;
    font-weight: bold;
    margin: 0;
    color: ${(props) => (props.color ? props.color : 'black')};
    padding: 10px;
  }
`;

const ChoresBlock = styled('div')`
  display: flex;
  align-items: center;
`;

const Spliter = styled('span')`
  height: 15px;
  width: 1px;
  background: #ffffff3d;
  margin: 0 10px;
`;

export { Wrapper, ChoresBlock, Spliter };
