import { FaRegUserCircle } from "react-icons/fa";
import { useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";

function AdminPannel() {
  const navigate = useNavigate();
  const user = useSelector((state) => state?.user.user);

  return (
    <div className="flex h-[calc(100vh-120px)] relative -top-2">
      <aside className=" bg-slate-100 w-[300px] ">
        <div className=" profile-icon cursor-pointer flex-col  flex w-full justify-center h-[150px] items-center  ">
          {user?.propic ? (
            <img src={user.propic} className="rounded-full h-20 w-20" alt="" />
          ) : (
            <FaRegUserCircle size={25} />
          )}
          <div>{user?.role} </div>
        </div>
        <div className="list pl-3 p-1  flex flex-col gap-1  cursor-pointer">
          <div
            className="   w-full hover:bg-slate-200 p-1 "
            onClick={() => navigate("all-User")}>
            All user
          </div>
          <div
            className="   w-full hover:bg-slate-200 p-1 "
            onClick={() => navigate("all-products")}>
            All Products
          </div>
        </div>
      </aside>
      <main className="w-full">
        <Outlet />
      </main>
    </div>
  );
}

export default AdminPannel;
