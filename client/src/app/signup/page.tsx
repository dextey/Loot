"use client";

import axios from "axios";
import { useState } from "react";

function page() {
  const [data, setData] = useState({ email: "", password: "", confirmPassword: "" });

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const onSubmit = () => {
    if (data.password === data.confirmPassword) {
      axios
        .post("/api/users/signup", { email: data.email, password: data.password })
        .then((res) => console.log(res.data))
        .catch((err) => {});
    }
  };

  return (
    <div className="flex flex-col p-4 justify-center items-center">
      <div className="flex flex-col text-center font-black ">
        <div className="text-[9rem]">Loot</div>
        <div className="text-[2rem]">just grab your tickets</div>
      </div>
      <div className="p-3">
        <input
          onChange={onChange}
          type="email"
          name="email"
          className="px-4 my-2 p-3 text-xl font-medium  border-none bg-purple-200"
          placeholder="email"
        />
      </div>
      <div className="p-3">
        <input
          onChange={onChange}
          type="password"
          name="password"
          className="px-4 my-2 p-3 text-xl font-medium  border-none bg-purple-200"
          placeholder="password"
        />
      </div>
      <div className="p-3">
        <input
          onChange={onChange}
          type="password"
          name="confirmPassword"
          className="px-4 my-2 p-3 text-xl font-medium  border-none bg-purple-200"
          placeholder="confirm password"
        />
      </div>
      <div className="p-3">
        <button
          onClick={onSubmit}
          className=" my-2 p-3 text-2xl font-black rounded-2xl border-none bg-purple-200 text-purple-700 px-10"
        >
          sign up
        </button>
      </div>
    </div>
  );
}

export default page;
