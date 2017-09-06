import React from 'react';
import { render } from 'react-dom'; // pulls a single method called render from react-dom object.
import { AppContainer } from 'react-hot-loader';

import TestComponent from './testcomponent';

/* render(
  // showCount is a Boolean and count is a number
  <TestComponent headline="Test Headline" count={1234} showCount />,
  document.querySelector('#react-app'),
); */

const renderApp = (Component) => {
  render(
    <AppContainer>
      <Component headline="Test Headline" count={162434} showCount />
    </AppContainer>,
    document.querySelector('#react-app'),
  );
};

renderApp(TestComponent);

if (module && module.hot) {
  module.hot.accept('./testcomponent', () => {
    renderApp(TestComponent);
  });
}
