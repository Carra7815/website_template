import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useHref,
  useNavigate,
} from "react-router";

import { RouterProvider } from "react-aria-components";

import Navbar from "./components/Navbar";

export function Layout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>The App</title>
        <Meta />
        <Links />
        {/* <link href="/src/index.css" rel="stylesheet"></link> */}
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
        <span className="bg-slate-900">lalallalla</span>
      </body>
    </html>
  );
}

export default function Root() {
  let navigate = useNavigate();

  return (
    <RouterProvider navigate={navigate} useHref={useHref}>
      <Navbar />
      <div className="mx-auto mt-8 p-4">
        <Outlet />
      </div>
    </RouterProvider>
  );
}
