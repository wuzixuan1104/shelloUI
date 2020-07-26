import * as React from 'react';
import { addDecorator, configure } from '@storybook/react';
import { addParameters } from '@storybook/react';
import theme from './theme';
import GlobalStyle from '../src/stories/Global';

const req = require.context('../src/stories', true, /\.stories\.js$/);


addParameters({
  options: {
    theme,
  },
});

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

const withGlobal = cb => (
  <React.Fragment>
    <GlobalStyle />
    {cb()}
  </React.Fragment>
);

addDecorator(withGlobal);
configure(loadStories, module);
