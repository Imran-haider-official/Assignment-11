// App.jsx
import { Routes, Route } from "react-router-dom";
import { ProductProvider } from "./Context/ProductContext.jsx";
import ProductList from "./Pages/ProductListing.jsx";
import ProductDetails from "./Pages/ProductDetails";
import AddEditProduct from "./Pages/AddEditProduct";
import Navbar from "./components/Navbar.jsx";


function App() {
  return (
    <ProductProvider>
      <Navbar />
        <div className="container mx-auto p-4">
          <Routes>
            <Route path="/" element={<ProductList />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/add" element={<AddEditProduct />} />
            <Route path="/edit/:id" element={<AddEditProduct />} />
          </Routes>
        </div>
    
    </ProductProvider>
  );
}

export default App;