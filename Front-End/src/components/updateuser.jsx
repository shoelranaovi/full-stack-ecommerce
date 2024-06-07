import { IoMdClose } from "react-icons/io";
import ROLE from "../common/role";
import { useState } from "react";
import SummaryApi from "../common";
// eslint-disable-next-line react/prop-types, no-unused-vars
function Updateuser({ onclose, name, email, role, userId, fatch }) {
  const [userrole, setRole] = useState(role);

  function onchange(e) {
    setRole(e.target.value);
  }

  async function onsubmit(e) {
    e.preventDefault();
    const dataresponse = await fetch(SummaryApi.updateusers.url, {
      method: SummaryApi.updateusers.method,
      credentials: "include",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        role: userrole,
        userId: userId,
      }),
    });

    const response = await dataresponse.json();
    console.log(response);
    fatch();
    onclose();
  }

  return (
    <div className="bg-[#0a0303a2]  fixed flex justify-center items-center top-0 w-full h-full left-0">
      <div className="box bg-white rounded-xl w-[500px] h-[300px]  ">
        <div className="header flex justify-between p-4">
          <h1 className="font-bold text-2xl"> Change User Role</h1>
          <div
            className="icon hover:bg-red-600 flex justify-center items-end rounded-full p-1 transition-all "
            onClick={onclose}>
            <IoMdClose size={25} />
          </div>
        </div>
        <form className="pl-4 mt-6">
          <div>
            <h2> Name: {name}</h2>
          </div>
          <div>
            <h2> Email:{email}</h2>
          </div>
          <div className="mt-10 flex justify-between pr-3">
            <label htmlFor="role">Role</label>
            <select name="role" id="role" value={userrole} onChange={onchange}>
              {Object.values(ROLE).map((e, i) => (
                <option key={i} value={e}>
                  {" "}
                  {e}{" "}
                </option>
              ))}
            </select>
          </div>
          <button
            onClick={onsubmit}
            className="ml-36 bg-red-600 text-white p-4 rounded-2xl">
            Save Change
          </button>
        </form>
      </div>
    </div>
  );
}

export default Updateuser;
