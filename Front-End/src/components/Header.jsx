import { useNavigate } from "react-router-dom";
import Logo from "/assest/logo.svg";
import { FaSearch, FaCartPlus, FaRegUserCircle } from "react-icons/fa";

function Header() {
  const navigate = useNavigate("");

  return (
    <header
      className=" sticky top-0 z-40
     w-full h-[60px] bg-slate-100 
     items-center flex justify-between  px-8 shadow-md">
      <div className="logo">
        <img
          onClick={() => navigate("/")}
          className="w-[40px] cursor-pointer "
          src={Logo}
          alt="header logo"
        />
      </div>
      <div className=" hidden search lg:flex border items-center w-[420px] h-10  rounded-full ">
        <input
          className="bg-transparent w-full h-full border-none focus:rounded-l-full focus-within:shadow-2xl "
          type="search"
          name="search"
          id="search-item"
          placeholder="Search Product Here "
        />
        <div className="icon cursor-pointer text-red-50 text-xl flex items-center justify-center h-full w-20 bg-red-800 rounded-r-full  ">
          <FaSearch />
        </div>
      </div>
      <div className="profile-card flex gap-8 items-center rounded-full">
        <div className="logo cursor-pointer ">
          <FaRegUserCircle size={25} />
        </div>
        <div className="card relative cursor-pointer">
          <FaCartPlus size={25} />
          <div className="count absolute -top-1 -right-2 bg-red-600   rounded-full px-1 text-xs font-bold">
            0
          </div>
        </div>
        <div
          onClick={() => navigate("/Login")}
          className="loginbtn  bg-red-600 text-white cursor-pointer  text-l py-1 px-4 text-center rounded-full">
          <button> Login</button>
        </div>
      </div>
    </header>
  );
}

export default Header;
