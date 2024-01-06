import ProductCard from '@/components/cards/productCard'
import SpecialOffer from '@/components/cards/specialOffer'
import IntroSwiper from '@/components/swipers/intro-swiper'
import TabMenu from '@/components/tab-menu'
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

const tabs = [
  {
    title: 'Most Viewed',
  },
  {
    title: 'Discounted',
  },
]

const Home = async () => {
  const sliders = await getData()
  let date = new Date()
  date.setDate(date.getDate() + 1)

  return (
    <main>
      <IntroSwiper slides={sliders} />
      <section>
        <TabMenu tabs={tabs} className="container mx-auto mb-4 mt-16 flex justify-end" />
        <div className="container mx-auto grid grid-cols-4 gap-4 sm:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10 2xl:grid-cols-12">
          <SpecialOffer production={production} className="col-span-4 row-span-2 mx-auto sm:mx-0" date={'dates'} />
          {Array(8)
            .fill(0)
            .map((_, index) => (
              <ProductCard key={index} className="homeProductCard col-span-2" />
            ))}
        </div>
      </section>
    </main>
  )
}

export default Home