import { createBrowserRouter } from 'react-router-dom'
import Main from "../layout/Main/Main";
import Home from "../pages/Home/Home";
import Login from '../pages/Login/Login';
import ArticleDetails from '../component/PopularArtical/ArticleDetails';
import PopularArtical from '../component/PopularArtical/PopularArtical';
export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main/>,
        children:[
            {
                path:'/',
                element: <Home/>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/popularartical',
                element: <PopularArtical/>
            },
            {
                path : 'articledetails/:id',
                element : <ArticleDetails/>,
                loader : ({params}) => fetch(`http://localhost:5000/article/${params.id}`)
            }
            
        ]
    }
])