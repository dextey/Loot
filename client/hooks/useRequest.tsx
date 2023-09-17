import axios, { AxiosError } from "axios";
import { AxiosMethod } from "@/types";
import { ReactElement, useState } from "react";

export const useRequest = ({ url, method, data, onSuccess }: AxiosMethod) => {
  const [errors, setErrors] = useState<ReactElement>();

  const request = async () => {
    try {
      setErrors(<div></div>);
      const response = await axios[method](url, data);
      if (onSuccess) {
        onSuccess();
      }
      return response.data;
    } catch ({ response }: any) {
      response && setErrors(<div className="p-3 text-red-500  ">{response.data.errors[0]?.message}</div>);
    }
  };

  return { request, errors, setErrors };
};
