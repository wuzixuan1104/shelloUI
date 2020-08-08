import React from 'react';
import { storiesOf } from '@storybook/react';

import Header from './index';

storiesOf('Header', module).add('Basic', () =>
  React.createElement(() => {
    return <Header title="Shello App"></Header>;
  }),
);
