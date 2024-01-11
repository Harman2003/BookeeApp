import axios from "../api/axios"

export const bookShifts = async (id:string) => {
    const response = await axios.post(`/shifts/${id}/book`);
    return response;
}