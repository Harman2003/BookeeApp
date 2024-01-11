import { ShiftInterface } from "../types/shiftInterfaces";

export const getRangeHours = (shifts: ShiftInterface[]) => {
  let totalShiftTime = 0;

  for (const shift of shifts) {
    totalShiftTime += shift.endTime - shift.startTime;
  }

  const totalHours = Math.floor(totalShiftTime / (1000 * 60 * 60));
  const totalMinutes = Math.floor(
    (totalShiftTime % (1000 * 60 * 60)) / (1000 * 60)
  );

  if (totalHours > 0 && totalMinutes > 0) {
    return `${totalHours} h ${totalMinutes} m`;
  } else if (totalHours > 0) {
    return `${totalHours} h`;
  } else {
    return `${totalMinutes} m`;
  }
};
