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
import AddArticle from '../Dashboard/AddArticle';


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main/>,
        children:[
            {
                path:'/:email?',
                element: <Home/>,
                loader: ({ params }) => fetch(`https://team-project-server.vercel.app/users/${params.email}`)
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
                path: '/aboutUs',
                element:<AboutUs></AboutUs>
            },
            {
                path: '/articledetails/:id',
                element:<ArticleDetails/>,
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
                path: '/dashboard/addArticle',
                element: <AddArticle/>
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