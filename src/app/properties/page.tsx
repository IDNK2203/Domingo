import { EnvelopeIcon } from "@heroicons/react/24/outline";
import properties from "../../../public/assets/data/propeties.json";
import { Property } from "../../../types";
import Image from "next/image";
import Link from "next/link";
import { getFeatureProps } from "@/dataFetching/properties";

export default function Properties() {
  return (
    <section className="w-full">
      {/* Property Listing Section */}
      <PropListing property={properties.data} />
    </section>
  );
}

async function PropListing({ property }: { property: Property[] }) {
  const { data: properties } = await getFeatureProps();
  const PropsListing = properties?.slice(0, 9);
  return (
    <section className="max-w-7xl w-full mx-auto px-4 border-black border-2 py-8">
      <h2 className="my-2">Listed Properties</h2>

      <ul className="my-2 grid gap-5 min-[520px]:grid-cols-2 md:grid-cols-3">
        {PropsListing.map((property: Property) => (
          <ListedProperty property={property} key={property.id} />
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
function ListedProperty({ property }: { property: Property }) {
  return (
    <li className="p-2 border-black border-2 rounded-lg relative">
      <Link href={`/properties/${property.slug}`} className="">
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
        <div className="py-1">
          <p>{property.price}</p>
        </div>
        <div className="py-1">
          <p>{property.description}</p>
        </div>
      </Link>
    </li>
  );
}
