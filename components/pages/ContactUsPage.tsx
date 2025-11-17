import React from 'react';

const ContactUsPage: React.FC = () => {
  return (
    <div className="bg-gradient-to-b from-stone-50 to-emerald-50">
      {/* Hero Section with Saudi Made Badge */}
      <section className="container mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <img
            src="https://i.postimg.cc/4N6CKx8Z/saudi-made.png"
            alt="Saudi Made"
            className="mx-auto h-32 w-auto mb-8 drop-shadow-lg"
          />
          <h1 className="text-5xl font-bold text-stone-800 mb-4">
            Book a Factory Visit
          </h1>
          <p className="text-xl text-stone-600 max-w-2xl mx-auto">
            Experience our state-of-the-art production facility and see how we create the finest dates
          </p>
        </div>
      </section>

      {/* Factory Images Gallery */}
      <section className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
            <img
              src="https://i.postimg.cc/PrwDYBZf/factory-1.png"
              alt="Factory Production Line"
              className="w-full h-80 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-xl font-bold">Production Floor</h3>
              </div>
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
            <img
              src="https://i.postimg.cc/4N9cVrtf/factory-2.png"
              alt="Quality Control Station"
              className="w-full h-80 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-xl font-bold">Quality Control</h3>
              </div>
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
            <img
              src="https://i.postimg.cc/RVHtKjf4/factory-3.png"
              alt="Packaging Area"
              className="w-full h-80 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-xl font-bold">Packaging</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="container mx-auto px-6 py-16">
        <div className="bg-white rounded-3xl shadow-2xl p-12 max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-stone-800 mb-4">
              Visit Us or Get Your Trial Subscription Now
            </h2>
            <div className="w-24 h-1 bg-emerald-600 mx-auto mb-8"></div>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
              {/* Email */}
              <div className="flex items-center gap-4 group">
                <div className="bg-emerald-100 p-4 rounded-full group-hover:bg-emerald-600 transition-colors duration-300">
                  <svg
                    className="w-8 h-8 text-emerald-600 group-hover:text-white transition-colors duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-stone-500 font-medium">Email Us</p>
                  <a
                    href="mailto:gmsabir@yahoo.com"
                    className="text-xl font-bold text-emerald-600 hover:text-emerald-700 transition-colors duration-300"
                  >
                    gmsabir@yahoo.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-4 group">
                <div className="bg-emerald-100 p-4 rounded-full group-hover:bg-emerald-600 transition-colors duration-300">
                  <svg
                    className="w-8 h-8 text-emerald-600 group-hover:text-white transition-colors duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-stone-500 font-medium">Call Us</p>
                  <a
                    href="tel:+966505654933"
                    className="text-xl font-bold text-emerald-600 hover:text-emerald-700 transition-colors duration-300"
                  >
                    +966 505 654 933
                  </a>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <a
                href="mailto:gmsabir@yahoo.com?subject=Factory Visit Request"
                className="bg-emerald-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-emerald-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl text-center"
              >
                Schedule Factory Visit
              </a>
              <a
                href="mailto:gmsabir@yahoo.com?subject=Trial Subscription Request"
                className="bg-white text-emerald-600 border-2 border-emerald-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-emerald-50 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl text-center"
              >
                Get Trial Subscription
              </a>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-12 pt-8 border-t border-stone-200">
            <div className="text-center text-stone-600">
              <p className="text-lg mb-2">
                <span className="font-bold text-stone-800">Business Hours:</span> Sunday - Thursday, 8:00 AM - 5:00 PM
              </p>
              <p className="text-sm text-stone-500">
                Located in the heart of Saudi Arabia's finest date-growing region
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Map or Additional Section (Optional) */}
      <section className="container mx-auto px-6 py-16">
        <div className="bg-gradient-to-r from-emerald-600 to-emerald-700 rounded-3xl shadow-2xl p-12 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">Why Visit Our Factory?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            <div className="p-6">
              <div className="text-5xl mb-4">🏭</div>
              <h4 className="text-xl font-bold mb-2">Modern Facilities</h4>
              <p className="text-emerald-100">
                Experience cutting-edge technology in date processing
              </p>
            </div>
            <div className="p-6">
              <div className="text-5xl mb-4">✨</div>
              <h4 className="text-xl font-bold mb-2">Quality Standards</h4>
              <p className="text-emerald-100">
                See our rigorous quality control processes firsthand
              </p>
            </div>
            <div className="p-6">
              <div className="text-5xl mb-4">🌟</div>
              <h4 className="text-xl font-bold mb-2">Expert Team</h4>
              <p className="text-emerald-100">
                Meet the passionate professionals behind our products
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUsPage;
