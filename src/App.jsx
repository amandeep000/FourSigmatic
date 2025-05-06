import "./App.css";
import { RouterProvider } from "react-router-dom";
import Router from "./Components/routes/Router";
import UseInitialProducts from "./Components/UseInitialProducts";
import useLenis from "./Components/UseLenis";
import { Suspense } from "react";

function App() {
  UseInitialProducts();
  useLenis();

  return (
    <Suspense
      fallback={
        <div className="text-center font-sans text-2xl text-green-600">
          Loading...
        </div>
      }
    >
      <RouterProvider router={Router} />
    </Suspense>
  );
}

export default App;
