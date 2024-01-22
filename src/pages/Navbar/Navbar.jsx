
import { useContext } from 'react';
import './Navbar.css'
import { FaBars, FaTimes } from 'react-icons/fa';
import { AuthContext } from '../../provider/AuthProvider';
import { Link } from 'react-router-dom';



const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
      logOut()
        .then(() => { })
        .catch(error => console.log(error))
    }

    return (
      <div>
      <div className='header'>
      <a href="/" className="logo">Logo</a>

      <input type="checkbox" id='check' />
      <label htmlFor='check' className='icon'>
      <FaBars id='menu-icon' />
      <FaTimes id='close-icon' />
      </label>

      
          <nav className="nav">
          <a href="/" >Home</a>
          <a href="#" >About</a>
          </nav>
          <div className="lg:flex hidden md:flex">

{
user ? <>
<div className="dropdown dropdown-end ">
<label tabIndex={0} id="drop-btn" className="btn btn-ghost btn-circle avatar">
  <div className="w-10 rounded-full">

    {user && user?.photoURL !== null ? (
      <img src={user?.photoURL
      } alt="User" />
    ) : (
      <img src="https://i.ibb.co/zShG8zr/default-image.png" alt="Default User" />
    )}
  </div>

</label>
<ul tabIndex={0} className="menu menu-sm dropdown-content z-[1] p-2 shadow bg-cyan-900 rounded-box w-52 text-white">
  <li>
    <a className="justify-between">
      <p>
      {user && user?.displayName !== null ? (
      <p>{user?.displayName}</p>
    ) : (
      <p>name not found</p>
    )}
      </p>
    </a>
  </li>
  
  <li><a onClick={handleLogOut} className="  hover:bg-sky-500">Sing Out</a></li>
</ul>
</div>
</> : <>
<Link to="/login">
<p id="login-btn" className=''>Login</p>
</Link>
</>
}
</div>
     </div>
    
     
  </div>
    );
};

export default Navbar;
