import { useEffect, useState } from "react";
import SummaryApi from "../common";
import { FaPen } from "react-icons/fa6";
import Updateuser from "../components/updateuser";

function Alluser() {
  const [users, setUsers] = useState();
  const [edit, setEdit] = useState(false);

  const alluser = async () => {
    const fetchdata = await fetch(SummaryApi.alluser.url, {
      method: SummaryApi.alluser.method,
      credentials: "include",
    });
    const data = await fetchdata.json();
    const maindata = data.users;
    setUsers(maindata);
  };
  useEffect(() => {
    alluser();
  }, []);

  return (
    <div>
      <table className="w-full border-collapse mt-6  border h-5 border-slate-400 ...">
        <thead>
          <tr>
            <th className="border border-black text-center">Sr.</th>
            <th className="border border-black text-center">Name</th>
            <th className="border border-black text-center">Email</th>
            <th className="border border-black text-center">Role</th>
            <th className="border border-black text-center">Create Date</th>
            <th className="border border-black text-center">Action</th>
          </tr>
        </thead>
        <tbody>
          {users?.map((item, index) => (
            <tr key={index}>
              <td className="border border-black text-center">{index + 1}</td>
              <td className="border border-black text-center">{item.name}</td>
              <td className="border border-black text-center">{item.email}</td>
              <td className="border border-black text-center">{item.role}</td>
              <td className="border border-black text-center">
                {item.createdAt}
              </td>
              <td className="border border-black h-[40px]  w-full items-center text-center flex justify-center">
                <div className="w-[30px] h-[30px] flex justify-center items-center hover:bg-green-800 transition-all rounded-full">
                  <FaPen
                    className="cursor-pointer"
                    onClick={() => setEdit(true)}
                  />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {edit && <Updateuser onclose={() => setEdit(false)} />}
    </div>
  );
}

export default Alluser;
