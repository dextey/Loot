import { TextInputProps } from "@/types";

export const TextInput = (props: TextInputProps) => {
  return (
    <input
      onChange={props.onChange}
      type={props.type ?? "text"}
      name={props.name}
      className={
        props.className ??
        "px-4 my-2 p-3 text-xl font-medium  border-none bg-purple-200 rounded-lg text-slate-700 focus:outline-none"
      }
      placeholder={props.placeholder}
    />
  );
};
