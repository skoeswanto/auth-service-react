import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CreateApp: React.FC = () => {
  const [appName, setAppName] = useState('');
  const [canCreateNewUser, setCanCreateNewUser] = useState(false);
  const [useState, setUseState] = useState(false);
  const [usePKCE, setUsePKCE] = useState(false);
  const [otpMethod, setOtpMethod] = useState('email');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle the app creation logic
    console.log('Creating new app', { appName, canCreateNewUser, useState, usePKCE, otpMethod });
    // For demo purposes, we'll just navigate back to the dashboard
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <div className="max-w-md mx-auto">
            <div>
              <h1 className="text-2xl font-semibold">Create a New App</h1>
            </div>
            <form className="divide-y divide-gray-200" onSubmit={handleSubmit}>
              <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                <div className="flex flex-col">
                  <label className="leading-loose">App Name</label>
                  <input
                    type="text"
                    className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                    placeholder="My Awesome App"
                    value={appName}
                    onChange={(e) => setAppName(e.target.value)}
                    required
                  />
                </div>
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="canCreateNewUser"
                      type="checkbox"
                      className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
                      checked={canCreateNewUser}
                      onChange={(e) => setCanCreateNewUser(e.target.checked)}
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="canCreateNewUser" className="font-medium text-gray-700">Can create new users</label>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="useState"
                      type="checkbox"
                      className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
                      checked={useState}
                      onChange={(e) => setUseState(e.target.checked)}
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="useState" className="font-medium text-gray-700">Use state</label>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="usePKCE"
                      type="checkbox"
                      className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
                      checked={usePKCE}
                      onChange={(e) => setUsePKCE(e.target.checked)}
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="usePKCE" className="font-medium text-gray-700">Use PKCE</label>
                  </div>
                </div>
                <div className="flex flex-col">
                  <label className="leading-loose">OTP Method</label>
                  <select
                    className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                    value={otpMethod}
                    onChange={(e) => setOtpMethod(e.target.value)}
                  >
                    <option value="email">Email</option>
                    <option value="fazpass">FazPass</option>
                  </select>
                </div>
              </div>
              <div className="pt-4 flex items-center space-x-4">
                <button
                  className="bg-blue-500 flex justify-center items-center w-full text-white px-4 py-3 rounded-md focus:outline-none"
                  type="submit"
                >
                  Create App
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateApp;