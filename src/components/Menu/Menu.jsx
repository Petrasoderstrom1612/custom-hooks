import React from 'react'
import useState from "../../hooks/useState"

const MenuContext = React.createContext()

const Menu = ({children}) => {
  const [on, toggle] = useState()

  return (
    <MenuContext.Provider value={{on, toggle}}> 
        <div className="menu">
        {children}
        </div>
    </MenuContext.Provider>
  )
}

export default Menu
export {MenuContext}
