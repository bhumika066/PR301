import React, { useState } from 'react';
import { Chrome, Eye, EyeOff } from 'lucide-react';

interface LoginPageProps {
  onLogin: () => void;
}

export default function LoginPage({ onLogin }: LoginPageProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin();
  };

  return (
    <div className="min-h-screen flex">
      {/* Left side - Login form */}
      <div className="w-1/2 bg-[#1E1E1E] flex items-center justify-center p-8">
        <div className="w-full max-w-md space-y-6">
          <h2 className="text-2xl font-bold text-white mb-6">Log in</h2>
          
          <button className="w-full flex items-center justify-center gap-2 bg-white text-gray-800 p-2.5 rounded-md hover:bg-gray-100 transition-colors">
            <Chrome size={20} />
            Log in with Google
          </button>

          <div className="relative flex items-center justify-center">
            <div className="border-t border-gray-600 flex-grow"></div>
            <span className="px-4 text-gray-400 text-sm">or</span>
            <div className="border-t border-gray-600 flex-grow"></div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="text-gray-300 text-sm">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="w-full bg-gray-800 text-white p-2.5 rounded-md mt-1 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="text-gray-300 text-sm">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••••••"
                  className="w-full bg-gray-800 text-white p-2.5 rounded-md mt-1 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-300"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center text-gray-300">
                <input type="checkbox" className="mr-2" />
                Keep me logged in
              </label>
              <a href="#" className="text-blue-400 hover:text-blue-300">Forgot password?</a>
            </div>

            <button
              type="submit"
              className="w-full bg-[#E91E63] text-white p-2.5 rounded-md hover:bg-[#D81B60] transition-colors"
            >
              Sign in
            </button>
          </form>

          <p className="text-gray-400 text-sm text-center">
            Not registered yet?{' '}
            <a href="#" className="text-blue-400 hover:text-blue-300">Create an Account</a>
          </p>
        </div>
      </div>

      {/* Right side - Brand */}
      <div className="w-1/2 bg-[#1E3A8A] flex items-center justify-center p-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">IIITDMJ ChatBot</h1>
          <p className="text-gray-300">An advanced virtual assistant</p>
          <div className="mt-4 flex justify-center gap-2">
            <span className="px-3 py-1 bg-[#E91E63] text-white rounded-full text-sm">Any confusion , try this bot</span>
            
          </div>
        </div>
      </div>
    </div>
  );
}