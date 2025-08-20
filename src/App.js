import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Layout from './layout/Layout';
import { Toaster } from './components/ui/toaster';

function App() {
  return (
    <div className="App">
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Layout>
      </Router>
      <Toaster />
    </div>
  );
}

export default App;
