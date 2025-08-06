import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import App from "./App";
import Hompage from "./pages/Homepage/Hompage";
import Todopage from "./pages/Todopage/Todopage";
import Githubpage from "./pages/Githubpage/Githubpage";
import store from "./redux/store";
import "./styles.css";

// routes
const routes = createBrowserRouter([
  { path: "/", element: <App />, children: [  
    { index: true, element: <Hompage /> },
    { path: "/todo", element: <Todopage /> },
    { path: "/github", element: <Githubpage /> }
  ] },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={routes} />
    </Provider>
  </StrictMode>
);
