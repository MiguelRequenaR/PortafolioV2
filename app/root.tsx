import type { MetaFunction } from "@remix-run/node";
import type { LinksFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

export const meta: MetaFunction = () => [{
  charset: "utf-8",
  title: "Portafolio | Miguel Angel",
  viewport: "width=device-width,initial-scale=1",
}];

import stylesheet from "~/styles/tailwind.css";

export const links: LinksFunction = () => [
  // { rel: "stylesheet", href: cssBundleHref },
  { rel: "stylesheet", href: stylesheet },
  { rel: "stylesheet", href: 'https://cdn.jsdelivr.net/npm/remixicon@3.5.0/fonts/remixicon.css' },
];

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
