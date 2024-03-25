import prisma from '@/libs/prismadb'
import HeaderSwiper from '@/components/home-swiper'
import SpecialOffer from '@/components/special-offer'
import ProductCard from '@/components/product-card'

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

  const date = new Date()
  date.setDate(date.getDate() + 1)

  return (
    <main className="h-[3000px]">
      <HeaderSwiper slides={sliders} />
      <div className="container mx-auto grid grid-cols-4 gap-4 sm:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10 2xl:grid-cols-12">
        <SpecialOffer production={production} className="col-span-4 row-span-2 mx-auto sm:mx-0" date={date} />
        {Array(8)
          .fill(0)
          .map((_, index) => (
            <ProductCard key={index} className="homeProductCard col-span-2" />
          ))}
      </div>
    </main>
  )
}

export default Home
