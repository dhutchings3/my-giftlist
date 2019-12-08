import React from 'react';
import ReactDOM from 'react-dom';
import UserSignin from './UserSignin';

describe('UserSignin', () => {
  it('should render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<UserSignin/>, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});