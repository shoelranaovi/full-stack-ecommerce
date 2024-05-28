import { FaRegUserCircle } from "react-icons/fa";
import { useSelector } from "react-redux";

function AdminPannel() {
  const user = useSelector((state) => state?.user.user);
  console.log(user);
  return (
    <div className="flex h-[calc(100vh-120px)] relative -top-2">
      <aside className="bg-green-400  w-[400px] ">
        <div className=" profile-icon cursor-pointer flex-col  flex w-full justify-center h-[150px] items-center  ">
          {user?.propic ? (
            <img src={user.propic} className="rounded-full w-20" alt="" />
          ) : (
            <FaRegUserCircle size={25} />
          )}
          <div>{user?.role} </div>
        </div>
      </aside>
      <main className="bg-green-100  w-full ">dsssssssssssssssss</main>
    </div>
  );
}

export default AdminPannel;
