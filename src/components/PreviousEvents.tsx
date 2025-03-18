import React from 'react';
import { Calendar, MapPin, ExternalLink } from 'lucide-react';
import { Event } from '../types';

const PreviousEvents = () => {
  // This would come from your API/state management
  const events: Event[] = [
    {
      id: '1',
      title: 'Tech Conference 2023',
      description: 'A successful gathering of tech enthusiasts and industry leaders',
      date: '2023-11-15',
      location: 'Convention Center',
      imageUrl: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80',
      registrationDeadline: '2023-11-01',
      organizer: 'Tech Events Inc',
      status: 'past'
    }
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Previous Events</h1>
      <div className="space-y-8">
        {events.map((event) => (
          <div key={event.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="grid grid-cols-3 gap-6">
              <div className="col-span-1">
                <img
                  src={event.imageUrl}
                  alt={event.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="col-span-2 p-6">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">{event.title}</h2>
                <p className="text-gray-600 mb-6">{event.description}</p>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center text-gray-500">
                    <Calendar className="w-5 h-5 mr-2" />
                    <span>{new Date(event.date).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center text-gray-500">
                    <MapPin className="w-5 h-5 mr-2" />
                    <span>{event.location}</span>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-900">Event Highlights</h3>
                  <ul className="list-disc list-inside text-gray-600">
                    <li>Over 500 attendees from various tech companies</li>
                    <li>20+ speakers sharing industry insights</li>
                    <li>Interactive workshops and networking sessions</li>
                  </ul>

                  <a
                    href="#"
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Photo Gallery
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PreviousEvents;