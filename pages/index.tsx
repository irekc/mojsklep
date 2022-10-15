import { Footer } from "../components/Footer"
import { Header } from "../components/Header"
import { Main } from "../components/Main";
import { Products } from "../components/Products";


const DATA = {
  description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, vel ad ab rem corporis reprehenderit blanditiis sequi est accusantium voluptates.',
  thumbnailUrl: 'https://picsum.photos/id/1060/536/354',
  thumbnailAlt: 'Barista nalewający kawę',
  rating: 5,
};

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Main>
        <Products data={DATA} />
      </Main>
      <Footer />
    </ div>
  )
}

export default Home
