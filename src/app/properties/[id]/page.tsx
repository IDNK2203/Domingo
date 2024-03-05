import Image, { StaticImageData } from "next/image";
import properties from "../../../../public/assets/data/propeties.json";
import { Property } from "../../../../types";
import why from "../../../../public/images/why.jpg";
import chevronDown from "../../../../public/images/icon-arrow-down.svg";

export default function PropertyDetail({ params }: { params: { id: string } }) {
  const { id: slug } = params;
  const property = properties.data.find((el) => el.slug === slug);

  if (!property) {
    return (
      <main className="flex-1 flex h-full flex-col items-center overflow-y-scroll md:p-24 py-16 bg-[--primary_bg]">
        <div className="w-full max-w-3xl px-4">
          <h2 className="text-3xl">No Property Found</h2>
        </div>
      </main>
    );
  }

  return (
    <section className="max-w-7xl items-center w-full mx-auto px-4 border-black border-2 py-8">
      {/*Hero */}
      <HeroImage imgUrl={property?.main_image_url || why} />
      {/*Details */}
      <Details property={property} />
      <div className="md:flex md:flex-row-reverse">
        {/*ShowInterest  */}
        <div className="md:basis-4/12  border-gray-300 border-[1px] rounded">
          <ShowInterest />
        </div>
        <div className="md:basis-8/12 pr-4">
          {/* Description */}
          <Description property={property} />
          <HorizontalLine />
          {/* features */}
          <Features property={property} />
          <HorizontalLine />

          {/* gallery */}
          <Gallery property={property} />
        </div>
      </div>
    </section>
  );
}

function HeroImage({ imgUrl }: { imgUrl: string | StaticImageData }) {
  return (
    <div className="w-full relative max-h-dvh h-[600px] rounded-lg ">
      <Image
        alt="Mountains"
        src={imgUrl}
        // placeholder="blur"
        // quality={100}
        fill
        sizes="100vw"
        className="object-cover rounded-lg  z-[1]"
      />
    </div>
  );
}

function Details({ property }: { property: Property }) {
  return (
    <div className="my-2">
      <div className="flex my-2 w-full justify-between">
        <h2>{property.type}</h2>
        <p>{property.price}</p>
      </div>
      <div className="my-2">
        <ul className="flex flex-wrap">
          <li className="mr-2">
            <div className="badge badge-outline">
              {property.location.split(",")[0]}
            </div>
          </li>
          {/* <li className="mr-2">
            <div className="badge badge-outline">{property.size}</div>
          </li> */}
          {property.amenities?.[0].map((el, i) => (
            <li className="mr-2" key={i}>
              <div className="badge badge-outline">{el}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function ShowInterest() {
  return (
    <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-lg ">
        <h3 className="text-xl font-bold ">Show Interest</h3>

        <p className="mt-4 text-gray-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Et libero
          nulla eaque error neque
        </p>
      </div>

      <form action="#" className="mx-auto mb-0 mt-8 max-w-md space-y-4">
        <div>
          <label htmlFor="password" className="sr-only">
            Full Name
          </label>

          <div className="relative">
            <input
              type="text"
              className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
              placeholder="Enter password"
            />
          </div>
        </div>

        <div>
          <label htmlFor="email" className="sr-only">
            Email Adress
          </label>

          <div className="relative">
            <input
              type="email"
              className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
              placeholder="Enter email"
            />
          </div>
        </div>

        <div>
          <label htmlFor="password" className="sr-only">
            Phone Number
          </label>

          <div className="relative">
            <input
              type="text"
              className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
              placeholder="Enter password"
            />
          </div>
        </div>

        <div className="my-2">
          <button type="submit" className="btn w-full my-2">
            Show Interest
          </button>
          <button className="btn w-full my-2 ">
            Button
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
          </button>
        </div>
      </form>
    </div>
  );
}

function Description({ property }: { property: Property }) {
  return (
    <div className="my-2">
      <h2> Description</h2>
      <p className="my-3">{property.description}</p>
    </div>
  );
}

function Features({ property }: { property: Property }) {
  return (
    <div className="my-2">
      <h2> Features</h2>
      <ul className="my-3 flex">
        {property.features?.[0].map((el, i) => (
          <li key={i} className="mr-2 flex items-center">
            <span className="mr-2">
              <Image
                className="-rotate-90"
                src={chevronDown}
                alt="Arrow Indicator"
              />
            </span>
            <span>{el}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

const HorizontalLine = () => {
  return <div className="w-full border-t border-gray-300  my-4"></div>;
};

function Gallery({ property }: { property: Property }) {
  return (
    <ul className="my-2 grid gap-2 min-[520px]:grid-cols-2 md:grid-cols-3">
      {property.featured_images_url?.map((el, i) => (
        <li key={1} className=" border-black border-2 relative">
          <div className={"relative h-48"}>
            <Image
              alt="Mountains"
              src={el}
              fill
              sizes="100vw"
              className=" object-cover"
            />
          </div>
        </li>
      ))}
    </ul>
  );
}
