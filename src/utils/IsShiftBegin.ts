export const IsShiftBegin = (start: number) => {
  const currentTimestamp = new Date().getTime();
  return start <= currentTimestamp;
};
