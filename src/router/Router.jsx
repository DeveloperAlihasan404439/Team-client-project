import { createBrowserRouter } from "react-router-dom";
import MainLauOut from "../layout/MainLauOut";
import Home from "../page/Home";
import TermsAndConditions from "../page/Terms&Policy/TermsCondition";
import PrivacyPolicy from "../page/Terms&Policy/PrivacyPolicy";
import PopularArtical from "../page/Artical/PopularArtical";
import ArticleDetails from "../page/Artical/ArticleDetails";
import AboutUs from "../page/About/AboutUs";
import Login from "../page/Login/Login";
import IpTracker from "../dashboard/User/IpTracker";
import PasswordStrengthChecker from "../dashboard/User/PasswordStrengthChecker";
import Storage from "../dashboard/User/StorageManagement/Storage";

import Dashboard from "../layout/Dashboard";
import Notes from "../dashboard/User/Notes/Notes";
import UserAddArticle from "../dashboard/User/UserAddArticle";
import UserAllArticle from "../dashboard/User/UserAllArticle";
import DashHome from "../dashboard/Admin/DashHome";
import Users from "../dashboard/Admin/Users";
import AddArticle from "../dashboard/Admin/AddArticle";
import Articles from "../dashboard/Admin/Articles";
import UserReview from "../dashboard/Admin/UserReview";
import RequstArticle from "../dashboard/Admin/RequstArticle";
import ErrorPage from "../shared/ErrorPage/ErrorPage";

import Payment from "../page/Payment/Payment";
import Premium from "../page/Premium/Premium";

import UserProfile from "../dashboard/User/UserProfile";
import Help from "../page/Help/Help";
import PrivateRoute from "../shared/Auth/PrivateRoute";
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
  {
    path: '/dashboard',
    element: <Dashboard/>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
        // admin dashboard router creat 
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
}
]);
export default router;
