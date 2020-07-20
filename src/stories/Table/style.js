import styled, { css } from 'styled-components';

const maxWidth = '768px';
const isImg = (props) => {
  if (props.img) {
    return css`
      background-image: url(${(props) => (props.img ? props.img : '')});
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;
    `;
  }
};

const getRWDBox = (props) => {
  if (props.type) {
    return css`
      grid-area: ${(props) => (props.type ? props.type : '')};
    `;
  }
};

const Wrapper = styled('div')`
  max-width: 800px;
  margin: 50px auto;
`;

const Header = styled('div')`
  display: grid;
  grid-template-columns: 3fr 1fr 1fr 1fr 1fr;
  grid-gap: 5px;
  margin-bottom: 5px;

  @media (max-width: ${maxWidth}) {
    display: none;
  }
`;

const HeaderGrid = styled('div')`
  text-align: center;
  background: rgba(246, 249, 252, 1);
`;

const List = styled('div')`
  display: grid;
  grid-template-columns: 2fr 7fr 3fr 3fr 3fr 3fr;
  grid-gap: 5px;
  margin-bottom: 5px;
  padding-bottom: 5px;
  border-bottom: 1px solid rgb(235, 235, 235);

  @media (max-width: ${maxWidth}) {
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 2fr 2fr 2fr 2fr 2fr 2fr 1fr;
    grid-template-areas:
      'img title title title title title del'
      'img price price quantity total total del';
  }
`;

const BoxGrid = styled('div')`
  padding: 5px;
  ${isImg}

  @media (max-width: ${maxWidth}) {
    ${getRWDBox}
  }
`;

export { Wrapper, Header, List, HeaderGrid, BoxGrid };
