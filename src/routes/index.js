/* eslint-disable no-undef */
import { Suspense, lazy } from "react";
import { useRoutes, useLocation } from "react-router-dom";
import MainLayout from "../layouts/main";
import LoadingScreen from "../components/LoadingScreen";
const Loadable = (Component) => (props) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { pathname } = useLocation();
  const isDashboard = pathname.includes("/dashboard");

  return (
    <Suspense
      fallback={
        <LoadingScreen
          sx={{
            ...(!isDashboard && {
              top: 0,
              left: 0,
              width: 1,
              zIndex: 9999,
              position: "fixed",
            }),
          }}
        />
      }
    >
      <Component {...props} />
    </Suspense>
  );
};

export default function Router() {
  return useRoutes([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        { path: "/future-tech", element: <LandingPage /> },
        { path: '/future-tech/about-us', element: <About /> },
        { path: '/future-tech/contact-us', element: <Contact /> },
        { path: 'faqs', element: <Faqs /> },
        { path: '/future-tech/consulting', element: <Consulting /> },
        { path: '/future-tech/guidance', element: <Guidance /> },
        { path: '/future-tech/scholarship', element: <Scholarship /> },
        { path: '/future-tech/tution', element: <Tution /> },
      ],
    },
  ]);
}

const LandingPage = Loadable(lazy(() => import("../pages/LandingPage")));
const About = Loadable(lazy(() => import('../pages/About')));
const Contact = Loadable(lazy(() => import('../pages/Contact')));
const Consulting = Loadable(lazy(() => import('../pages/Consulting')));
const Guidance = Loadable(lazy(()=>import('../pages/Guidance')));
const Scholarship = Loadable(lazy(()=> import('../pages/Scholarship')));
const Tution  = Loadable(lazy(()=>import('../pages/Tution')));
const Faqs = Loadable(lazy(() => import('../pages/Faqs')));
