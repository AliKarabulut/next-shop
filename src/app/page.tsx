import ProductCard from "@/components/productCard";
import IntroSwiper from "@/components/swipers/introSwiper";

const Home = () => {
  return (
    <main>
      <IntroSwiper></IntroSwiper>
      <section>
        <div className="container grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4  lg:grid-cols-5 xl:grid-cols-6 gap-8 mx-auto mt-20">
          {Array(10)
            .fill(0)
            .map((_, index) => (
              <ProductCard key={index} />
            ))}
        </div>
      </section>
    </main>
  );
};

export default Home;
