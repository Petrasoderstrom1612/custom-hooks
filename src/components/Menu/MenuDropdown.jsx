import React from 'react'
import {MenuContext} from "./Menu"

const MenuDropdown = ({children}) => {
  const {on} = React.useContext(MenuContext)
  
  return (
    <>
    {on && //you need to wrap the entire div so that it does not stay there visually
        <div className="menu-dropdown">
        {children}
        </div>
    }
    </>
  )
}

export default MenuDropdown
