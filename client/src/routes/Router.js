import MainLayout from "./MainLayout";

import AttractionHomePage from "../Pages/Hero/AttractionHomePage";
// import AttractionLandingPage from "../Pages/Base/AttractionLandingPage";
import {BaseAttractionDetailsPage, BaseAttractionLandingPage, BaseDemo} from "../Pages/Base";
import AttractionHomePageTwo from "../Pages/Hero/AttractionHomePageTwo";

const ThemeRoutes = [
    {
        path: "",
        element: (
            <MainLayout />
        ),
        children: [
            { path: "", element: <AttractionHomePage /> },
            { path: "/home", element: <AttractionHomePageTwo /> },
            { path: "/attraction", element: <BaseAttractionLandingPage /> },
            { path: "/details", element: <BaseAttractionDetailsPage /> },
            { path: "/demo", element: <BaseDemo /> }
        ]
    },
]

export default ThemeRoutes