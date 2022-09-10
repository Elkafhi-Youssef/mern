import React from 'react'
import {FaSignInAlt,FaSignOutAlt,FaUser} from 'react-icons/fa'
import {Link , useNavigate} from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import {logout , reset } from  '../features/auth/authSlice'
function Header() {
  const navigate  = useNavigate()
  const dispatch = useDispatch()
  const {user} = useSelector((state)=>state.auth)
  const onlogout = ()=>{
    dispatch(logout())
    dispatch(reset())
    navigate('/')
  }
  return (
    <header className='header'>
      <div>
      <header className="p-4 ">
        <div className="container flex justify-between items-center h-16 mx-auto">
        <div className=' text-lg p-2'>
        <Link to='/'>
          GoalSetter
        </Link>
      </div>
          <div className="items-center  hidden lg:flex">
            {user?(<button className="self-center px-8 py-3 rounded" onClick={onlogout}>
            
            <FaSignInAlt  className=' text-red-600 mr-2'/>Logout
            
            </button>
          ):(<button className="self-center px-8 py-3 rounded">
            <Link className=' flex items-center' to= '/login'>
            <FaSignInAlt  className=' text-red-600 mr-2'/>Login
            </Link>
            </button>
          )}
            
          <button className="  self-center flex  py-3 rounded">
            <Link className=' flex items-center' to= '/register'>
            <FaSignInAlt className=' text-red-600 mr-2' />Register
            </Link>
          </button> 
          </div>
        </div>
      </header>
      </div>

    </header>
    
  )
}

export default Header