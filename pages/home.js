import React from "react";
import { UserOutlined } from "@ant-design/icons";
const home = () => {
  return (
    <div className=" bg-homebg bg-cover">
      <div className="  h-screen  grid place-items-center ">
        <form className="w-1/2  h-1/2 rounded-lg bg-cyan-200 bg-opacity-40 flex flex-col ">
          <h1 className=" text-4xl font-serif text-center">TripAdvisorGPT</h1>
          <input
            placeholder="Enter a country..."
            type="text"
            className="w-1/2 h-10 self-center mt-10 rounded-lg pl-20"
          />
          <input
            placeholder="Enter a city..."
            type="text"
            className="w-1/2 h-10 self-center mt-10 rounded-lg pl-20"
          />
          <button className=" bg-cyan-600 mt-10 w-1/4 self-center rounded-lg">
            Search
          </button>
        </form>
      </div>
    </div>
  );
};

export default home;
