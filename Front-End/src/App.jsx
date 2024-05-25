import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";
import SummaryApi from "./common";
import Context from "./context";
import { useDispatch } from "react-redux";
import { setuserdetail } from "./store/userSlice";

function App() {
  const dispatch = useDispatch();
  async function fetchuserdetail() {
    const userresponse = await fetch(SummaryApi.userDetail.url, {
      method: SummaryApi.userDetail.method,
      credentials: "include",
    });
    const user = await userresponse?.json();

    if (user.success) {
      dispatch(setuserdetail(user.data));
    } else {
      console.log(user.message);
    }
  }

  useEffect(() => {
    fetchuserdetail();
  }, []);

  return (
    <>
      <Context.Provider value={{ fetchuserdetail }}>
        <Header />
        <main
          className="min-h-[calc(100vh-120px)] bg-slate-300

    pt-2">
          <Outlet />
        </main>
        <Footer />
        <ToastContainer />
      </Context.Provider>
    </>
  );
}

export default App;
