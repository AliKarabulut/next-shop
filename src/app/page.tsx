import HeaderSwiper from '@/components/home-swiper'
import ProductCard from '@/components/product-card'
import SpecialOffer from '@/components/special-offer'
import prisma from '@/libs/prismadb'

const getData = async () => {
  const sliders = await prisma.slider.findMany()
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
    <>
      <HeaderSwiper slides={sliders} />
      <div className="home-product-grid">
        <SpecialOffer production={production} className="home-special-offer" date={date} />
        {Array(8)
          .fill(0)
          .map((_, index) => (
            <ProductCard key={index} className="home-product-card" />
          ))}
      </div>
    </>
  )
}

export default Home
