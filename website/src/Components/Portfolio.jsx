import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const categories = [
  {
    id: 'weddings',
    title: 'Weddings',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    description: 'Capturing love stories, one frame at a time'
  },
  {
    id: 'corporate',
    title: 'Corporate Events',
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    description: 'Professional coverage for business events'
  },
  {
    id: 'birthdays',
    title: 'Birthdays',
    image: 'https://images.unsplash.com/photo-1464349153735-7db50ed83c84?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    description: "Celebrating life's special moments"
  }
];

const Portfolio = () => {
  const navigate = useNavigate();

  return (
    <section id="portfolio" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-white mb-8">Portfolio</h2>
        <p className="text-white text-center mb-12 max-w-2xl mx-auto">
          Explore our collection of captured moments across various events. Click on any category to view more.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <div
              key={category.id}
              onClick={() => navigate(`/gallery/${category.id}`)}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-lg shadow-lg">
                <div className="aspect-w-16 aspect-h-9">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="object-cover w-full h-full transform transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
                  <h3 className="text-white text-2xl font-bold mb-2">{category.title}</h3>
                  <p className="text-white/90 mb-4">{category.description}</p>
                  <div className="flex items-center text-white/90 group-hover:text-white transition-colors">
                    <span>View Gallery</span>
                    <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;