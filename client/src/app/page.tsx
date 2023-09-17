import { Navbar } from "@/components";
import axios from "axios";
import { cookies } from "next/headers";

export async function getData(cookie: string): Promise<any> {
  const customHeaders = {
    headers: {
      Cookie: "session=" + cookie,
      // Add any other headers you need
    },
  };
  await axios
    .get("http://loot.com/api/users/currentuser", customHeaders)
    .then((res) => {
      console.log(res.data);
    })
    .catch((err) => {
      console.log(err);
      return null;
    });
}

export default async function Page() {
  const cookie = cookies().get("session")?.value;
  if (cookie) {
    const response = await getData(cookie);
    // console.log(cookie);
  }

  return (
    <div>
      <Navbar />
      <div>you</div>
    </div>
  );
}
