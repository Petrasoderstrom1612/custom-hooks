import React from 'react';
import ReactDOM from 'react-dom/client';
import useState from "./hooks/useState"
import useEffectOnUpdate from "./hooks/useEffectOnUpd"


function App() {
  const [on, toggle] = useState()

  useEffectOnUpdate(() => {console.log("Toggled")}, [on])

  return (
    <div onClick={toggle} className={`box ${on ? "filled" : ""}`}></div> //YOU CANNOT HAVE onToggle={() => {console.log("Toggled")}} SINCE THIS IS A HTML ELEMENT THAT ONLY ACCEPTS DOM EVENT, NOT ONTOGGLE THAT IS A PROP
  )
}

export default App

{/* <Toggle onToggle={() => {console.log("Toggled")}}> YOU CAN COMMENT OUT ALL THE TOGGLE AND USE THE USETOGGLE HOOK INSTEAD
        <Toggle.Button>
          <Toggle.Display>
            {(on) => {
              return <div className={`box ${on ? "filled" : ""}`}></div>
            }}
          </Toggle.Display>
        </Toggle.Button>
      </Toggle> */}