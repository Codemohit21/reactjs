import { useState } from 'react';

function App() {
  const [color, setColor] = useState("black");

  return (
    <div
      className="w-full h-screen duration-200 flex justify-center items-center"
      style={{ backgroundColor: color }}
    >
      <div className="flex gap-4">
        <button onClick={() => setColor("red")} className="px-4 py-2 bg-white text-black rounded">
          Red
        </button>
        <button onClick={() => setColor("blue")} className="px-4 py-2 bg-white text-black border rounded">
          Blue
        </button>
        <button onClick={() => setColor("green")} className="px-4 py-2 bg-white text-black border rounded">
          Green
        </button>
        <button onClick={() => setColor("olive")} className="px-4 py-2 bg-white text-black border rounded">
          Olive
        </button>
      </div>
    </div>
  );
}

export default App;
