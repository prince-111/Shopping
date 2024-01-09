import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, NavLink, useNavigate } from "react-router-dom";
import CartItem from "../components/CartItem";

const Cart = () => {
  const Cart = useSelector((state) => {
    // console.log(state.Cart);
    return state.Cart;
  });

  const navigate = useNavigate();

  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    let amount = 0;
    Cart.forEach((item) => {
      // console.log(item)
      amount += parseFloat(item.price);
    });
    setTotalAmount(amount);
    // console.log('Cart',Cart)
  }, []);

  return (
    <div className="flex items-center justify-center min-h-[80vh] w-11/12 max-w-[1200px] mx-auto py-6">
      {Cart.length === 0 ? (
        <div className="flex flex-col items-center justify-center gap-y-7">
          <p className="font-semibold text-xl">Your cart is empty!</p>

          <button
            onClick={() => {
              navigate("/");
            }}
            className="px-10 py-3 bg-green-600 text-white uppercase font-semibold rounded-md text-[17px] border-green-600 border-2
            hover:bg-white hover:text-green-600 "
          >
            Shop Now
          </button>
        </div>
       ) : (
        <div className="flex gap-10 xl:flex-row    flex-col  ">
          {/* Cart Item List */}
          <div className=" xl:w-[60%] flex flex-col gap-8    w-full max-w-[900px] mx-auto">
            {Cart.map((item) => (
              <CartItem key={item.id} details={item} />
            ))}
          </div>

          {/* Cart Summary and Checkout */}
          <div className="xl:w-[40%] flex flex-col justify-between py-16 pb-14 px-2    w-full max-w-[900px] mx-auto">
            {/* cart summary */}
            <div className="flex flex-col sm:gap-5">
              <div className="flex flex-col my-2 sm:gap-4 ">
                <p className="sm:text-xl text-green-800 font-semibold uppercase    ">
                  Your Cart
                </p>
                <p className="sm:text-[50px] text-green-700 font-semibold uppercase sm:-mt-3    text-3xl">
                  Summary
                </p>
              </div>

              <p className="font-semibold sm:text-xl text-slate-700">
                Total Items: {Cart.length}
              </p>
            </div>

            {/* checkout */}
            <div className="flex flex-col gap-5">
              <p className="font-semibold sm:text-xl text-slate-700">
                Total Amount:{" "}
                <span className="font-bold"> ${totalAmount} </span>
              </p>
               
               <NavLink to="/checkout">
              <button
                className="w-full sm:py-3 bg-green-700 text-white uppercase font-bold rounded-md text-[17px]
                                   border-green-700 border-2 hover:bg-white hover:text-green-700 
                                    py-1"
              >
                Checkout Now
              </button>
              </NavLink>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;


{/* <div>
<section classNameName="text-black-600 body-font min-h-screen">
  <div className="container md:px-10 px-5 py-8 mx-auto transition-all">
    <h2 className="font-bold text-2xl hidden md:block">My Cart</h2>

    <div className="flex md:justify-between md:flex-row flex-col pt-4">
      <div className="cart-items md:border md:border-gray-300 md:rounded-3xl md:w-2/3 h-fit">
        <div className="flex flex-col md:p-4">
          <div className="flex justify-between font-bold">
            <h3>Cart Items (1)</h3>
            <h3>999</h3>
          </div>

          <div className="offers flex border border-gray-300 rounded-3xl px-2 py-4 my-4 text-sm font-medium md:text-md">
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 24 24"
              className="mt-1 text-green-500 mr-2 text-lg"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path fill="none" d="M0 0h24v24H0V0z"></path>
              <path d="M21.41 11.58l-9-9C12.05 2.22 11.55 2 11 2H4c-1.1 0-2 .9-2 2v7c0 .55.22 1.05.59 1.42l9 9c.36.36.86.58 1.41.58s1.05-.22 1.41-.59l7-7c.37-.36.59-.86.59-1.41s-.23-1.06-.59-1.42zM13 20.01L4 11V4h7v-.01l9 9-7 7.02z"></path>
              <circle cx="6.5" cy="6.5" r="1.5"></circle>
            </svg>
            Shop Over ₹1000 and get FREE delivery with One Free Merch
          </div>

          <div className="items">
            <div>
              <div className="flex flex-col">
                <div className="item flex flex-row">
                  <div className="w-20 mr-2">
                    <img
                      alt="img"
                      width="569"
                      height="740"
                      decoding="async"
                      data-nimg="1"
                      className="rounded-lg"
                      srcset=""
                      src="https://www.beyoung.in/api/cache/catalog/products/polo_new_update_images_10_1_2022/ice_blue_polo_t-shirt_base_19_10_2023_700x933.jpg"
                    />
                  </div>
                  <div className="details">
                    <a href="/product/levis-green-m">
                      <div className="itemName text-gray-600">
                        Levis Men's Fine (M/Green)
                      </div>
                    </a>
                    <div className="price mt-1 flex">
                      <div className="discounted">₹999</div>
                      <div className="original line-through ml-2 text-gray-400">
                        ₹1250
                      </div>
                    </div>
                    <div className="save text-sm mt-1 w-fit text-green-600 bg-emerald-50 font-semibold">
                      You Save ₹251
                    </div>
                    <div className="soldBy mt-1 text-sm md:text-md text-gray-600">
                      Sold by: Levis
                    </div>
                  </div>
                </div>
                <div className="buttons flex justify-end">
                  <div className="flex items-center justify-center">
                    <button
                      className="border border-gray-300 rounded-full p-1  md:p-2 hover:border-emerald-700"
                      fdprocessedid="pobscf"
                    >
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        viewBox="0 0 1024 1024"
                        className=" text-emerald-500"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M872 474H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h720c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z"></path>
                      </svg>
                    </button>
                    <span className="mx-2">1</span>
                    <button
                      className="border border-gray-300 rounded-full p-1 md:p-2 hover:border-emerald-700"
                      fdprocessedid="fr79o"
                    >
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        t="1551322312294"
                        viewBox="0 0 1024 1024"
                        version="1.1"
                        className="text-emerald-500"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <defs></defs>
                        <path d="M474 152m8 0l60 0q8 0 8 8l0 704q0 8-8 8l-60 0q-8 0-8-8l0-704q0-8 8-8Z"></path>
                        <path d="M168 474m8 0l672 0q8 0 8 8l0 60q0 8-8 8l-672 0q-8 0-8-8l0-60q0-8 8-8Z"></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="cart-details md:w-1/3 flex flex-col md:ml-5">
        <div className="cupon md:border md:border-gray-300 md:rounded-3xl p-4">
          <div className="names font-bold">Apply Cupon</div>
          <div classNameName="cupon mt-4 flex">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 absolute mt-2"
            >
              <path
                d="M19 5H5C4.20435 5 3.44129 5.31607 2.87868 5.87868C2.31607 6.44129 2 7.20435 2 8V16C2 16.7956 2.31607 17.5587 2.87868 18.1213C3.44129 18.6839 4.20435 19 5 19H19C19.7956 19 20.5587 18.6839 21.1213 18.1213C21.6839 17.5587 22 16.7956 22 16V8C22 7.20435 21.6839 6.44129 21.1213 5.87868C20.5587 5.31607 19.7956 5 19 5ZM9.25 8C9.49723 8 9.7389 8.07331 9.94446 8.21066C10.15 8.34801 10.3102 8.54324 10.4048 8.77165C10.4995 9.00005 10.5242 9.25139 10.476 9.49386C10.4278 9.73634 10.3087 9.95907 10.1339 10.1339C9.95907 10.3087 9.73634 10.4278 9.49386 10.476C9.25139 10.5242 9.00005 10.4995 8.77165 10.4048C8.54324 10.3102 8.34801 10.15 8.21066 9.94446C8.07331 9.7389 8 9.49723 8 9.25C8 8.91848 8.1317 8.60054 8.36612 8.36612C8.60054 8.1317 8.91848 8 9.25 8ZM14.75 16C14.5028 16 14.2611 15.9267 14.0555 15.7893C13.85 15.652 13.6898 15.4568 13.5952 15.2284C13.5005 14.9999 13.4758 14.7486 13.524 14.5061C13.5722 14.2637 13.6913 14.0409 13.8661 13.8661C14.0409 13.6913 14.2637 13.5722 14.5061 13.524C14.7486 13.4758 14.9999 13.5005 15.2284 13.5952C15.4568 13.6898 15.652 13.85 15.7893 14.0555C15.9267 14.2611 16 14.5028 16 14.75C16 15.0815 15.8683 15.3995 15.6339 15.6339C15.3995 15.8683 15.0815 16 14.75 16ZM15.75 9.71L9.75 15.71C9.65704 15.8037 9.54644 15.8781 9.42458 15.9289C9.30272 15.9797 9.17201 16.0058 9.04 16.0058C8.90799 16.0058 8.77728 15.9797 8.65542 15.9289C8.53356 15.8781 8.42296 15.8037 8.33 15.71C8.23627 15.617 8.16188 15.5064 8.11111 15.3846C8.06034 15.2627 8.0342 15.132 8.0342 15C8.0342 14.868 8.06034 14.7373 8.11111 14.6154C8.16188 14.4936 8.23627 14.383 8.33 14.29L14.33 8.29C14.5183 8.1017 14.7737 7.99591 15.04 7.99591C15.3063 7.99591 15.5617 8.1017 15.75 8.29C15.9383 8.4783 16.0441 8.7337 16.0441 9C16.0441 9.2663 15.9383 9.5217 15.75 9.71Z"
                fill="currentcolor"
              ></path>
            </svg>
            <input
              type="text"
              className="border-b-2 border-black outline-none text-black hover:border-emerald-500 focus:border-emerald-500 pl-8 w-full"
              placeholder="Enter Cupon Code"
              fdprocessedid="jz02qk"
            />
            <button
              className="bg-transparent hover:border-emerald-700 text-emerald-700 font-semibold py-2 px-3 border border-gray-300 rounded-full transition"
              fdprocessedid="zekpm"
            >
              Check
            </button>
          </div>
        </div>

        <div className="breakdown flex flex-col ">
          <div className="free hidden text-sm md:border md:border-gray-300 md:rounded-t-3xl md:rounded-none mt-4 p-4 bg-emerald-400 rounded-lg">
            <svg
              stroke="currentColor"
              fill="none"
              stroke-width="2"
              viewBox="0 0 24 24"
              stroke-linecap="round"
              strokeLinejoin="round"
              className="!text-lg"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <desc></desc>
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M4 5h2"></path>
              <path d="M5 4v2"></path>
              <path d="M11.5 4l-.5 2"></path>
              <path d="M18 5h2"></path>
              <path d="M19 4v2"></path>
              <path d="M15 9l-1 1"></path>
              <path d="M18 13l2 -.5"></path>
              <path d="M18 19h2"></path>
              <path d="M19 18v2"></path>
              <path d="M14 16.518l-6.518 -6.518l-4.39 9.58a1.003 1.003 0 0 0 1.329 1.329l9.579 -4.39z"></path>
            </svg>
            Yay! You get FREE delivery with this order.
          </div>
          <div className="p-4 mt-4 md:rounded-3xl md:border md:border-gray-300">
            <div className="names font-bold">Payment Details</div>
            <div className="break flex flex-col">
              <div className="mrp-total flex justify-between pt-2 md:text-lg">
                <div className="text-gray-500">MRP Total</div>
                <div className="value text-gray-500">₹1250</div>
              </div>
              <hr />
              <div className="pro-disc flex justify-between pt-2 md:text-lg">
                <div className="text-gray-500">Product Discount</div>
                <div className="value text-green-600">- ₹251</div>
              </div>
              <hr />
              <div className="delivery-fee flex justify-between pt-2 md:text-lg">
                <div className="text-gray-500">Delivery Fee</div>
                <div className="value">₹40.00</div>
              </div>
              <hr />
              <div className="total flex justify-between pt-2 md:text-lg">
                <div className="text-gray-500">Total</div>
                <div className="value flex flex-col">
                  <div className="text-end font-bold">₹999</div>
                  <div className="text-green-600">You Saved ₹251</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        

        <Link to="/checkout">
          <div>
            <button
              className="placeorder hover:bg-emerald-700 bg-emerald-500 mt-4 text-white px-4 py-2 font-semibold md:text-lg rounded-3xl"
              fdprocessedid="07abbw"
            >
              Place Order
            </button>
          </div>
        </Link>
      </div>
    </div>
  </div>

  <hr className="mx-16" />
</section>
</div> */}