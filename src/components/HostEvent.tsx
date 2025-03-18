import React, { useState } from 'react';
import { Calendar, MapPin, Clock, Plus, Minus, Trash2 } from 'lucide-react';
import { FormField } from '../types';

const HostEvent = () => {
  const [formFields, setFormFields] = useState<FormField[]>([]);
  const [eventData, setEventData] = useState({
    title: '',
    description: '',
    date: '',
    location: '',
    registrationDeadline: '',
    imageUrl: ''
  });

  const addFormField = () => {
    const newField: FormField = {
      id: `field-${formFields.length + 1}`,
      type: 'text',
      label: '',
      required: false
    };
    setFormFields([...formFields, newField]);
  };

  const removeFormField = (id: string) => {
    setFormFields(formFields.filter(field => field.id !== id));
  };

  const handleFieldChange = (id: string, key: keyof FormField, value: any) => {
    setFormFields(formFields.map(field => 
      field.id === id ? { ...field, [key]: value } : field
    ));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
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
                Event Image URL
              </label>
              <input
                type="url"
                value={eventData.imageUrl}
                onChange={(e) => setEventData({ ...eventData, imageUrl: e.target.value })}
                className="w-full px-4 py-2 bg-secondary-light border border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-white"
                required
              />
            </div>
          </div>
        </div>

        <div className="bg-secondary rounded-lg shadow-md p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold text-white">Registration Form Fields</h2>
            <button
              type="button"
              onClick={addFormField}
              className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-accent transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center gap-2"
            >
              <Plus className="w-4 h-4" />
              Add Field
            </button>
          </div>

          <div className="space-y-4">
            {formFields.map((field) => (
              <div key={field.id} className="flex items-start gap-4 p-4 border border-gray-600 rounded-lg bg-secondary-light group hover:border-primary transition-colors">
                <div className="flex-1 grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1">
                      Field Label
                    </label>
                    <input
                      type="text"
                      value={field.label}
                      onChange={(e) => handleFieldChange(field.id, 'label', e.target.value)}
                      className="w-full px-4 py-2 bg-secondary border border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1">
                      Field Type
                    </label>
                    <select
                      value={field.type}
                      onChange={(e) => handleFieldChange(field.id, 'type', e.target.value)}
                      className="w-full px-4 py-2 bg-secondary border border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-white"
                    >
                      <option value="text">Text</option>
                      <option value="email">Email</option>
                      <option value="tel">Phone</option>
                      <option value="textarea">Long Text</option>
                    </select>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => removeFormField(field.id)}
                  className="p-2 text-gray-400 hover:text-primary transition-colors"
                >
                  <Trash2 className="w-5 h-5" />
                </button>
              </div>
            ))}
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