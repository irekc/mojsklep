import Link from "next/link";
import { CartBar } from "./Cart/Cartbar";

export const Header = () => {
  return (
    <header className="max-w-5xl mx-auto w-full px-4 flex items-center justify-between bg-gray-500">
      <nav className=" text-white  py-2">
        <Link href="/">
          <a className="px-4">Main</a>
        </Link>
        <Link href="/about">
          <a className="px-4">About</a>
        </Link>
      </nav>
      <CartBar />
    </header>
  );
};
