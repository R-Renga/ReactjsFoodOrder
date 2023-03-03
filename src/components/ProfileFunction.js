import React, { useEffect } from 'react'

function ProfileFunction() {


    useEffect(() => {
        const timer = setInterval(() => {
       console.log("function interval")
        }) 
        
        return () => {
            clearInterval(timer)
            console.log("function unmount");
        }
},[])

  return (
      <div>
          <h1>ProfileFunction</h1>
    </div>
  )
}

export default ProfileFunction