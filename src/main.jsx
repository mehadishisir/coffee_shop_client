import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import MainLayout from "./Layout/MainLayout.jsx";
import Home from "./component/Home.jsx";
import AddCoffee from "./component/AddCoffee.jsx";
import CoffeeDetails from "./component/CoffeeDetails.jsx";
import UpdatedCoffee from "./component/UpdatedCoffee.jsx";
import SignUp from "./component/SignUp.jsx";
import AuthProvider from "./Auth/AuthProvider.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        loader: () => fetch("http://localhost:3000/coffees"),
        Component: Home,
      },
      {
        path: "coffee/:id",
        Component: CoffeeDetails,
      },
      {
        path: "add-coffee",
        Component: AddCoffee,
      },
      {
        path: "updateCoffee/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:3000/coffees/${params.id}`),
        Component: UpdatedCoffee,
      },
      {
        path: "signUp",
        Component: SignUp,
      },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
);
