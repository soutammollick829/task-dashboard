import { FaAssistiveListeningSystems, FaBars, FaCalendarDay, FaDollarSign, FaListUl, FaProjectDiagram, FaRecycle, FaRegCalendarAlt, FaRegClone, FaRegFile, FaRegFileAudio, FaRegHandPointer, FaRegHdd, FaRegKeyboard, FaRegStar, FaRegUser, FaSearch, FaUserFriends } from "react-icons/fa";
import { Link } from "react-router-dom";

import logo from "../../../assets/logo/thumbnail.png";

const Drawer = () => {
  return (
    <div className="drawer">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex items-center">
        {/* Page content here */}
        <label
          htmlFor="my-drawer"
          className="btn btn-ghost btn-circle drawer-button"
        >
          <FaBars className="text-lg" />
        </label>
        <button
          className="inline-flex items-center gap-4"
          onClick={() => window.my_modal_3.showModal()}
        >
          <FaSearch className="ml-2 text-stone-600 text-lg" />
          <span className="text-stone-400">Search </span>
          <span className="border-2 px-1 rounded-lg text-stone-400">⌘K</span>
        </button>
        {/*search bar modal here...*/}
        <dialog id="my_modal_3" className="modal">
          <form method="dialog" className="modal-box rounded-md">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 hover:bg-red-400">
              ✕
            </button>
            <FaSearch className="ml-2 text-stone-600 text-lg mb-4" />
            <hr />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-5 mb-5">
            <div className="">
            <p className="py-4 text-xs text-zinc-400">POPULAR SEARCHES</p>
            <Link to="/">
            <p className="flex items-center gap-2 text-zinc-500 mb-2 hover:text-[#7367F0]"><FaAssistiveListeningSystems className="text-lg"/> Analytics</p>
            </Link>
            <Link>
            <p className="flex items-center gap-2 text-zinc-500 mb-2 hover:text-[#7367F0]"><FaProjectDiagram className="text-lg"/> CRM</p>
            </Link>
            <Link>
            <p className="flex items-center gap-2 text-zinc-500 mb-2 hover:text-[#7367F0]"><FaRegFile className="text-lg"/> Invoice List</p>
            </Link>
            <Link>
            <p className="flex items-center gap-2 text-zinc-500 hover:text-[#7367F0]"><FaUserFriends className="text-lg"/> User List</p>
            </Link>
            </div>
            <div>
            <p className="py-4 text-xs text-zinc-400">APPS & PAGES</p>
            <Link>
            <p className="flex items-center gap-2 text-zinc-500 mb-2 hover:text-[#7367F0]"><FaRegCalendarAlt className="text-lg"/> Calender</p>
            </Link>
            <Link>
            <p className="flex items-center gap-2 text-zinc-500 mb-2 hover:text-[#7367F0]"><FaRegFileAudio className="text-lg"/> Invoice Add</p>
            </Link>
            <Link>
            <p className="flex items-center gap-2 text-zinc-500 mb-2 hover:text-[#7367F0]"><FaDollarSign className="text-lg"/> Pricing</p>
            </Link>
            <Link>
            <p className="flex items-center gap-2 text-zinc-500 hover:text-[#7367F0]"><FaRegUser className="text-lg"/> Account Setting</p>
            </Link>
            </div>
            <div>
            <p className="py-4 text-xs text-zinc-400">USER INTERFACE</p>
            <Link>
            <p className="flex items-center gap-2 text-zinc-500 mb-2 hover:text-[#7367F0]"><FaRecycle className="text-lg"/> Typography</p>
            </Link>
            <Link>
            <p className="flex items-center gap-2 text-zinc-500 mb-2 hover:text-[#7367F0]"><FaRegClone className="text-lg"/> Tabs</p>
            </Link>
            <Link>
            <p className="flex items-center gap-2 text-zinc-500 mb-2 hover:text-[#7367F0]"><FaRegHandPointer className="text-lg"/> Buttons</p>
            </Link>
            <Link>
            <p className="flex items-center gap-2 text-zinc-500 hover:text-[#7367F0]"><FaRegKeyboard className="text-lg"/> Statistics</p>
            </Link>
            </div>
            <div>
            <p className="py-4 text-xs text-zinc-400">POPULAR SEARCHES</p>
            <Link>
            <p className="flex items-center gap-2 text-zinc-500 mb-2 hover:text-[#7367F0]"><FaListUl className="text-lg"/> Select</p>
            </Link>
            <Link>
            <p className="flex items-center gap-2 text-zinc-500 mb-2 hover:text-[#7367F0]"><FaRegHdd className="text-lg"/> Combobox</p>
            </Link>
            <Link>
            <p className="flex items-center gap-2 text-zinc-500 mb-2 hover:text-[#7367F0]"><FaCalendarDay className="text-lg"/> Date & Time Picker</p>
            </Link>
            <Link>
            <p className="flex items-center gap-2 text-zinc-500 hover:text-[#7367F0]"><FaRegStar className="text-lg"/> Rating</p>
            </Link>
            </div>
            </div>
          </form>
        </dialog>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer" className="drawer-overlay"></label>
        <ul className="menu p-4 w-60 min-h-full bg-base-200 text-base-content">
          {/* Sidebar content here */}
          <div className="flex items-center gap-3">
            <img className="w-16" src={logo} alt="logo" />
            <h1 className="text-2xl font-bold">Vuexy</h1>
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 ">✕</button>
          </div>
          <li>
            <a>Sidebar Item 1</a>
          </li>
          <li>
            <a>Sidebar Item 2</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Drawer;
