import React from 'react';
// render into DOM
import { render } from 'react-dom';
import App from 'components/app';

// container id named in index.html
render(<App />, document.getElementById('app'));
