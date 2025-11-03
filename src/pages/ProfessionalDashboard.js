import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Calendar,
  List,
  DollarSign,
  Star,
  Settings,
  LogOut,
  User,
  CheckCircle,
  Clock,
  XCircle
} from 'lucide-react';

const ProfessionalDashboard = () => {
  const [activeTab, setActiveTab] = useState('dashboard');

  // Mock data - in real app, this would come from context/API
  const professionalData = {
    name: 'Sarah Miller',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDVtswGSU78Z3c_k0-4kmwd-WkfWw7wtmapHEWL8bYxwWScTGXbxBeEVr_GuhWEJyTz4d0Mm-y4jCGpaWGARZ2YDZN50knXM6xUIL-QAf2CKilVxKEtM16KDINA3F8HGdf4J9GdALGvKjPUaAqT1z-UIy3T9_DOkUds5Qs5cDwDcIieVDgw0eNgZnlKoN8s7RkMaeAaBOZBhFbA5pxITtLO1HGkqIZr4dwrU6WaDrktjEha05hhkwHutxJXw0VcvEOf5BWEji3cSIi',
    stats: {
      totalEarnings: 12500,
      completedJobs: 75,
      averageRating: 4.8
    },
    upcomingBookings: [
      {
        id: 1,
        service: 'Plumbing Repair',
        date: '2024-07-15',
        time: '2:00 PM',
        client: 'Emily Carter',
        status: 'pending'
      },
      {
        id: 2,
        service: 'Electrical Installation',
        date: '2024-07-16',
        time: '10:00 AM',
        client: 'David Lee',
        status: 'confirmed'
      },
      {
        id: 3,
        service: 'Appliance Repair',
        date: '2024-07-17',
        time: '4:00 PM',
        client: 'Jessica Brown',
        status: 'pending'
      }
    ],
    recentReviews: [
      {
        id: 1,
        client: 'Emily Carter',
        avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB1lojPaJL1PaANK0CwHHy6Z9mBRJYx7dkDgM3BQlmY8_0aFsu4PvULHio5P_P53UZWZagDqld1tqr2Uaj-jZw_EUrBYpC5a7x9Zro_2mXm8j9ra7dCVh8LpoDkRv2VuvEtyREUXwWQMrwAZHtTu222W5NpgoNFlMxGUP3bveUfCn_0n5wLMEGE32MmHlKhdpRQKGV78Qv-RWZcjn6mNvoDzKBUwC5ul46CVJg_b7qBGQ2OzgILf6rLY1R3IalL6WKGY-6Mx0E4t87T',
        date: 'July 10, 2024',
        rating: 5,
        comment: 'Sarah was prompt, professional, and fixed my plumbing issue quickly. Highly recommend!'
      },
      {
        id: 2,
        client: 'David Lee',
        avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC7OyUVga3INIFFwvCrZOBF-MqjRILqRDiMhTlufO8EdNc8PF_SxxtynwZM9vLTKeE4owTdwG7Z1p6lvvXqAYYGpKBb79t9C9UQpgBcx2XQHl_3BrWGm-OfFmnSJeDLSSof6BI2j5ZoYYB0Xik-L_2NdFUo-Ec1nrD2Xz4a-ni5H6T435i91PLUzZ7zqnoP3GiiR5tZdr33mokmjUHJcVzwuiA5ahMJuSi1tVqZKocB6MuLJKKGmpPpzh1BEozuFb14Aa0tXHB2cN1l',
        date: 'July 8, 2024',
        rating: 4,
        comment: 'Good service, but arrived a bit later than scheduled. Overall, satisfied with the work.'
      }
    ],
    services: [
      {
        id: 1,
        name: 'Plumbing Repair',
        price: 150,
        status: 'active'
      },
      {
        id: 2,
        name: 'Electrical Installation',
        price: 200,
        status: 'active'
      },
      {
        id: 3,
        name: 'Appliance Repair',
        price: 100,
        status: 'inactive'
      }
    ]
  };

  const handleBookingAction = (bookingId, action) => {
    // In real app, this would make API calls
    console.log(`${action} booking ${bookingId}`);
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'active':
        return 'bg-green-100 dark:bg-green-900/50 text-green-800 dark:text-green-300';
      case 'inactive':
        return 'bg-red-100 dark:bg-red-900/50 text-red-800 dark:text-red-300';
      case 'pending':
        return 'bg-yellow-100 dark:bg-yellow-900/50 text-yellow-800 dark:text-yellow-300';
      case 'confirmed':
        return 'bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-300';
      default:
        return 'bg-gray-100 dark:bg-gray-900/50 text-gray-800 dark:text-gray-300';
    }
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={i < rating ? 'text-yellow-400' : 'text-gray-300 dark:text-gray-600'}>
        ★
      </span>
    ));
  };

  const sidebarItems = [
    { id: 'dashboard', label: 'Dashboard', icon: User },
    { id: 'bookings', label: 'Bookings', icon: Calendar },
    { id: 'services', label: 'My Services', icon: List },
    { id: 'earnings', label: 'Earnings & Payouts', icon: DollarSign },
    { id: 'reviews', label: 'Reviews', icon: Star },
    { id: 'settings', label: 'Profile Settings', icon: Settings }
  ];

  return (
    <div className="flex min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Sidebar */}
      <aside className="w-64 bg-white dark:bg-gray-800 flex flex-col p-4 border-r border-gray-200 dark:border-gray-700">
        <div className="flex items-center gap-3 p-4 mb-6">
          <div
            className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-12"
            style={{ backgroundImage: `url("${professionalData.avatar}")` }}
          />
          <div>
            <h1 className="text-base font-bold text-gray-900 dark:text-white">{professionalData.name}</h1>
            <p className="text-sm text-gray-500 dark:text-gray-400">Professional</p>
          </div>
        </div>

        <nav className="flex flex-col gap-2">
          {sidebarItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`flex items-center gap-3 px-4 py-2 rounded-lg transition-colors ${
                activeTab === item.id
                  ? 'bg-primary/10 dark:bg-primary/20 text-primary font-semibold'
                  : 'hover:bg-primary/10 dark:hover:bg-primary/20 hover:text-primary'
              }`}
            >
              <item.icon size={20} />
              <span>{item.label}</span>
            </button>
          ))}
        </nav>

        <div className="mt-auto">
          <Link
            to="/"
            className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-primary/10 dark:hover:bg-primary/20 hover:text-primary transition-colors"
          >
            <LogOut size={20} />
            <span>Logout</span>
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white">Dashboard</h1>
          <p className="text-gray-500 dark:text-gray-400">
            Welcome back, {professionalData.name}! Here's your business overview.
          </p>
        </header>

        {/* Stats Cards */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white dark:bg-gray-800/50 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-gray-600 dark:text-gray-300 mb-2">Total Earnings</h3>
            <p className="text-3xl font-bold text-gray-900 dark:text-white">
              ${professionalData.stats.totalEarnings.toLocaleString()}
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800/50 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-gray-600 dark:text-gray-300 mb-2">Completed Jobs</h3>
            <p className="text-3xl font-bold text-gray-900 dark:text-white">
              {professionalData.stats.completedJobs}
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800/50 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-gray-600 dark:text-gray-300 mb-2">Average Rating</h3>
            <p className="text-3xl font-bold text-gray-900 dark:text-white">
              {professionalData.stats.averageRating} <span className="text-yellow-400">★</span>
            </p>
          </div>
        </section>

        {/* Upcoming Bookings */}
        <section className="bg-white dark:bg-gray-800/50 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Upcoming Bookings</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <th className="p-4 font-semibold">Service</th>
                  <th className="p-4 font-semibold">Date & Time</th>
                  <th className="p-4 font-semibold">Client</th>
                  <th className="p-4 font-semibold text-center">Actions</th>
                </tr>
              </thead>
              <tbody>
                {professionalData.upcomingBookings.map((booking) => (
                  <tr key={booking.id} className="border-b border-gray-200 dark:border-gray-700">
                    <td className="p-4">{booking.service}</td>
                    <td className="p-4 text-gray-500 dark:text-gray-400">
                      {new Date(booking.date).toLocaleDateString()}, {booking.time}
                    </td>
                    <td className="p-4 text-gray-500 dark:text-gray-400">{booking.client}</td>
                    <td className="p-4">
                      <div className="flex justify-center gap-2">
                        <button
                          onClick={() => handleBookingAction(booking.id, 'confirm')}
                          className="px-3 py-1 text-sm rounded bg-primary text-white hover:bg-primary/90"
                        >
                          Confirm
                        </button>
                        <button
                          onClick={() => handleBookingAction(booking.id, 'reschedule')}
                          className="px-3 py-1 text-sm rounded bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600"
                        >
                          Reschedule
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Bottom Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Recent Reviews */}
          <section className="bg-white dark:bg-gray-800/50 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Recent Reviews</h2>
            <div className="space-y-6">
              {professionalData.recentReviews.map((review) => (
                <div key={review.id} className="flex flex-col gap-3">
                  <div className="flex items-center gap-3">
                    <div
                      className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
                      style={{ backgroundImage: `url("${review.avatar}")` }}
                    />
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white">{review.client}</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{review.date}</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    {renderStars(review.rating)}
                  </div>
                  <p className="text-gray-600 dark:text-gray-300">"{review.comment}"</p>
                  <div className="border-t border-gray-200 dark:border-gray-700"></div>
                </div>
              ))}
            </div>
          </section>

          {/* My Services */}
          <section className="bg-white dark:bg-gray-800/50 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">My Services</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <th className="p-4 font-semibold">Service</th>
                    <th className="p-4 font-semibold">Price</th>
                    <th className="p-4 font-semibold text-center">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {professionalData.services.map((service) => (
                    <tr key={service.id} className="border-b border-gray-200 dark:border-gray-700">
                      <td className="p-4">{service.name}</td>
                      <td className="p-4 text-gray-500 dark:text-gray-400">${service.price}</td>
                      <td className="p-4 text-center">
                        <span className={`px-3 py-1 text-xs font-semibold rounded-full ${getStatusColor(service.status)}`}>
                          {service.status.charAt(0).toUpperCase() + service.status.slice(1)}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default ProfessionalDashboard;
