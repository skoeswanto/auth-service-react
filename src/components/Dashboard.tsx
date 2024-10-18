import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { PlusCircle, Settings } from 'lucide-react';

const Dashboard: React.FC = () => {
  const [apps, setApps] = useState([
    { id: 1, name: 'My First App', apiCalls: 1234 },
    { id: 2, name: 'Another App', apiCalls: 5678 },
  ]);

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          <Link to="/profile" className="text-blue-600 hover:text-blue-800">
            <Settings className="w-6 h-6" />
          </Link>
        </div>
      </header>
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-semibold text-gray-900">Your Applications</h2>
            <Link
              to="/create-app"
              className="bg-blue-500 text-white px-4 py-2 rounded-md flex items-center hover:bg-blue-600 transition duration-300"
            >
              <PlusCircle className="w-5 h-5 mr-2" />
              Create New App
            </Link>
          </div>
          <div className="bg-white shadow overflow-hidden sm:rounded-md">
            <ul className="divide-y divide-gray-200">
              {apps.map((app) => (
                <li key={app.id}>
                  <Link to={`/app/${app.id}`} className="block hover:bg-gray-50">
                    <div className="px-4 py-4 sm:px-6">
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-medium text-blue-600 truncate">{app.name}</p>
                        <div className="ml-2 flex-shrink-0 flex">
                          <p className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                            Active
                          </p>
                        </div>
                      </div>
                      <div className="mt-2 sm:flex sm:justify-between">
                        <div className="sm:flex">
                          <p className="flex items-center text-sm text-gray-500">
                            API Calls: {app.apiCalls}
                          </p>
                        </div>
                      </div>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;