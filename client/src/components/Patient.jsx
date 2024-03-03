import React, { useState , useEffect } from 'react'
import Navbar from './Navbar'
import Show from './Show'
import { ErrorMessage, Formik, Form, Field } from "formik";
import axios from 'axios'

function Patient() {

  const [number_id , setNumber_id] = useState("")
  const [patient_id , setPatient_id] = useState("")
  const [prefix , setPrefix] = useState("")
  const [firstname , setFirstname] = useState("")
  const [lastname , setLastname] = useState("")
  const [gender , setGender] = useState("")
  const [birthday , setBirthday] = useState("")
  const [phone_number , setPhone_number] = useState("")
  const [name_dad , setName_dad] = useState("")
  const [name_mom , setName_mom] = useState("")
  const [address , setAddress] = useState("")
  const [congenital_disease , setCongenital_disease] = useState("")
  const [blood_group , setBlood_group] = useState("")
  const [occupation , setOccupation] = useState("")
  const [status , setStatus] = useState("")


  const handleSubmit = () => {
    const getUser = localStorage.getItem('@user')
    const userData = JSON.parse(getUser);
    
    axios.post('http://localhost:3001/register', {
      number_id: number_id,
      patient_id: patient_id,
      register_by: userData.email,
      prefix: prefix,
      firstname: firstname,
      lastname: lastname,
      gender: gender,
      birthday: birthday,
      phone_number: phone_number,
      name_dad: name_dad,
      name_mom: name_mom,
      address: address,
      congenital_disease: congenital_disease,
      blood_group: blood_group,
      occupation: occupation,
      status: status
    }).then((response) => {
      console.log(response.data)
      if (response.data.result) {
        alert("add patient data to patient table successfuly ..")
        window.location = "/dashboard"
      } else {
        alert("This Patient already registed !!")
      }
    })
  }

  return (
    <main>
      <Navbar />
      <Show />
      <section class="max-w-screen-xl flex flex-wrap flex-col items-center w-full mx-auto font-mono py-6">
        <h1 class="text-3xl text-sky-600 font-bold">Add Patients</h1>
        <Formik
          initialValues={{}}
          onSubmit={handleSubmit}
          
        >
          <Form class="max-w-sm mx-auto w-80 mt-10">
            <div class="mb-5">
              <label
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                เลขประจำตัวผู้ป่วย : 
              </label>
              <Field
                name="number_id"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="number patient"
                onChange={(e) => setNumber_id(e.target.value)}
              />

              <ErrorMessage
                component="span"
                name="number_id"
                className="form-error"
              />
            </div>
            <div class="mb-5">
              <label
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                บัตรประชาชน :
              </label>
              <Field
                name="patient_id"
                placeholder="id card"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                onChange={(e) => setPatient_id(e.target.value)}
              />

              <ErrorMessage
                component="span"
                name="patient_id"
                className="form-error"
              />
            </div>
            <div class="mb-5">
              <label
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                คำนำหน้า :
              </label>
              <Field
                name="prefix"
                placeholder="prefix"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                onChange={(e) => setPrefix(e.target.value)}
              />

              <ErrorMessage
                component="span"
                name="prefix"
                className="form-error"
              />
            </div>
            <div class="mb-5">
              <label
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                ชื่อ :
              </label>
              <Field
                name="firstname"
                placeholder="firstname"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                onChange={(e) => setFirstname(e.target.value)}
              />

              <ErrorMessage
                component="span"
                name="firstname"
                className="form-error"
              />
            </div>
            <div class="mb-5">
              <label
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                สกุล :
              </label>
              <Field
                name="lastname"
                placeholder="lastname"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                onChange={(e) => setLastname(e.target.value)}
              />

              <ErrorMessage
                component="span"
                name="lastname"
                className="form-error"
              />
            </div>
            <div class="mb-5">
              <label
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                เพศ :
              </label>
              <Field
                name="gender"
                placeholder="gender"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                onChange={(e) => setGender(e.target.value)}
              />

              <ErrorMessage
                component="span"
                name="gender"
                className="form-error"
              />
            </div>
            <div class="mb-5">
              <label
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                วัน เดือน ปี เกิด :
              </label>
              <Field
                name="birthday"
                placeholder="birthday"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                onChange={(e) => setBirthday(e.target.value)}
              />

              <ErrorMessage
                component="span"
                name="birthday"
                className="form-error"
              />
            </div>
            <div class="mb-5">
              <label
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                หมายเลขโทรศัพท์ :
              </label>
              <Field
                name="phone_number"
                placeholder="phone number"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                onChange={(e) => setPhone_number(e.target.value)}
              />

              <ErrorMessage
                component="span"
                name="phone_number"
                className="form-error"
              />
            </div>
            <div class="mb-5">
              <label
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                ชื่อ - สกุล พ่อ :
              </label>
              <Field
                name="name_dad"
                placeholder="dad name"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                onChange={(e) => setName_dad(e.target.value)}
              />

              <ErrorMessage
                component="span"
                name="name_dad"
                className="form-error"
              />
            </div>
            <div class="mb-5">
              <label
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                ชื่อ - สกุล แม่ :
              </label>
              <Field
                name="name_mom"
                placeholder="mom name"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                onChange={(e) => setName_mom(e.target.value)}
              />

              <ErrorMessage
                component="span"
                name="name_mom"
                className="form-error"
              />
            </div>
            <div class="mb-5">
              <label
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                ที่อยู่ :
              </label>
              <Field
                name="address"
                placeholder="address"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                onChange={(e) => setAddress(e.target.value)}
              />

              <ErrorMessage
                component="span"
                name="address"
                className="form-error"
              />
            </div>
            <div class="mb-5">
              <label
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                โรคประจำตัว :
              </label>
              <Field
                name="congenital_disease"
                placeholder="congenital disease"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                onChange={(e) => setCongenital_disease(e.target.value)}
              />

              <ErrorMessage
                component="span"
                name="congenital_disease"
                className="form-error"
              />
            </div>
            <div class="mb-5">
              <label
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                กรุ๊ปเลือด :
              </label>
              <Field
                name="blood_group"
                placeholder="blood group"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                onChange={(e) => setBlood_group(e.target.value)}
              />

              <ErrorMessage
                component="span"
                name="blood_group"
                className="form-error"
              />
            </div>
            <div class="mb-5">
              <label
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                อาชีพ :
              </label>
              <Field
                name="occupation"
                placeholder="occupation"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                onChange={(e) => setOccupation(e.target.value)}
              />

              <ErrorMessage
                component="span"
                name="occupation"
                className="form-error"
              />
            </div>
            <div class="mb-5">
              <label
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                สถานะภาพ :
              </label>
              <Field
                name="status"
                placeholder="status"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                onChange={(e) => setStatus(e.target.value)}
              />

              <ErrorMessage
                component="span"
                name="status"
                className="form-error"
              />
            </div>
            <div class="w-full text-center">
              <button
                type="submit"
                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm sm:w-48 px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Submit
              </button>
            </div>
          </Form>
        </Formik>
      </section>
    </main>
  )
}

export default Patient