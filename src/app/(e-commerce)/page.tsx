import ProductCard from "@/components/cards/productCard";
import SpecialOffer from "@/components/cards/specialOffer";
import IntroSwiper from "@/components/swipers/intro-swiper";
import prisma from "@/libs/prismadb";

const getData = async () => {
  const sliders = await prisma.slider.findMany({
    include: { image: true },
  });
  return sliders;
};

const production = {
  name: "Xbox Gamepad",
  price: "100.00",
  discount: 10,
  url: "/",
  image: {
    src: "/products/xboxgamepad.png",
    name: "Xbox Gamepad",
  },
};

const Home = async () => {
  const sliders = await getData();

  return (
    <main>
      <IntroSwiper slides={sliders} />
      <section>
        <div className="container grid grid-cols-6 sm:grid-cols-8 lg:grid-cols-10 xl:grid-cols-12  gap-8 mx-auto mt-20">
          <SpecialOffer production={production} className="col-span-6 lg:col-span-4 row-span-2" />
          {Array(10)
            .fill(0)
            .map((_, index) => (
              <ProductCard key={index} className="col-span-2"/>
            ))}
        </div>
      </section>
    </main>
  );
};

export default Home;
