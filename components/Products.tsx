import { Rating } from "./Ratings";

interface ProductsProps {
    data: {
      description: string;
      thumbnailUrl: string;
      thumbnailAlt: string;
      rating: number;
    };
  }
  
 export const Products = ({ data }: ProductsProps) => {
    return (
      <>
      <img src={data.thumbnailUrl} alt={data.thumbnailAlt} />
          <p>{data.description}</p>
          <Rating rating={data.rating}/>
      </>
    )
  };