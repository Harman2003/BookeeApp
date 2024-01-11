export function getDateString(timestamp: number) {
  const currentDate = new Date();
  const targetDate = new Date(timestamp);
  if (
    targetDate.getDate() === currentDate.getDate() &&
    targetDate.getMonth() === currentDate.getMonth() &&
    targetDate.getFullYear() === currentDate.getFullYear()
  ) {
    return "Today";
  }

  const dateString = targetDate.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
  });
  return dateString;
}
