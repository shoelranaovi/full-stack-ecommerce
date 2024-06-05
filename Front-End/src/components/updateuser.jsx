import { IoMdClose } from "react-icons/io";
// eslint-disable-next-line react/prop-types, no-unused-vars
function Updateuser({ onclose }) {
  return (
    <div className="bg-[#0a0303a2]  fixed flex justify-center items-center top-0 w-full h-full left-0">
      <div className="box bg-white rounded-xl w-[500px] h-[400px]  ">
        <div className="header flex justify-between p-4">
          <h1 className="font-bold"> Change User Role</h1>
          <div
            className="icon hover:bg-red-600 flex justify-center items-end rounded-full p-1 transition-all "
            onClick={onclose}>
            <IoMdClose size={25} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Updateuser;
