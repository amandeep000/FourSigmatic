import "./App.css";
import { RouterProvider } from "react-router-dom";
import Router from "./Components/routes/Router";
import UseInitialProducts from "./Components/UseInitialProducts";
import useLenis from "./Components/UseLenis";

function App() {
  UseInitialProducts();
  useLenis();
  return <RouterProvider router={Router} />;
}

export default App;
