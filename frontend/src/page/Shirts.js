import React, { useEffect, useState } from "react";
import Spinner from "../components/Spinner";
import Item from "../components/Item";

const Shirts = () => {
  const API_URL = "https://fakestoreapi.com/products";
  const [loading, setLoading] = useState(false);
  const [items, setItems] = useState([]);

  async function fetchData() {
    setLoading(true);

    try {
      const response = await fetch(API_URL);
      const data = await response.json();

      // Filter data for men's clothing category
      const mensClothingData = data.filter(
        (item) => item.category === "men's clothing"
      );
      // console.log(data);
      // setItems(data);
      setItems(mensClothingData);

      console.log(mensClothingData);
    } catch (error) {
      console.log("Error aa gya");
      setItems([]);
    }

    setLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="flex items-center justify-center">
      {loading ? (
        <Spinner />
      ) : (
        <div>
          <img
            src="https://www.beyoung.in/api/catalog/products/banner_desktop/BB-shirt-category-banner-desktop-view_19_10_2023.jpg"
            alt=""
          />

          <div
            className="mx-auto  grid xl:grid-cols-4 w-11/12 xl:max-w-[1111px] gap-x-4 gap-y-14 my-12
                            grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:max-w-[800px] sm:max-w-[600px] max-w-[300px]"
          >
            {items.length === 0
              ? "No Data Found"
              : items.map((item) => <Item key={item.id} details={item} />)}
          </div>
        </div>
      )}
    </div>
  );
};

export default Shirts;
