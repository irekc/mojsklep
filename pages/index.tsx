import { gql, useQuery } from "@apollo/client";
import Link from "next/link";
import { Main } from "../components/Main";
import { ProductListItem } from "../components/Products";

const DATA = {
  id: 1,
  title: "kawa",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, vel ad ab rem corporis reprehenderit blanditiis sequi est accusantium voluptates.",
  thumbnailUrl: "https://picsum.photos/id/1060/536/354",
  thumbnailAlt: "Barista nalewający kawę",
  rating: 5,
};

const Home = () => {
  const { loading, error, data } = useQuery(gql`
    query GetProductsList {
      products {
        id
        slug
        name
        price
      }
    }
  `);

  if(loading) {
    return <Main>Ładowanie...</Main>
  }
  if(error) {
    return <Main>{JSON.stringify(error)}</Main>
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Main><pre>{JSON.stringify(data, null, 2)}</pre></Main>
    </div>
  );
};

export default Home;
