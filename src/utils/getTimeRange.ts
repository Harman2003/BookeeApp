export const getTimeRange=(start: number, end: number)=>{
    const startDate = new Date(start);
    const endDate = new Date(end);
    const startTime = startDate.toString().split(" ")[4].slice(0, -3);
    const endTime = endDate.toString().split(" ")[4].slice(0,-3)
    return startTime + "-" + endTime;
}