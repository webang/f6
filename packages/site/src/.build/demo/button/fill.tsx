import React from 'react';
import { Button } from 'f6';

export default function App() {
  const [loading, setLoading] = React.useState(true);
  const clickHandle = () => setLoading(v => !v);
  return <Button loading={loading} color="primary" onClick={clickHandle}>块级按钮</Button>
}
