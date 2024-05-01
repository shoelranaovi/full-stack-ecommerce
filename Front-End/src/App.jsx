import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <main
        className="min-h-[calc(100vh-120px)] bg-slate-300

    pt-2"
      >
        <Outlet
         />
      </main>
      <Footer />
    </>
  );
}

export default App;
