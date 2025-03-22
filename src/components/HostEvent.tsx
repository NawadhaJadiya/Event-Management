import React, { useState } from 'react';
import { Calendar, MapPin, Clock } from 'lucide-react';

const HostEvent = () => {
  const [eventData, setEventData] = useState({
    title: '',
    description: '',
    date: '',
    location: '',
    registrationDeadline: '',
    imageUrl: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-white mb-8">Host an Event</h1>
      
      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="bg-secondary rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold text-white mb-6">Event Details</h2>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">
                Event Title
              </label>
              <input
                type="text"
                value={eventData.title}
                onChange={(e) => setEventData({ ...eventData, title: e.target.value })}
                className="w-full px-4 py-2 bg-secondary-light border border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-white"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">
                Description
              </label>
              <textarea
                value={eventData.description}
                onChange={(e) => setEventData({ ...eventData, description: e.target.value })}
                className="w-full px-4 py-2 bg-secondary-light border border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-white"
                rows={4}
                required
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">
                  Event Date
                </label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="date"
                    value={eventData.date}
                    onChange={(e) => setEventData({ ...eventData, date: e.target.value })}
                    className="w-full pl-10 pr-4 py-2 bg-secondary-light border border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-white"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">
                  Registration Deadline
                </label>
                <div className="relative">
                  <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="date"
                    value={eventData.registrationDeadline}
                    onChange={(e) => setEventData({ ...eventData, registrationDeadline: e.target.value })}
                    className="w-full pl-10 pr-4 py-2 bg-secondary-light border border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-white"
                    required
                  />
                </div>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">
                Location
              </label>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  value={eventData.location}
                  onChange={(e) => setEventData({ ...eventData, location: e.target.value })}
                  className="w-full pl-10 pr-4 py-2 bg-secondary-light border border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-white"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">
                Event Image
              </label>
              <input
  type="file"
  accept="image/*" // Restricts file selection to images
  onChange={(e) => {
    const file = (e.target.files != null) ? e.target.files[0] : null;
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setEventData({ ...eventData, imageUrl: reader.result as string}); // Store the data URL
      };
      reader.readAsDataURL(file); // Read the file as a data URL
    }
  }}
  className="w-full px-4 py-2 bg-secondary-light border border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-white"
  required
/>
            </div>
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-primary text-white py-3 px-6 rounded-lg font-semibold hover:bg-accent transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
        >
          Create Event
        </button>
      </form>
    </div>
  );
};

export default HostEvent;
