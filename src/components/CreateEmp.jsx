import {useForm} from 'react-hook-form'
import { useState } from 'react'
import { useNavigate } from 'react-router'

function CreateEmp() {

  let [loading,setLoading]=useState(false)
  let [error,setError]=useState(null)
  const {register,handleSubmit,formState:{errors}}=useForm()
  const navigate=useNavigate()
  const onFormSubmit=async(newEmpObj)=>{
    console.log(newEmpObj)
    //make http post request
    try{
      setLoading(true)
      const res=await fetch(`${import.meta.env.VITE_BACKEND_URL}/employee-api/employee`,
      {
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(newEmpObj)
      })
      if (res.status === 201) {
        //navigate to employees component programatically
        navigate("/list-of-emps");
      } else {
        let errorRes = await res.json();
        console.log("error responce is ", errorRes);
        throw new Error(errorRes.error);
      }
    } catch (err) {
      console.log("err in catch", err);
      //deal with err
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };
  if(loading){
      return <p className="text-center text-4xl ">Loading...</p>
    }

        //deal with error state
    if(error!=null){
        return <p className=" text-center text-4xl text-red-700">{error.message}</p>
    }
  return (
    <div>
      <h1 className='text-5xl text-center'>Create New Employee</h1>
      <form className='max-w-md mx-auto ' onSubmit={handleSubmit(onFormSubmit)}>
        <input type="text" placeholder='Enter name' {...register("name")} id='name' className='mt-3  mb-3 border p-3 w-full rounded-2xl'/>
        <input type="email" placeholder='Enter Email' {...register("email")} id='email' className='mt-3  mb-3 border p-3 w-full rounded-2xl'/>
        <input type="number" placeholder='Enter Mobile number' {...register("mobile")} id='mobile' className='mt-3  mb-3 border p-3 w-full rounded-2xl'/>
        <input type="text" placeholder='Enter Designation' {...register("designation")} id='designation' className='mt-3  mb-3 border p-3 w-full rounded-2xl'/>
        <input type="text" placeholder='Enter Company Name' {...register("companyName")} id='companyName' className='mt-3  mb-3 border p-3 w-full rounded-2xl'/>
        <button type="submit" className="block m-auto mt-8 bg-blue-600 p-5 rounded-2xl">Add Emp</button>
      </form>
    </div>
  )
}

export default CreateEmp