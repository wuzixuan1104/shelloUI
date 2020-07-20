import React from 'react';
import { Wrapper, Header, List, HeaderGrid, BoxGrid } from './style';
import PropTypes from 'prop-types';

const Table = ({ headers, lists }) => {
  return (
    <Wrapper>
      <Header>
        {headers && headers.map((v, k) => <HeaderGrid key={k}>{v}</HeaderGrid>)}
      </Header>
      {lists &&
        lists.map((v, k) => {
          return (
            <List key={k}>
              {Object.keys(v).map((k, idx) => (
                <BoxGrid key={idx} type={k} img={k === 'img' && v[k]}>
                  {k !== 'img' && v[k]}
                </BoxGrid>
              ))}
            </List>
          );
        })}
    </Wrapper>
  );
};

Table.displayName = 'Table';
Table.propTypes = {
  lists: PropTypes.array,
  headers: PropTypes.array,
};

export default Table;
