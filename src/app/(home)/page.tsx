import hero from "../../../public/images/hero.jpg";
import why from "../../../public/images/why.jpg";
import buildingIcon from "../../../public/images/house.svg";
import toiletIcon from "../../../public/images/toilet.svg";
import walletIcon from "../../../public/images/wallet.svg";
import locationIcon from "../../../public/images/location.svg";
import bedIcon from "../../../public/images/bed.svg";
import Image from "next/image";
import properties from "../../../public/assets/data/propeties.json";
import { Property } from "../../../types";
// import { EnvelopeIcon, MapPinIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import PropListing from "@/components/PropListing";
import { formatNumberWithCommas } from "@/utils/InvoiceForm";
import Cbutton from "@/components/Cbutton";

export default function Home() {
  return (
    <section className="w-full">
      {/* Hero Section */}
      <Hero />
      {/* Property Listing Section */}
      <PropertyFilters />
      <PropListing />
      {/* Why Sectio*/}
      <Why />
      {/* RecentlySold Sectio*/}
      <RecentlySold />
    </section>
  );
}
function Hero() {
  return (
    <section className={"relative w-full md:h-dvh h-[520px] "}>
      <Image
        alt="Mountains"
        src={hero}
        placeholder="blur"
        quality={100}
        fill
        sizes="100vw"
        style={{
          objectFit: "cover",
          zIndex: -1,
        }}
      />

      <div
        className={
          "flex flex-col bg-black/40 h-[520px] md:h-full p-4 md:p-20  text-white justify-center items-start"
        }
      >
        <div className="mt-12 md:mt24 max-w-2xl">
          <h1 className="my-4 text-2xl lg:text-6xl font-bold leading-snug">
            Find Your Perfect Place To Call Home
          </h1>
          <p className="my-4">
            With an extensive network of seasoned professionals with in-depth
            knowledge of the real estate market. We leverage our expertise to
            guide you through every step of your property journey. We are
            committed to excellence in all aspects of our business.{" "}
          </p>
        </div>
      </div>
    </section>
  );
}

function PropertyFilters() {
  return (
    <section className="w-full max-w-7xl mx-auto px-4  py-8">
      <form action="">
        <div className="md:flex items-end w-full">
          <label className="form-control w-full mb-2 basis-3/12">
            <div className="label">
              <span className="label-text">Location</span>
            </div>

            <div className="relative">
              <span className="absolute inset-y-3 start-0 h-6 px-2">
                <Image className="" src={locationIcon} alt="Location Icon" />
              </span>{" "}
              <input
                type="email"
                className="rounded-lg input input-bordered w-full pl-10 pr-12 text-sm shadow-sm"
                placeholder="Enter Location"
              />
            </div>
          </label>
          <label className="form-control w-full mb-2 md:ml-6 basis-3/12">
            <div className="label">
              <span className="label-text">Property Type</span>
            </div>
            <div className="relative">
              {/* <EnvelopeIcon className="absolute inset-y-3 start-0 h-6 px-2" /> */}
              <span className="absolute inset-y-3 start-0 h-6 px-2">
                <Image className="" src={buildingIcon} alt="Building Icon" />
              </span>
              <select className=" select-bordered input w-full pl-10  rounded-lg text-sm shadow-sm">
                <option disabled selected></option>
                <option>Han Solo</option>
                <option>Greedo</option>
              </select>
            </div>
          </label>
          <label className="form-control w-full mb-2 md:ml-6 basis-1/12">
            <div className="label">
              <span className="label-text">Bed</span>
            </div>
            <div className="relative">
              <span className="absolute inset-y-3 start-0 h-6 px-2">
                <Image className="" src={bedIcon} alt="Bed Icon" />
              </span>
              <select className=" select-bordered input w-full pl-6 rounded-lg text-sm shadow-sm">
                <option disabled selected></option>
                <option>10</option>
                <option>6</option>
              </select>
            </div>
          </label>
          <label className="form-control w-full mb-2 md:ml-6 basis-1/12">
            <div className="label">
              <span className="label-text">Toilet</span>
            </div>
            <div className="relative">
              <span className="absolute inset-y-3 start-0 h-6 px-2">
                <Image className="" src={toiletIcon} alt="Toilet Icon" />
              </span>{" "}
              <select className=" select-bordered input w-full pl-10 rounded-lg text-sm shadow-sm">
                <option disabled selected></option>
                <option>5</option>
                <option>6</option>
              </select>
            </div>
          </label>
          <label className="form-control w-full mb-2 md:ml-6 basis-3/12">
            <div className="label">
              <span className="label-text">price range</span>
            </div>
            <div className="relative">
              <span className="absolute inset-y-3 start-0 h-6 px-2">
                <Image className="" src={walletIcon} alt="Wallet Icon" />
              </span>{" "}
              <select className=" select-bordered input w-full pl-10  rounded-lg text-sm shadow-sm">
                <option disabled selected></option>
                <option>7000</option>
                <option>8000</option>
              </select>
            </div>
          </label>
          <div className="md:p-2 min-w-48 md:ml-6 ">
            <Cbutton classes="btn-primary w-full">Search</Cbutton>
          </div>
        </div>
      </form>
    </section>
  );
}

function Why() {
  return (
    <section className="max-w-7xl md:flex items-center w-full mx-auto px-4 py-8">
      <div className="flex flex-col flex-1 rounded ">
        <Image
          alt="Mountains"
          // Importing an image will
          // automatically set the width and height
          src={why}
          sizes="100vw"
          // Make the image display full width
          className="w-full h-auto rounded"
        />
      </div>
      <div className="flex-1 py-8 md:pl-20">
        <h2 className="text-3xl font-bold my-2 md:my-4 text-[--fore_dark] ">
          Why Domingo ?
        </h2>
        <p className="my-2">
          With an extensive network of seasoned professionals with in-depth
          knowledge of the real estate market. We leverage our expertise to
          guide you through every step of your property journey.
        </p>
        <p className="my-2">
          With an extensive network of seasoned professionals with in-depth
          knowledge of the real estate market. We leverage our expertise to
          guide you through every step of your property journey.
        </p>
        <p className="my-2">
          With an extensive network of seasoned professionals with in-depth
          knowledge of the real estate market. We leverage our expertise to
          guide you through every step of your property journey.
        </p>
        <p className="my-2">
          With an extensive network of seasoned professionals with in-depth
          knowledge of the real estate market. We leverage our expertise to
          guide you through every step of your property journey.
        </p>
      </div>
    </section>
  );
}

function RecentlySold() {
  return (
    <section className="max-w-7xl w-full mx-auto px-4 py-8 md:pb-14">
      <h2 className="my-2 mb-6 text-2xl font-bold text-[--fore_dark]">
        Recently Sold Properties
      </h2>
      <RecentlySoldList />
    </section>
  );
}

function RecentlySoldList() {
  // export default function InvoiceList({ invoices }: { invoices: IInvoice[] }) {
  const soldProperties = properties.data?.slice(0, 3);
  return (
    <ul
      className="my-2"
      style={{
        display: "grid",
        gridGap: "20px",
        gridTemplateColumns: "repeat(auto-fit, minmax(260px, auto))",
      }}
    >
      {soldProperties.map((property) => (
        <RecentlySoldItem property={property} key={property.id} />
      ))}
      {/* {invoices.length < 1 && (
        <div className=' w-full relative h-full flex justify-center items-center'>
          <Image src={emptyIllustration} alt='empty illustration' />
        </div>
      )} */}
    </ul>
  );
}

function RecentlySoldItem({ property }: { property: Property }) {
  return (
    <li className="p-4 shadow rounded-xl">
      <div className={"rounded-xl relative h-48"}>
        <Image
          alt="Mountains"
          src={property.main_image_url}
          fill
          sizes="100vw"
          className="rounded-xl object-cover"
        />
      </div>
      <div className="flex justify-between py-2">
        <span className="font-semibold capitalize text-[--fore_dark]">
          {property.type}
        </span>
        <span className="font-semibold text-primary">
          ${formatNumberWithCommas(property.price)}
        </span>
      </div>
      <p className="w-full py-1 font-medium text-sm text-[--fore_light]">
        “Thanks to Domingo I found my dream home effortlessly! The seamless
        interaction with agents streamlined the entire process”
      </p>
      <div className="py-1 flex justify-center">
        <div className="h-8 flex-initial">
          <Image
            src="https://via.placeholder.com/32x32.png/007766"
            alt="Picture of the author"
            width={32}
            height={32}
            className="block mx-auto h-8 rounded-full"
          />
        </div>
        {/* https://via.placeholder.com/32x32.png/007766 */}
        <span className="flex font-medium text-xs flex-col justify-center text-center ml-2">
          <span>Ayesha Craig</span>
          <span className="text-[--fore_light]">Domingo customer</span>
        </span>
      </div>
    </li>
  );
}
