import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import DocumentationPage from './pages/DocumentationPage';
import Header from './components/Header';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-secondary-50">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/docs" element={<DocumentationPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
