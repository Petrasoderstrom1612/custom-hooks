import React from 'react'
import {MenuContext} from "./Menu"

const MenuButton = ({children}) => {
    const {toggle} = React.useContext(MenuContext)
    
  return (
    <button onClick={toggle}>
      {children}
    </button>
  )
}

export default MenuButton
