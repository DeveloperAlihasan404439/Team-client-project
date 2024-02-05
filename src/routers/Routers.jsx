import { createBrowserRouter } from 'react-router-dom'
import Main from "../layout/Main/Main";
import Home from "../pages/Home/Home";
import Login from '../pages/Login/Login';
import TermsAndConditions from '../component/Terms&Policy/TermsCondition';
import PrivacyPolicy from '../component/Terms&Policy/PrivacyPolicy';
import AboutUs from '../component/AboutUs/AboutUs';
import ArticleDetails from '../component/PopularArtical/ArticleDetails';
import Dashboard from '../layout/Dashboard/Dashboard';
import DashHome from '../Dashboard/DashHome';
import Users from '../Dashboard/Users';
import ArticleUpdated from '../Dashboard/ArticleUpdated';
import Blog from '../Dashboard/Blog';
import ErrorPage from './../component/ErrorPage/ErrorPage';
import IpTracker from '../component/IpAddress/IpTracker';


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main/>,
        ErrorPage:<ErrorPage></ErrorPage> ,
        children:[
            {
                path:'/:email?',
                element: <Home/>,
                loader: ({ params }) => fetch(`https://server-side-bice.vercel.app/users/${params.email}`)
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/terms',
                element: <TermsAndConditions></TermsAndConditions>
            },
            {
                path: '/privacy',
                element:<PrivacyPolicy></PrivacyPolicy>
            },
            {
                path: '/IpAddress',
                element:<IpTracker></IpTracker>
            },
            
            {
                path: '/aboutUs',
                element:<AboutUs></AboutUs>
            },
            {
                path: '/articledetails/:id',
                element:<ArticleDetails/>,
                loader: ({params})=>fetch(`http://localhost:5000/article/${params.id}`)
            },
            
        ]
    },
    {
        path: '/dashboard',
        element: <Dashboard/>,
        children:[
            {
                path: '/dashboard/home',
                element: <DashHome/>
            },
            {
                path: '/dashboard/users',
                element: <Users/>
            },
            {
                path: '/dashboard/articleUpdated',
                element: <ArticleUpdated/>
            },
            {
                path: '/dashboard/blog',
                element: <Blog/>
            }
        ]
    }
])