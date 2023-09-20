import { useState } from 'react';
import './App.css';
import { Card } from './components/Card';
import students from './const/students';




function App() {
  // reacthooks
  const [count, setCount] = useState(100);
  return (
    <div className="app">
      <div className="flex flex-wrap justify-center gap-3 bg-red-400">
        {
          students.map((student) =>
            <Card details={student} />
          )
        }
      </div>
      <div className=' flex gap-4 my-10 mx-10'>
        <div className="counter text-lg">{count}</div>
        <button className='bg-red-500 p-4
      '
          onClick={() => setCount(count + 1)}
        >increase</button>
        <button
          onClick={() => setCount(count - 1)}
        >decrease</button>
      </div>
    </div>
  );
}

export default App;
