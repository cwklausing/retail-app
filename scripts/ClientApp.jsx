import React from 'react';
import { render } from 'react-dom';

const MyComponent = () => {
  return <div>Hello world</div>;
};

render(<MyComponent />, document.getElementById('app'));
