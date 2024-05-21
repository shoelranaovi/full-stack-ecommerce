import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <Header />
      <main
        className="min-h-[calc(100vh-120px)] bg-slate-300

    pt-2">
        <Outlet />
      </main>
      <Footer />
      <ToastContainer />
    </>
  );
}

export default App;
