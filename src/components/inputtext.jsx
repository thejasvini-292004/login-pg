import { useState } from "react";
import { IoEyeSharp } from "react-icons/io5";
import { IoEyeOffSharp } from "react-icons/io5";

function InputText({ icon, label, id, value, setvalue, type }) {
  const [isvisible, setisvisible] = useState(false);

  return (
    <div className="bg-zinc-300 px-3 pb-[6px] flex items-center gap-4 rounded w-full">
      <span>{icon}</span>
      <div className=" relative w-full ">
        <label htmlFor={id} className=" font-poppins text-[10px]">
          {label}
        </label>

        <input
          type={isvisible ? "text" : type}
          value={value}
          onChange={(event) => setvalue(event.target.value)}
          id={id}
          className=" outline-none border-none w-full bg-inherit text-sm font-semibold "
        />
        {type === "password" && (
          <span
            onClick={() => setisvisible((prev) => !prev)}
            className="absolute right-0 text-xl top-4"
          >
            {isvisible ? <IoEyeOffSharp /> : <IoEyeSharp />}
          </span>
        )}
      </div>
    </div>
  );
}
export default InputText;
