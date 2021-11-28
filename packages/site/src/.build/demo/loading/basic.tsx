import React from 'react';
import { Button, Overlay, Loading } from 'f6/packages';

const style = {
  marginRight: 10
}

function App() {
  return (
    <>
      <Loading style={style} spinnerType="lines">Loading</Loading>
      <Loading style={style} spinnerType="oval">Loading</Loading>
      <Loading style={style} spinnerType="crescent">Loading</Loading>
    </>
  )
}

export default App;
