import { NavLink } from "react-router-dom";


const Navbar = () => {
    const navdata =(  
        <>
        <NavLink to=''>
        <li><a className="font-bold mr-4 text-lg text-purple-600 hover:bg-purple-500 hover:text-slate-100">Projects</a></li>
        </NavLink>
        <NavLink to=''>
        <li><a className="font-bold mr-4 text-lg text-purple-600 hover:bg-purple-500 hover:text-slate-100">Blogs</a></li>
        </NavLink>
        <NavLink to=''>
        <li><a className="font-bold mr-4 text-lg text-purple-600 hover:bg-purple-500 hover:text-slate-100">Contact</a></li>
        </NavLink>
        
        </>
    )
    return (
        <div>
            
            <div className="navbar bg-slate-400">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        {
            navdata
        }
      </ul>
    </div>
    <NavLink to='/'><a className="btn btn-ghost text-xl text-purple-600">Home</a></NavLink>
    
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 ">
      {
        navdata
      }
    </ul>
  </div>
  <div className="navbar-end">
  <NavLink to='/resume'><a className="btn border-none bg-purple-500 text-slate-200 hover:text-purple-400">Resume</a></NavLink>
    
  </div>
</div>



        </div>
    );
};

export default Navbar;