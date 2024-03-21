# Component library using react

## Usage example

```
import React from 'react';
import { Button } from 'lreact-component-lib-template';
import 'react-component-lib-template/dist/style.css';

function App() {
  return (
    <div className="App">
      <Button variant='primary'>Test</Button>
      <Button variant='secondary'>Test</Button>
      <Button variant='danger'>Test</Button>
      <Button disabled>Test</Button>
    </div>
  );
}

export default App;
```
