import { CurrentUser } from "@/types";
import Link from "next/link";
import { BiHeart, BiUser } from "react-icons/bi";

function Navbar({ currentUser }: { currentUser: CurrentUser }) {
  return (
    <div className="flex justify-between w-full px-4 p-3 m-2 rounded-md bg-violet-200 text-violet-600 items-center">
      <div className="text-3xl font-black mx-2">Loot</div>
      <div className="text-[1.1rem] font-black mx-2 flex gap-4">
        <span>
          <BiHeart />
        </span>
        {currentUser ? <BiUser /> : <Link href={"/signin"}>sign in</Link>}
      </div>
    </div>
  );
}

export default Navbar;
