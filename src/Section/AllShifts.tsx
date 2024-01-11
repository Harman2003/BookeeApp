import React, { useEffect, useMemo, useState } from "react";
import ShiftContent from "../components/ShiftContent";
import useShifts from "../hook/useShifts";
import Loader from "../components/Loader";

const AllShifts = () => {
  const { shifts, getShift, isLoading } = useShifts();
  const areas = Object.entries(
    useMemo(() => {
      const areaCountMap: Record<string, number> = {};
      for (const shift of shifts) {
        if (!areaCountMap[shift.area]) {
          areaCountMap[shift.area] = 0;
        }
        areaCountMap[shift.area]++;
      }
      return areaCountMap;
    }, [shifts])
  );
  const [currentArea, setCurrentArea] = useState<string>("");
  const organisedShifts = getShift(currentArea, null);

  useEffect(() => {
    if (!currentArea && areas[0]) {
      setCurrentArea(areas[0][0]);
    }
  }, [shifts]);
  // add dropdown for more areas
  return isLoading ? (
    <Loader/>
  ) : (
    <div className="w-full pb-12 rounded-lg bg-white shadow-lg shadow-black/5 border border-[#CBD2E1]">
      <div className="flex justify-around text-lg font-medium py-3 border-b border-[#CBD2E1]">
        {areas.slice(0, 3).map(([area, count]) => (
          <div
            className="flex gap-2 cursor-pointer"
            key={area}
            style={{ color: currentArea === area ? "#004FB4" : "#A4B8D3" }}
            onClick={() => setCurrentArea(area)}
          >
            <div>{area}</div>
            <div>{`(${count})`}</div>
          </div>
        ))}
        {areas.length > 3 && <div>...</div>}
      </div>
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
                IsMyShift={false}
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

export default AllShifts;
