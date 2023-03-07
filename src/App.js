import './App.css';
import Home from './Pages/Home';
import Blog from './Pages/Blog.jsx'
import { Route, Routes } from 'react-router-dom';
import SinglePost from './Pages/SinglePost.jsx'
import Error from './Pages/Error.jsx'


import { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";


function App() {

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 700 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, [cursorX,cursorY ]);


  return (
    // <BrowserRouter>
    <>
      <motion.div
            className="cursor"
            style={{
              translateX: cursorXSpring,
              translateY: cursorYSpring,
            }}
        />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/blog' element={<Blog/>} />
        <Route path='/blog/:slug' element={<SinglePost />}  />
        <Route path='*' element={<Error />}/>
      </Routes>
    </>
      // </BrowserRouter>

  );
}

export default App;
