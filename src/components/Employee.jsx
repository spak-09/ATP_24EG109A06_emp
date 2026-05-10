import {useLocation} from 'react-router'
function Employee() {

  //read state received from navigation
  const {state}=useLocation()

  return (
    <div className='text-center p-10'>
      <h1 className='text-3xl'>{state.name} Details</h1>
      <div className='text-2xl mt-4 text-red-500 '>
      <p className='mb-2'>name:{state.name}</p>
      <p className='mb-2'>email:{state.email}</p>
      <p className='mb-2'>mobile:{state.mobile}</p>
      <p className='mb-2'>Designation:{state.designation}</p>
      <p className='mb-2'>Company Name:{state.companyName}</p>
      </div>
    </div>
  )
}

export default Employee