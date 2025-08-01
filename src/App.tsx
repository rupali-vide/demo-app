import { Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import Waiting from './WaitingPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/waiting" element={<Waiting />} />
    </Routes>
  );
}

export default App;
