import Navbar from "./components/Navbar";
import CardMovie from "./components/CardMovie";

export default function Home() {
  return (
    <>
      <div className="bg-gradient-to-r from-slate-800 to-gray-900 text-white">
        <Navbar />
        <CardMovie />
      </div>
    </>
  );
}
