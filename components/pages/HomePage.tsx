import React from 'react';
import AiIcon from '../icons/AiIcon';
import LeafIcon from '../icons/LeafIcon';
import HeartIcon from '../icons/HeartIcon';
import { Page } from '../../types';

interface HomePageProps {
  onNavigate: (page: Page) => void;
}

const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  const featuredProducts = [
    { name: 'Premium Almonds', description: 'Crunchy and nutritious, perfect for a healthy snack.', image: 'https://picsum.photos/seed/almonds/400/300' },
    { name: 'Roasted Cashews', description: 'Rich, buttery cashews roasted to perfection.', image: 'https://i.postimg.cc/bwRxcVVp/nuts-image.png' },
    { name: 'Dried Vegetable Mix', description: 'A savory mix of our finest dried vegetables.', image: 'https://picsum.photos/seed/vegmix/400/300' },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section 
        className="relative h-[60vh] min-h-[400px] bg-cover bg-center flex items-center justify-center text-white"
        style={{ backgroundImage: `url('https://picsum.photos/seed/nutsrug/1600/900')` }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
            Saber Star: AI-Powered Excellence in Natural Snacks
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 drop-shadow-md">
            Your one-stop destination for health and premium snacking, streamlined by AI, and made with excellence in Saudi Arabia.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button onClick={() => onNavigate(Page.Products)} className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-8 rounded-full transition duration-300">
              Shop Now
            </button>
            <button onClick={() => onNavigate(Page.About)} className="bg-transparent border-2 border-white hover:bg-white hover:text-emerald-700 text-white font-bold py-3 px-8 rounded-full transition duration-300">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Pillars/Values Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-stone-800 mb-3">Our Commitment</h2>
          <div className="w-24 h-1 bg-emerald-600 mx-auto mb-12"></div>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="flex flex-col items-center">
              <div className="bg-emerald-100 p-5 rounded-full mb-4">
                <AiIcon className="w-10 h-10 text-emerald-700" />
              </div>
              <h3 className="text-xl font-bold mb-2">SMART</h3>
              <p className="text-stone-600">AI-powered sourcing and quality control for the finest natural snacks.</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-emerald-100 p-5 rounded-full mb-4">
                <LeafIcon className="w-10 h-10 text-emerald-700" />
              </div>
              <h3 className="text-xl font-bold mb-2">SUSTAINABLE</h3>
              <p className="text-stone-600">Aligning with Saudi Vision 2030 for a healthier, greener future.</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-emerald-100 p-5 rounded-full mb-4">
                <HeartIcon className="w-10 h-10 text-emerald-700" />
              </div>
              <h3 className="text-xl font-bold mb-2">NUTRITIOUS</h3>
              <p className="text-stone-600">Promoting health, vitality, and longevity through natural nutrition.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-20 bg-stone-50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-stone-800 mb-3">Discover Our Premium Selection</h2>
          <p className="text-stone-600 max-w-2xl mx-auto mb-12">
            Explore our range of high-quality dry nuts and vegetables, carefully sourced and prepared for your healthy lifestyle.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <div key={product.name} className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300">
                <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                  <p className="text-stone-600">{product.description}</p>
                </div>
              </div>
            ))}
          </div>
          <button onClick={() => onNavigate(Page.Products)} className="mt-12 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-8 rounded-full transition duration-300">
            View All Products
          </button>
        </div>
      </section>
    </div>
  );
};

export default HomePage;