import { Navbar } from "@/components";
import axios from "axios";
import { cookies } from "next/headers";

export async function getData(): Promise<any> {
  await axios
    .get("http://loot.com/api/users/currentuser", { withCredentials: true })
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log(err);
      return null;
    });
}

export default async function Page() {
  const response = await getData();
  const auth = cookies();
  console.log(auth.get("session")?.value);
  console.log(response);

  return (
    <div>
      <Navbar />
      <div>you</div>
    </div>
  );
}
