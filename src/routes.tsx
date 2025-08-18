// src/routes.tsx
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Suspense, lazy } from "react";

const Home = lazy(() => import("./pages/Home"));
const Photos = lazy(() => import("./pages/Photos"));
const Models = lazy(() => import("./pages/CarModels"));

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/photos", element: <Photos /> },
  { path: "/models", element: <Models /> },
]);

export default function AppRoutes() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <RouterProvider router={router} />
    </Suspense>
  );
}
