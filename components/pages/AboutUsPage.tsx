import React from 'react';

const AboutUsPage: React.FC = () => {
  return (
    <div className="bg-white py-20">
      <div className="container mx-auto px-6">
        {/* Who We Are Section */}
        <div className="text-center mb-20">
          <h1 className="text-4xl font-bold text-stone-800 mb-3">Who We Are</h1>
          <div className="w-24 h-1 bg-emerald-600 mx-auto"></div>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div className="order-2 md:order-1">
            <p className="text-lg text-stone-600 leading-relaxed">
              Saber Star specializes in the manufacturing and distribution of high-quality dry nuts & vegetables, sourced globally and delivered with AI-driven efficiency. We are dedicated to meeting the growing demand for premium local products, meticulously aligning our operations with Saudi Vision 2030. Our commitment is to ensure sustainability and provide health-conscious choices for consumers through smart, quick, and reliable solutions.
            </p>
          </div>
          <div className="order-1 md:order-2">
            <img src="https://i.postimg.cc/YSgDPBgk/nuts-image.png" alt="Nuts in a bowl" className="rounded-lg shadow-xl" />
          </div>
        </div>

        {/* Meet the Visionary Leader Section */}
        <div className="bg-stone-50 rounded-lg p-8 md:p-12">
          <div className="grid md:grid-cols-3 gap-12 items-center">
            <div className="md:col-span-1 text-center">
              <img src="https://i.postimg.cc/4NV5ZQnk/CEO.png" alt="GM Sabir" className="rounded-full shadow-xl w-64 h-64 mx-auto object-cover" />
              <h3 className="text-2xl font-bold mt-6 text-stone-800">GM Sabir</h3>
              <p className="text-stone-500">Founder & Visionary Leader</p>
            </div>
            <div className="md:col-span-2">
              <h2 className="text-3xl font-bold text-stone-800 mb-4">Meet Our Founder</h2>
              <p className="text-stone-600 leading-relaxed">
                GM Sabir is a seasoned professional with extensive global experience in international trade, market trends, and business research. His deep understanding of global and local markets, coupled with a strategic vision, drives growth and innovation within Saudi Arabia. He envisions a healthier lifestyle for the people of Saudi Arabia, especially the youth, built on natural nutrition, wellness, and balance. His goal is to promote health, vitality, and longevity across the Kingdom by encouraging smart choices and sustainable living for a stronger, healthier future, sharing it with the rest of the world.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;