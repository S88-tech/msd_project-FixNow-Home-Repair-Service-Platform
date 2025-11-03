import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, MessageCircle, Edit, X, RotateCcw, Star } from 'lucide-react';
import Button from '../components/Button';

const BookingHistory = () => {
  const [activeTab, setActiveTab] = useState('upcoming');

  const upcomingBookings = [
    {
      id: 1,
      service: 'Plumbing',
      title: 'Drain Unclogging & Repair',
      date: 'July 20, 2024',
      time: '2:00 PM - 4:00 PM',
      professional: 'John Smith',
      status: 'Confirmed',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDQLOVZd8fLaYEiHDEob_8XrxpaaAjlr6i_KKpa7glTxDI4dh4xyhV_NF0Zwk85jXGiNUNOYJ4LC7bU_KPZusXj0MTr7uUcZs2zyyJlSx02nooFI6qBg3UfrpIKk7piMFJXngknZSCknuvBSIgMad-8FJEQOzuVd4Ut7_IYms9l49MInGSWt3EGc6lUB1W352Apg-A5pAAyMdhLVEp66tbb1L7j25z_Y-_mnrQAmV7sc9sfRkPSIUNU3HZ0HpBxksfYazRoNTUttSCa'
    }
  ];

  const pastBookings = [
    {
      id: 2,
      service: 'Electrical',
      title: 'Faulty Wiring Repair',
      date: 'June 15, 2024',
      status: 'Completed',
      professional: 'Sarah Johnson',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDpVNgmrQOLfqmuIgBNXud9FdRqIdAacpZgjYPCIofkdOnSMM_sIjB7Ip1d36gfFbsPiYRYXCEI3nVXUPk0L3tcWTPC9TuhMMfcb-zoXR1qm0PkoTpzf2vhnD2yxHx1B6bzo-bZVREg_Abm2nRMSZsIiqRZKPOK8zywDsosBCUtDrkh9MFUt3NWczLrnozbXvKzE6eR5-PgsXErIp6KsV4kcAmMP4DY2HpU4fwJr6G89tSy9MYn3qeVc4vI9dPd9FG9G5WRAxgfgZUm'
    }
  ];

  const currentBookings = activeTab === 'upcoming' ? upcomingBookings : pastBookings;

  return (
    <main className="flex-grow container mx-auto px-6 py-10">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">My Bookings</h1>

        {/* Filter Tabs */}
        <div className="bg-white dark:bg-gray-800/50 p-4 sm:p-6 rounded-xl shadow-sm mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Filter Bookings</h2>
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative">
                <select className="appearance-none w-full sm:w-auto bg-gray-100 dark:bg-gray-700 border-gray-300 dark:border-gray-600 rounded-lg py-2 pl-3 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary dark:text-gray-200">
                  <option>Service Type</option>
                  <option>Plumbing</option>
                  <option>Electrical</option>
                  <option>Painting</option>
                  <option>Appliance Repair</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 dark:text-gray-300">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
              <div className="relative">
                <select className="appearance-none w-full sm:w-auto bg-gray-100 dark:bg-gray-700 border-gray-300 dark:border-gray-600 rounded-lg py-2 pl-3 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary dark:text-gray-200">
                  <option>Sort by Date</option>
                  <option>Newest to Oldest</option>
                  <option>Oldest to Newest</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 dark:text-gray-300">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">My Bookings</h1>

          {/* Filter Tabs */}
          <div className="bg-white dark:bg-gray-800/50 p-4 sm:p-6 rounded-xl shadow-sm mb-8">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Filter Bookings</h2>
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="relative">
                  <select className="appearance-none w-full sm:w-auto bg-gray-100 dark:bg-gray-700 border-gray-300 dark:border-gray-600 rounded-lg py-2 pl-3 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary dark:text-gray-200">
                    <option>Service Type</option>
                    <option>Plumbing</option>
                    <option>Electrical</option>
                    <option>Painting</option>
                    <option>Appliance Repair</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 dark:text-gray-300">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
                <div className="relative">
                  <select className="appearance-none w-full sm:w-auto bg-gray-100 dark:bg-gray-700 border-gray-300 dark:border-gray-600 rounded-lg py-2 pl-3 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary dark:text-gray-200">
                    <option>Sort by Date</option>
                    <option>Newest to Oldest</option>
                    <option>Oldest to Newest</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 dark:text-gray-300">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Tab Navigation */}
          <div className="flex space-x-1 mb-8">
            <button
              onClick={() => setActiveTab('upcoming')}
              className={`py-2 px-4 rounded-lg font-medium transition-colors ${
                activeTab === 'upcoming'
                  ? 'bg-primary text-white'
                  : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
              }`}
            >
              Upcoming Bookings
            </button>
            <button
              onClick={() => setActiveTab('past')}
              className={`py-2 px-4 rounded-lg font-medium transition-colors ${
                activeTab === 'past'
                  ? 'bg-primary text-white'
                  : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
              }`}
            >
              Past Bookings
            </button>
          </div>

          {/* Bookings List */}
          <div className="space-y-12">
            {activeTab === 'upcoming' && (
              <div>
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white pb-4 border-b border-gray-200 dark:border-gray-700 mb-6">Upcoming Bookings</h2>
                <div className="bg-white dark:bg-gray-800/50 p-6 rounded-xl shadow-sm space-y-6">
                  {upcomingBookings.map((booking) => (
                    <div key={booking.id} className="flex flex-col md:flex-row gap-6">
                      <img
                        alt={`${booking.service} service image`}
                        className="w-full md:w-48 h-48 md:h-auto object-cover rounded-lg"
                        src={booking.image}
                      />
                      <div className="flex-1">
                        <div className="flex justify-between items-start">
                          <div>
                            <p className="text-sm text-gray-500 dark:text-gray-400">{booking.service}</p>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mt-1">{booking.title}</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-300 mt-2 flex items-center gap-2">
                              <Calendar className="w-4 h-4" />
                              {booking.date}, {booking.time}
                            </p>
                            <p className="text-sm text-gray-600 dark:text-gray-300 mt-2 flex items-center gap-2">
                              <User className="w-4 h-4" />
                              {booking.professional}
                            </p>
                          </div>
                          <span className="text-sm font-semibold text-green-600 dark:text-green-400 bg-green-100 dark:bg-green-900/50 px-2 py-1 rounded-full">
                            {booking.status}
                          </span>
                        </div>
                        <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700 flex flex-wrap gap-3">
                          <Button className="flex items-center gap-2 text-sm font-semibold bg-primary/10 text-primary px-4 py-2 rounded-full hover:bg-primary/20 dark:bg-primary/20 dark:hover:bg-primary/30 transition-colors">
                            <Edit className="w-4 h-4" />
                            Reschedule
                          </Button>
                          <Button className="flex items-center gap-2 text-sm font-semibold bg-gray-100 text-gray-700 px-4 py-2 rounded-full hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600 transition-colors">
                            <X className="w-4 h-4" />
                            Cancel
                          </Button>
                          <Button className="flex items-center gap-2 text-sm font-semibold bg-gray-100 text-gray-700 px-4 py-2 rounded-full hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600 transition-colors">
                            <MessageCircle className="w-4 h-4" />
                            Contact Professional
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'past' && (
              <div>
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white pb-4 border-b border-gray-200 dark:border-gray-700 mb-6">Past Bookings</h2>
                <div className="bg-white dark:bg-gray-800/50 p-6 rounded-xl shadow-sm space-y-6">
                  {pastBookings.map((booking) => (
                    <div key={booking.id} className="flex flex-col md:flex-row gap-6">
                      <img
                        alt={`${booking.service} repair image`}
                        className="w-full md:w-48 h-48 md:h-auto object-cover rounded-lg"
                        src={booking.image}
                      />
                      <div className="flex-1">
                        <div className="flex justify-between items-start">
                          <div>
                            <p className="text-sm text-gray-500 dark:text-gray-400">{booking.service}</p>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mt-1">{booking.title}</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-300 mt-2 flex items-center gap-2">
                              <Calendar className="w-4 h-4" />
                              Completed on {booking.date}
                            </p>
                          </div>
                          <span className="text-sm font-semibold text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-700/50 px-2 py-1 rounded-full">
                            {booking.status}
                          </span>
                        </div>
                        <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700 flex flex-wrap gap-3">
                          <Button className="flex items-center gap-2 text-sm font-semibold bg-primary text-white px-4 py-2 rounded-full hover:bg-primary/90 transition-colors">
                            <RotateCcw className="w-4 h-4" />
                            Rebook
                          </Button>
                          <Button className="flex items-center gap-2 text-sm font-semibold bg-primary/10 text-primary px-4 py-2 rounded-full hover:bg-primary/20 dark:bg-primary/20 dark:hover:bg-primary/30 transition-colors">
                            <Star className="w-4 h-4" />
                            Leave a Review
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
      </div>
    </main>
  );
};

export default BookingHistory;
