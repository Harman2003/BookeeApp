import React, { useEffect, useMemo, useState } from "react";
import ShiftContent from "../components/ShiftContent";
import useShifts from "../hook/useShifts";
import Loader from "../components/Loader";

const MyShifts = () => {
  const { isLoading, getShift } = useShifts();
  const organisedShifts = getShift("", true);

  return isLoading ? (
    <Loader />
  ) : (
    <div className="w-full pb-12 rounded-lg bg-white shadow-lg shadow-black/5 border border-[#CBD2E1] overflow-hidden">
      {(() => {
        const content = [];
        for (const date in organisedShifts) {
          if (Object.prototype.hasOwnProperty.call(organisedShifts, date)) {
            const shifts = organisedShifts[date];
            content.push(
              <ShiftContent
                date={date}
                shifts={shifts}
                key={date}
                IsMyShift={true}
              />
            );
          }
        }
        if (!content.length) {
          return (
            <div className="text-center mt-12 text-lg font-semibold text-[#CBD2E1]">
              No Shift Found
            </div>
          );
        }
        return content;
      })()}
    </div>
  );
};

export default MyShifts;
