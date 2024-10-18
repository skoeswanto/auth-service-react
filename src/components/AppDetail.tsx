import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { RefreshCw } from 'lucide-react';

const AppDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [app, setApp] = useState<any>(null);

  useEffect(() => {
    // Simulating API call to fetch app details
    setApp({
      id,
      name: 'My Awesome App',
      apiKey: 'abc123xyz789',
      apiSecret: '********',
      apiCalls: 5678,
      createdAt: '2024-03-15',
    });
  }, [id]);

  const regenerateApiSecret = () => {
    // Simulating API call to regenerate API secret
    setApp((prevApp: any) => ({
      ...prevApp,
      apiSecret: 'newSecret123',
    }));
  };

  if (!app) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <div className="max-w-md mx-auto">
            <div>
              <h1 className="text-2xl font-semibold mb-6">{app.name}</h1>
            </div>
            <div className="divide-y divide-gray-200">
              <div className="py-4 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                <div className="flex justify-between">
                  <span className="font-bold">API Key:</span>
                  <span>{app.apiKey}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-bold">API Secret:</span>
                  <div className="flex items-center">
                    <span className="mr-2">{app.apiSecret}</span>
                    <button
                      onClick={regenerateApiSecret}
                      className="bg-blue-500 text-white p-1 rounded-full hover:bg-blue-600 transition duration-300"
                    >
                      <RefreshCw className="w-4 h-4" />
                    </button>
                  </div>
                </div>
                <div className="flex justify-between">
                  <span className="font-bold">API Calls:</span>
                  <span>{app.apiCalls}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-bold">Created At:</span>
                  <span>{app.createdAt}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppDetail;