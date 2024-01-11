import React, {
  createContext,
  useState,
  ReactNode,
  useLayoutEffect,
  useCallback,
} from "react";
import useApiReceiver from "../hook/useApiReceiver";
import { ShiftContextProps, ShiftInterface } from "../types/shiftInterfaces";
import { getDateString } from "../utils/getDateString";

interface ShiftProviderProps {
  children: ReactNode;
}

export const ShiftContext = createContext<ShiftContextProps>({
  shifts: [],
  setShift: () => null,
  getShift: () => null,
  isLoading: true,
});

export const ShiftProvider: React.FC<ShiftProviderProps> = ({
  children,
}: ShiftProviderProps) => {
  const [shifts, setShift] = useState<ShiftInterface[]>([]);
  const { data, isLoading } = useApiReceiver("/shifts");

  useLayoutEffect(() => {
    if (data) {
      setShift([
        ...data.sort(
          (a: ShiftInterface, b: ShiftInterface) => a.startTime - b.startTime
        ),
      ]);
    }
  }, [data]);

  const getShift = useCallback(
    (place: string, isBooked: boolean | null) => {
      const filteredShifts = shifts.filter(
        (shift) => (!place || place === shift.area) && (!isBooked || isBooked == shift.booked)
      );
      const organisedShifts: Record<string, ShiftInterface[]> = {};
      filteredShifts.forEach((shift) => {
        const date: string = getDateString(shift.startTime);
        if (!organisedShifts[date]) organisedShifts[date] = [];
        organisedShifts[date].push(shift);
      });
      return organisedShifts;
    },
    [shifts]
  );

  return (
    <ShiftContext.Provider value={{ shifts, setShift, getShift, isLoading }}>
      {children}
    </ShiftContext.Provider>
  );
};
