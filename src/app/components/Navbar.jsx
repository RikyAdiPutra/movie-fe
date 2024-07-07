import { GiFilmProjector } from "react-icons/gi";
import { FiSearch } from "react-icons/fi";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center p-4">
      <div className="rotate-3">
        <GiFilmProjector size={30} />
      </div>
      <h1 className="font-bold text-[20px]">MovieVerse</h1>
      <div className="flex items-center gap-2">
        <input type="search" />
        <FiSearch size={23} />
      </div>
    </div>
  );
};

export default Navbar;
