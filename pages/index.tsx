import { Footer } from "../components/Footer"
import { Header } from "../components/Header"

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow max-w-2xl mx-auto grid p-6 gap-6 sm:grid-cols-2">
        <img src="https://picsum.photos/id/1060/536/354" 
        alt="Barista nalewający kawę" />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, vel ad ab rem corporis reprehenderit blanditiis sequi est accusantium voluptates.</p>
      </main>
      <Footer />
    </ div>
  )
}

export default Home
