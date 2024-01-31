import { createBrowserRouter } from 'react-router-dom'
import Main from "../layout/Main/Main";
import Home from "../pages/Home/Home";
import Login from '../pages/Login/Login';
<<<<<<< HEAD
import ArticleDetails from '../component/PopularArtical/ArticleDetails';
import PopularArtical from '../component/PopularArtical/PopularArtical';
=======
import TermsAndConditions from '../component/Terms&Policy/TermsCondition';
import PrivacyPolicy from '../component/Terms&Policy/PrivacyPolicy';


>>>>>>> 3e571460a60f192473a8c261 
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
<<<<<<< HEAD
                path: '/popularartical',
                element: <PopularArtical/>
            },
            {
                path : 'articledetails/:id',
                element : <ArticleDetails/>,
                loader : ({params}) => fetch(`http://localhost:5000/article/${params.id}`)
            }
=======
                path: '/terms',
                element: <TermsAndConditions></TermsAndConditions>
            },
            {
                path: '/privacy',
                element:<PrivacyPolicy></PrivacyPolicy>
            },
>>>>>>> 3e571460a60f192473a8c2619c939cc11a6b1780
            
        ]
    }
])