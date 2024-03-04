import { createBrowserRouter } from "react-router-dom";
import MainLauOut from "../layout/MainLauOut";
import Home from "../pages/Home";
import ErrorPage from "../shared/ErrorPage/ErrorPage";
import PrivacyPolicy from "../pages/Terms&Policy/PrivacyPolicy";
import TermsAndConditions from "../pages/Terms&Policy/TermsCondition";
import PopularArtical from "../pages/Artical/PopularArtical";
import PrivateRoute from "../shared/Auth/PrivateRoute";
import ArticleDetails from "../pages/Artical/ArticleDetails";
import AboutUs from "../pages/About/AboutUs";
import Login from "../pages/Login/Login";
import Payment from "../pages/Payment/Payment";
import Premium from "../pages/Premium/Premium";
import Help from "../pages/Help/Help";
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLauOut />,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home />,
      },

      {
        path: "/terms",
        element: <TermsAndConditions />,
      },
      {
        path: "/privacy",
        element: <PrivacyPolicy />,
      },

       {
        path: "/fourm",
        element: <PopularArtical />,
      },
      {
        path: "/fourm/:id",
        element: <PrivateRoute><ArticleDetails /></PrivateRoute>,
      },

      {
        path: "/aboutUs",
        element: <AboutUs />,
      },
      {
        path: "/payment",
        element: <Payment/>
      },
      {
        path: "/premium",
        element: <PrivateRoute><Premium/></PrivateRoute>
      },
      {
        path: "/help",
        element: <Help/>
      } 
    ],
  },
   {
    path:'/login',
    element: <Login/>,
    errorElement:<ErrorPage></ErrorPage>,
  },
 /* {
    path: '/dashboard',
    element: <Dashboard/>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
        // admin dashboard router creat 
        {
            path: '/dashboard/homes',
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
            path: '/dashboard/articles',
            element: <Articles/>
        },
         {
            path: '/dashboard/user/review',
            element: <UserReview/>
        },
       {
            path: '/dashboard/requst/article',
            element: <RequstArticle/>
        },
        // user rout 
        {

            path: '/dashboard/user/profile',
            element: <UserProfile/>
        },
        {
            path: '/dashboard/user/addArticle',
            element: <UserAddArticle/>
        },
        {
            path: '/dashboard/user/all/Article',
            element: <UserAllArticle/>
        },
        {
            path: '/dashboard/user/notes',
            element: <Notes/>
        },
        {
          path: "/dashboard/user/storage",
          element: <Storage/>,
        },
        {
          path: "/dashboard/user/ip/address",
          element: <IpTracker />,
        },
        {
          path: "/dashboard/user/password",
          element: <PasswordStrengthChecker />,
        },
        // {
        //     path: '/dashboard/text-to-voice',
        //     element: <TextToVoiceCnv/>
        // },
    ]
} */
]);
export default router;
