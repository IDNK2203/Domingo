import { EnvelopeIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { Property } from "../../types";
import Link from "next/link";
import { getFeatureProps } from "@/dataFetching/properties";

export default async function PropListing() {
  const { data: properties } = await getFeatureProps();
  const featureProps = properties?.slice(0, 6);

  return (
    <section className="w-full max-w-7xl mx-auto px-4 border-black border-2 py-8">
      <h2 className="my-2">Featured</h2>

      <ul className="my-2 grid gap-5 min-[520px]:grid-cols-2 md:grid-cols-3">
        {featureProps?.map((property: Property) => (
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

function FeaturedProperty({ property }: { property: Property }) {
  return (
    <li className="p-2 border-black border-2 rounded-lg relative">
      <EnvelopeIcon className="absolute top-4 start-4 h-4  z-[1]" />
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
      <Link href={`/properties/${property.slug}`} className="btn  w-full">
        View Listing
      </Link>
    </li>
  );
}
