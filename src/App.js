import AppBody from './components/AppBody';
import TitleCard from './components/TitleCard';

function App() {
  return (
    <div className="app">
      <div className="app-container">
        <TitleCard title="Expense Tracker" />
        <AppBody />
      </div>
    </div>
  );
}

export default App;
