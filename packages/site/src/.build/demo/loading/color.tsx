import React from 'react';
import { Button, Overlay, Loading } from 'f6';

const style = {
  marginRight: 10
}

export default function App() {
  return (
    <>
      <Loading spinnerSize={20} style={style} spinnerType="oval">Loading</Loading>
      <Loading spinnerSize={24} style={style} spinnerType="oval">Loading</Loading>
      <Loading spinnerSize={30} style={style} spinnerType="lines">Loading</Loading>
    </>
  )
}
