import Discover from "@/components/home/Discover";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className=" w-full h-screen">
      <Discover />
    </div>
  );
}
