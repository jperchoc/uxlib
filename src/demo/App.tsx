import React from 'react';
import { Badge, Button } from ".."

function App() {

  return (
    <>
      Hello world
      <Button>Hello</Button>
      <Badge>Hello</Badge>
      <p>This is a <span className='text-primary'>primary</span> text with <span className='text-primary-75'>lighter colors</span></p>
    </>
  )
}

export default App
