import React from "react";
import { useState } from "react";
const register = () => {
  const REGISTER_URL = "/User/Register";

  const [name, setName] = useState("");
  const [pwd, setPwd] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await apiService.post(REGISTER_URL, {
        Name: name,
        Email: email,
        Password: pwd,
        Surname: surname,
      });
      console.log(response?.data);
      console.log(response?.accessToken);
      setEmail("");
      setName("");
      setSurname("");
      setPwd("");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className=" w-full h-screen bg-regbg bg-no-repeat bg-cover ">
      <div className=" w-1/2 h-screen  grid place-items-center">
        <form
          onSubmit={handleSubmit}
          className=" w-1/2 rounded-lg h-auto bg-cyan-200 bg-opacity-40 flex flex-col"
        >
          <div className=" font-bold text-center font-serif text-2xl">
            TripvisorGPT Register
          </div>
          <input
            className=" bg-cyan-300 opacity-90 rounded h-8 mt-12 ml-3 w-2/3 pl-8"
            type="text"
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter Your Name..."
          />
          <input
            className=" bg-cyan-300 opacity-90 rounded h-8 mt-8 ml-3 w-2/3 pl-8"
            type="text"
            onChange={(e) => setSurname(e.target.value)}
            placeholder="Enter Your Surname..."
          />
          <input
            className=" bg-cyan-300 opacity-90 rounded h-8 mt-8 ml-3 w-2/3 pl-8"
            type="text"
            placeholder="Enter Email Password..."
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className=" bg-cyan-300 opacity-90 rounded h-8 mt-8 ml-3 w-2/3 pl-8"
            type="text"
            placeholder="Enter Your Password..."
            onChange={(e) => setPwd(e.target.value)}
          />
          <div className="flex flex-row">
            <button className=" rounded-xl mt-3 w-24 ml-12  bg-red-900">
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default register;
