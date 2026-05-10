import {NavLink} from 'react-router'

function Header() {
  return (
    <nav className='flex justify-end text-2xl  bg-violet-500 gap-6 p-4'>
      <NavLink to="" className={({ isActive }) => isActive ? "text-white  " : ""}>Home</NavLink>
      <NavLink to="create-emp" className={({ isActive }) => isActive ? "text-white  " : ""}>CreateEmp</NavLink>
      <NavLink to="list-of-emps" className={({ isActive }) => isActive ? "text-white  " : ""}>Employees</NavLink>
    </nav>

  )
}

export default Header