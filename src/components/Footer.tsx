import Image from "next/image";
import Link from "next/link";
import logo from "../../public/images/uj-logo.png";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa6";
import { EnvelopeIcon } from "@heroicons/react/24/outline";

export default function Footer() {
  return (
    <section className="max-w-7xl w-full mx-auto px-4 border-black border-2 py-8">
      {/* Links and forms  */}
      <div className="md:flex">
        <FooterForm />
        <FooterLinks />
      </div>
      <HorizontalLine />
      {/* copyrigth and socials */}
      <SocailsnCopy />
    </section>
  );
}

function FooterForm() {
  return (
    <div className="my-2 flex-col md:flex basis-3/6">
      <Link href="/" className="items-center md:flex ">
        <div className="w-8 h-8 relative my-0 ">
          <Image
            src={logo}
            alt={"logo"}
            fill
            className="object-contain"
          ></Image>
        </div>
        <span className="mx-2 text-base md:text-xl font-medium ">Domingo</span>
      </Link>
      <p className="py-4 max-w-xs ">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, curabitur
        maximus quam.
      </p>

      <label className="form-control w-full max-w-xs mb-2">
        <div className="label">
          <span className="label-text">Subscribe to our Newsletter?</span>
        </div>

        <div className="relative">
          <EnvelopeIcon className="absolute inset-y-3 start-0 h-6 px-2" />
          <input
            type="email"
            className="rounded-lg input input-bordered w-full pl-10 pr-12 text-sm shadow-sm"
            placeholder="Enter email"
          />

          <div className="absolute inset-y-0 end-0 grid place-content-center px-2">
            <button className="btn btn-sm">Subscribe</button>
          </div>
        </div>
      </label>
    </div>
  );
}

function FooterLinks() {
  return (
    <nav className="md:flex my-2 basis-3/6 justify-between">
      <div className="py-2 flex-1">
        <h3 className="py-3">Account</h3>
        <ul className="flex-col pt-2">
          <li className="pb-4">
            <Link href={"#"}> Lorem</Link>
          </li>
          <li className="pb-4">
            <Link href={"#"}> Lorem</Link>
          </li>
          <li className="pb-4">
            <Link href={"#"}> Lorem</Link>
          </li>
          <li className="pb-4">
            <Link href={"#"}> Lorem</Link>
          </li>
        </ul>
      </div>
      <div className="py-2 flex-1">
        <h3 className="py-3">Account</h3>
        <ul className="flex-col pt-2">
          <li className="pb-4">
            <Link href={"#"}> Lorem</Link>
          </li>
          <li className="pb-4">
            <Link href={"#"}> Lorem</Link>
          </li>
          <li className="pb-4">
            <Link href={"#"}> Lorem</Link>
          </li>
        </ul>
      </div>
      <div className="py-2 flex-1">
        <h3 className="py-3">Account</h3>
        <ul className="flex-col pt-2">
          <li className="pb-4">
            <Link href={"#"}> Lorem</Link>
          </li>
          <li className="pb-4">
            <Link href={"#"}> Lorem</Link>
          </li>
          <li className="pb-4">
            <Link href={"#"}> Lorem</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

const HorizontalLine = () => {
  return <div className="w-full border-t border-white my-4"></div>;
};

function SocailsnCopy() {
  return (
    <div className="md:flex md:justify-between pt-6 pb-2 ">
      <div className="">
        <small className="text-sm ">copyright @ Domingo.co</small>
      </div>
      <div className="">
        <ul className="flex ">
          {/* Sidebar content here */}
          <li className="pb-4">
            <Link href={"#"}>
              {" "}
              <FaFacebook />
            </Link>
          </li>
          <li className="pb-4">
            <Link href={"#"}>
              <FaInstagram />
            </Link>
          </li>

          <li className="pb-4">
            <Link href={"#"}>
              {" "}
              <FaTwitter />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
