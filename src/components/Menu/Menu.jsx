import React from 'react'
import useState from "../../hooks/useState"

const MenuContext = React.createContext()

const Menu = ({children, onClicking}) => {
  const [on, toggle] = useState(true, onClicking)

  return (                       //this is object {on:on, toggle:toggle}, the first curlies only get you into the JS
    <MenuContext.Provider value={{on, toggle}}> 
        <div className="menu">
        {children}
        </div>
    </MenuContext.Provider>
  )
}

export default Menu
export {MenuContext}
