import React from 'react';
import { render } from 'react-dom';
import Header from './components/header';
import Text from './components/text';

import './styles/styles.scss';

const App = () => (
  <div>
    <Header />
    <Text />
  </div>
);

render(<App />, document.getElementById('app'));
