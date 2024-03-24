import prisma from '@/libs/prismadb'
import HeaderSwiper from '@/components/home-swiper'

const getData = async () => {
  const sliders = await prisma.slider.findMany({
    include: { image: true },
  })
  return sliders
}

const Home = async () => {
  const sliders = await getData()
  return (
    <main className="h-[3000px]">
      <HeaderSwiper slides={sliders} />
    </main>
  )
}

export default Home
