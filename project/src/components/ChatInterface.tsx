import React, { useState } from 'react';
import { MessageSquare, History, User, Send, Home, Coffee, Book } from 'lucide-react';

interface ChatInterfaceProps {
  onLogout: () => void;
}

export default function ChatInterface({ onLogout }: ChatInterfaceProps) {
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      // Handle message submission
      setMessage('');
    }
  };

  return (
    <div className="flex h-screen bg-[#1E1E1E]">
      {/* Sidebar */}
      <div className="w-64 bg-[#1E3A8A] text-white p-4 flex flex-col">
        <div className="mb-8">
          <h1 className="text-xl font-bold mb-2">IIITDMJ</h1>
          <h2 className="text-lg">ChatBot</h2>
        </div>

        <div className="space-y-2 mb-4">
          <button className="w-full flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20">
            <MessageSquare size={20} />
            Start new chat
          </button>
          <button className="w-full flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-white/10">
            <History size={20} />
            AI chat
          </button>
        </div>

        <div className="flex-1">
          <h3 className="text-sm font-semibold mb-2 text-gray-300">History</h3>
          <div className="space-y-2">
            <button className="w-full text-left flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-white/10">
              <Home size={16} />
              Why GitHub was revolutionary?
            </button>
            <button className="w-full text-left flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-white/10">
              <Coffee size={16} />
              Healthy drink recipes
            </button>
            <button className="w-full text-left flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-white/10">
              <Book size={16} />
              Tell me a joke
            </button>
          </div>
        </div>

        <div className="border-t border-white/20 pt-4">
          <button
            onClick={onLogout}
            className="w-full flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-white/10"
          >
            <User size={20} />
            User
          </button>
        </div>
      </div>

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col">
        <div className="p-4 border-b border-gray-700">
          <h2 className="text-white text-xl">ChatBot</h2>
        </div>

        {/* Messages Area */}
        <div className="flex-1 p-4 overflow-y-auto">
          <div className="flex items-center justify-center h-full">
            <div className="text-center text-gray-400">
              <h3 className="text-2xl font-bold mb-2">What can I help with?</h3>
            </div>
          </div>
        </div>

        {/* Input Area */}
        <div className="p-4 border-t border-gray-700">
          <form onSubmit={handleSubmit} className="relative">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Message..."
              className="w-full bg-gray-800 text-white p-4 pr-12 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
            >
              <Send size={20} />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}