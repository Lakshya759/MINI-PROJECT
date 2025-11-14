import React from "react";

const main = () => {
  return (
    <>
      <div className="bg-[url('https://images.pexels.com/photos/2847648/pexels-photo-2847648.jpeg')] h-screen w-full bg-cover flex justify-center items-center">
        <div className=" flex">
          <div className=" h-80 w-120 flex justify-center items-center flex-col ">
            <h1 className="font-mono text-4xl">
              Connect. Collaborate. Grow — Together.
            </h1>
            <p className="text-2xl">
              Your college community, reimagined. Ask questions, share
              knowledge, and get instant help from students just like you.
            </p>
          </div>
          <div className=" "><img src="https://i.pinimg.com/736x/93/79/d2/9379d261dfd39d582b0dc96a09f8a324.jpg" alt="" className="h-100 width-90 rounded-full" /></div>
        </div>
      </div>
    </>
  );
};

export default main;
