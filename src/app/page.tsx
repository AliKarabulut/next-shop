import ProductCard from "@/components/cards/productCard";
import IntroSwiper from "@/components/swipers/introSwiper";
import Star from "@/ui/star";

const Home = () => {
  return (
    <main>
      <IntroSwiper />
      <section>
        <div className="container grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5  gap-8 mx-auto mt-20">
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
