import type { RouteObject } from "react-router-dom";
import Layout from "../components/Layout";
import HomePage from "../pages/HomePage";
import BasicAnimationsPage from "../pages/BasicAnimationsPage";
import VariantsPage from "../pages/VariantsPage";
import GesturesPage from "../pages/GesturesPage";
import ScrollAnimationsPage from "../pages/ScrollAnimationsPage";
import LayoutAnimationsPage from "../pages/LayoutAnimationsPage";
import NotFoundPage from "../pages/NotFoundPage";

// Define the route configuration as an array of route objects
export const routes: RouteObject[] = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "basic-animations",
        element: <BasicAnimationsPage />,
      },
      {
        path: "variants",
        element: <VariantsPage />,
      },
      {
        path: "gestures",
        element: <GesturesPage />,
      },
      {
        path: "scroll-animations",
        element: <ScrollAnimationsPage />,
      },
      {
        path: "layout-animations",
        element: <LayoutAnimationsPage />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
];

export default routes;
