import FAQSection from '@/components/FAQSection';
import FeaturesSection from '@/components/FeaturesSection';
import HeroSection from '@/components/HeroSection';
import TestimonialsSection from '@/components/TestimonialsSection';


const Home = () => {
  return (
    <div className=" mx-auto flex flex-col items-center text-center">
      <HeroSection />

      {/* Sección con fondo azul muy claro */}
      <section className="bg-blue-50 w-full">
        <FeaturesSection />
      </section>

      <TestimonialsSection />

      {/* Sección con fondo gris claro */}
      <section className="bg-blue-50 w-full">
        <FAQSection />
      </section>
    </div>




  );
};

export default Home;
