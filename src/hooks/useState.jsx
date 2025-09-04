import React from 'react'
import useEffectOnUpdate from "./useEffectOnUpd"

const useState = (initialValue = false, onToggle = () => {}) => {
    const [on, setOn] = React.useState(initialValue, onToggle)

    function toggle() {
      setOn(prevOn => !prevOn)
      console.log("toggled")
    }

    useEffectOnUpdate(onToggle,[on])

  return ([on, toggle]) //do not forget to return it as an array!!
}

export default useState
