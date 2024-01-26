import { createBrowserRouter } from 'react-router-dom'
import Main from "../layout/Main/Main";
import Home from "../pages/Home/Home";
import Login from '../pages/Login/Login';
import TermsAndConditions from '../component/Terms&Policy/TermsCondition';
import PrivacyPolicy from '../component/Terms&Policy/PrivacyPolicy';


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main/>,
        children:[
            {
                path:'/:email?',
                element: <Home/>,
                loader: ({ params }) => fetch(`https://function-fusion.vercel.app/users/${params.email}`)
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
            
        ]
    }
])