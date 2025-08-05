import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Layout from './layout/Layout';

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
    </div>
  );
}

export default App;
