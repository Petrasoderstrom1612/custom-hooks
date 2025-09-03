import React from 'react'
import {MenuContext} from "./Menu"

const MenuDropdown = ({children}) => {
  const {on} = React.useContext(MenuContext)
  
  return (
    <>
    {on &&
        <div className="menu-dropdown">
        {children}
        </div>
    }
    </>
  )
}

export default MenuDropdown
