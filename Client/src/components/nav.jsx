import React, { useContext } from "react";
import { Menu } from "@headlessui/react";
import {
  SearchIcon,
  MailIcon,
  BellIcon,
  UserAddIcon,
  UserCircleIcon,
  AdjustmentsIcon,
  UserGroupIcon,
  UsersIcon,
  CogIcon,
  LogoutIcon,
} from "@heroicons/react/outline";
import { userLogout } from "./../context/actions/auth.action";
import { GlobalContext } from "./../context/Provider";

function Nav(userInfo) {
  const { loginDispatch } = useContext(GlobalContext);
  return (
    <header className="h-20 bg-white dark:bg-slate-800 dark:text-slate-300 w-[78%] fixed top-0 right-0 ml-[22%]  z-[999]">
      <nav className="left-[22%] h-20 flex justify-between items-center pl-5 pr-20 border-b">
        <div className="searchbox">
          <form className="flex flex-row items-center">
            <div className="relative">
              <input
                type="text"
                id="search"
                name="search"
                placeholder="Search"
                className="peer px-4 py-3 rounded-full border-none placeholder-transparent dark:bg-slate-800"
              />
              <label
                htmlFor="search"
                className="absolute flex items-center left-[15px] text-xs text-gray-500 top-0 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3"
              >
                Search <SearchIcon className="h-4 w-4 inline-flex" />
              </label>
            </div>
          </form>
        </div>
        {userInfo.userInfo.loggedIn ? (
          <div className="right-nav flex flex-row items-center">
            <div className="flex flex-row mr-5">
              <div className="relative">
                <MailIcon className="h-5 w-5 text-blue-500 dark:text-indigo-700  ml-6" />
                <span className="absolute text-[8px] bg-red-500 p-1 rounded-full text-white font-medium bottom-3 right-3">
                  99+
                </span>
              </div>
              <div className="relative">
                <BellIcon className="h-5 w-5 text-blue-500 dark:text-indigo-700 ml-6" />
                <span className="absolute text-[8px] bg-red-500 p-1 rounded-full text-white font-medium bottom-3 left-3">
                  99+
                </span>
              </div>
              <div className="relative">
                <UserAddIcon className="h-5 w-5 text-blue-500 dark:text-indigo-700 ml-6" />
                <span className="absolute text-[8px] bg-red-500 p-1 rounded-full text-white font-medium bottom-3 left-3">
                  99+
                </span>
              </div>
            </div>
            <Menu as="div" className="relative">
              <UserCircleIcon className="h-5 w-5 text-blue-500 dark:text-indigo-700 inline-flex" />
              <Menu.Button
                href="#"
                id="user-btn"
                className=" focus-visible:outline-none"
              >
                @{userInfo.userInfo.username}
              </Menu.Button>

              <Menu.Items className="dropdown-menu absolute top-16 right-1 bg-white drop-shadow-lg rounded divide-y flex flex-col  focus-visible:outline-none">
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="#"
                      className={`px-5 py-2 inline-flex  
                      
                      ${active ? "text-white bg-blue-500" : "text-gray-700"}
                      
                      `}
                    >
                      <UserCircleIcon className="h-5 w-5 dark:text-indigo-700 inline-flex " />{" "}
                      Profile
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="#"
                      className={`px-5 py-2 inline-flex  
                      
                      ${active ? "text-white bg-blue-500" : "text-gray-700"}
                      
                      `}
                    >
                      <UsersIcon className="h-5 w-5 dark:text-indigo-700 inline-flex " />{" "}
                      Friends
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="#"
                      className={`px-5 py-2 inline-flex  
                      
                      ${active ? "text-white bg-blue-500" : "text-gray-700"}
                      
                      `}
                    >
                      <UserGroupIcon className="h-5 w-5 dark:text-indigo-700 inline-flex " />{" "}
                      Groups
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="#"
                      className={`px-5 py-2 inline-flex  
                      
                      ${active ? "text-white bg-blue-500" : "text-gray-700"}
                      
                      `}
                    >
                      <CogIcon className="h-5 w-5 dark:text-indigo-700 inline-flex " />{" "}
                      Setting
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="#"
                      className={`px-5 py-2 inline-flex  
                      
                      ${active ? "text-white bg-blue-500" : "text-gray-700"}
                      
                      `}
                      onClick={() => userLogout()(loginDispatch)}
                    >
                      <LogoutIcon className="h-5 w-5 dark:text-indigo-700 inline-flex " />
                      Logout
                    </a>
                  )}
                </Menu.Item>
              </Menu.Items>
            </Menu>
          </div>
        ) : (
          <></>
        )}
      </nav>
    </header>
  );
}

export default Nav;
