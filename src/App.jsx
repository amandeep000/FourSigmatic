import "./App.css";
import { RouterProvider } from "react-router-dom";
import Router from "./Components/routes/Router";

function App() {
  return <RouterProvider router={Router} />;
}

export default App;
