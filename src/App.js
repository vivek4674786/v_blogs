import './App.css';
import Navbar from './Components/navbar';
import Home from './Components/home';
import About from './Components/About';
import BlogState from './Context/Blogs/BlogState';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BlogState>
        <Router>
          <Navbar />
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/About' element={<About />} />
          </Routes>
        </Router>
      </BlogState>
    </div>
  );
}

export default App;
