import { useState } from 'react';
import ChatInput from './ChatInput';
import ChatBubble from './ChatBubble';

export default function ChatWindow() {
  const [messages, setMessages] = useState([
    { sender: 'bot', text: 'Hello! How can I assist you today?' },
  ]);

  const handleSend = (text) => {
    setMessages(prev => [...prev, { sender: 'user', text }]);

    // Simulate bot response
    setTimeout(() => {
      setMessages(prev => [...prev, { sender: 'bot', text: 'Thinking...' }]);
    }, 1000);
  };

  return (
    <div className="flex flex-col flex-1 h-full">
      <div className="flex-1 overflow-y-auto p-6 space-y-4">
        {messages.map((msg, idx) => (
          <ChatBubble key={idx} sender={msg.sender} text={msg.text} />
        ))}
      </div>
      <ChatInput onSend={handleSend} />
    </div>
  );
}
