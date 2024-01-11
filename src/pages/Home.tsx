import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <div>
        <h1 className="font-poppins font-semibold ss:text-[72px] text-[52px] text-black ss:leading-[90px] leading-[70px]">
          Enjoy The <br className="sm:block hidden" />{" "}
          <span className="text-black">Futuristic</span>{" "}
        </h1>
      </div>

      <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-pink-500 ss:leading-[90px] leading-[70px]">
        Shift Booking
      </h1>
      <p className="font-poppins font-normal text-gray-500 text-[18px] leading-[30.8px] ml-2 max-w-[470px] mt-5">
        Elevate your schedule with ShiftBookee, the ultimate shifts booking
        application! Seamlessly dynamic and effortlessly cool, our platform
        transforms scheduling into an empowering experience. Join the movement –
        where every shift is an opportunity waiting to be booked!
      </p>
      <Link to={'/shifts'}>
        <button className="m-6 bg-pink-600 text-white px-4 py-3 rounded-full text-xl">
          Get Started
        </button>
      </Link>
    </div>
  );
}

export default Home
