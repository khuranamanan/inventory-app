import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import RootLayout from "../Layout/RootLayout";
import PageNotFound from "../Pages/PageNotFound";
import DashboardPage from "../Pages/DashboardPage";
import DepartmentsPage from "../Pages/DepartmentsPage";
import ProductsPage from "../Pages/ProductsPage";
import ProductDetailsPage from "../Pages/ProductDetailsPage";
import AddNewProductPage from "../Pages/AddNewProductPage";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<DashboardPage />} />
      <Route path="departments" element={<DepartmentsPage />} />
      <Route path="products" element={<ProductsPage />} />
      <Route path="products/addproduct" element={<AddNewProductPage />} />
      <Route path="products/:id" element={<ProductDetailsPage />} />

      <Route path="*" element={<PageNotFound />} />
    </Route>
  )
);
