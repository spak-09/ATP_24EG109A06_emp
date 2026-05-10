import {useState,useEffect, useContext} from 'react'
import {useNavigate} from 'react-router'
import axios from 'axios'
import { counterContextObj } from '../contexts/contextProvider'

function ListOfEmps() {
  let [loading,setLoading]=useState(false)
  let [error,setError]=useState(null)
  const [emps,setEmps]=useState([])
  const navigate = useNavigate()

  const {counter1,changeContext1}=useContext(counterContextObj)
  


  const gotoEmp=(empObj)=>{
    //navigate to employee with the user details
    navigate("/employee",{state:empObj})
  }

  const gotoEditEmp=(empObj)=>{
    //navigate to employee with the user details
    navigate("/edit-emp",{state:empObj})
  }

  const deleteEmp=async (id)=>{
    try{
    let res=await axios.delete(`${import.meta.env.VITE_BACKEND_URL}/employee-api/employee/${id}`)
    //make get req to get latest employees
    if(res.status===200){
      getemp()
    }
  }catch(err){
    setError(err.message)
  }
  }

  //get employees
  async function getemp(){
    try{
      setLoading(true)
    let res=await axios.get(`${import.meta.env.VITE_BACKEND_URL}/employee-api/employee`)
      if(res.status===200){
        let resObj=res.data
        setEmps(resObj.payload)
      }
    }
    catch(err){
      console.log(err)
      setError(err.message)
    }
    finally{
      setLoading(false)
    }
  }

  useEffect(()=>{
    getemp()
  },[])

  return (
    <div>
      {loading && <h1 className='text-center text-4xl'>Loading</h1>}
      {error !== null && <h1 className='text-center text-4xl text-red-600'>{error}</h1>}
      {!loading && error === null && (
        <>
        <h1 className='text-5xl'>Counter1 : {counter1} </h1>
        <button onClick={changeContext1} className='bg-blue-600 p-5 '>Increase</button>
          <h1 className='text-4xl text-center'>List of Employees</h1>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 ">
            {emps.map((empObj)=>(
              <div key={empObj._id} className='bg-white p-5 text-center shadow-2xl text-2xl rounded-2xl' >
                <p>{empObj.email}</p>
                <p className='mb-4'>{empObj.name}</p>
                {/* buttons */}
                <div className='flex justify-around'>
                  <button onClick={()=>gotoEmp(empObj)} className='bg-green-500 text-white p-2 rounded-2xl'>View</button>
                  <button onClick={()=>gotoEditEmp(empObj)} className='bg-orange-500 text-white p-2 rounded-2xl'>Edit</button>
                  <button onClick={()=>deleteEmp(empObj._id)} className='bg-red-500 text-white p-2 rounded-2xl'>Delete</button>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  )
}

export default ListOfEmps