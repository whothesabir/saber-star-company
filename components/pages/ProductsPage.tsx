import React from 'react';

const ProductCard: React.FC<{ title: string; description: string; image: string }> = ({ title, description, image }) => (
  <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col">
    <img src={image} alt={title} className="w-full h-48 object-cover" />
    <div className="p-6 flex flex-col flex-grow">
      <h3 className="text-xl font-bold mb-2 text-stone-800">{title}</h3>
      <p className="text-stone-600 flex-grow">{description}</p>
    </div>
  </div>
);

const ProductsPage: React.FC = () => {
  const distributionChannels = [
    {
      title: 'AI Smart Vending Machine',
      description: 'Experience convenience in health-conscious environments like gyms & hospitals. Pick your nuts, measure grams, protein, and calories, and get your fresh mix in under 3 minutes.',
      image: 'https://i.postimg.cc/d0dNfcdF/vending-machine.png'
    },
    {
      title: 'Bulk Selling to Wholesalers',
      description: 'We supply premium nuts & dried vegetables in large volumes, trusted by major markets for quality, consistency, and authentic Saudi production. Contact us for wholesale inquiries.',
      image: 'https://i.postimg.cc/R0fpYxfJ/wholesale.png'
    },
    {
      title: 'Exporting to GCC Countries',
      description: 'Our premium Saudi-made nuts & vegetables, crafted with care and packed with quality, are delivered across the GCC to share the taste of Saudi excellence.',
      image: 'https://i.postimg.cc/vm92Kw9c/export.png'
    },
    {
      title: 'Universities & Libraries',
      description: 'We promote healthy snacking options, encouraging youth to choose smarter, nutritious bites that fuel focus and energy.',
      image: 'https://i.postimg.cc/vm92Kw9T/University.png'
    }
  ];

  const productCategories = ['Almonds', 'Cashews', 'Pistachios', 'Dried Vegetables', 'Mixed Snacks'];

  return (
    <div className="py-20 bg-stone-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-stone-800 mb-3">Our Products</h1>
          <div className="w-24 h-1 bg-emerald-600 mx-auto"></div>
        </div>

        <div className="mb-20 bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-center text-stone-800 mb-6">Product Categories</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {productCategories.map(category => (
              <span key={category} className="bg-emerald-100 text-emerald-800 text-md font-semibold px-4 py-2 rounded-full">
                {category}
              </span>
            ))}
          </div>
            <div className="text-center mt-6">
                <p className="text-stone-600">Each product is carefully selected and prepared to offer the best in taste and nutrition. From premium Saudi-made almonds rich in nutrients to savory dried vegetable mixes, we have a healthy option for everyone.</p>
            </div>
        </div>
        
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-stone-800 mb-3">Where to Find Them</h2>
          <p className="text-stone-600 max-w-2xl mx-auto">
            We are dedicated to making healthy snacking accessible. Find our products through our various distribution channels.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {distributionChannels.map(channel => (
            <ProductCard key={channel.title} {...channel} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;