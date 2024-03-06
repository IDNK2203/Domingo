import Image, { StaticImageData } from "next/image";
// import properties from "../../../../public/assets/data/propeties.json";
import { Property } from "../../../../types";
import why from "../../../../public/images/why.jpg";
import chevronDown from "../../../../public/images/icon-arrow-down.svg";
import { getSingleProp } from "@/dataFetching/properties";
import ShowInterest from "@/components/ShowInterest";

export default async function PropertyDetail({
  params,
}: {
  params: { id: string };
}) {
  const { id: slug } = params;
  const { data: property } = await getSingleProp(slug);

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
        <div className="md:basis-4/12">
          <ShowInterest propertyId={property.id} />
        </div>
        <div className="md:basis-8/12 pr-4">
          {/* Description */}
          <Description property={property} />
          <HorizontalLine />
          {/* features */}
          <Features property={property} />
          You have indicated interest in this property
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
