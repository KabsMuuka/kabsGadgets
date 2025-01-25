import { useState } from "react";
import { useDispatch } from "react-redux";
import { admin_login } from "../../../redux/action/actionCreators";
import { useNavigate } from "react-router-dom";
const AdminLogin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const payload = {
    phoneNumber,
    password,
  };

  const handUserCredentials = async (e) => {
    e.preventDefault();
    if (!phoneNumber || !password) {
      alert("All fields are required!");
    }
    dispatch(admin_login(payload));
    navigate("/AdminDashboard");
  };

  return (
    <>
      <div className="flex items-center flex-col p-8">
        <p className="font-bold text-2xl"> Login as admin</p>
        <form className="shadow-md p-3 rounded-sm">
          <label className="input input-bordered flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70"
            >
              <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
            </svg>
            <input
              type="text"
              className="grow"
              placeholder="phoneNumber"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </label>
          <label className="input input-bordered flex items-center gap-2 mt-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70"
            >
              <path
                fillRule="evenodd"
                d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                clipRule="evenodd"
              />
            </svg>
            <input
              type="password"
              className="grow"
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>

          <div className="flex justify-center">
            <button
              className=" bg-blue-500 border mt-3 p-2 rounded-md"
              onClick={handUserCredentials}
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AdminLogin;
