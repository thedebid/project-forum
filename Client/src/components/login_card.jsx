import React, { useContext, useState } from "react";
import { UserIcon, KeyIcon } from "@heroicons/react/outline";
import { GlobalContext } from "./../context/Provider";
import { userLogin } from "./../context/actions/auth.action";
function LoginCard() {
  const { loginDispatch } = useContext(GlobalContext);

  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const onSubmit = async () => {
    userLogin({ username, password })(loginDispatch);
  };

  return (
    <>
      <h1 className="font-bold text-2xl">Login</h1>
      <form
        className="flex flex-col items-center"
        onSubmit={(e) => e.preventDefault()}
      >
        <div className="relative mb-2">
          <input
            type="text"
            id="user"
            name="user"
            placeholder="Email or Username"
            className="w-full peer px-4 py-2 rounded-full border border-slate-300  placeholder-transparent dark:bg-slate-800"
            onChange={(e) => setUsername(e.target.value)}
          />
          <label
            htmlFor="user"
            className="absolute flex items-center left-[15px] text-xs text-gray-500 top-0 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2"
          >
            <UserIcon className="h-4 w-4 inline-flex" /> Email or Username
          </label>
        </div>
        <div className="relative mb-2">
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            className="w-full peer px-4 py-2 rounded-full border border-slate-300  placeholder-transparent dark:bg-slate-800"
            onChange={(e) => setPassword(e.target.value)}
          />
          <label
            htmlFor="password"
            className="absolute flex items-center left-[15px] text-xs text-gray-500 top-0 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2"
          >
            <KeyIcon className="h-4 w-4 inline-flex" /> Password
          </label>
        </div>
        <div className="mb-2 place-self-start">
          <input
            type="checkbox"
            id="rememberMe"
            name="rememberMe"
            className="appearance-none checked:bg-pink-500 focus:ring-0 rounded-full"
          />
          <label htmlFor="rememberMe" className="text-xs">
            {" "}
            Remember Me
          </label>
        </div>
        <button
          type="submit"
          className="mb-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white w-full px4 py-2 rounded-full border-none "
          onClick={onSubmit}
        >
          Login
        </button>
        <p className="mb-2 text-xs">
          <a href="#" className="text-indigo-500">
            Forgot Password?{" "}
          </a>
        </p>
        <p className="mb-5 text-xs">
          {" "}
          Or, Don't have an account?{" "}
          <a href="#" className="text-indigo-500 font-semibold">
            Sign Up
          </a>
        </p>
      </form>
    </>
  );
}
export default LoginCard;
