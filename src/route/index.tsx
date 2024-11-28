import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import LandingPage from "../modules/landing-page";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../assets/styles/tailwind.css";

function MainLayout({ children }: any) {
  return (
    <main className="w-full h-screen">{children ? children : <Outlet />}</main>
  );
}

export default function Modules() {
  const server = createBrowserRouter([
    {
      element: <MainLayout />,
      children: [
        {
          path: "/",
          element: <LandingPage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={server} />;
}
