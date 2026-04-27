import axios from "axios";
import { createContext, useState, useEffect } from "react";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [searchTerm, setSearchTerm] = useState("");

    const fetchProducts = async () => {
        try {

            const data = await axios.get("http://localhost:3000/products/")
            // const data = await response.json();
            console.log(data.data)

            setProducts(data.data); 
            setLoading(false);
        } catch (error) {
            console.error("Error fetching products:", error);
            setError(error.message);
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchProducts();
    }, []);


    const filteredProducts = products.filter((product) =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    const deleteProduct = async (id) => {
        if (window.confirm("Are you sure you want to delete this product?")) {

            await axios.delete(`http://localhost:3000/products/${id}`)
            fetchProducts();


            // setProducts(prev => prev.filter(p => p.id !== id));
        }
    };

    const addProduct = async (newProduct) => {
       await axios.post("http://localhost:3000/products/",newProduct)
        fetchProducts()
    };

    const updateProduct = (id, updatedData) => {
        axios.put(`http://localhost:3000/products/${id}`,updatedData)
         fetchProducts()
    };


    return (
        <ProductContext.Provider
            value={{
                products,
                filteredProducts,
                deleteProduct,
                addProduct,
                updateProduct,
                loading,
                error,
                searchTerm,
                setSearchTerm,
            }}
        >
            {children}
        </ProductContext.Provider>
    );
};