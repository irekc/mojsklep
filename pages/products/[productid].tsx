import { GetStaticPropsContext, InferGetStaticPropsType } from "next";
// import { useRouter } from "next/router";
import { ProductDetails } from "../../components/Products";

const ProductIdPage = ({
    data,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
    if(!data) {
        <div>Coś poszło nie tak</div>
    }
    
    return (
    <div>
        <ProductDetails data={{title: data.title,
                        thumbnailUrl: data.image,
                        thumbnailAlt: data.title,
                        description: data.description,
                        rating: data.rating.rate,
                        }}
            />
    </div>
    )
};

export default ProductIdPage;

export const getStaticPaths = () => {
    return {
        paths: [
            {
                params: {
                    productId: '1',
                },
            },
        ],
        fallback: false,
    };
};

export const getStaticProps = async ({ params } : GetStaticPropsContext<{ productId: string }> ) => {
    if(!params?.productId){
       return {
        props: {},
        notFound: true,
       }
    }
    const res = await fetch(
        `https://fakestoreapi.com/products/${params.productId}`
        );
    const data: StoreApiResponse | null = await res.json();

    return { 
        props: {
            data,
        }
    }
};

export interface StoreApiResponse {
    id:          number;
    title:       string;
    price:       number;
    description: string;
    category:    string;
    image:       string;
    rating:      {
        rate:  number;
        count: number;
    };
};