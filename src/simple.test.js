import React from 'react';
import ReactDOM from 'react-dom';
import Simple from './simple';

it('renders Simple component without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Simple />, div);
  ReactDOM.unmountComponentAtNode(div);
});
