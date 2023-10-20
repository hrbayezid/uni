import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';
import { BiSolidLogInCircle, BiSolidLogOutCircle,   } from "react-icons/bi";
import { FaUserCircle } from "react-icons/fa";

const Header = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogout = () => {
        logOut()
          .then()
          .catch((error) => console.log(error));
      };
    return (
        <div>
            <div className="navbar bg-base-300">
            <div className="navbar-start ">
    <div className="dropdown lg:hidden" style={{ position: 'relative', zIndex: 2 }}>
      <label tabIndex={0} className="btn btn-ghost btn-circle">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-gray-600  rounded-box w-52">
      <li><Link to='/'>Home</Link></li>
    <li><Link to='/blogs'>Blogs</Link></li>
        <li><Link to='/cgpa'>Cgpa</Link></li>
        <li><Link to='/allnotice'>Notice</Link></li>
      </ul>
    </div>
  
    <Link to="/" className="btn btn-ghost normal-case text-xl">UniVerse</Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    <li><Link to='/'>Home</Link></li>
    <li><Link to='/blogs'>Blogs</Link></li>
        <li><Link to='/cgpa'>Cgpa</Link></li>
        <li><Link to='/allnotice'>Notice</Link></li>
    </ul>
  </div>

 
  
 

  <div className="navbar-end">
    {user ? (
            <><div className='dropdown dropdown-end'>
           <label tabIndex={0} className="btn btn-ghost btn-circle hover:ring ring-green-300 ring-offset-base-100 ring-offset-2">
        
        <FaUserCircle />
        
      </label>
     
      <ul tabIndex={0} className="mt-3 z-[2] p-2 shadow menu menu-sm dropdown-content bg-gray-600 rounded-box w-52 ">
        <li className=''>
          <a className="justify-between text-white font-semibold">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li><Link to='addnotice' className='text-white font-semibold'>Add Notice</Link></li>
        
      </ul>
           
          </div>
              <Link to='/' className="mx-4 text-center">{user.displayName}</Link>
              <button
                onClick={handleLogout}
                className="btn glass bg-red-500 hover:bg-red-700 text-white"
              >
                <BiSolidLogOutCircle className="text-2xl" />
                Logout
              </button>
            </>
          ) : (
            <Link
              to="/login"
              className="btn glass bg-blue-500 hover:bg-blue-700  text-white"
            >
              Login <BiSolidLogInCircle className="text-2xl" />
            </Link>
          )}
  </div>
</div>
        </div>
    );
};

export default Header;