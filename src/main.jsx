import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Root from "./Root.jsx";
import Error from "./routes/Error.jsx";
import Index from "./routes/Index.jsx";
import About from "./routes/About.jsx";
import Projects from "./routes/Projects.jsx";
import Contact from "./routes/Contact.jsx";
import Support from "./routes/Support.jsx";

import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        errorElement: <Error />,
        children: [
          { index: true, element: <Index /> },
          {
            path: "about",
            element: <About />,
          },
          {
            path: "projects",
            element: <Projects />,
          },
          {
            path: "contact",
            element: <Contact />,
          },
          {
            path: "support",
            element: <Support />,
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
