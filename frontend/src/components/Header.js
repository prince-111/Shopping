import { NavLink } from "react-router-dom";
import Slider from "react-slick";
import BestSeller from "./BestSeller";

const Header = () => {
  return (
    <div>
      <div>
        {/* <main className="bg-white relative bg-cover bg-[url('https://i.postimg.cc/t403yfn9/home2.jpg')] bg-center backdrop-filter backdrop-blur-lg">
        <div className="container mx-auto px-4 py-24 flex flex-col md:flex-row items-center bg-[#ffffffba] md:bg-transparent backdrop-blur-sm md:backdrop-blur-none">
          <div className="flex flex-col w-full md:w-1/2 justify-center items-center md:items-start text-center md:text-left">
            <h1 className="my-4 text-2xl md:text-5xl md:font-bold leading-tight font-black">
              Welcome to our Online Store
            </h1>
            <p className="leading-normal text-lg md:text-xl mb-8">
              Get the best deals on all your favorite products
            </p>
            <button
              href="#catery"
              className="bg-transparent hover:bg-emerald-500 text-emerald-500 font-semibold hover:text-white py-2 px-3 md:px-6 md:py-3 border border-emerald-500 hover:border-transparent rounded hover:rounded-full transition-all"
            >
              Shop Now
            </button>
          </div>
        </div>
      </main> */}

        <div>
          <img
            src="https://www.beyoung.in/api/catalog/homepage-5-dec/new-desktop/shirts-section-desktop-view.jpg"
            alt=""
          />
        </div>
      </div>

      {/* BIG SAVING ZONE */}
      <div>
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-14 mx-auto">
            <div className="flex flex-col w-full mb-2">
              <h1 className="text-2xl font-medium title-font mb-4 text-gray-900 border-l-8 border-yellow-300 font-serif font-semibold">
                {" "}
                BIG SAVING ZONE
              </h1>
            </div>
            <div className="flex flex-wrap -m-4">
              <div className="p-4 lg:w-1/4 md:w-1/2">
                <div className="h-full flex flex-col items-center text-center">
                  <NavLink to="/tshirts">
                    <img
                      alt="team"
                      className="flex-shrink-0 rounded-lg w-full object-cover object-center mb-4"
                      src="https://www.beyoung.in/api/catalog/homepage-5-dec/big-saving/7.jpg"
                    />
                  </NavLink>
                </div>
              </div>

              <div className="p-4 lg:w-1/4 md:w-1/2">
                <div className="h-full flex flex-col items-center text-center">
                  <NavLink to="/tshirts">
                    <img
                      alt="team"
                      className="flex-shrink-0 rounded-lg w-full object-cover object-center mb-4"
                      src="https://www.beyoung.in/api/catalog/homepage-5-dec/new-desktop/big-saving-zone.jpg"
                    />
                  </NavLink>
                </div>
              </div>

              <div className="p-4 lg:w-1/4 md:w-1/2">
                <div className="h-full flex flex-col items-center text-center">
                  <NavLink to="/tshirts">
                    <img
                      alt="team"
                      className="flex-shrink-0 rounded-lg w-full object-cover object-center mb-4"
                      src="https://www.beyoung.in/api/catalog/homepage-5-dec/big-saving/1.jpg"
                    />
                  </NavLink>
                </div>
              </div>

              <div className="p-4 lg:w-1/4 md:w-1/2">
                <div className="h-full flex flex-col items-center text-center">
                  <NavLink to="/tshirts">
                    <img
                      alt="team"
                      className="flex-shrink-0 rounded-lg w-full object-cover object-center mb-4"
                      src="https://www.beyoung.in/api/catalog/homepage-5-dec/big-saving/3.jpg"
                    />
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <BestSeller />

      {/* SHOP THE LOOK */}
      <div>
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-0 mx-auto">
            <div className="flex flex-col w-full mb-2">
              <h1 className="text-2xl font-medium title-font mb-4 text-gray-900 border-l-8 border-yellow-300 font-serif font-semibold">
                {" "}
                SHOP THE LOOK
              </h1>
            </div>
            <div className="flex flex-wrap -m-4">
              <div className="p-4 lg:w-1/4 md:w-1/2">
                <div className="h-full flex flex-col items-center text-center">
                  <img
                    alt="team"
                    className="flex-shrink-0 rounded-lg w-full object-cover object-center mb-4"
                    src="https://www.beyoung.in/api/catalog/homepage-3-10/shop-the-look/1.jpg"
                  />
                </div>
              </div>

              <div className="p-4 lg:w-1/4 md:w-1/2">
                <div className="h-full flex flex-col items-center text-center">
                  <img
                    alt="team"
                    className="flex-shrink-0 rounded-lg w-full object-cover object-center mb-4"
                    src="https://www.beyoung.in/api/catalog/homepage-3-10/shop-the-look/2.jpg"
                  />
                </div>
              </div>

              <div className="p-4 lg:w-1/4 md:w-1/2">
                <div className="h-full flex flex-col items-center text-center">
                  <img
                    alt="team"
                    className="flex-shrink-0 rounded-lg w-full object-cover object-center mb-4"
                    src="https://www.beyoung.in/api/catalog/homepage-3-10/bbimages/new/3.jpg"
                  />
                </div>
              </div>

              <div className="p-4 lg:w-1/4 md:w-1/2">
                <div className="h-full flex flex-col items-center text-center">
                  <img
                    alt="team"
                    className="flex-shrink-0 rounded-lg w-full object-cover object-center mb-4"
                    src="https://www.beyoung.in/api/catalog/homepage-3-10/shop-the-look/4.jpg"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div classNameName="mb-7">
        <img
          src="https://www.beyoung.in/api/catalog/homepage-3-10/bbimages/new/Bhuvan-strip-banner-desktop.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default Header;
