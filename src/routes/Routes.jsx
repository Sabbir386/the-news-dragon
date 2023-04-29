
import { createBrowserRouter } from "react-router-dom";
import Main from '../layouts/Main.jsx';
import Home from '../pages/Home/Home.jsx';
const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
            }
        ]

    },
]);
export default router;
