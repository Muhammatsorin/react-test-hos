import React, { useState, useEffect } from 'react'
import Navbar from './Navbar';
import Show from './Show';
import axios from 'axios'

function Dashboard() {

  const [patients, setPatients] = useState([])
  const [input, setInput] = useState("")

  useEffect(() => {
    const getUser = localStorage.getItem('@user')
    const userData = JSON.parse(getUser);
    axios.post('http://localhost:3001/getPatients', {
      email: userData.email,
      permission: userData.permission
    }).then((response) => {
      setPatients(response.data)
    })
  }, [])

  const UpdateUser = (id) => {
    window.location = '/update/' + id
  }

  const DeleteUser = (id) => {
    axios.delete(`http://localhost:3001/delete/${id}`)
      .then((response) => {
        console.log(response)
        window.location = "/dashboard"
      })
  }

  const FilteredData = patients.filter((value) => {
    if (input === "") {
      return value
    } else {
      return value.patient_id.toLowerCase().includes(input)
    }
  })


  return (
    <main>
      <Navbar />
      <Show />
      <section class="max-w-screen-xl flex flex-wrap items-center justify-end w-full mx-auto font-mono py-6">
        <section>
          <form class="max-w-md mx-auto">
            <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
            <div class="relative">
              <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                </svg>
              </div>
              <input type="search" id="default-search" class="block w-96 p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search Mockups, Logos..." required onChange={(e) => setInput(e.target.value)} />
              <button type="submit" class="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
            </div>
          </form>
        </section>
      </section>
      <section class="max-w-screen-xl flex flex-wrap flex-col items-center w-full mx-auto font-mono py-6">
        <h1 class="text-3xl text-sky-600 font-bold">Patients List</h1>
        {
          FilteredData.map((value) => {
            return (
              <li key={value.patient_id} style={{listStyle: 'none'}}>

                <main>
                  <section class="flex flex-col text-center bg-slate-200 p-8 mt-10 w-full">
                    <p>Number Patient : {value.number_id}</p>
                    <p>ID Card : {value.patient_id}</p>
                    <section class="flex px-4 w-full justify-center ">
                      <section class="flex px-4 w-64 justify-between ">
                        <p>Name : </p>
                        <p>{value.prefix}</p>
                        <p>{value.firstname}</p>
                        <p>{value.lastname}</p>
                      </section>
                    </section>
                    <p>Gender : {value.gender}</p>
                    <p>Birthday : {value.birthday}</p>
                    <p>Phone : {value.phone_number}</p>
                    <p>Dad Name : {value.name_dad}</p>
                    <p>Mom Name : {value.name_mom}</p>
                    <p>Address : {value.address}</p>
                    <p>Congenital Disease : {value.congenital_disease}</p>
                    <p>Blood Group : {value.blood_group}</p>
                    <p>Occupation : {value.occupation}</p>
                    <p>Status : {value.status}</p>
                    <p>Register By : {value.register_by}</p>
                    <section class="mt-5">
                      <button type="button" class="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900 w-28"
                        onClick={() => UpdateUser(value.patient_id)}>Update</button>
                      <button type="button" class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900 w-28"
                        onClick={() => DeleteUser(value.patient_id)}>Delete</button>
                    </section>
                  </section>
                </main>
              </li>
            )
          })
        }
      </section>
    </main>

  )
}

export default Dashboard