import Image from "next/image";
import Link from "next/link";
import { Rating } from "./Ratings";

interface ProductDetails {
    id: number;
    title: string;
    description: string;
    thumbnailUrl: string;
    thumbnailAlt: string;
    rating: number;
}


interface ProductDetailsProps {
  data: ProductDetails;
}

export const ProductDetails = ({ data }: ProductDetailsProps) => {
  return (
    <>
      <div className="bg-white p-4">
      <Image src={data.thumbnailUrl} alt={data.thumbnailAlt} 
      layout="responsive"
      width={16}
      height={9}
      objectFit="contain"
      />
    </div>
      <h2 className="p-4 text-3xl font-bold">{data.title}</h2>
      <p className="p-4">{data.description}</p>
      <Rating rating={data.rating}/>
    </>
  )
};

type ProductListItem = Pick<
ProductDetails, 'id' | "title" | "thumbnailUrl" | "thumbnailAlt"
>

interface ProductsListItemProps {
  data: ProductListItem;
}

export const ProductListItem = ({ data }: ProductsListItemProps) => {
  return (
    <>
    <div className="bg-white p-4">
      <Image src={data.thumbnailUrl} alt={data.thumbnailAlt} 
      layout="responsive"
      width={16}
      height={9}
      objectFit="contain"
      />
    </div>
      <Link href={`/products/${data.id}`}>
        <a>
          <h2 className="p-4 text-3xl font-bold">{data.title}</h2>
        </a>
      </Link>
    </>
  )
};