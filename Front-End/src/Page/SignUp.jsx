import { useState } from "react";
import prologo from "/assest/signin.gif";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import Button from "../components/button";
import { Link, useNavigate } from "react-router-dom";
import { Imagetobase64 } from "../Helpers/imagetobase64";
import SummaryApi from "../common";
import { toast } from "react-toastify";
function SignUp() {
  const navigate = useNavigate();
  const [isShow, setIsShow] = useState(false);
  const [isconShow, setconIsShow] = useState(false);

  const [formdata, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmpass: "",
    propic: " ",
  });
  const { name, password, email, confirmpass, propic } = formdata;

  function onchange(e) {
    setFormData((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  }

  async function proPiconChange(e) {
    const file = e.target.files[0];

    const data = await Imagetobase64(file);
    console.log(data);
    setFormData((prev) => ({
      ...prev,
      propic: data,
    }));
  }

  async function submit(e) {
    e.preventDefault();

    if (password === confirmpass) {
      const dataResponse = await fetch(SummaryApi.signUp.url, {
        method: SummaryApi.signUp.method,
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(formdata),
      });
      const response = await dataResponse.json();
      console.log("resonse", response);
      console.log("response", response.message);

      if (response.success) {
        toast.success("sign up successfull");
        navigate("/Login");
      }
      if (!response.success) {
        toast.error(response.message);
      }
    } else {
      console.log("check your pass");
    }
  }

  return (
    <div
      className="max-w-md pt-6 bg-white flex flex-col 
     mx-auto rounded-sm justify-center my-2">
      <div className="profile-logo  flex w-full justify-center rounded-full items-center relative">
        <div className="border bg-green-600 w-28 h-28 border-black rounded-full relative overflow-hidden ">
          <img
            src={propic !== " " ? propic : prologo}
            alt="propic"
            className="rounded-full w-full bg-center h-full"
          />
          <div className="absolute bg-slate-400 flex w-28 h-8 bottom-0 text-center opacity-70   ">
            <input
              onChange={proPiconChange}
              type="file"
              className=" absolute opacity-0  "
            />
            <p className="pl-8">Upload</p>
          </div>
        </div>
      </div>
      <form className=" flex flex-col gap-3 pt-1 pb-6 px-4 ">
        <div className="name  ">
          <label htmlFor="nmae">Name :</label>
          <input
            className="w-full h-8 bg-slate-200 border-none"
            type="text"
            placeholder="Enter your Mail Name"
            name="name"
            id="name"
            value={name}
            onChange={onchange}
          />
        </div>
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
        <div className="confirmpass ">
          <label htmlFor="">Confirm Password:</label>
          <div className="relative">
            <input
              className="w-full h-8 bg-slate-200 border-none"
              type={isconShow ? "text" : "password"}
              placeholder="Enter your confirm password"
              name="password"
              id="confirmpass"
              value={confirmpass}
              onChange={onchange}
            />
            <span
              onClick={() => setconIsShow((prev) => !prev)}
              className="absolute cursor-pointer right-2 top-2">
              {isconShow ? <FaEye /> : <FaEyeSlash />}
            </span>
          </div>
        </div>
        <div className="forget-pass text-right text-blue-600 cursor-pointer">
          <p onClick={() => navigate("/forgetpassword")}>
            Forget Your Password?
          </p>
        </div>
        <div
          onClick={submit}
          className=" flex max-w-[120px] ml-6  hover:scale-110 transition-all cursor-pointer ">
          <Button text="Sign Up" widths="120px" />
        </div>
        <div className="singup pb-1">
          <p>
            {" "}
            Aleady Have a Account ?{" "}
            <Link className="text-blue-600" to={"/login"}>
              {" "}
              Login
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
}

export default SignUp;
