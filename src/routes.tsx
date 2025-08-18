// src/routes.tsx
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Suspense, lazy } from "react";

const Home = lazy(() => import("./pages/Home"));
const Photos = lazy(() => import("./pages/Photos"));
const Models = lazy(() => import("./pages/CarModels"));
const ModelViewer = lazy(() => import("./pages/CarModels/ModelViewer"));
const Articles = lazy(() => import("./pages/Articles"));
const TechTopic = lazy(() => import("./pages/Articles/Topics/tech"));
const CarsTopic = lazy(() => import("./pages/Articles/Topics/cars"));
const PhotographyTopic = lazy(() => import("./pages/Articles/Topics/photography"));
const Portfolio = lazy(() => import("./pages/Portfolio"));
const AboutMe = lazy(() => import("./pages/Portfolio/AboutMe"));
const Skills = lazy(() => import("./pages/Portfolio/Skills"));
const Contact = lazy(() => import("./pages/Portfolio/Contact"));

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/photos", element: <Photos /> },
  { path: "/models", element: <Models /> },
  { path: "/models/:modelId", element: <ModelViewer /> },
  { path: "/articles", element: <Articles /> },
  { path: "/articles/topics/tech", element: <TechTopic /> },
  { path: "/articles/topics/cars", element: <CarsTopic /> },
  { path: "/articles/topics/photography", element: <PhotographyTopic /> },
  { path: "/portfolio", element: <Portfolio /> },
  { path: "/portfolio/about-me", element: <AboutMe /> },
  { path: "/portfolio/skills", element: <Skills /> },
  { path: "/portfolio/contact", element: <Contact /> },
]);

export default function AppRoutes() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <RouterProvider router={router} />
    </Suspense>
  );
}
