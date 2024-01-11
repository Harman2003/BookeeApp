export interface ShiftInterface {
  id: string;
  booked: boolean;
  area: string;
  startTime: number;
  endTime: number;
}
export interface ShiftContextProps {
  shifts: ShiftInterface[];
  setShift: React.Dispatch<React.SetStateAction<ShiftInterface[]>>;
  getShift: (
    place: string,
    isBooked: boolean | null
  ) => Record<string, ShiftInterface[]> | null;
  isLoading: boolean;
}
