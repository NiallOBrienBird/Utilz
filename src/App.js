import AppRouter from './components/AppRouter';
import scroll from './resourses/code/scroll';

scroll.null();

function App() {
  return (
    <div className="app" id="app">
      <h1>Utility Select Menu</h1>
      <AppRouter/>
    </div>
  );
}

export default App;
