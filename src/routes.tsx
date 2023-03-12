import { Children } from "react";
import { createBrowserRouter } from "react-router-dom";
import { Default } from "./layouts/Default";
import { Status } from "./pages/Status";
import { Timeline } from "./pages/Timeline";

export const router = createBrowserRouter([
  // Cada objeto é uma página dentro da aplicação


  {
    path: '/',
    element: <Default />,
    // Children = quais rotas vão ter a sidebar (default) na esquerda
    children: [
      {
        path: '/',
        element: <Timeline />
      },
      {
        path: '/status',
        element: <Status />
      },
    ]
  }
])