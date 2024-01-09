import React from "react";
import { useSelector } from "react-redux";
import { BsFillCartDashFill } from "react-icons/bs";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const Cart = useSelector((state) => state.Cart);

  return (
    <div>
      <header className="text-gray-600 body-font sticky top-0 z-10 shadow-xl w-full bg-opacity-50 backdrop-filter backdrop-blur-lg bg-[#ffffff2d]">
        <div className="container mx-auto flex flex-wrap p-5 flex-row items-center justify-between md:justify-center">
          <NavLink
            className="flex title-font font-medium items-center text-gray-900"
            to="/"
          >
            {/* <img
              alt="logo"
              loading="lazy"
              decoding="async"
              data-nimg="1"
              classNameName="w-10 h-10 rounded-full"
              srcset=""
              src=""
            /> */}
            <span className="ml-3 text-lg font-semibold md:text-xl">
              Shopping
            </span>
          </NavLink>
          <nav className="md:ml-auto md:mr-auto hidden flex-wrap items-center text-base justify-center mb-3 md:mb-0 md:flex">
            <NavLink
              className="mr-5 hover:text-yellow-500 font-bold"
              to="/tshirts"
            >
              T-Shirts
            </NavLink>
            <NavLink
              className="mr-5 hover:text-yellow-500  font-bold"
              to="/hoodies"
            >
              Hoodies
            </NavLink>
            <NavLink
              className="mr-5 hover:text-yellow-500  font-bold"
              to="/shirts"
            >
              Shirts
            </NavLink>
            <NavLink
              className="mr-5 hover:text-yellow-500  font-bold"
              to="/BottomWears"
            >
              Bottom Wears
            </NavLink>
          </nav>
          <div className="flex items-center">
            <NavLink to="/login">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 16 16"
                className="text-2xl md:text-3xl cursor-pointer"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M16 7.992C16 3.58 12.416 0 8 0S0 3.58 0 7.992c0 2.43 1.104 4.62 2.832 6.09.016.016.032.016.032.032.144.112.288.224.448.336.08.048.144.111.224.175A7.98 7.98 0 0 0 8.016 16a7.98 7.98 0 0 0 4.48-1.375c.08-.048.144-.111.224-.16.144-.111.304-.223.448-.335.016-.016.032-.016.032-.032 1.696-1.487 2.8-3.676 2.8-6.106zm-8 7.001c-1.504 0-2.88-.48-4.016-1.279.016-.128.048-.255.08-.383a4.17 4.17 0 0 1 .416-.991c.176-.304.384-.576.64-.816.24-.24.528-.463.816-.639.304-.176.624-.304.976-.4A4.15 4.15 0 0 1 8 10.342a4.185 4.185 0 0 1 2.928 1.166c.368.368.656.8.864 1.295.112.288.192.592.24.911A7.03 7.03 0 0 1 8 14.993zm-2.448-7.4a2.49 2.49 0 0 1-.208-1.024c0-.351.064-.703.208-1.023.144-.32.336-.607.576-.847.24-.24.528-.431.848-.575.32-.144.672-.208 1.024-.208.368 0 .704.064 1.024.208.32.144.608.336.848.575.24.24.432.528.576.847.144.32.208.672.208 1.023 0 .368-.064.704-.208 1.023a2.84 2.84 0 0 1-.576.848 2.84 2.84 0 0 1-.848.575 2.715 2.715 0 0 1-2.064 0 2.84 2.84 0 0 1-.848-.575 2.526 2.526 0 0 1-.56-.848zm7.424 5.306c0-.032-.016-.048-.016-.08a5.22 5.22 0 0 0-.688-1.406 4.883 4.883 0 0 0-1.088-1.135 5.207 5.207 0 0 0-1.04-.608 2.82 2.82 0 0 0 .464-.383 4.2 4.2 0 0 0 .624-.784 3.624 3.624 0 0 0 .528-1.934 3.71 3.71 0 0 0-.288-1.47 3.799 3.799 0 0 0-.816-1.199 3.845 3.845 0 0 0-1.2-.8 3.72 3.72 0 0 0-1.472-.287 3.72 3.72 0 0 0-1.472.288 3.631 3.631 0 0 0-1.2.815 3.84 3.84 0 0 0-.8 1.199 3.71 3.71 0 0 0-.288 1.47c0 .352.048.688.144 1.007.096.336.224.64.4.927.16.288.384.544.624.784.144.144.304.271.48.383a5.12 5.12 0 0 0-1.04.624c-.416.32-.784.703-1.088 1.119a4.999 4.999 0 0 0-.688 1.406c-.016.032-.016.064-.016.08C1.776 11.636.992 9.91.992 7.992.992 4.14 4.144.991 8 .991s7.008 3.149 7.008 7.001a6.96 6.96 0 0 1-2.032 4.907z"></path>
              </svg>
            </NavLink>

            <div className="flex gap-6">
              <NavLink to="/cart" className="relative ml-4">
                <BsFillCartDashFill fontSize={"1.5rem"} />
                <p
                  className={`bg-green-600 px-[3px] py-[1px] flex justify-center items-center rounded-md text-xs font-bold
                            absolute -top-2 left-4 min-w-[20px] animate-bounce
                            ${Cart.length === 0 && " hidden"} `}
                >
                  <span>{Cart.length}</span>
                </p>
              </NavLink>
            </div>
          </div>
        </div>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center md:hidden">
          <a className="mr-5 hover:text-yellow-900 font-bold" href="/tshirts">
            Tshirts
          </a>
          <a className="mr-5 hover:text-yellow-500  font-bold" href="/hoodies">
            Hoodies
          </a>
          <a className="mr-5 hover:text-yellow-500  font-bold" href="/shirts">
            Sweatshirts
          </a>
          <a
            className="mr-5 hover:text-yellow-500  font-bold"
            href="/BottomWears"
          >
            Bottom Wears
          </a>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
