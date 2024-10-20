import icon from "./assets/icon.png";
import google from "./assets/google.png";
import Button from "./components/button";
import facebook from "./assets/facebook.png";
import { MdEmail } from "react-icons/md";
import { FaKey } from "react-icons/fa";
import { useState } from "react";
import InputText from "./components/inputtext";

function App() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [ischecked, setischecked] = useState(false);
  const handleSubmmit = (event) => {
    event.preventDefault();
    if (!email.includes("@") && !email.includes(".")) {
      alert("Please enter valid email");
      return;
    }
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{8,}$/;
    if (!regex.test(password)) {
      alert(
        "Password must contain 8+ charecters, one upper case, one lower case, one special charenter"
      );
      return;
    }
    alert("Login Successfull");
    return;
  };
  return (
    <div className="w-screen h-screen flex bg-neutral-100 ">
      <div className="w-1/2 hidden items-center justify-center h-screen md:flex">
        <img src={icon} alt="" className="w-72" />
      </div>
      <div className="w-full md:w-1/2 h-screen py-5 px-10 ">
        <form
          onSubmit={handleSubmmit}
          className=" flex flex-col justify-between bg-white shadow p-4 font-poppins w-full h-full rounded"
        >
          <h2 className="font-medium text-xl">
            Welcome to <br />{" "}
            <span className="font-bold text-2xl text-indigo-500">
              Design School
            </span>
          </h2>
          <Button
            img={google}
            label={"Login with Google"}
            className={"hover:bg-slate-100"}
          />
          <Button
            img={facebook}
            label={"Login with Facebook"}
            className={"hover:bg-slate-100"}
          />
          <div className="flex items-center gap-4">
            <div className=" h-[0.5px] bg-slate-400 w-full"></div>
            <p className="text-sm"> OR </p>
            <div className=" h-[0.5px] bg-slate-400 w-full"></div>
          </div>
          <InputText
            icon={<MdEmail />}
            label={"Email"}
            id={"email"}
            type={"email"}
            value={email}
            setvalue={setemail}
          />
          <InputText
            icon={<FaKey />}
            label={"Password"}
            id={"password"}
            type={"password"}
            value={password}
            setvalue={setpassword}
          />
          <div className="flex items-center justify-between gap-2 font-poppins text-sm">
            <div className="flex items-center gap-2 ">
              <input
                id="remember"
                type="checkbox"
                value={ischecked}
                checked={ischecked}
                onChange={(event) => setischecked(event.target.checked)}
              />
              <label htmlFor="remember">Remember me</label>
            </div>
            <a className=" text-indigo-500 cursor-pointer">Forgot Password?</a>
          </div>
          <Button
            type={"submit"}
            label={"Login"}
            className={
              "bg-indigo-500 text-white font-semibold hover:bg-indigo-600"
            }
          />
          <p className=" text-sm text-center">
            Don’t have an account?{" "}
            <span className=" text-indigo-700 cursor-pointer">Register</span>
          </p>
        </form>
      </div>
    </div>
  );
}
export default App;
