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

import AddArticle from '../Dashboard/AddArticle';
import IpTracker from '../component/IpAddress/IpTracker';
import RequstReview from '../Dashboard/RequstReview';
import RequstArticle from '../Dashboard/RequstArticle';
import PopularArtical from '../component/PopularArtical/PopularArtical';
import PasswordStrengthChecker from '../pages/PasswordStrengthChecker/PassStrengthCheck';
import Notes from '../pages/Notes/Notes';
import Payment from '../pages/Payment/Payment';



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
                path: '/terms',
                element: <TermsAndConditions/>
            },
            {
                path: '/privacy',
                element:<PrivacyPolicy/>
            },
            {
                path: '/IpAddress',
                element:<IpTracker/>
            },
            {
                path: '/password/strength/check',
                element:<PasswordStrengthChecker/>
            },
            {
                path: '/notes',
                element:<Notes/>
            },
            
            {
                path: '/articles',
                element:<PopularArtical/>
            },
            {
                path: '/aboutUs',
                element:<AboutUs/>
            },
            {
                path: '/articledetails/:id',
                element:<ArticleDetails/>,
            },
            {
                path: '/payment',
                element: <Payment></Payment>
            }
            
            
        ]
    },
    {
        path: '/login',
        element: <Login></Login>
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
                path: '/dashboard/requstReview',
                element: <RequstReview/>
            },
            {
                path: '/dashboard/requstArticle',
                element: <RequstArticle/>
            },
        ]
    }
])