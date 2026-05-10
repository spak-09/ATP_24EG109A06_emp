import {useForm} from 'react-hook-form'
import { useLocation,useNavigate } from 'react-router'
import { useEffect,useState } from 'react'
import axios from 'axios'

function EditEmployee() {

  const {register,handleSubmit,formState:{errors},setValue}=useForm()
  let [loading,setLoading]=useState(false)
  let [error,setError]=useState(null)
  const navigate=useNavigate()
  //Gate empObbj from naviagate hook 
  const {state}=useLocation() 
  //console.log(state)

  useEffect(()=>{
    setValue("name",state.name)
    setValue("email",state.email)
    setValue("mobile",state.mobile)
    setValue("designation",state.designation)
    setValue("companyName",state.companyName)

  },[])

  const saveModifiedEmp=async (modifiedEmp)=>{
    try{
      setLoading(true)
    //make http put req
    const res=await axios.put(`${import.meta.env.VITE_BACKEND_URL}/employee-api/employees/${state._id}`,modifiedEmp)
    if(res.status===200){
      //navigate to listOfEmps
      navigate('/list-of-emps')
    }
  }catch(err){
    console.log(err)
    setError(err.message)
  }finally{
    setLoading(false)
  }
  }

  if(loading){
    return <h1 className='text-center text-4xl'>Loading</h1>
  }

  if(error!=null){
    return <h1 className='text-center text-4xl text-red-600'>{error}</h1>
  }
  
  return (
    <div>
      <h1 className='text-5xl text-center'>Edit Employee</h1>
      <form className='max-w-md mx-auto ' onSubmit={handleSubmit(saveModifiedEmp)}>
        <input type="text" placeholder='Enter name' {...register("name")} id='name' className='mt-3  mb-3 border p-3 w-full rounded-2xl'/>
        <input type="email" placeholder='Enter Email' {...register("email")} id='email' className='mt-3  mb-3 border p-3 w-full rounded-2xl'/>
        <input type="number" placeholder='Enter Mobile number' {...register("mobile")} id='mobile' className='mt-3  mb-3 border p-3 w-full rounded-2xl'/>
        <input type="text" placeholder='Enter Designation' {...register("designation")} id='designation' className='mt-3  mb-3 border p-3 w-full rounded-2xl'/>
        <input type="text" placeholder='Enter Company Name' {...register("companyName")} id='companyName' className='mt-3  mb-3 border p-3 w-full rounded-2xl'/>
        <button type="submit" className="block m-auto mt-8 bg-green-600 p-5 rounded-2xl">Save</button>
      </form>
    </div>
  )
}

export default EditEmployee