import { AxiosResponse } from "axios";
import { MutationFunction, useMutation } from "react-query";
import { toast } from "sonner";
const useApiSender = (
  call: (params:any) => Promise<AxiosResponse<any, any>>,
  message: string
) => {
  const {
    mutateAsync,
    isLoading,
    data: response,
    status,
  } = useMutation(call, {
    onSuccess: (response: AxiosResponse) => {
      console.log(response?.data);
      toast.success(message);
    },
    onError(error) {
      if (error) {
        toast.error("Something went wrong");
      }
    },
  });

  const send = async (params: any) => mutateAsync(params);
  return {
    send,
    isLoading,
    data: response?.data,
    status,
  };
};
export default useApiSender;
