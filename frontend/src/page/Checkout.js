import React from 'react'

const Checkout = () => {
  return (
    <div className="text-black-600 body-font">
    <div className="container px-5 py-8 mx-auto transition-all">
      <h2 className="font-bold text-2xl hidden md:block">Order Review</h2>
      <div className="flex md:justify-between md:flex-row flex-col pt-4">
        <div className="left md:w-2/3">
          <div className="address md:border md:border-gray-300 md:rounded-3xl h-fit">
            <div className="flex flex-col md:p-4">
              <div className="hero mb-3">
                <h3 className="font-bold">Delivery Address</h3>
              </div>
              <hr />
              <div className="addressfield mt-4">
                <div className="mx-auto flex">
                  <div className="px-2 w-1/2">
                    <div className="relative mb-4">
                      <label htmlFor="name" className="leading-7 text-sm">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="w-full bg-white rounded border border-gray-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        value=""
                        fdprocessedid="q7qz1"
                      />
                    </div>
                  </div>
                  <div className="px-2 w-1/2">
                    <div className="relative mb-4">
                      <label htmlFor="email" className="leading-7 text-sm">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="w-full bg-white rounded border border-gray-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        value=""
                        fdprocessedid="zyiiiv"
                      />
                    </div>
                  </div>
                </div>
                <div className="px-2 w-full">
                  <div className="mb-4">
                    <label htmlFor="address" className="leading-7 text-sm">
                      Address
                    </label>
                    <textarea
                      minLength="2"
                      maxLength="400"
                      name="address"
                      id="address"
                      cols="30"
                      rows="2"
                      className="w-full bg-white rounded border border-gray-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    ></textarea>
                  </div>
                </div>
                <div className="mx-auto flex my-2">
                  <div className="px-2 w-1/2">
                    <div className="relative mb-4">
                      <label htmlFor="phone" className="leading-7 text-sm">
                        Phone Number
                      </label>
                      <input
                        minLength="10"
                        maxLength="10"
                        placeholder="Your 10 Digit Phone Number"
                        type="text"
                        id="phone"
                        name="phone"
                        className="w-full bg-white rounded border border-gray-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        value=""
                        fdprocessedid="6bxsd"
                      />
                    </div>
                  </div>
                  <div className="px-2 w-1/2">
                    <div className="relative mb-4">
                      <label htmlFor="pincode" className="leading-7 text-sm">
                        PinCode (India)
                      </label>
                      <input
                        minLength="6"
                        maxLength="8"
                        type="text"
                        id="pincode"
                        name="pincode"
                        className="w-full bg-white rounded border border-gray-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        value=""
                        fdprocessedid="gmhi3"
                      />
                    </div>
                  </div>
                </div>
                <div className="mx-auto flex my-2">
                  <div className="px-2 w-1/2">
                    <div className="relative mb-4">
                      <label htmlFor="city" className="leading-7 text-sm">
                        City
                      </label>
                      <input
                        minLength="1"
                        maxLength="20"
                        type="text"
                        id="city"
                        name="city"
                        className="w-full bg-white rounded border border-gray-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        readOnly=""
                        value=""
                        fdprocessedid="curyna"
                      />
                    </div>
                  </div>
                  <div className="px-2 w-1/2">
                    <div className="relative mb-4">
                      <label htmlFor="state" className="leading-7 text-sm">
                        State
                      </label>
                      <input
                        minLength="1"
                        maxLength="20"
                        type="text"
                        id="state"
                        name="state"
                        className="w-full bg-white rounded border border-gray-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        readOnly=""
                        value=""
                        fdprocessedid="3fhmi"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="cart-items md:border md:border-gray-300 md:rounded-3xl h-fit mt-4">
            <div className="flex flex-col md:p-4">
              <div className="flex justify-between font-bold">
                <h3>Cart Items (1)</h3>
                <h3>₹999</h3>
              </div>
              <div className="items my-5">
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
                          srcSet=""
                          src="https://www.beyoung.in/api/cache/catalog/products/polo_new_update_images_10_1_2022/ice_blue_polo_t-shirt_base_19_10_2023_700x933.jpg"
                          style={{ color: "transparent" }}
                        />
                      </div>
                      <div className="details">
                        <div className="itemName text-gray-600">
                          Levis Men's Fine (M/Green)
                        </div>
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
                        <div className="qty mt-1 text-sm md:text-md text-gray-600">
                          Qty: 1
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="cart-details md:w-1/3 flex flex-col md:ml-5">
          <div className="breakdown flex flex-col ">
            <div className="free hidden text-sm md:border md:border-gray-300 md:rounded-t-3xl md:rounded-none p-4 bg-emerald-400 rounded-lg">
              <svg
                stroke="currentColor"
                fill="none"
                strokeWidth="2"
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="!text-lg"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <desc></desc>
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path
                  d="M4 5h2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M5 4v2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M11.5 4l-.5 2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M18 5h2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M19 4v2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M15 9l-1 1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M18 13l2 -.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M18 19h2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M19 18v2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M14 16.518l-6.518 -6.518l-4.39 9.58a1.003 1.003 0 0 0 1.329 1.329l9.579 -4.39z"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
              Yay! You get FREE delivery with this order.
            </div>
            <div className="p-4 md:rounded-3xl md:border md:border-gray-300">
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
            <button
              className="placeorder hover:bg-emerald-700 bg-emerald-500 mt-4 text-white px-4 py-2 font-semibold md:text-lg rounded-3xl disabled:bg-emerald-300"
              disabled=""
            >
              Make Payment
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Checkout