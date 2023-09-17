import { Navbar } from "@/components";
import { Poppins } from "next/font/google";

const poppins = Poppins({ weight: ["400", "600", "900"], subsets: ["latin"] });

export default function Home() {
  return (
    <div className={poppins.className}>
      <Navbar />
      <div>you</div>
    </div>
  );
}
