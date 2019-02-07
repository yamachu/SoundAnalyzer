import * as React from 'react';
import { render } from 'react-dom';

const App = (): JSX.Element => {
    return <div>This is React render!</div>
}

render(<App />, document.getElementById('root'))
