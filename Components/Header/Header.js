
 function Header() {
    return (
        <div>
        
           <div className="navbar lg:w-[1246px] lg:h-[50px] mx-auto  sm:w-[100%] sm:h-[94px]">
  <div className="navbar-start ">
  <button className={`font-normal text-xl text-white mr-[5px] w-14 h-[33px]`} style={{width: "67px",
height:" 38px",background: "#6765F0",boxShadow:"0px 20px 80px rgba(51, 78, 123, 0.3)",borderRadius:"10px"}} >Gym</button>
    <span  className='text-xl font-normal w-[69px] h-[33px] leading-[33px] text-[#6765F0]'>baran</span>
  </div>
  <div className="lg:navbar-end hidden lg:flex">
    <ul className="menu menu-horizontal px-1 text-[#000000]">
    <li className='text-base'><a>Home</a></li>
        <li className='text-base'><a>Program</a></li>
        <li className='text-base'><a>Blog</a></li>
        <li className='text-base'><a>About us</a></li>
    </ul>
  </div>
  <div>
  <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden ml-[170px] lg:ml-0 ">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#0A2259]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content  shadow bg-[#FFFFFF] rounded-box rounded-box text-[#000000]">
        <li><a>Home</a></li>
        <li><a>Program</a></li>
        <li><a>Blog</a></li>
        <li><a>About us</a></li>
      </ul>
    </div>
  </div>
  <div className="lg:block hidden">
    <button className=" w-[114px] h-[50px] bg-[#264373] text-white" style={{boxShadow: '0px 20px 80px rgba(51, 78, 123, 0.3)',borderRadius:'10px'}}>Log in</button>
  </div>
</div>
        </div>
    );
 }
 
 export default Header;