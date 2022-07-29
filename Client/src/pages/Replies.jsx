import React from "react";
import { ThumbUpIcon, ThumbDownIcon } from "@heroicons/react/outline";
import avatar from "../assets/images/avatar.jpg";
import "../App.css";
import { Link } from "react-router-dom";

function Replies() {
  return (
    <>
      <div className="breadcrumb pb-2 border-b">
        <Link to="/" className="mr-5 text-blue-500">
          Forums &gt; Programming Comm &gt; How do you print duplicate
          characters from a string?
        </Link>
      </div>
      <div className="rounded-2xl border-t-blue-500 border-b-slate-100 border-b border-t-2 mb-5 p-5 bg-white drop-shadow-sm mt-5">
        <p>
          This forum has 14 topics, 81 replies, and was last updated 6 days, 2
          hours ago by John Doe.
        </p>
      </div>
      <div className="list text-center">
        <ul className="list-inside border-t">
          <li className="py-5 w-full border-b border-b-slate-100  flex justify-between align-middle">
            <div className="items-start comment flex">
              <div className="avatar-details flex flex-col w-32">
                <a href="#" title="View Profile" className="m-auto">
                  <img
                    src={avatar}
                    alt="Avatar"
                    className="rounded-full h-20"
                  />
                  <span>Username</span>
                </a>
                <div className="role text-xs font-light italic">
                  Participant
                </div>
              </div>
              <div className="bg-slate-100 p-4 ml-7 rounded-lg w-full relative comment-dialog">
                <p className="text-left">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Tempora, consequuntur ad? Hic tempora vitae sunt veritatis
                  repellendus et repudiandae commodi adipisci. Asperiores dolor
                  suscipit accusantium? A, tempora! Dolore, sapiente laboriosam.
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
                  unde sunt fugit nostrum, accusamus in ut sint id dolorem,
                  officia culpa neque. Nobis vitae cumque porro temporibus,
                  beatae maiores modi.
                </p>
              </div>
              <div className="flex flex-col items-center ml-2">
                <ThumbUpIcon className="w-5 hover:cursor-pointer hover:text-blue-500" />
                <span className="counter">15</span>
                <ThumbDownIcon className="w-5 hover:cursor-pointer hover:text-red-500" />
              </div>
            </div>
          </li>
          <li className="py-5 w-full border-b border-b-slate-100  flex justify-between align-middle">
            <div className="items-start comment flex">
              <div className="avatar-details flex flex-col w-32">
                <a href="#" title="View Profile" className="m-auto">
                  <img
                    src={avatar}
                    alt="Avatar"
                    className="rounded-full h-20"
                  />
                  <span>Username</span>
                </a>
                <div className="role text-xs font-light italic">
                  Participant
                </div>
              </div>
              <div className="bg-slate-100 p-4 ml-7 rounded-lg w-full relative comment-dialog">
                <p className="text-left">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Tempora, consequuntur ad? Hic tempora vitae sunt veritatis
                  repellendus et repudiandae commodi adipisci. Asperiores dolor
                  suscipit accusantium? A, tempora! Dolore, sapiente laboriosam.
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
                  unde sunt fugit nostrum, accusamus in ut sint id dolorem,
                  officia culpa neque. Nobis vitae cumque porro temporibus,
                  beatae maiores modi.
                </p>
              </div>
              <div className="flex flex-col items-center ml-2">
                <ThumbUpIcon className="w-5 hover:cursor-pointer hover:text-blue-500" />
                <span className="counter">15</span>
                <ThumbDownIcon className="w-5 hover:cursor-pointer hover:text-red-500" />
              </div>
            </div>
          </li>
          <li className="py-5 w-full border-b border-b-slate-100  flex justify-between align-middle">
            <div className="items-start comment flex">
              <div className="avatar-details flex flex-col w-32">
                <a href="#" title="View Profile" className="m-auto">
                  <img
                    src={avatar}
                    alt="Avatar"
                    className="rounded-full h-20"
                  />
                  <span>Username</span>
                </a>
                <div className="role text-xs font-light italic">
                  Participant
                </div>
              </div>
              <div className="bg-slate-100 p-4 ml-7 rounded-lg w-full relative comment-dialog">
                <p className="text-left">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Tempora, consequuntur ad? Hic tempora vitae sunt veritatis
                  repellendus et repudiandae commodi adipisci. Asperiores dolor
                  suscipit accusantium? A, tempora! Dolore, sapiente laboriosam.
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
                  unde sunt fugit nostrum, accusamus in ut sint id dolorem,
                  officia culpa neque. Nobis vitae cumque porro temporibus,
                  beatae maiores modi.
                </p>
              </div>
              <div className="flex flex-col items-center ml-2">
                <ThumbUpIcon className="w-5 hover:cursor-pointer hover:text-blue-500" />
                <span className="counter">15</span>
                <ThumbDownIcon className="w-5 hover:cursor-pointer hover:text-red-500" />
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div className="comment-box">
        <div className="rounded-2xl border-t-blue-500 border-b-slate-100 border-b border-t-2 mb-5 p-5 bg-white drop-shadow-sm mt-5">
          <p>You must be logged in to reply to this topic.</p>
        </div>
        <textarea></textarea>
      </div>
    </>
  );
}

export default Replies;
