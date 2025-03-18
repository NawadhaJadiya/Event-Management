import React from 'react';
import { useParams } from 'react-router-dom';
import { Calendar, MapPin, Clock, User } from 'lucide-react';

const EventDetails = () => {
  const { id } = useParams();

  // This would come from your API/state management
  const event = {
    id,
    title: 'Tech Conference 2024',
    description: 'Join us for the most anticipated technology conference of the year! Featuring keynote speakers from leading tech companies, hands-on workshops, networking opportunities, and the latest in technological innovations.',
    date: '2024-04-15',
    location: 'Convention Center',
    imageUrl: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&q=80',
    registrationDeadline: '2024-04-01',
    organizer: 'Tech Events Inc',
    status: 'upcoming'
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="relative mb-8">
        <img
          src={event.imageUrl}
          alt={event.title}
          className="w-full h-64 object-cover rounded-lg shadow-lg"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-secondary to-transparent opacity-60 rounded-lg"></div>
      </div>

      <div className="bg-secondary rounded-lg shadow-md p-8">
        <h1 className="text-3xl font-bold text-white mb-4">{event.title}</h1>
        
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="flex items-center text-gray-400 hover:text-accent transition-colors">
            <Calendar className="w-5 h-5 mr-2 text-primary" />
            <span>{new Date(event.date).toLocaleDateString()}</span>
          </div>
          
          <div className="flex items-center text-gray-400 hover:text-accent transition-colors">
            <MapPin className="w-5 h-5 mr-2 text-primary" />
            <span>{event.location}</span>
          </div>
          
          <div className="flex items-center text-gray-400 hover:text-accent transition-colors">
            <Clock className="w-5 h-5 mr-2 text-primary" />
            <span>Register by {new Date(event.registrationDeadline).toLocaleDateString()}</span>
          </div>
          
          <div className="flex items-center text-gray-400 hover:text-accent transition-colors">
            <User className="w-5 h-5 mr-2 text-primary" />
            <span>{event.organizer}</span>
          </div>
        </div>

        <div className="prose max-w-none mb-8">
          <h2 className="text-xl font-semibold text-white mb-2">About the Event</h2>
          <p className="text-gray-400">{event.description}</p>
        </div>

        <button
          className="w-full bg-primary text-white py-3 px-6 rounded-lg font-semibold hover:bg-accent transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
          onClick={() => {/* Handle registration */}}
        >
          Register Now
        </button>
      </div>
    </div>
  );
};

export default EventDetails;