import { Rating } from "./Ratings";

interface ProductDetails {
    title: string;
    description: string;
    thumbnailUrl: string;
    thumbnailAlt: string;
    rating: number;
}


interface ProductProps {
  data: ProductDetails;
}

export const ProductDetails = ({ data }: ProductProps) => {
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
ProductDetails, "title" | "thumbnailUrl" | "thumbnailAlt"
>

interface ProductsListItemProps {
  data: ProductListItem;
}

export const ProductListItem = ({ data }: ProductsListItemProps) => {
  return (
    <>
      <img src={data.thumbnailUrl} alt={data.thumbnailAlt} />
      <h2 className="p-4 text-3xl font-bold">{data.title}</h2>
    </>
  )
};