import { Link, Route, Routes, useLocation } from "react-router-dom";
import AllShifts from "../Section/AllShifts";
import MyShifts from "../Section/MyShifts";

const Shifts = () => {
  const location = useLocation();
  const isMyShifts = location.pathname.endsWith("my");
  const myShiftColor = isMyShifts ? "text-[#004FB4]" : "text-[#A4B8D3]";
  const allShiftColor = isMyShifts ? "text-[#A4B8D3]" : "text-[#004FB4]";

  return (
    <div className="w-full h-full flex justify-center overflow-x-hidden">
      <div className="w-[600px] mt-16">
        <div className="flex gap-10 px-4 py-4">
          <h2 className={`text-xl cursor-pointer ${myShiftColor}`}>
            <Link to={"/shifts/my"}>My Shifts</Link>
          </h2>
          <h2 className={`text-xl cursor-pointer ${allShiftColor}`}>
            <Link to={'/shifts'}>Available Shifts</Link>
          </h2>
        </div>
        <Routes>
          <Route path="/" element={<AllShifts />} />
          <Route path="/my" element={<MyShifts />} />
        </Routes>
      </div>
    </div>
  );
};

export default Shifts;
