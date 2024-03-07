import { EnvelopeIcon } from "@heroicons/react/24/outline";
import properties from "../../../public/assets/data/propeties.json";
import { Property } from "../../../types";
import Image from "next/image";
import Link from "next/link";
import { getFeatureProps } from "@/dataFetching/properties";
import { formatNumberWithCommas } from "@/utils/InvoiceForm";
import wishlist from "../../../public/images/wishlist.svg";

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
    <section className="max-w-7xl w-full mx-auto px-4 py-8 md:py-16">
      <h2 className="my-4 font-semibold text-4xl">Listed Properties</h2>

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
    <li className="p-4 shadow rounded-xl relative">
      <Link href={`/properties/${property.slug}`} className="">
        <span className="absolute top-6 start-6 h-4  z-[1]">
          <Image className="" src={wishlist} alt="Location Icon" />
        </span>{" "}
        <div className={"rounded-xl relative h-48"}>
          <Image
            alt="Mountains"
            src={property.main_image_url}
            fill
            sizes="100vw"
            className="rounded-xl object-cover"
          />
        </div>
        <div className="py-1 font-bold">
          <p> ${formatNumberWithCommas(property.price)}</p>
        </div>
        <div className="py-1 text-[--fore_light]">
          <p>{property.description}</p>
        </div>
      </Link>
    </li>
  );
}
