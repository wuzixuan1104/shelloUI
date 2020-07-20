import React from 'react';
import { storiesOf } from '@storybook/react';

import Table from './index';

const headers = ['商品', '單價', '數量', '小計', '刪除'];

const lists = [
  {
    img: 'https://fakeimg.pl/640x480/c0cfe8/?text=Img',
    title: 'DELL 戴爾 U3417W 34型 21:9 WQHD IPS曲面液晶螢幕《原廠三年保固》',
    price: '$32,500',
    quantity: 2,
    total: '$65,000',
    del: 'x',
  },
  {
    img: 'https://fakeimg.pl/640x480/c0cfe8/?text=Img',
    title: 'BENQ液晶螢幕《原廠三年保固》',
    price: '$12,500',
    quantity: 1,
    total: '$5,000',
    del: 'x',
  },
];

storiesOf('Table', module).add('Basic', () => {
  return <Table headers={headers} lists={lists}></Table>;
});
