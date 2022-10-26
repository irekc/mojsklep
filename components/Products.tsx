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
      <img src={data.thumbnailUrl} alt={data.thumbnailAlt} />
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
      <img src={data.thumbnailUrl} alt={data.thumbnailAlt} />
      <Link href={`/products/${data.id}`}>
        <a>
          <h2 className="p-4 text-3xl font-bold">{data.title}</h2>
        </a>
      </Link>
    </>
  )
};