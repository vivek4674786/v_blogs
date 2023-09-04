import './App.css';
import Navbar from './Components/navbar';
import Home from './Components/Home/home';
import About from './Components/About';
import BlogState from './Context/Blogs/BlogState';
import UserState from './Context/User/UserState';
import Login from './Components/Auth/Login';
import Signup from './Components/Auth/Signup';
import Profile from './Components/Profile/Profile';
import BlogEditor from './Components/Profile/BlogEditor';
import BlogUpdator from './Components/Profile/BlogUpdator';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom'


function App() {
  return (
    <div className="App" style={{ backgroundColor: "rgb(255, 255, 196)" }}>
      <UserState>
        <BlogState>
          <Router>
            <Navbar />
            <Routes>
              <Route exact path='/' element={<Home />} />
              <Route exact path='/About' element={<About />} />
              <Route exact path='/login' element={<Login />} />
              <Route exact path='/signup' element={<Signup />} />
              <Route exact path='/profile' element={<Profile />} />
              <Route exact path='/createblog' element={<BlogEditor />} />
              <Route exact path='/editblog' element={<BlogUpdator />} />
            </Routes>
          </Router>
        </BlogState>
      </UserState>
    </div>
  );
}

export default App;
