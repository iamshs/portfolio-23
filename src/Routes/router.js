import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import About from "../Pages/Main/About/About";
import Blog from "../Pages/Main/Blog";
import Contact from "../Pages/Main/Contact";
import Home from "../Pages/Main/Home/Home";


const router = createBrowserRouter([
     {
        path : "/" ,
        element : <Main /> ,
        children : [
            {
                path : '/',
                element : <Home />
            },
            {
                path : 'contact',
                element : <Contact />
            },
            {
                path : 'about',
                element : <About />
            },
            {
                path : 'blog',
                element : <Blog />
            },
            
        ]
     }
]);

export default router