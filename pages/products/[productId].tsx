import { GetStaticPropsContext, InferGetStaticPropsType } from 'next';
import Link from 'next/link';
import { ProductDetails } from '../../components/Products';
import ReactMarkdown from 'react-markdown';

type InferGetStaticPathsType<T> = T extends () => Promise<{
  paths: Array<{ params: infer R }>;
}>
  ? R
  : never;

interface StoreApiResponse {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  longDescription: string;
  rating: {
    rate: number;
    count: number;
  };
}

export const getStaticPaths = async () => {
  const res = await fetch('https://naszsklep-api.vercel.app/api/products');
  const data: StoreApiResponse[] = await res.json() as StoreApiResponse[];

  return {
    paths: data.map((product) => ({
      params: {
        productId: product.id.toString(),
      },
    })),
    fallback: false,
  };
}

export const getStaticProps = async ({ params }: GetStaticPropsContext<
InferGetStaticPathsType<typeof getStaticPaths>
>) => {
  if (!params?.productId) {
    return {
      props: {},
      notFound: true,
    };
  }

  const res = await fetch(`https://naszsklep-api.vercel.app/api/products/${params?.productId}`);
  const data: StoreApiResponse | null = await res.json() as StoreApiResponse | null;

  return {
    props: {
      data,
    },
  };
}

const ProductIdPage = ({ data }: InferGetStaticPropsType<typeof getStaticProps>) => {
  if (!data) {
    return <div>Coś poszło nie tak </div>;
  }
  return (
    <div>
      <Link href="/products"><a>Wróć na stronę główną</a></Link>
      <ProductDetails data={{
        id: data.id,
        title: data.title,
        thumbnailUrl: data.image,
        thumbnailAlt: data.title,
        description: data.description,
        rating: data.rating.rate,
        longDescription: data.longDescription,
      }}
      />
    </div>
  );
}

export default ProductIdPage;