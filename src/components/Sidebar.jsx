import { useState } from 'react';
import logo from '/assets/logo.png'; // Vite-compatible path
export default function Sidebar() {
  const [availableInput, setAvailableInput] = useState('');
  const [avoidInput, setAvoidInput] = useState('');
  const [availableIngredients, setAvailableIngredients] = useState([]);
  const [avoidIngredients, setAvoidIngredients] = useState([]);

  // Title Case Helper
  const toTitleCase = (str) =>
    str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();

  // On blur or Enter: split input, add to list
  const handleAvailableInput = () => {
    const items = availableInput
      .split(',')
      .map(i => i.trim())
      .filter(i => i)
      .map(toTitleCase);
    setAvailableIngredients([...availableIngredients, ...items]);
    setAvailableInput('');
  };

  const handleAvoidInput = () => {
    const items = avoidInput
      .split(',')
      .map(i => i.trim())
      .filter(i => i)
      .map(toTitleCase);
    setAvoidIngredients([...avoidIngredients, ...items]);
    setAvoidInput('');
  };

  const removeFromAvailable = (item) => {
    setAvailableIngredients(availableIngredients.filter(i => i !== item));
  };

  const removeFromAvoid = (item) => {
    setAvoidIngredients(avoidIngredients.filter(i => i !== item));
  };

  return (
    <aside className="w-80 bg-blec p-4 border-r border-none h-full flex flex-col overflow-y-auto">
      {/* Logo + Title */}
      <div className="flex-center space-x-3 mb-6">
        <h1 className="text-5xl font-bold text-gray-800 dark:text-white tracking-tight">
          <img src={logo} alt="App Logo" className="h-[100px] w-[100px]" loading="lazy" /> Cook<span class="text-next">Book</span>
        </h1>
        
        
      </div>

      {/* Available Ingredients */}
      <label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
        Available ingredients
        <div className="text-xs text-gray-500 dark:text-gray-400">
          (Enter ingredients separated by commas)
        </div>
      </label>
      <textarea
        className="w-full p-2 mb-2 text-sm border rounded bg-bg dark:text-white dark:border-gray-700 resize-none h-20"
        value={availableInput}
        onChange={(e) => setAvailableInput(e.target.value)}
        onBlur={handleAvailableInput}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            e.preventDefault();
            handleAvailableInput();
          }
        }}
        placeholder="e.g., chicken, cheese, milk"
      />
      <div className="flex flex-wrap gap-2 mb-6">
        {availableIngredients.map((item, idx) => (
          <span
            key={idx}
            className="flex items-center bg-yellow-600 dark:bg-blue-700 text-xs px-2 py-1 rounded-full"
          >
            {item}
            <button
              onClick={() => removeFromAvailable(item)}
              className="ml-1 text-blue-500 dark:text-blue-200 hover:text-red-500"
            >
              ✕
            </button>
          </span>
        ))}
      </div>

      {/* Ingredients to Avoid */}
      <label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
        Ingredients to avoid
        <div className="text-xs text-gray-500 dark:text-gray-400">
          (Enter ingredients separated by commas)
        </div>
      </label>
      <textarea
        className="w-full p-2 mb-2 text-sm text-white border rounded  bg-bg dark:border-gray-700 resize-none h-20"
        value={avoidInput}
        onChange={(e) => setAvoidInput(e.target.value)}
        onBlur={handleAvoidInput}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            e.preventDefault();
            handleAvoidInput();
          }
        }}
        placeholder="e.g., peanuts, gluten"
      />
      <div className="flex flex-wrap gap-2">
        {avoidIngredients.map((item, idx) => (
          <span
            key={idx}
            className="flex items-center bg-red-200 text-red-800 dark:bg-red-700 dark:text-red-100 text-xs px-2 py-1 rounded-full"
          >
            {item}
            <button
              onClick={() => removeFromAvoid(item)}
              className="ml-1 text-red-500 dark:text-red-200 hover:text-white"
            >
              ✕
            </button>
          </span>
        ))}
      </div>
    </aside>
  );
}