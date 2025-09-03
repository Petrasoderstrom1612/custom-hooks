import React from 'react'

const useState = () => {
    const [on, setOn] = React.useState(false)

    function toggle() {
      setOn(prevOn => !prevOn)
      console.log("toggled")
    }

  return ([on, toggle]) //do not forget to return it as an array!!
}

export default useState
