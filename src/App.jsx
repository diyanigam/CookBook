import { useState } from 'react';
import Sidebar from './components/Sidebar';
import ChatInput from './components/ChatInput';
import TypingIndicator from './components/TypingIndicator';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useRef } from 'react';




export default function App() {
  const [messages, setMessages] = useState([]);
  const [isResponding, setIsResponding] = useState(false);
  const [includedIngredients, setIncludedIngredients] = useState([]);
  const [excludedIngredients, setExcludedIngredients] = useState([]);
  const apiUrl = import.meta.env.VITE_API_URL;


  const fetchBotResponse = async (userInput) => {
    await new Promise((r) => setTimeout(r, 1000));
    return `You said: ${userInput}`;
  };

  const handleSend = async (inputMessage) => {
    if (!inputMessage.trim()) return;

    function extractLastAIResponse(text) {
        const lastIndex = text.lastIndexOf('AI:');
        if (lastIndex === -1) return text;
        return text.slice(lastIndex + 3).trim();
      }


    const messageObj = {
      role: 'user',
      content: inputMessage,
    };

    const newMessages = [...messages, messageObj];
    setMessages(newMessages);
    setIsResponding(true);

    try {
      const res = await fetch(`${apiUrl}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          user_id: 'user_tay',
          message: (() => {
            let finalMessage = inputMessage;
            if (includedIngredients.length > 0) {
              finalMessage += ` **Include Ingredients: ${includedIngredients.join(', ')}**`;
            }
            if (excludedIngredients.length > 0) {
              finalMessage += ` **Exclude Ingredients: ${excludedIngredients.join(', ')}**`;
            }
            return finalMessage;
          })()
        }),
      });

      if (!res.ok) throw new Error('API error');

      const data = await res.json();
      const lastAIResponse = extractLastAIResponse(data.response);


      const botMessage = {
        role: 'assistant',
        content: lastAIResponse,
      };

      setMessages((prev) => [...prev, botMessage]);
    } catch (err) {
      console.error('API error:', err);
      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          content: 'API down, please contact diyanigam02@gmail.com',
        },
      ]);
    } finally {
      setIsResponding(false);
    }
  };


  const endRef = useRef(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);


  return (
    <div className="flex h-screen">
      <Sidebar />

      <main className="flex flex-col flex-1 bg-darkbg">
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          <AnimatePresence initial={false}>
            {messages.map((msg, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className={`max-w-md p-3 rounded ${
                  msg.role === 'user'
                    ? 'bg-xchat text-button font-medium self-end ml-auto'
                    : 'bg-bg text-button self-start'
                }`}
              >
                {msg.content}

              </motion.div>
            ))}
          </AnimatePresence>


          {isResponding && (
            <div className="p-2">
              <TypingIndicator />
            </div>
          )}

          
          <div ref={endRef} />

        </div>

        <ChatInput onSend={handleSend} isResponding={isResponding} />
      </main>
    </div>
  );
}
