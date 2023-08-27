import { FaRegHeart } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer items-center p-4  mt-[400px]">
      <div className="items-center grid-flow-col">
        <p className="flex items-center text-base">© 2023 Made With <FaRegHeart className="mx-2 text-red-500"/> By <span className="ml-1 text-[#7367F0] font-semibold">Pixinvent</span></p>
      </div>
      <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end text-[#7367F0] font-semibold text-base">
        <p>License</p>
        <p>More Themes</p>
        <p>Documentation</p>
      </div>
    </footer>
  );
};

export default Footer;
