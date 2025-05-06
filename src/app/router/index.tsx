import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Layout, MainPage, PostPage, NotFoundPage } from "../../pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <MainPage />,
      },
      {
        path: "post/:id",
        element: <PostPage />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);

export const AppRouter = () => <RouterProvider router={router} />;
