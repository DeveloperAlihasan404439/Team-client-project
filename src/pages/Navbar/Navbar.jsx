
import '../Navbar/Navbar.css'
import { FaBars, FaTimes } from 'react-icons/fa';



const Navbar = () => {
    
    return (
        <div className=''>
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
                <a href="/login" >Login</a>
                </nav>
                <div className="lg:flex hidden md:flex">


   <>
    <div className="dropdown dropdown-end ">
      <label tabIndex={0} id="drop-btn" className="btn btn-ghost btn-circle avatar">
        
      </label>
      
    </div>
  </> 
</div>
           </div>
          
           
        </div>
    );
};

export default Navbar;
