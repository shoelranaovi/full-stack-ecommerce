import { useState } from "react";
import prologo from "/assest/signin.gif";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import Button from "../components/button";
import { Link, useNavigate } from "react-router-dom";
function Login() {
  const navigate = useNavigate();
  const [isShow, setIsShow] = useState(false);
  const [formdata, setFormData] = useState({
    email: "",
    password: "",
  });
  const { password, email } = formdata;

  function onchange(e) {
    setFormData((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  }
  console.log(formdata);

  return (
    <div className="max-w-md pt-6 bg-white flex flex-col  mx-auto rounded-sm justify-center my-2">
      <div className="profile-logo  flex w-full justify-center items-center">
        <img src={prologo} className="rounded-full" width="90px" alt="" />
      </div>
      <form className=" flex flex-col gap-3 pt-6 pb-6 px-4 ">
        <div className="Email  ">
          <label htmlFor="email">Email :</label>
          <input
            className="w-full h-8 bg-slate-200 border-none"
            type="email"
            placeholder="Enter your Mail Address"
            name="email"
            id="email"
            value={email}
            onChange={onchange}
          />
        </div>
        <div className="password ">
          <label htmlFor="">Password:</label>
          <div className="relative">
            <input
              className="w-full h-8 bg-slate-200 border-none"
              type={isShow ? "text" : "password"}
              placeholder="Enter your password"
              name="email"
              id="password"
              value={password}
              onChange={onchange}
            />
            <span
              onClick={() => setIsShow((prev) => !prev)}
              className="absolute cursor-pointer right-2 top-2">
              {isShow ? <FaEye /> : <FaEyeSlash />}
            </span>
          </div>
        </div>
        <div className="forget-pass text-right text-blue-600 cursor-pointer">
          <p onClick={() => navigate("/forgetpassword")}>
            Forget Your Password?
          </p>
        </div>
        <div className=" flex max-w-[120px] ml-6  hover:scale-110 transition-all cursor-pointer ">
          <Button text="Login" widths="120px" />
        </div>
        <div className="singup pb-6">
          <p>
            {" "}
            {`Don't`} Have a Account ?{" "}
            <Link className="text-blue-600" to={"/signup"}>
              {" "}
              Singup
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
}

export default Login;
