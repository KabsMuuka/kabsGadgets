import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/action/actionCreators";

const signIn = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");

  const isAuthenticated = useSelector((state) => state.auth);

  const handUserCredentials = (e) => {
    e.preventDefault();

    const userCredentials = {
      phoneNumber,
      password,
    };
    dispatch(login(userCredentials));

    if (isAuthenticated) {
      navigate("/dashboard");
      localStorage.setItem("currentUserPhoneNumber", phoneNumber);
    }
  };

  return (
    <>
      <div className="p-10">
        <p className="text-1xl font-bold text-center">
          Sign in to your acccount
        </p>
        <p className="text-center">
          New to BuyanY{" "}
          <Link className="underline" to={"/register"}>
            create account
          </Link>
        </p>

        <form className="flex items-center flex-col p-5">
          {/* Email or phone  */}
          <label className="input input-bordered flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70"
            >
              <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
              <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
            </svg>
            <input
              type="text"
              placeholder="Email or Phone number"
              value={phoneNumber}
              required
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </label>
          {/* password */}
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
              value={password}
              required
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <button
            className="bg-blue-400 w-20 p-1 rounded-md mt-3"
            onClick={handUserCredentials}
          >
            Submit
          </button>
          <br />
          Or
          <p className="border mt-3 p-3 rounded-md ">Continue with Google</p>
          <p className="mt-3 text-center">
            Admin
            <Link className="underline" to={"/adminLogin"}>
              login
            </Link>
          </p>
        </form>
      </div>
    </>
  );
};

export default signIn;
