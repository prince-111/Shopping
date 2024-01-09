import React, { useEffect, useState } from "react";
import Spinner from "../components/Spinner";
import Item from "../components/Item";

const Tshirt = () => {
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
            src="https://www.beyoung.in/api//cache/catalog/products/banner_desktop/Full-Sleeves-T-Shirts-Banner-desktop-view_17_2_2023_1920x475.jpg"
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

export default Tshirt;

{
  /* <div>
<img
  src="https://www.beyoung.in/api//cache/catalog/products/banner_desktop/Full-Sleeves-T-Shirts-Banner-desktop-view_17_2_2023_1920x475.jpg"
  alt=""
/>
</div>
<div className="container mx-6">
<h3>T SHIRTS FOR MEN</h3>
<p className="flex-auto mt-2 mb-1">
  Shop T shirts for men online from Beyoung’s diverse collections. You
  will love resonating with our premium quality Printed T Shirts
  available in various colors & interesting themes. We have different
  silhouettes to match your vibe and speak your style. Your one-stop
  everyday fashion brand Beyoung! Enjoy browsing and shopping online
  Mens T shirts starting from ₹299/-
</p>
 </div> */
}
