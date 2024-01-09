import React, { useEffect, useState } from "react";
import Spinner from "../components/Spinner";
import Item from "../components/Item";

const Tshirt = () => {
  const API_URL = "https://fakestoreapi.com/products";
  const [loading, setLoading] = useState(false);
  const [items, setItems] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [priceRange, setPriceRange] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true);

    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      setItems(data);
    } catch (error) {
      console.log("Error aa gya");
      setItems([]);
    }

    setLoading(false);
  };

  const handleCategoryClick = (category) => {
    // If the clicked category is the same as the selected category, clear it.
    const newCategory = selectedCategory === category ? null : category;

    setSelectedCategory(newCategory);

    // Filter data based on selected category
    const filteredData = filterItems(newCategory, priceRange);
    setItems(filteredData);
  };

  const handlePriceFilter = (min, max) => {
    // Filter data based on price range
    const filteredData = filterItems(selectedCategory, { min, max });
    setItems(filteredData);
    setPriceRange({ min, max });
  };

  const handleClearCategory = () => {
    setSelectedCategory(null);
    // Refetch data when clearing the category
    fetchData();
  };

  const filterItems = (category, priceRange) => {
    let filteredData = items;

    // Filter by category
    if (category) {
      filteredData = items.filter((item) => item.category === category);
    }

    // Filter by price range
    if (priceRange) {
      const { min, max } = priceRange;
      filteredData = filteredData.filter(
        (item) => (!min || item.price >= min) && (!max || item.price <= max)
      );
    }

    return filteredData;
  };

  return (
    <div className="flex items-center justify-center mt-4 ">
      {loading ? (
        <Spinner />
      ) : (
        <div className="">
          {/* Buttons for categories */}
          <button
            className={`me-4 ms-4 ${
              selectedCategory === "men's clothing" ? "bg-gray-300 rounded text-black p-1" : ""
            }`}
            onClick={() => handleCategoryClick("men's clothing")}
          >
            Men's Clothing
          </button>
          <button
            className={`me-4 ms-4 ${
              selectedCategory === "jewelery" ? "bg-gray-300 rounded text-black p-1" : ""
            }`}
            onClick={() => handleCategoryClick("jewelery")}
          >
            Jewelery
          </button>
          <button
            className={`me-4 ms-4 ${
              selectedCategory === "electronics" ? "bg-gray-300 rounded text-black p-1" : ""
            }`}
            onClick={() => handleCategoryClick("electronics")}
          >
            Electronics
          </button>

          {/* Button to clear category */}
          <button
            className={`me-4 ms-4 ${
              !selectedCategory ? "bg-gray-300 rounded text-black p-1" : ""
            }`}
            onClick={handleClearCategory}
          >
            Clear
          </button>

          {/* Buttons for price ranges */}
          <div>
            {/* Include your price range buttons here */}
          </div>

          {/* Display items */}
          <div
            className="mx-auto grid xl:grid-cols-4 w-11/12 xl:max-w-[1111px] gap-x-4 gap-y-14 my-12
                            grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:max-w-[800px] sm:max-w-[600px] max-w-[300px]"
          >
            {items.length === 0 ? (
              <p>No Data Found</p>
            ) : (
              items.map((item) => <Item key={item.id} details={item} />)
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Tshirt;
