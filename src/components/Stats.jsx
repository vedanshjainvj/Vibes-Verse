import React from "react";
import logo from "../assets/logo.png";
import img1 from "../assets/img1.png";

const Stats = () => {
  return (
    <>
      <div className="h-screen flex flex-col items-center justify-center gap-16">
        <div className="w-full content-div">
          <h1 className="text-center text-[5vw] mb-10">
            OUR <span className="span-feedback text-[5vw]"> STATS</span>
          </h1>
          <div className="flex stats-div justify-around items-center gap-0 flex-wrap rounded-xl">
            <div className="cards h-[20vh] w-[20vw] flex flex-col mb-1 pb-2 gap-2 text-center items-center justify-center">
              <img
                src="https://i.pinimg.com/236x/23/c9/6c/23c96c344b1a15f0ce2c8262e6c7b07b.jpg"
                width={80}
                alt=""
              />
              <h2 className="text-lg">Likes & Comments</h2>
              <h1 className="text-xl">5738</h1>
            </div>
            <div className="cards h-[20vh] w-[20vw] flex flex-col mb-1 pb-2 gap-2 text-center items-center justify-center">
              <img
                src="https://i.pinimg.com/236x/b7/e0/7c/b7e07c5e1018d3e7411361ee7f3a23b5.jpg"
                width={80}
                alt=""
              />
              <h2 className="text-lg">Total Posts</h2>
              <h1 className="text-xl">120</h1>
            </div>
            <div className="cards h-[20vh] w-[20vw] flex flex-col mb-1 pb-2 gap-2 text-center items-center justify-center">
              <img
                src="https://i.pinimg.com/236x/72/5c/6f/725c6fcec1f84ceaa28b0351aa5a98b6.jpg"
                width={70}
                alt=""
              />
              <h2 className="text-lg">Accounts Reached</h2>
              <h1 className="text-xl">1145</h1>
            </div>
            <div className="cards h-[20vh] w-[20vw] flex flex-col mb-1 pb-2 gap-2 text-center items-center justify-center">
              <img
                src="https://i.pinimg.com/236x/44/74/c8/4474c8b87b66334819ccd44cf36ce6bf.jpg"
                width={80}
                alt=""
              />
              <h2 className="text-lg">Content Interactions</h2>
              <h1 className="text-xl">6120</h1>
            </div>
          </div>
        </div>
        <div className="w-full content-div">
          <h1 className="text-center text-[5vw] mb-10 ">
            Internship <span className="span-feedback text-[5vw]"> Data</span>
          </h1>
          <div className="flex justify-around items-center gap-0 rounded-xl flex-wrap">
            <div className="cards h-[20vh] w-[20vw] flex flex-col mb-1 pb-2 gap-2 text-center items-center justify-center">
              <img
                src="https://i.pinimg.com/236x/23/c9/6c/23c96c344b1a15f0ce2c8262e6c7b07b.jpg"
                width={80}
                alt=""
              />
              <h2 className="text-lg">Internships Posted</h2>
              <h1 className="text-xl">120+</h1>
            </div>
            <div className="cards h-[20vh] w-[20vw] flex flex-col mb-1 pb-2 gap-2 text-center items-center justify-center">
              <img
                src="https://i.pinimg.com/236x/b7/e0/7c/b7e07c5e1018d3e7411361ee7f3a23b5.jpg"
                width={80}
                alt=""
              />
              <h2 className="text-lg">Stipend Worth</h2>
              <h1 className="text-xl">20,000+</h1>
            </div>
            <div className="cards h-[20vh] w-[20vw] flex flex-col mb-1 pb-2 gap-2 text-center items-center justify-center">
              <img
                src="https://i.pinimg.com/236x/72/5c/6f/725c6fcec1f84ceaa28b0351aa5a98b6.jpg"
                width={70}
                alt=""
              />
              <h2 className="text-lg">Certificates Issued</h2>
              <h1 className="text-xl">191+</h1>
            </div>
            <div className="cards h-[20vh] w-[20vw] flex flex-col mb-1 pb-2 gap-2 text-center items-center justify-center">
              <img
                src="https://i.pinimg.com/236x/44/74/c8/4474c8b87b66334819ccd44cf36ce6bf.jpg"
                width={80}
                alt=""
              />
              <h2 className="text-lg">Swags Distributed</h2>
              <h1 className="text-xl">90+</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Stats;
