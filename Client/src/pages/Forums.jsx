import React, { useEffect, useContext } from "react";
import { ChatAlt2Icon } from "@heroicons/react/outline";
import { Link } from "react-router-dom";
import { GlobalContext } from "./../context/Provider";
import { fetchTopics } from "./../context/actions/topic.action";
function Forums() {
  const { topics, topicDispatch } = useContext(GlobalContext);
  useEffect(() => {
    fetchTopics()(topicDispatch);
  }, [topicDispatch]);

  return (
    <>
      <div className="breadcrumb pb-2 border-b">
        <a href="#" className="mr-5 text-blue-500">
          All Forums
        </a>
      </div>
      <div className="list text-center">
        <ul className="list-inside">
          <li>
            <ul className="flex justify-between border-b">
              <li className="w-1/2 pl-12 text-left p-2">Forum</li>
              <li className="w-[10%] p-2">Topics</li>
              <li className="w-[10%] p-2">Posts</li>
              <li className="w-[20%] p-2">Last Post</li>
            </ul>
          </li>
          {topics.topics.map((topic, index) => (
            <li className="py-3" key={topic.id}>
              <ul className="flex justify-between items-center">
                <li className="w-1/2 text-left flex items-center">
                  <span className="inline-flex left-0 p-3 bg-indigo-50 rounded-md mr-2">
                    <ChatAlt2Icon className="w-3 h-3 text-indigo-600" />
                  </span>
                  <div className="content">
                    <h2 className="text-lg font-medium pt-2 pb-2">
                      <Link
                        to={`/topics/${topic.id}`}
                        state={{ data: topic }}
                        className="text-blue-500"
                      >
                        {topic.title}
                      </Link>
                    </h2>
                    <p className="text-sm w-fit">{topic.topicText}</p>
                  </div>
                </li>
                <li className="w-[10%]">{topic.Posts.length}</li>
                <li className="w-[10%]">
                  {topic.Posts[index].Comments.length}
                </li>
                <li className="w-[20%]">3 day ago</li>
              </ul>
            </li>
          ))}

          {/* <li className="py-3">
            <ul className="flex justify-between items-center">
              <li className="w-1/2 text-left flex items-center">
                <span className="inline-flex left-0 p-3 bg-indigo-50 rounded-md mr-2">
                  <ChatAlt2Icon className="w-3 h-3 text-indigo-600" />
                </span>
                <div className="content">
                  <h2 className="text-lg font-medium">
                    <a href="#" className="text-blue-500">
                      Programming Comm
                    </a>
                  </h2>
                  <p className="text-sm w-fit">
                    At vero eos et accusamus et iusto odio dignissimos ducimus
                    qui blanditiis praesentium voluptatum deleniti atque
                    corrupti quos dolores et quas
                  </p>
                </div>
              </li>
              <li className="w-[10%]">4</li>
              <li className="w-[10%]">5</li>
              <li className="w-[20%]">3 day ago</li>
            </ul>
          </li>
          <li className="py-3">
            <ul className="flex justify-between items-center">
              <li className="w-1/2 text-left flex items-center">
                <span className="inline-flex left-0 p-3 bg-indigo-50 rounded-md mr-2">
                  <ChatAlt2Icon className="w-3 h-3 text-indigo-600" />
                </span>
                <div className="content">
                  <h2 className="text-lg font-medium pt-2 pb-2">
                    <a href="#" className="text-blue-500">
                      Programming Comm
                    </a>
                  </h2>
                  <p className="text-sm w-fit">
                    At vero eos et accusamus et iusto odio dignissimos ducimus
                    qui blanditiis praesentium voluptatum deleniti atque
                    corrupti quos dolores et quas
                  </p>
                </div>
              </li>
              <li className="w-[10%]">4</li>
              <li className="w-[10%]">5</li>
              <li className="w-[20%]">3 day ago</li>
            </ul>
          </li>
          <li className="py-3">
            <ul className="flex justify-between items-center">
              <li className="w-1/2 text-left flex items-center">
                <span className="inline-flex left-0 p-3 bg-indigo-50 rounded-md mr-2">
                  <ChatAlt2Icon className="w-3 h-3 text-indigo-600" />
                </span>
                <div className="content">
                  <h2 className="text-lg font-medium pt-2 pb-2">
                    <a href="#" className="text-blue-500">
                      Programming Comm
                    </a>
                  </h2>
                  <p className="text-sm w-fit">
                    At vero eos et accusamus et iusto odio dignissimos ducimus
                    qui blanditiis praesentium voluptatum deleniti atque
                    corrupti quos dolores et quas
                  </p>
                </div>
              </li>
              <li className="w-[10%]">4</li>
              <li className="w-[10%]">5</li>
              <li className="w-[20%]">3 day ago</li>
            </ul>
          </li>
          <li className="py-3">
            <ul className="flex justify-between items-center">
              <li className="w-1/2 text-left flex items-center">
                <span className="inline-flex left-0 p-3 bg-indigo-50 rounded-md mr-2">
                  <ChatAlt2Icon className="w-3 h-3 text-indigo-600" />
                </span>
                <div className="content">
                  <h2 className="text-lg font-medium pt-2 pb-2">
                    <a href="#" className="text-blue-500">
                      Programming Comm
                    </a>
                  </h2>
                  <p className="text-sm w-fit">
                    At vero eos et accusamus et iusto odio dignissimos ducimus
                    qui blanditiis praesentium voluptatum deleniti atque
                    corrupti quos dolores et quas
                  </p>
                </div>
              </li>
              <li className="w-[10%]">4</li>
              <li className="w-[10%]">5</li>
              <li className="w-[20%]">3 day ago</li>
            </ul>
          </li>
          <li className="py-3">
            <ul className="flex justify-between items-center">
              <li className="w-1/2 text-left flex items-center">
                <span className="inline-flex left-0 p-3 bg-indigo-50 rounded-md mr-2">
                  <ChatAlt2Icon className="w-3 h-3 text-indigo-600" />
                </span>
                <div className="content">
                  <h2 className="text-lg font-medium pt-2 pb-2">
                    <a href="#" className="text-blue-500">
                      Programming Comm
                    </a>
                  </h2>
                  <p className="text-sm w-fit">
                    At vero eos et accusamus et iusto odio dignissimos ducimus
                    qui blanditiis praesentium voluptatum deleniti atque
                    corrupti quos dolores et quas
                  </p>
                </div>
              </li>
              <li className="w-[10%]">4</li>
              <li className="w-[10%]">5</li>
              <li className="w-[20%]">3 day ago</li>
            </ul>
          </li>
          <li className="py-3">
            <ul className="flex justify-between items-center">
              <li className="w-1/2 text-left flex items-center">
                <span className="inline-flex left-0 p-3 bg-indigo-50 rounded-md mr-2">
                  <ChatAlt2Icon className="w-3 h-3 text-indigo-600" />
                </span>
                <div className="content">
                  <h2 className="text-lg font-medium pt-2 pb-2">
                    <a href="#" className="text-blue-500">
                      Programming Comm
                    </a>
                  </h2>
                  <p className="text-sm w-fit">
                    At vero eos et accusamus et iusto odio dignissimos ducimus
                    qui blanditiis praesentium voluptatum deleniti atque
                    corrupti quos dolores et quas
                  </p>
                </div>
              </li>
              <li className="w-[10%]">4</li>
              <li className="w-[10%]">5</li>
              <li className="w-[20%]">3 day ago</li>
            </ul>
          </li>
          <li className="py-3">
            <ul className="flex justify-between items-center">
              <li className="w-1/2 text-left flex items-center">
                <span className="inline-flex left-0 p-3 bg-indigo-50 rounded-md mr-2">
                  <ChatAlt2Icon className="w-3 h-3 text-indigo-600" />
                </span>
                <div className="content">
                  <h2 className="text-lg font-medium pt-2 pb-2">
                    <a href="#" className="text-blue-500">
                      Programming Comm
                    </a>
                  </h2>
                  <p className="text-sm w-fit">
                    At vero eos et accusamus et iusto odio dignissimos ducimus
                    qui blanditiis praesentium voluptatum deleniti atque
                    corrupti quos dolores et quas
                  </p>
                </div>
              </li>
              <li className="w-[10%]">4</li>
              <li className="w-[10%]">5</li>
              <li className="w-[20%]">3 day ago</li>
            </ul>
          </li> */}
        </ul>
      </div>
    </>
  );
}

export default Forums;
