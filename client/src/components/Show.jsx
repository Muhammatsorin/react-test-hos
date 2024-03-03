import React, { useState, useEffect } from 'react'

function Show() {
  const [email, setEmail] = useState("")
  const [fname, setName] = useState("")
  const [lname , setLname] = useState("")

  useEffect(() => {
    const getUser = localStorage.getItem('@user')
    const userData = JSON.parse(getUser);
    setEmail(userData.email)
    setName(userData.fname)
    setLname(userData.lname)

  }, [])

  return (
    <main class="max-w-screen-xl flex flex-wrap items-center w-full justify-end mx-auto font-mono  text-sky-600 font-bold">
      <div class="flex justify-end">
        <p>{email} : {fname} {lname}</p>
      </div>
    </main>

  )
}

export default Show