import { useRoutes, Navigate } from "react-router-dom";
import MainLayout from "../Layout.tsx";
import HomePage from "../../pages/Home/Home.tsx";
import HomeDetails from "../../pages/HomeDetails/HomeDetails.tsx";

export const RoutesApp = () => {
  const routes = [
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: <HomePage />
        },
        {
          path: "/flag/:name",
          element: <HomeDetails />
        }
      ]
    },
    {
      path: "*",
      element: <Navigate to="/" />,
    },
  ];

  return useRoutes(routes);
};
