import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createHashRouter,
  RouterProvider,
} from "react-router-dom";
import Store from "./Store/Store.jsx";
import { Provider } from "react-redux";

import App from "./App.jsx";
import "./index.css";

import {
  AllTasks,
  CompletedTasks,
  UnCompletedTasks,
  ImportantTasks,
  TodayTasks,
} from "./Routes";

import { Home } from "./components/index.js";
import ErrorHandler from "./Routes/ErrorHandler.jsx";

const router = createHashRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
        errorElement: <ErrorHandler />,
        children: [
          {
            index: true,
            element: <AllTasks />,
          },
          {
            path: "important",
            element: <ImportantTasks />,
          },
          {
            path: "today",
            element: <TodayTasks />,
          },
          {
            path: "completed",
            element: <CompletedTasks />,
          },
          {
            path: "uncompleted",
            element: <UnCompletedTasks />,
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={Store}>
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
    </Provider>
  </React.StrictMode>
);
