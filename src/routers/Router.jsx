import { createBrowserRouter } from "react-router-dom";
import MainLauOut from "../layout/MainLauOut";
import Home from "../page/Home";
import ErrorPage from "../shared/ErrorPage/ErrorPage";
import PrivacyPolicy from "../page/Terms&Policy/PrivacyPolicy";
import TermsAndConditions from "../page/Terms&Policy/TermsCondition";
import PopularArtical from "../page/Artical/PopularArtical";
import PrivateRoute from "../shared/Auth/PrivateRoute";
import ArticleDetails from "../page/Artical/ArticleDetails";
import AboutUs from "../page/About/AboutUs";
import Login from "../page/Login/Login";
import Payment from "../page/Payment/Payment";
import Premium from "../page/Premium/Premium";
import Help from "../page/Help/Help";
import Dashboard from "../layout/Dashboard";
import DashHome from "../dashboard/Admin/DashHome";
import Users from "../dashboard/Admin/Users";
import AddArticle from "../dashboard/Admin/AddArticle";
import Articles from "../dashboard/Admin/Articles";
import RequstArticle from "../dashboard/Admin/RequstArticle";
import UserReview from "../dashboard/Admin/UserReview";
import Notes from "../dashboard/User/Notes/Notes";
import IpTracker from "../dashboard/User/IpTracker";
import PasswordStrengthChecker from "../dashboard/User/PasswordStrengthChecker";
import UserAllArticle from "../dashboard/User/UserAllArticle";
import UserAddArticle from "../dashboard/User/UserAddArticle";
import UserProfile from "../dashboard/User/UserProfile";
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
        // {
        //   path: "/dashboard/user/storage",
        //   element: <Storage/>,
        // },
        {
          path: "/dashboard/user/ip/address",
          element: <IpTracker />,
        },
        {
          path: "/dashboard/user/password",
          element: <PasswordStrengthChecker />,
        }, 
    ]
}
]);
export default router;
