"use client";

import { URL_CONSTANTS } from "@/constants";
import { useRequest } from "@/hooks/useRequest";
import { TextInput } from "@/ui/input/Textinput";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

function page() {
  const router = useRouter();
  const [data, setData] = useState({ email: "", password: "", confirmPassword: "" });
  const { request, errors, setErrors } = useRequest({
    url: URL_CONSTANTS.signUp,
    method: "post",
    data: data,
    onSuccess: () => router.push("/"),
  });
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const onSubmit = () => {
    if (data.password === data.confirmPassword) {
      request();
    } else setErrors(<div className="p-3 text-red-500 ">passwords dont match</div>);
  };

  return (
    <div className="flex flex-col p-4 justify-center items-center">
      <div className="flex flex-col text-center font-black ">
        <div className="text-[9rem]">Loot</div>
        <div className="text-[2rem]">just grab your tickets</div>
      </div>
      {errors}
      <div className="p-3">
        <TextInput onChange={onChange} type="email" name="email" placeholder="email" />
      </div>
      <div className="p-3">
        <TextInput onChange={onChange} type="password" name="password" placeholder="password" />
      </div>
      <div className="p-3">
        <TextInput
          onChange={onChange}
          type="password"
          name="confirmPassword"
          placeholder="confirm password"
        />
      </div>
      <div className=" flex flex-col p-3 items-center">
        <button
          onClick={onSubmit}
          className=" my-2 p-3 text-2xl font-black rounded-2xl border-none bg-purple-200 text-purple-700 px-10"
        >
          sign up
        </button>
        <Link href={"/signin"} className=" font-bold pt-10 text-violet-600 drop-shadow-lg">
          Already have an account? SignIn here
        </Link>
      </div>
    </div>
  );
}

export default page;
