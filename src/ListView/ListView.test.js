import React from 'react';
import ReactDOM from 'react-dom';
import ListView from './ListView';

describe('ListView', () => {
  it('should render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ListView/>, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});