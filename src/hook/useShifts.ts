import { useContext } from "react";
import { ShiftContextProps } from "../types/shiftInterfaces";
import { ShiftContext } from "../context/ShiftProvider";

const useShifts = () => {
  return useContext<ShiftContextProps>(ShiftContext);
};

export default useShifts;
