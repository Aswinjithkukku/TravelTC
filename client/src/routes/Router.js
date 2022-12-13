import MainLayout from "./MainLayout";

import AttractionHomePage from "../Pages/Hero/AttractionHomePage";
import AttractionLandingPage from "../Pages/Hero/AttractionLandingPage";
import AttractionDetailsPage from "../Pages/Hero/AttractionDetailsPage";

const ThemeRoutes = [
    {
        path: "",
        element: (
            <MainLayout />
        ),
        children: [
            { path: "", element: <AttractionHomePage /> },
            { path: "/attraction/:id", element: <AttractionLandingPage /> },
            { path: "/details", element: <AttractionDetailsPage /> }
        ]
    }
]

export default ThemeRoutes