import {
  RouterProvider,
  createBrowserRouter,
  useRouteError,
} from "react-router-dom";
import { Layout } from "../Layout";
import { Extraction } from "../../pages/Extraction";
import { Friends } from "../../pages/Friends";
import { Network } from "../../pages/Network";
import { Store } from "../../pages/Store";
import { Task } from "../../pages/Task";
import { StoreBlock } from "../../components/Store";
import { Market } from "../../components/Market";

const BubbleError = () => {
  const error = useRouteError();
  if (error) throw error;
  return null;
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <BubbleError />,
    children: [
      {
        path: "",
        element: <Extraction />,
        errorElement: <BubbleError />,
      },
      {
        path: "friends",
        element: <Friends />,
        errorElement: <BubbleError />,
      },
      {
        path: "network",
        element: <Network />,
        errorElement: <BubbleError />,
      },
      {
        path: "store",
        element: <Store />,
        errorElement: <BubbleError />,
        children: [
          {
            path: "",
            element: <StoreBlock />,
            errorElement: <BubbleError />,
          },
          {
            path: "market",
            element: <Market />,
            errorElement: <BubbleError />,
          },
        ],
      },
      {
        path: "task",
        element: <Task />,
        errorElement: <BubbleError />,
      },
    ],
  },
]);

export const BrowserRouter = () => {
  return <RouterProvider router={router} />;
};
