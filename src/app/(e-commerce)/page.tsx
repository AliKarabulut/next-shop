import ProductCard from '@/components/cards/productCard'
import SpecialOffer from '@/components/cards/specialOffer'
import IntroSwiper from '@/components/swipers/intro-swiper'
import prisma from '@/libs/prismadb'

const getData = async () => {
  const sliders = await prisma.slider.findMany({
    include: { image: true },
  })
  return sliders
}

const production = {
  name: 'Xbox Gamepad',
  price: '100.00',
  discount: 10,
  url: '/',
  image: {
    src: '/products/xboxgamepad.png',
    name: 'Xbox Gamepad',
  },
}

const Home = async () => {
  const sliders = await getData()

  return (
    <main>
      <IntroSwiper slides={sliders} />
      <section>
        <div className="container mx-auto mt-20 grid grid-cols-4 sm:grid-cols-6 gap-4 lg:grid-cols-8 xl:grid-cols-10 2xl:grid-cols-12">
          <SpecialOffer production={production} className="col-span-4 row-span-2 mx-auto sm:mx-0" />
          {Array(10)
            .fill(0)
            .map((_, index) => (
              <ProductCard key={index} className="col-span-2" />
            ))}
        </div>
      </section>
    </main>
  )
}

export default Home
