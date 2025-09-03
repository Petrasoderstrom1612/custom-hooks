import React from 'react';
import ReactDOM from 'react-dom/client';
import useState from "./hooks/useState"
import useEffectOnUpdate from "./hooks/useEffectOnUpd"
import Menu from "./components/Menu/index"


function App() {
  const [on, toggle] = useState()

  useEffectOnUpdate(() => {console.log("Toggled")}, [on])

  return (
    <>
     <div onClick={toggle} className={`box ${on ? "filled" : ""}`}></div> {/*YOU CANNOT HAVE onToggle={() => {console.log("Toggled")}} SINCE THIS IS A HTML ELEMENT THAT ONLY ACCEPTS DOM EVENT, NOT ONTOGGLE THAT IS A PROP */}
  
      <Menu>
        <Menu.Button>Menu</Menu.Button>
        <Menu.Dropdown>
          <Menu.Item>Home</Menu.Item>
          <Menu.Item>About</Menu.Item>
          <Menu.Item>Contact</Menu.Item>
          <Menu.Item>Blog</Menu.Item>
        </Menu.Dropdown>
      </Menu>
    </>
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