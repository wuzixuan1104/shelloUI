import React from 'react';
import { storiesOf } from '@storybook/react';

import Card from './index';

const cardDemo = [
  {
    title: '我是第一張卡片',
    tag: true,
  },
  {
    title:
      '我是第二張很長很長很長很長很長很長很長很長很長很長很長很長很長很長很長很長卡片',
    tag: true,
    tagColor: 'rgba(242, 214, 1, 1.00)',
  },
  {
    title: '我是第三張卡片',
    tag: true,
    tagColor: 'rgba(2, 121, 191, 1.00)',
  },
];

storiesOf('Card', module).add('Basic', () =>
  React.createElement(() => {
    return (
      <div>
        {cardDemo.map((e, i) => {
          return (
            <div key={i}>
              <Card {...e} />
              <br></br>
            </div>
          );
        })}
      </div>
    );
  }),
);
