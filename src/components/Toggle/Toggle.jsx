// import React from "react"
// import useEffectOnUpdate from "../../hooks/useEffectOnUpd"
// import useState from "../../hooks/useState"

// const ToggleContext = React.createContext()

// export default function Toggle({ children, onToggle = () => {}}) {
//     const [on, toggle] = useState()
    
//     useEffectOnUpdate(onToggle, [on]) //do not forget to invoke it with the array!
    

//     return (
//         <ToggleContext.Provider value={{ on, toggle }}>
//             {children}
//         </ToggleContext.Provider>
//     )
// }

// export { ToggleContext }