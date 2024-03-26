import { GiHamburgerMenu } from "react-icons/gi";
import { FaRegBell } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
const NavBar: React.FC = () => {
  return (
    <div className=" h-20 flex max-w-[1440px] items-center flex-row justify-between">
      <div className="flex justify-center w-[270px] me-10">
        <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-500 to-lime-300">
          itemPOS
        </h1>
      </div>
      <div className="flex items-center gap-3">
        <GiHamburgerMenu />
        <p>Customer /</p>
      </div>
      <div className="flex items-center gap-3">
        <div className="relative mx-auto text-gray-600">
          <input
            className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
            type="search"
            name="search"
            placeholder="Search"
          />
          <button type="submit" className="absolute right-0 top-0 mt-3 mr-4">
            <FaSearch />
          </button>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <div>En^</div>
        <div>
          <FaRegBell />
        </div>
        <div className="flex -space-x-2 overflow-hidden">
          <img
            className="inline-block h-10 w-10 rounded-full ring-2 ring-white"
            src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};
export default NavBar;
