import React from "react";
import avatar from "../assets/images/avatar.jpg";

function ProfileCard(loginState) {
  console.log(loginState);
  return (
    <>
      <div className="avatar rounded-full h-1/2 w-1/2 p-2 border-2 border-indigo-200">
        <img src={avatar} alt="profile picture" className="rounded-full" />
      </div>
      <h1 className="text-2xl dark:text-slate-300">Jane Doe</h1>
      <p className="border-gray-300 pb-4 dark:text-slate-400">Member</p>
      <div className="flex flex-row justify-around border-t dark:text-slate-400">
        <div className="text-center p-2 ">
          <p>5</p>
          <p>Friends</p>
        </div>
        <div className="text-center p-2">
          <p>3</p>
          <p>Groups</p>
        </div>
      </div>
    </>
  );
}
export default ProfileCard;
