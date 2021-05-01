import AppRouter from './components/AppRouter';
import scroll from './resourses/code/scroll';
import { useState } from 'react';

scroll.null();

function App() {
  const [title, setTitle] = useState('Utility Select Menu')

  return (
    <div className="app" id="app">
      <h1>{title}</h1>
      <AppRouter/>
    </div>
  );
}

export default App;
