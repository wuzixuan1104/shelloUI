import React from 'react';
import { storiesOf } from '@storybook/react';

import Card from './index';

storiesOf('Card', module).add('Basic', () => {
  return (
    <React.Fragment>
      <Card title={'我是第一張卡片'} tag={true}></Card>
      <br></br>
      <Card
        title={
          '我是第二張很長很長很長很長很長很長很長很長很長很長很長很長很長很長很長很長卡片'
        }
        tag={true}
        tagColor={'rgba(242, 214, 1, 1.00)'}
      ></Card>
      <br></br>
      <Card
        title={'我是第三張卡片'}
        tag={true}
        tagColor={'rgba(2, 121, 191, 1.00)'}
      ></Card>
    </React.Fragment>
  );
});
