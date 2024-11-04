import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import Home from './pages/Home';
import Analytics from './pages/Analytics';
import Customers from './pages/Customers';
import Inventory from './pages/Inventory';
import Scheduling from './pages/Scheduling';
import MachineLearning from './pages/MachineLearning';

function App() {
  return (
    <Router>
      <div className="flex">
        <Navbar />
        <main className="flex-1 ml-64 bg-gray-50 min-h-screen">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/customers" element={<Customers />} />
            <Route path="/inventory" element={<Inventory />} />
            <Route path="/scheduling" element={<Scheduling />} />
            <Route path="/ml" element={<MachineLearning />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;