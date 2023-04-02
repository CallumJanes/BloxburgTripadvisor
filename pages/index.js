import Link from "next/link";
const Home = () => {
  return (
    <>
      <div className="bg-loginbg w-full h-screen bg-cover flex justify-center ">
        <div className=" w-1/2 h-screen grid place-items-center ">
          <form className=" rounded-lg w-1/2  h-1/2  bg-cyan-200 bg-opacity-40 flex flex-col items-center">
            <div className=" font-bold text-center font-serif text-2xl">
              TripvisorGPT Login
            </div>
            <input
              className=" bg-cyan-300 opacity-90 rounded h-8 mt-12  w-2/3 pl-8"
              type="text"
              placeholder="Enter Your Email..."
            />
            <input
              className=" bg-cyan-300 opacity-90 rounded h-8 mt-8  w-2/3 pl-8"
              type="text"
              placeholder="Enter Your Password..."
            />
            <div className="flex flex-row text-center">
              <Link
                href="/register"
                className=" rounded-xl mt-3 w-24   bg-red-900"
              >
                Register
              </Link>
              <Link
                href="/home"
                className=" rounded-xl ml-5 w-24  pl-7 mt-3 flex  bg-red-900"
              >
                Login
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default Home;
