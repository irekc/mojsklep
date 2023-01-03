import { gql } from "@apollo/client";
import { InferGetStaticPropsType } from "next";
import { ProductListItem } from "../components/Products";
import { GetProductsListDocument, GetProductsListQuery } from "../generated/graphql";
import { apolloClient } from "../graphql/apolloClient";

const ProductsPage = ({
    data,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
    return <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {data.products.map(product => {
            return <li key={product.slug} className="shadow-xl border-2">
                <ProductListItem
                data={
                    {
                        id: product.slug,
                        title: product.name,
                        thumbnailUrl: product.images[0].url,
                        thumbnailAlt: product.name,
                    }
                } />
            </li>
        })}
    </ul>;
    
};

export default ProductsPage;

export const getStaticProps = async () => {
   const { data } = await apolloClient
  .query<GetProductsListQuery>({
    query: GetProductsListDocument
  })

  

    // const res = await fetch('https://naszsklep-api.vercel.app/api/products')
    // const data: StoreApiResponse[] = await res.json();

    return {
        props: {
            data,
        }
    }
};
