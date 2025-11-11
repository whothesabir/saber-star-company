import React from 'react';

const AdvantageCard: React.FC<{ title: string; description: string; image: string }> = ({ title, description, image }) => (
  <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
    <div className="md:order-last">
      <img src={image} alt={title} className="rounded-lg shadow-xl" />
    </div>
    <div className="md:order-first">
      <h3 className="text-3xl font-bold text-stone-800 mb-4">{title}</h3>
      <p className="text-lg text-stone-600 leading-relaxed">{description}</p>
    </div>
  </div>
);

const WhyChooseUsPage: React.FC = () => {
  return (
    <div className="bg-white py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h1 className="text-4xl font-bold text-stone-800 mb-3">Saber Star's Unique Advantages</h1>
          <div className="w-24 h-1 bg-emerald-600 mx-auto"></div>
        </div>

        <AdvantageCard
          title="Saudi-Made"
          description="Premium dry nuts and vegetables sourced locally and globally, bringing you the best of Saudi quality."
          image="https://picsum.photos/seed/saudi/600/400"
        />

        <AdvantageCard
          title="AI-Streamlined"
          description="Efficient manufacturing using sustainable technology, saving time and man-hours, ensuring consistent quality."
          image="https://i.postimg.cc/bwmCPvd7/Generated-Image-November-10-2025-3-46PM.png"
        />
        
        {/* Call to Action Section */}
        <section className="mt-20 bg-emerald-700 text-white rounded-lg shadow-2xl">
          <div className="container mx-auto px-6 py-16 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Experience the Best?</h2>
            <p className="text-emerald-100 max-w-2xl mx-auto mb-8">
              Join us on our mission to promote a healthier lifestyle. Book a trial subscription or get in touch for more details.
            </p>
            <button className="bg-white text-emerald-700 hover:bg-emerald-50 font-bold py-3 px-8 rounded-full transition duration-300">
              Book Your Trial & Contact Us
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default WhyChooseUsPage;