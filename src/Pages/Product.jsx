import { useState } from "react";
import { Helmet } from "react-helmet";
// import useAuth from "../Hooks/useAuth";
import useProduct from "../Hooks/useProduct";

const Product = () => {
    // const { user, logOut } = useAuth();
    const [products] = useProduct();
    const [currentPage, setCurrentPage] = useState(1);
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedBrand, setSelectedBrand] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("");
    const [priceRange, setPriceRange] = useState([0, 5000]); 
    const itemsPerPage = 8;

    // const handleSignOut = () => {
    //     logOut();
    // };

    // Filtering and Sorting Logic
    const filteredProducts = products
        .filter((item) =>
            item.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
            (selectedBrand ? item.brand === selectedBrand : true) &&
            (selectedCategory ? item.category === selectedCategory : true) &&
            item.price >= priceRange[0] && item.price <= priceRange[1]
        );

    // Pagination logic
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredProducts.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

    const handlePageChange = (newPage) => {
        if (newPage > 0 && newPage <= totalPages) {
            setCurrentPage(newPage);
        }
    };

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
        setCurrentPage(1); 
    };

    const handleBrandChange = (e) => {
        setSelectedBrand(e.target.value);
        setCurrentPage(1); 
    };

    const handleCategoryChange = (e) => {
        setSelectedCategory(e.target.value);
        setCurrentPage(1); 
    };

    const handlePriceRangeChange = (e) => {
        const value = e.target.value.split('-').map(Number);
        setPriceRange(value);
        setCurrentPage(1); 
    };

    return (
        <div className="p-6">
            <Helmet>
                <title>ShowcasePro || Product</title>
            </Helmet>

            {/* {user && (
                <div className="flex items-center justify-end gap-2 mb-4">
                    <h2>{user?.email}</h2>
                    <button
                        className="bg-white border border-pink-500 text-pink-500 font-bold py-2 px-6 rounded-full hover:bg-pink-500 hover:text-black focus:outline-none focus:ring-2 focus:ring-pink-500 transition-colors duration-300"
                        onClick={handleSignOut}
                    >
                        Log Out
                    </button>
                </div>
            )} */}

            <div className="mb-4">
                <input
                    type="text"
                    placeholder="Search by product name"
                    value={searchQuery}
                    onChange={handleSearchChange}
                    className="border px-3 py-2 rounded-lg w-full"
                />
            </div>

            <div className="mb-4 flex gap-4">
                <select
                    value={selectedBrand}
                    onChange={handleBrandChange}
                    className="border px-3 py-2 rounded-lg"
                >
                    <option value="">Select Brand</option>
                    <option value="BrandA">Brand A</option>
                    <option value="BrandB">Brand B</option>
                </select>

                <select
                    value={selectedCategory}
                    onChange={handleCategoryChange}
                    className="border px-3 py-2 rounded-lg"
                >
                    <option value="">Select Category</option>
                    <option value="Electronics">Electronics</option>
                    <option value="Fashion">Fashion</option>
                    <option value="Home Appliances">Home Appliances</option>
                    <option value="Fitness">Fitness</option>
                    <option value="Furniture">Furniture</option>
                    <option value="Personal Care">Personal Care</option>
                </select>

                <select
                    onChange={handlePriceRangeChange}
                    className="border px-3 py-2 rounded-lg"
                >
                    <option value="0-5000">Select Price Range</option>
                    <option value="0-100">Under $100</option>
                    <option value="101-500">$101 - $500</option>
                    <option value="501-1500">$501 - $1500</option>
                    <option value="1501-3000">$1501 - $3000</option>
                    <option value="3001-5000">$3001 - $5000</option>
                </select>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {currentItems.map((item) => (
                    <div
                        key={item.id}
                        className="bg-white rounded-lg shadow-lg p-4 border border-pink-200 transition-transform duration-300 hover:scale-105"
                    >
                        <img
                            className="w-full h-48 object-cover rounded-t-lg mb-4"
                            src={item.image}
                            alt={item.name}
                        />
                        <div className="text-center">
                            <h2 className="text-lg font-bold text-pink-600 mb-2">{item.name}</h2>
                            <p className="text-gray-700 font-semibold">${item.price}</p>
                            <p className="text-gray-500">{item.category}</p>
                            <p className="text-yellow-500">Rating: {item.ratings} / 5</p>
                            <p className="text-gray-400 text-sm">Added on: {item.creation_date}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Pagination Controls */}
            <div className="flex justify-center items-center mt-4">
                <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    className={`mx-1 px-3 py-1 border rounded ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : 'bg-pink-500 text-white'}`}
                    disabled={currentPage === 1}
                >
                    Previous
                </button>

                {Array.from({ length: totalPages }, (_, index) => (
                    <button
                        key={index}
                        onClick={() => handlePageChange(index + 1)}
                        className={`mx-1 px-3 py-1 border rounded ${currentPage === index + 1 ? 'bg-pink-500 text-white' : 'bg-white text-pink-500'}`}
                    >
                        {index + 1}
                    </button>
                ))}

                <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    className={`mx-1 px-3 py-1 border rounded ${currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : 'bg-pink-500 text-white'}`}
                    disabled={currentPage === totalPages}
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default Product;
