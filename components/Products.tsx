import Image from "next/image";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import { Rating } from "./Ratings";
import { NextSeo } from 'next-seo';

interface ProductDetails {
    id: number;
    title: string;
    description: string;
    thumbnailUrl: string;
    thumbnailAlt: string;
    rating: number;
    longDescription: string;
}


interface ProductDetailsProps {
  data: ProductDetails;
}

export const ProductDetails = ({ data }: ProductDetailsProps) => {
  return (
    <>
      <div className="bg-white p-4">
      <NextSeo
      title={data.title}
      description={data.description}
      canonical={`https://irekc-nextshop-jet.vercel.app/products/${data.id}`}
      openGraph={{
        url: `https://irekc-nextshop-jet.vercel.app/products/${data.id}`,
        title: data.title,
        description: data.description,
        images: [
          {
            url: data.thumbnailUrl,
            alt: data.thumbnailAlt,
            type: 'image/jpeg',
          },
        ],
        siteName: 'Next Shop',
      }}
    />
      <Image src={data.thumbnailUrl} alt={data.thumbnailAlt} 
      layout="responsive"
      width={16}
      height={9}
      objectFit="contain"
      />
    </div>
      <h2 className="p-4 text-3xl font-bold">{data.title}</h2>
      <p className="p-4">{data.description}</p>
      <article className="p-4 prose lg:prose-xl">
      <ReactMarkdown>{data.longDescription}</ReactMarkdown>
      </article>
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