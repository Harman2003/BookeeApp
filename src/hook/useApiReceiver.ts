import { useQuery } from "react-query";
import axios from "../api/axios";
import { AxiosResponse } from "axios";
const useApiReceiver = (url: string) => {

  const { data, refetch, isLoading, status } = useQuery(
    ["useApiReceiver", url],
    ({ signal }) => apiCall(signal),
    { refetchOnWindowFocus: true }
  );

  const receive = () => refetch();
  return { data: data?.data, isLoading, status, receive };

  async function apiCall(signal?: AbortSignal): Promise<AxiosResponse | void> {
    const response = await axios.get(url, {signal});
    return response;
  }
};

export default useApiReceiver;
