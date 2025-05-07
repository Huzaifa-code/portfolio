import './App.css';
import './Animation.css'
import Home from './Pages/Home';
import Blog from './Pages/Blog.jsx'
import { Route, Routes } from 'react-router-dom';
import SinglePost from './Pages/SinglePost.jsx'
import Connect from './Pages/Connect.jsx';
import Login from './Pages/Login.jsx';
import Signup from './Pages/Signup.jsx';
import Projects from './Pages/Projects.jsx';
import { Helmet } from 'react-helmet';
import { Analytics } from "@vercel/analytics/react"
import Insta from './Pages/Insta.jsx';


function App() {

  return (
    // <BrowserRouter>
    <>
      <Analytics/>
      <Helmet>
        <title>Huzaifa Qureshi - Software Engineer</title>
        <meta name="description" content="Huzaifa Qureshi is a FullStack web and app developer. Highly Skilled in - MERN, React.js, React-Native, Next.js, Node.js, MongoDb, Tailwind css, firebase, sanity.io"/>
        <meta name="keywords" content="Software Engineer ,MERN web developer - Huzaifa Qureshi"/>
        <meta name="author" content="Huzaifa Qureshi"/>

        {/* <!-- Geo Meta Tags --> */}
        <meta name="geo.region" content="IN-MP"/>
        <meta name="geo.placename" content="Indore"/>
        {/* <meta name="geo.position" content="22.74454918810034, 75.79635383561423"/> 
        <meta name="ICBM" content="22.74454918810034, 75.79635383561423"/> */}

      </Helmet>

      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/connect' element={<Connect/>} />
        <Route path='/blog' element={<Blog/>} />
        <Route path='/blog/:slug' element={<SinglePost />}  />
        {/* <Route path='*' element={<Error />}/> */}
        <Route path='/login' element={<Login />}/>
        <Route path='/signup' element={<Signup />}/>
        <Route path='/projects' element={<Projects />}/>
        <Route path='/insta' element={<Insta />}/>

      </Routes>
    </>
      // </BrowserRouter>

  );
}

export default App;
