import { ShiftInterface } from "../types/shiftInterfaces";
import { getRangeHours } from "../utils/getRangeHours";
import ShiftRow from "./ShiftRow";

const ShiftContent = ({
  date,
  IsMyShift,
  shifts,
}: {
  date: string;
  IsMyShift: boolean;
  shifts: ShiftInterface[];
}) => {
  let totalDuration = getRangeHours(shifts);

  return (
    <div>
      {/* Shift Heading */}
      <div className="flex items-center gap-3 px-4 py-2 bg-[#F1F4F8] border-b border-[#CBD2E1]">
        <div className="font-semibold text-[#4F6C92]">{date}</div>
        {IsMyShift && (
          <div className="text-xs text-[#A4B8D3]">
            <span>{shifts.length}</span>{" "}
            {shifts.length > 1 ? "shifts" : "shift"}, {totalDuration}
          </div>
        )}
      </div>
      {/* Shift Rows */}
      {shifts.map((data, index) => (
        <ShiftRow
          data={data}
          IsMyShift={IsMyShift}
          key={index}
        />
      ))}
    </div>
  );
};

export default ShiftContent;
