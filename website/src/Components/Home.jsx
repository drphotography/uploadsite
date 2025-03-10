import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';

const heroImages = [
    {
        url: 'https://images.unsplash.com/photo-1537633552985-df8429e8048b?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80',
        title: "Capturing Life's Beautiful Moments"
    },
    {
        url: 'https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80',
        title: 'Wedding Photography'
    },
    {
        url: 'https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80',
        title: 'Corporate Events'
    }
];

const Home = () => {
    return (
        <section id="home" className="relative h-screen">
            <Swiper
                modules={[Autoplay, EffectFade]}
                effect="fade"
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                loop={true}
                className="h-full"
            >
                {heroImages.map((image, index) => (
                    <SwiperSlide key={index}>
                        <div className="relative h-full">
                            {/* Background Image */}
                            <div
                                className="absolute inset-0"
                                style={{
                                    backgroundImage: `url("${image.url}")`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                }}
                            >
                                {/* Dark Overlay */}
                                <div className="absolute inset-0 bg-black/50 z-0"></div>
                            </div>

                            {/* Text Content */}
                            <div className="relative z-10 h-full flex items-center justify-center text-center text-yellow-400 px-4 sm:px-6 lg:px-8">
                                <div className="max-w-3xl">
                                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
                                        {image.title}
                                    </h1>
                                    <p className="text-xl sm:text-2xl mb-8 max-w-3xl mx-auto">
                                        Professional event photography that tells your story through stunning visuals
                                    </p>
                                    <a
                                        href="#contact"
                                        className="inline-block bg-red-600 text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-indigo-700 transition-colors"
                                    >
                                        Book Now
                                    </a>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

export default Home;
