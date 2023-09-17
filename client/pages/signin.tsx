import Link from "next/link";
import React from "react";

function signin() {
  const [data, setData] = React.useState({ email: "", password: "" });
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  return (
    <div className="flex flex-col p-4 justify-center items-center bg-purple-300 h-screen w-full overflow-hidden">
      <div className="flex flex-col text-center font-black text-white ">
        <div className="text-[9rem]">Loot</div>
        <div className="text-[2rem]">just grab your tickets</div>
      </div>

      <div className="p-3">
        <input
          onChange={onChange}
          type="email"
          name="email"
          className="px-4 my-2 p-3 text-xl font-medium  border-none bg-purple-200 rounded-lg text-slate-700 focus:outline-none"
          placeholder="email"
        />
      </div>
      <div className="p-3">
        <input
          onChange={onChange}
          type="password"
          name="password"
          className="px-4 my-2 p-3 text-xl font-medium  border-none bg-purple-200 rounded-lg text-slate-700 focus:outline-none"
          placeholder="password"
        />
      </div>

      <div className="p-3 flex flex-col gap-2 items-center ">
        <button
          //   onClick={onSubmit}
          className=" my-2 p-3 text-2xl font-black rounded-2xl border-none bg-purple-200 text-purple-700 px-10"
        >
          lets go
        </button>
        <Link href={"/signup"} className=" font-bold pt-10 text-violet-600 drop-shadow-lg">
          Don't have an account? SignUp here
        </Link>
      </div>
    </div>
  );
}

export default signin;
