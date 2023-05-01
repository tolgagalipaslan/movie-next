import Navbar from "@/components/Navbar";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <div className="bgImage md:py-5 md:px-5 font-kanit">
      <div className="md:max-w-[1180px]  w-full mx-auto bg-[#212529]   md:rounded-xl shadowHome">
        <Navbar />
        <Component {...pageProps} />
      </div>
    </div>
  );
}
