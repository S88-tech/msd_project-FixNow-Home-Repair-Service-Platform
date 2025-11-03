import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, MapPin, Calendar } from 'lucide-react';
import Button from '../components/Button';

const FindProfessionalsNearMe = () => {
  const [location, setLocation] = useState('');

  const professionals = [
    {
      id: 1,
      name: "John's Plumbing",
      service: 'Plumbing',
      distance: '2.5 miles away',
      rating: 4,
      reviews: 124,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDQLOVZd8fLaYEiHDEob_8XrxpaaAjlr6i_KKpa7glTxDI4dh4xyhV_NF0Zwk85jXGiNUNOYJ4LC7bU_KPZusXj0MTr7uUcZs2zyyJlSx02nooFI6qBg3UfrpIKk7piMFJXngknZSCknuvBSIgMad-8FJEQOzuVd4Ut7_IYms9l49MInGSWt3EGc6lUB1W352Apg-A5pAAyMdhLVEp66tbb1L7j25z_Y-_mnrQAmV7sc9sfRkPSIUNU3HZ0HpBxksfYazRoNTUttSCa',
      description: 'Expert plumbing services with 15+ years of experience'
    },
    {
      id: 2,
      name: 'Sparky Electricals',
      service: 'Electrical',
      distance: '3.1 miles away',
      rating: 5,
      reviews: 98,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDpVNgmrQOLfqmuIgBNXud9FdRqIdAacpZgjYPCIofkdOnSMM_sIjB7Ip1d36gfFbsPiYRYXCEI3nVXUPk0L3tcWTPC9TuhMMfcb-zoXR1qm0PkoTpzf2vhnD2yxHx1B6bzo-bZVREg_Abm2nRMSZsIiqRZKPOK8zywDsosBCUtDrkh9MFUt3NWczLrnozbXvKzE6eR5-PgsXErIp6KsV4kcAmMP4DY2HpU4fwJr6G89tSy9MYn3qeVc4vI9dPd9FG9G5WRAxgfgZUm',
      description: 'Licensed electrician specializing in residential and commercial work'
    },
    {
      id: 3,
      name: 'Perfect Painters Co.',
      service: 'Painting',
      distance: '4.0 miles away',
      rating: 4.5,
      reviews: 150,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDnO5O4OKPGVGJL7vYFH2D7cuZ_ZfWohY9z7tAnTfUmV4XvaHQ1kzYyCZqMVINRTYA0OBx5FM4x-oKPLy-AMguTg9nPi_cXCrnZgKAddBElNLnML0ip3MqqVY3T6Y6mqski9QXVU_hJAaCG9GNr_YOVPpsrqnHDcIB2yxoVyj0cmi9Br0DgmIN_Q6hEWWSGMoDCuFaKDIt1GOyr1YmNlpub2BtRaA7XLKWc-eKhEm7YY6zHdqxeOoya0EyvXjbD5UrA5V_Z1_SskJvn',
      description: 'Professional painting services for interior and exterior projects'
    }
  ];

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />);
    }

    if (hasHalfStar) {
      stars.push(<Star key="half" className="w-4 h-4 fill-yellow-400/50 text-yellow-400" />);
    }

    const remainingStars = 5 - Math.ceil(rating);
    for (let i = 0; i < remainingStars; i++) {
      stars.push(<Star key={`empty-${i}`} className="w-4 h-4 text-gray-300" />);
    }

    return stars;
  };

  return (
    <main className="flex-grow">
        <section className="py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white">Professionals Near You</h2>
              <p className="mt-2 text-lg text-gray-600 dark:text-gray-400">Showing top-rated professionals in your area.</p>
            </div>

            <div className="mt-8 max-w-md mx-auto">
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Enter your location"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary dark:bg-gray-700 dark:text-white"
                />
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="h-96 bg-gray-300 dark:bg-gray-700 rounded-lg flex items-center justify-center text-gray-500 dark:text-gray-400 mb-12">
              <div className="text-center">
                <MapPin className="w-12 h-12 mx-auto mb-4" />
                <p className="text-xl">Map Functionality Coming Soon</p>
                <p className="text-sm mt-2">We're working on integrating interactive maps to show professionals near you</p>
              </div>
            </div>

            <div className="space-y-8">
              {professionals.map((professional) => (
                <div key={professional.id} className="bg-white dark:bg-gray-800/50 p-6 rounded-lg shadow-md flex flex-col sm:flex-row items-center gap-6">
                  <img
                    src={professional.image}
                    alt={professional.name}
                    className="w-full sm:w-48 h-48 sm:h-auto object-cover rounded-lg"
                  />
                  <div className="flex-grow">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{professional.name}</h3>
                    <p className="text-primary font-semibold">{professional.service}</p>
                    <p className="text-gray-600 dark:text-gray-400 mt-1 flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      {professional.distance}
                    </p>
                    <div className="flex items-center mt-2">
                      {renderStars(professional.rating)}
                      <span className="ml-2 text-sm text-gray-500">({professional.reviews} reviews)</span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 mt-2">{professional.description}</p>
                  </div>
                  <div className="flex-shrink-0">
                    <Button
                      onClick={() => window.location.href = '/book-date'}
                      className="bg-primary text-white px-6 py-3 rounded-full hover:bg-primary/90 transition-colors shadow-md"
                    >
                      <Calendar className="w-4 h-4 mr-2" />
                      Book Now
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
    </main>
  );
};

export default FindProfessionalsNearMe;
