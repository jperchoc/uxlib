import React from 'react';
import { Badge, Button } from ".."

function App() {

  return (
    <>
      <h1>h1</h1>
      <h2>h2</h2>
      <h3>h3</h3>
      <h4>h4</h4>
      <h5>h5</h5>
      <h6>h6</h6>
      <Button>Hello</Button>
      <Badge>Hello</Badge>
      <p>This is a <span className='text-primary'>primary</span> text with <span className='text-primary-50'>lighter colors</span></p>
    </>
  )
}

export default App
