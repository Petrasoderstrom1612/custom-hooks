import React from 'react'

const useState = (initialValue = false) => {
    const [on, setOn] = React.useState(initialValue)

    function toggle() {
      setOn(prevOn => !prevOn)
      console.log("toggled")
    }

  return ([on, toggle]) //do not forget to return it as an array!!
}

export default useState
