import { useState } from 'react';

export default function ChatInput({ onSend, isResponding }) {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim() || isResponding) return;
    onSend(input);
    setInput('');
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center gap-2 p-4 border-none bg-none"
    >
      <input
        type="text"
        className="flex-1 p-2  rounded dark:bg-gray-700 dark:text-white"
        placeholder={
          isResponding ? 'Waiting for response...' : 'Type your message...'
        }
        value={input}
        onChange={(e) => setInput(e.target.value)}
        disabled={false}
      />

      <button
        type="submit"
        disabled={isResponding || !input.trim()}
        className={`px-4 py-2 text-white rounded ${
          isResponding || !input.trim()
            ? 'bg-bg text-green cursor-not-allowed'
            : 'bg-button hover:bg-bgred'
        }`}
      >
        Send
      </button>
    </form>
  );
}
