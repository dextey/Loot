export type AxiosMethod = {
  url: string;
  method: "get" | "delete" | "post" | "put";
  data?: Object;
  option?: Object;
  onSuccess: () => void;
};

export type TextInputProps = {
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  type: string;
  name?: string;
  className?: string;
  placeholder: string;
};
