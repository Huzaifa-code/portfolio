import './App.css';
import Home from './Pages/Home';
import Blog from './Pages/Blog.jsx'
import { Route, Routes } from 'react-router-dom';
import SinglePost from './Pages/SinglePost.jsx'
import Error from './Pages/Error.jsx'
import Connect from './Pages/Connect.jsx';
import Login from './Pages/Login.jsx';
import Signup from './Pages/Signup.jsx';
import Projects from './Pages/Projects.jsx';


function App() {

  return (
    // <BrowserRouter>
    <>
      
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/connect' element={<Connect/>} />
        <Route path='/blog' element={<Blog/>} />
        <Route path='/blog/:slug' element={<SinglePost />}  />
        <Route path='*' element={<Error />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/signup' element={<Signup />}/>
      </Routes>
    </>
      // </BrowserRouter>

  );
}

export default App;
