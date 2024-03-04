import Image from "next/image";
import Link from "next/link";
import logo from "../../public/images/uj-logo.png";

export default function Navbar() {
  return (
    <div className="navbar bg-base-100">
      <div className="max-w-7xl w-full mx-auto px-2 ">
        <div className="navbar-start">
          <label
            htmlFor="my-drawer-3"
            aria-label="open sidebar"
            className="btn btn-circle btn-neutral md:hidden"
          >
            <div tabIndex={0} role="button" className="btn btn-ghost px-0 mx-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
          </label>
          <Link href="/" className="items-center hidden md:flex">
            <div className="w-8 h-8 relative my-0 ">
              <Image
                src={logo}
                alt={"logo"}
                fill
                className="object-contain"
              ></Image>
            </div>
            <span className="mx-2 text-base md:text-xl font-medium ">
              Domingo
            </span>
          </Link>
        </div>
        <div className="navbar-center ">
          <div className="w-8 h-8 relative my-0 flex md:hidden ">
            <Image
              src={logo}
              alt={"logo"}
              fill
              className="object-contain"
            ></Image>
          </div>
          <ul className="menu menu-horizontal px-1 hidden md:flex">
            <li>
              <Link href={"/"}>Home</Link>
            </li>
            <li>
              <Link href={"#"}>About Us</Link>
            </li>

            <li>
              <Link href={"/properties"}>Properties</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end flex">
          <a className="btn justify-end">Contact Us</a>
        </div>
      </div>
    </div>
  );
}
export function SideDrawer() {
  return (
    <div className="drawer-side">
      <label
        htmlFor="my-drawer-3"
        aria-label="close sidebar"
        className="drawer-overlay"
      ></label>
      <ul className="menu p-4 w-60 min-h-full bg-base-200">
        {/* Sidebar content here */}
        <li>
          <Link href={"/"}>Home</Link>
        </li>
        <li>
          <Link href={"#"}>About Us</Link>
        </li>

        <li>
          <Link href={"/properties"}>Properties</Link>
        </li>
      </ul>
    </div>
  );
}
