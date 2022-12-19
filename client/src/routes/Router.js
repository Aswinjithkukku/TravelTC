import MainLayout from "./MainLayout";

// import AttractionHomePage from "../Pages/Hero/AttractionHomePage";
// import AttractionLandingPage from "../Pages/Base/AttractionLandingPage";
// import {BaseAttractionDetailsPage, BaseAttractionLandingPage, BaseDemo} from "../Pages/Base";
import {
    AttractionHomePage,
    AttractionDetailsPage,
    AttractionLandingPage,
    AttractionHomePageTwo,
    ComboLandingPage
} from '../Pages/Hero'
// import AttractionHomePageTwo from "../Pages/Hero/AttractionHomePageTwo";

const ThemeRoutes = [
    {
        path: "",
        element: (
            <MainLayout />
        ),
        children: [
            { path: "", element: <AttractionHomePage /> },
            { path: "/home", element: <AttractionHomePageTwo /> },
            { path: "/attraction", element: <AttractionLandingPage /> },
            { path: "/details", element: <AttractionDetailsPage /> },
            { path: "/combo", element: <ComboLandingPage /> }
        ]
    },
]

export default ThemeRoutes