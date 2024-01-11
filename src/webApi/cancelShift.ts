import axios from "../api/axios";

export const cancelShifts = async (id: string) => {
  const response = await axios.post(`/shifts/${id}/cancel`);
  return response;
};
