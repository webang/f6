import ReactDOM from 'react-dom';
import React, { Component, FC, forwardRef, ReactElement, useEffect } from "react";

const Parent: FC<{
  child: ReactElement
}> = ({
  child
}) => {
  console.log(child)
  const childRef = React.createRef();

  class M extends React.Component {
    render(): React.ReactNode {
      return child;
    }
  }

  useEffect(() => {
    console.log(ReactDOM.findDOMNode(childRef.current))
  })

  return (
    <div>
      <h1>Hello World!</h1>
      {/* {cloned} */}
      {<M ref={childRef}/>}
    </div>
  )
}

class CButton extends Component {
  render() {
    return <div>I am CButton</div>;
  }
}

function FButton() {
  return (
    <div>I am FButton</div>
  )
}

const App = () => {
  return (
    <div>
      <Parent child={<CButton />} />
      <Parent child={<FButton />} />
    </div>
  )
}

export default App;