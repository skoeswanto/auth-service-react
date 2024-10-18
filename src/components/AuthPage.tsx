import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

const AuthPage: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle the authentication logic
    console.log(isLogin ? 'Logging in' : 'Registering', { phone, password });
    // For demo purposes, we'll just navigate to the dashboard
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">
          {isLogin ? 'Login' : 'Register'}
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="phone" className="block text-gray-700 text-sm font-bold mb-2">
              Phone Number
            </label>
            <PhoneInput
              country={'us'}
              value={phone}
              onChange={(phone) => setPhone(phone)}
              inputProps={{
                name: 'phone',
                required: true,
                className: 'w-full p-2 border rounded'
              }}
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded font-bold hover:bg-blue-600 transition duration-300"
          >
            {isLogin ? 'Login' : 'Register'}
          </button>
        </form>
        <button
          onClick={() => setIsLogin(!isLogin)}
          className="w-full mt-4 text-blue-500 hover:text-blue-600 transition duration-300"
        >
          {isLogin ? 'Need to register?' : 'Already have an account?'}
        </button>
      </div>
    </div>
  );
};

export default AuthPage;