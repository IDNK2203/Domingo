import hero from "../../../public/images/hero.jpg";
import why from "../../../public/images/why.jpg";
import Image from "next/image";
import properties from "../../../public/assets/data/propeties.json";
import { Property } from "../../../types";
import { EnvelopeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export default function Home() {
  return (
    <section className="w-full">
      {/* Hero Section */}
      <Hero />
      {/* Property Listing Section */}
      <PropertyFilters />
      <PropListing property={properties.data} />
      {/* Why Sectio*/}
      <Why />
      {/* RecentlySold Sectio*/}
      <RecentlySold />
    </section>
  );
}
function Hero() {
  return (
    <section className={"relative w-full h-dvh"}>
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
          "flex flex-col bg-black/20 h-full p-20  text-white justify-center items-start"
        }
      >
        <div className="mt-12 md:mt24 max-w-3xl">
          <h1 className="my-2">Find Your Perfect Place To Call Home</h1>
          <p className="my-2">
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
    <section className="w-full max-w-7xl mx-auto px-4 border-black border-2 py-8">
      <form action="">
        <div className="md:flex items-end w-full">
          <label className="form-control w-full mb-2 basis-3/12">
            <div className="label">
              <span className="label-text">Location</span>
            </div>

            <div className="relative">
              <EnvelopeIcon className="absolute inset-y-3 start-0 h-6 px-2" />
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
              <EnvelopeIcon className="absolute inset-y-3 start-0 h-6 px-2" />
              <select className=" select-bordered w-full">
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
              <EnvelopeIcon className="absolute inset-y-3 start-0 h-6 px-2" />
              <select className=" select-bordered w-full">
                <option disabled selected></option>
                <option>Han Solo</option>
                <option>Greedo</option>
              </select>
            </div>
          </label>
          <label className="form-control w-full mb-2 md:ml-6 basis-1/12">
            <div className="label">
              <span className="label-text">Toilet</span>
            </div>
            <div className="relative">
              <EnvelopeIcon className="absolute inset-y-3 start-0 h-6 px-2" />
              <select className=" select-bordered w-full">
                <option disabled selected></option>
                <option>Han Solo</option>
                <option>Greedo</option>
              </select>
            </div>
          </label>
          <label className="form-control w-full mb-2 md:ml-6 basis-3/12">
            <div className="label">
              <span className="label-text">price range</span>
            </div>
            <div className="relative">
              <EnvelopeIcon className="absolute inset-y-3 start-0 h-6 px-2" />
              <select className=" select-bordered w-full">
                <option disabled selected></option>
                <option>Han Solo</option>
                <option>Greedo</option>
              </select>
            </div>
          </label>
          <div className="md:p-2 min-w-48 md:ml-6 ">
            <button className="btn w-full">Search</button>
          </div>
        </div>
      </form>
    </section>
  );
}

function PropListing({ property }: { property: Property[] }) {
  const propt = properties.data?.slice(0, 6);

  return (
    <section className="w-full max-w-7xl mx-auto px-4 border-black border-2 py-8">
      <h2 className="my-2">Featured</h2>

      <ul className="my-2 grid gap-5 min-[520px]:grid-cols-2 md:grid-cols-3">
        {propt.map((property) => (
          <FeaturedProperty property={property} key={property.id} />
        ))}
        {/* {invoices.length < 1 && (
        <div className=' w-full relative h-full flex justify-center items-center'>
          <Image src={emptyIllustration} alt='empty illustration' />
        </div>
      )} */}
      </ul>
    </section>
  );
}

function Why() {
  return (
    <section className="max-w-7xl md:flex items-center w-full mx-auto px-4 border-black border-2 py-8">
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
        <h2>Why Domingo ?</h2>
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
    <section className="max-w-7xl w-full mx-auto px-4 border-black border-2 py-8">
      <h2 className="my-2">Recently Sold Properties</h2>
      <RecentlySoldList />
    </section>
  );
}

export function RecentlySoldList() {
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

function FeaturedProperty({ property }: { property: Property }) {
  return (
    <li className="p-2 border-black border-2 rounded-lg relative">
      <EnvelopeIcon className="absolute top-4 start-4 h-4 z-10" />
      <div className={"rounded-lg relative h-48"}>
        <Image
          alt="Mountains"
          src={property.main_image_url}
          fill
          sizes="100vw"
          className="rounded-lg object-cover"
        />
      </div>
      <div className="flex justify-between py-1">
        <span>{property.type}</span>
        <small className="flex">
          <span>
            <EnvelopeIcon className="h-4 px-2" />
          </span>
          <span>{property.location.split(",")[0]}</span>
        </small>
      </div>
      <div className="flex justify-between py-1">
        <span>{property.price}</span>
        <small className="flex">
          <span className="flex">
            <EnvelopeIcon className="h-4 px-2" />
            <span>4</span>
          </span>
          <span className="flex">
            <EnvelopeIcon className="h-4 px-2" />
            <span>2</span>
          </span>
        </small>
      </div>
      <Link href={`/propeties/${property.slug}`} className="btn  w-full">
        View Listing
      </Link>
    </li>
  );
}

function RecentlySoldItem({ property }: { property: Property }) {
  return (
    <li className="p-2 border-black border-2 rounded-lg">
      <div className={"rounded-lg relative h-48"}>
        <Image
          alt="Mountains"
          src={property.main_image_url}
          fill
          sizes="100vw"
          className="rounded-lg object-cover"
        />
      </div>
      <div className="flex justify-between py-1">
        <span>{property.type}</span>
        <span>{property.price}</span>
      </div>
      <p className="w-full py-1">
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
        <span className="flex flex-col justify-center text-center ml-2">
          <span>Ayesha Craig</span>
          <span>Domingo customer</span>
        </span>
      </div>
    </li>
  );
}
