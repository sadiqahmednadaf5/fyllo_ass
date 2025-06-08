import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ProductList from "./components/ProductList/ProductList.jsx";
import Nav from "./components/Nav/Nav.jsx";
import ChartMain from "./components/ChartMain/ChartMain.jsx";
import TopFertilizers from "./components/TopFertilizers/TopFertilizers.jsx";

function App() {
  let router = createBrowserRouter([
    {
      path: "/",
      element: <Nav />,
      children: [
        { path: "/", element: <ProductList /> },
        { path: "/chart", element: <ChartMain /> },
        { path: "/topfertilizer", element: <TopFertilizers /> },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
