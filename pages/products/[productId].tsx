import { GetStaticPropsContext, InferGetStaticPropsType } from "next";
import Link from "next/link";
import { ProductDetails } from "../../components/Products";
import { serialize } from "next-mdx-remote/serialize";
import ReactMarkdown from "react-markdown";
import { apolloClient } from "../../graphql/apolloClient";
import { gql } from "@apollo/client";
import { GetProductDetailsBySlugDocument, GetProductDetailsBySlugQuery, GetProductDetailsBySlugQueryVariables, GetProductsSlugsDocument, GetProductsSlugsQuery } from "../../generated/graphql";

type InferGetStaticPathsType<T> = T extends () => Promise<{
  paths: Array<{ params: infer R }>;
}>
  ? R
  : never;



export const getStaticPaths = async () => {

  const { data } = await apolloClient.query<GetProductsSlugsQuery>({
    query: GetProductsSlugsDocument
  });

  return {
    paths: data.products.map((product) => ({
      params: {
        productId: product.slug,
      },
    })),
    fallback: false,
  };
};

export const getStaticProps = async ({
  params,
}: GetStaticPropsContext<InferGetStaticPathsType<typeof getStaticPaths>>) => {
  if (!params?.productId) {
    return {
      props: {},
      notFound: true,
    };
  }


  const { data } = await apolloClient.query<
    GetProductDetailsBySlugQuery,
    GetProductDetailsBySlugQueryVariables
  >({
    variables: {
      slug: params.productId,
    },
    query: GetProductDetailsBySlugDocument
  });

  if (!data.product) {
    return {
      props: {},
      notFound: true,
    };
  }

  return {
    props: {
      data: {
        ...data.product,
        longDescription: await serialize(data.product.description),
      },
    },
  };
};

const ProductIdPage = ({
  data,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  if (!data) {
    return <div>Coś poszło nie tak </div>;
  }
  return (
    <div>
      <Link href="/products">
        <a>Wróć na stronę główną</a>
      </Link>
      <ProductDetails
        data={{
          id: data.slug,
          title: data.name,
          thumbnailUrl: data.images[0].url,
          thumbnailAlt: data.name,
          description: data.description,
          rating: 5,
          longDescription: data.longDescription,
        }}
      />
    </div>
  );
};

export default ProductIdPage;
