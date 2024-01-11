import { getTimeRange } from "../utils/getTimeRange";
import { IsShiftBegin } from "../utils/IsShiftBegin";
import useApiSender from "../hook/useApiSender";
import { bookShifts } from "../webApi/bookShift";
import { cancelShifts } from "../webApi/cancelShift";
import useShifts from "../hook/useShifts";
import greenSpinner from "../assets/spinner_green.svg";
import redSpinner from "../assets/spinner_red.svg";
import { ShiftInterface } from "../types/shiftInterfaces";
import { useMemo } from "react";
interface ShiftRowProps {
  data: ShiftInterface;
  IsMyShift: boolean;
}
const ShiftRow: React.FC<ShiftRowProps> = ({ data, IsMyShift }) => {
  const { id, startTime, endTime, area, booked } = data;
  const { shifts, setShift } = useShifts();
  const {
    send: send_book,
    isLoading: isBooking,
    status: bookStatus,
  } = useApiSender(bookShifts, "Shift Booked");
  const {
    send: send_cancel,
    isLoading: isCancelling,
    status: cancelStatus,
  } = useApiSender(cancelShifts, "Shift Cancelled");

  async function book(id: string) {
    try {
        await send_book(id);
      setShift((shifts) =>
        shifts.map((shift) => {
          if (shift.id === id) {
            return { ...shift, booked: true };
          } else {
            return shift;
          }
        })
      );
    } catch (err) {
      console.log(err);
    }
  }
  async function cancel(id: string) {
    try {
        await send_cancel(id);
      setShift((shifts) =>
        shifts.map((shift) => {
          if (shift.id === id) {
            return { ...shift, booked: false };
          } else {
            return shift;
          }
        })
      );
    } catch (err) {
      console.log(err);
    }
  }
  const IsOverlap = () => {
    if (booked) return false;
    const bookedShifts = shifts.filter((shift) => shift.booked);
    for (const shift of bookedShifts) {
      const bookedShiftStart = shift.startTime;
      const bookedShiftEnd = shift.endTime;
      if (!(startTime >= bookedShiftEnd || endTime <= bookedShiftStart))
        return true;
    }
    return false;
  };
  return (
    <div className="flex justify-between items-center px-4 py-2 border-b border-[#CBD2E1]">
      <div>
        <div className="text-[#4F6C92]">{getTimeRange(startTime, endTime)}</div>
        {IsMyShift && <div className="text-xs text-[#A4B8D3]">{area}</div>}
      </div>
      {!IsMyShift && booked && (
        <div className="ml-auto text-sm font-semibold text-[#4F6C92]">
          Booked
        </div>
      )}
      {!IsMyShift && IsOverlap() && (
        <div className="ml-auto text-sm font-semibold text-[#E2006A]">
          Overlapping
        </div>
      )}
      {booked ? (
        <button
          className="flex justify-center w-24 border rounded-full ml-8 py-1 text-sm font-semibold border-[#EED2DF] text-[#EED2DF]"
          style={{
            color: IsShiftBegin(startTime) ? "#EED2DF" : "#E2006A",
            borderColor: IsShiftBegin(startTime) ? "#EED2DF" : "#FE93B3",
          }}
          disabled={IsShiftBegin(startTime) || isCancelling}
          onClick={() => cancel(id)}
        >
          {isCancelling ? (
            <img src={redSpinner} alt="" className="h-[20px]" />
          ) : (
            "Cancel"
          )}
        </button>
      ) : (
        <button
          className="flex justify-center w-24 border rounded-full ml-8 py-1 text-sm font-semibold border-[#55CB82] text-[#16A64D]"
          style={{
            color: IsOverlap() ? "#CAEFD8" : "#16A64D",
            borderColor: IsOverlap() ? "#CAEFD8" : "#55CB82",
          }}
          onClick={() => book(id)}
          disabled={IsOverlap() || isBooking}
        >
          {isBooking ? (
            <img src={greenSpinner} alt="" className="h-[20px]" />
          ) : (
            "Book"
          )}
        </button>
      )}
    </div>
  );
};

export default ShiftRow;
