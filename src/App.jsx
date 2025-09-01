import React from 'react';
import ReactDOM from 'react-dom/client';
import Toggle from "./components/Toggle/index"

function App() {
  return (
    <>
      <Toggle onToggle={() => {console.log("Toggled")}}>
        <Toggle.Button>
          <Toggle.Display>
            {(on) => {
              return <div className={`box ${on ? "filled" : ""}`}></div>
            }}
          </Toggle.Display>
        </Toggle.Button>
      </Toggle>
    </>
  )
}

export default App