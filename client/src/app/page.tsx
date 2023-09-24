import { Navbar } from "@/components";
import { URL_CONSTANTS } from "@/constants";
import { CurrentUser } from "@/types";
import axios from "axios";
import { cookies } from "next/headers";

export async function getData(cookie: string): Promise<CurrentUser> {
  const customHeaders = {
    headers: {
      Cookie: "session=" + cookie,
    },
  };

  try {
    const response = await axios.get(URL_CONSTANTS.currentUser, customHeaders);
    return response.data?.currentUser;
  } catch (error) {
    return null;
  }
}

export default async function Page() {
  const cookie = cookies().get("session")?.value;

  const currentUser = cookie && (await getData(cookie));

  return (
    <div>
      <Navbar currentUser={currentUser} />
      {currentUser ? <h1>Your are signed In</h1> : <h1>signed OUT</h1>}
    </div>
  );
}
