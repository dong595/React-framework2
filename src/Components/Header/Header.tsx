import { Link } from "react-router-dom";
import { BsCart3 } from "react-icons/bs";
import { FaRegUser } from "react-icons/fa";
import { GoPlus } from "react-icons/go";
import { LuMinus } from "react-icons/lu";
import { IProduct } from "@/interfaces/product";
import { IoSearchOutline } from "react-icons/io5";
import { FaBars } from "react-icons/fa6";
import "./header.css";
const Header = () => {
  const storedUserString = localStorage.getItem("user");
  const storedUser =
    storedUserString !== null ? JSON.parse(storedUserString) : null;
  const storedProductString = localStorage.getItem("product");
  const storedProduct =
    storedProductString !== null ? JSON.parse(storedProductString) : null;

  return (
    <>
      <nav className="bg-white border-gray-200  dark:bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap h-[121px] my-auto items-center justify-between mx-auto p-4">
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto "
            id="navbar-search"
          >
            <div className="relative mt-3 md:hidden">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <IoSearchOutline className="w-4 h-4 text-gray-500 dark:text-gray-400" />
              </div>
              <input
                type="text"
                id="search-navbar"
                className="block p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
                placeholder="Search..."
              />
            </div>
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <Link
                  to="/"
                  className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Services
                </Link>
              </li>
            </ul>
          </div>
          <div className="md:hidden">
            <button
              type="button"
              data-collapse-toggle="navbar-search"
              aria-controls="navbar-search"
              aria-expanded="false"
              className="md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 me-1"
            >
              <IoSearchOutline className="w-5 h-5 text-gray-500 dark:text-gray-400" />

              <span className="sr-only">Search</span>
            </button>
            <button
              data-collapse-toggle="navbar-search"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-search"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <FaBars className="w-5 h-5" />
            </button>
          </div>
          <Link
            to="/"
            className=" md:flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src="https://auteur.g5plus.net/main/wp-content/uploads/2018/11/logo-dark.png"
              className="h-8"
              alt="Flowbite Logo"
            />
          </Link>
          <div className="flex items-center gap-4 md:w-[300px]">
            <div className="relative hidden md:block">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <IoSearchOutline className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                <span className="sr-only">Search icon</span>
              </div>
              <input
                type="text"
                id="search-navbar"
                className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
                placeholder="Search..."
              />
            </div>

            <div className="relative w-9 h-11 my-auto flex items-center group rounded">
              <Link to="/cart" className="relative">
                <BsCart3 className="text-[1.5rem] transition duration-300 ease-in-out transform hover:scale-110" />
                <span className="text-white bg-orange-400 rounded-full w-6 h-6 text-center absolute -right-5 -top-3 transition duration-300 ease-in-out">
                  {storedProduct ? storedProduct.length : "0"}
                </span>
              </Link>
              <div className="hidden w-96  z-10 bg-slate-50 md:group-hover:block  absolute left-0 top-11 transition duration-300 ease-in-out transform translate-y-full group-hover:translate-y-0">
                {storedProduct ? (
                  <div className="container mx-auto mt-2">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                      <h1 className="text-xl font-bold my-1">Shopping Cart</h1>
                      <button className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-1 px-2 text-sm rounded">
                        Checkout
                      </button>
                    </div>
                    <div className="overflow-auto scr max-h-72 mt-4">
                      {storedProduct?.map((product: IProduct) => (
                        <Link to={`/products/${product.id}`} key={product.id}>
                          <div className="mt-1">
                            <div className="flex border-b border-gray-400 py-4">
                              <div className="flex-shrink-0">
                                <img
                                  src={product.imgUrl}
                                  alt="Product image"
                                  className="w-20 h-20 object-cover"
                                />
                              </div>
                              <div className="mt-4 md:mt-0">
                                <h2 className="text-lg font-bold w-full">
                                  {product.name}
                                </h2>
                                <div className="mt-4 flex items-center justify-between w-full">
                                  <div className="flex items-center">
                                    <span className="mr-2 text-gray-600">
                                      Quantity:
                                    </span>
                                    <button>
                                      <LuMinus />
                                    </button>
                                    <span className="mx-2 text-gray-600">
                                      1
                                    </span>
                                    <button>
                                      <GoPlus />
                                    </button>
                                  </div>
                                  <span className="ml-auto font-bold">
                                    $ {product.price}
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                    <div className="flex justify-end items-center mt-8">
                      <span className="text-gray-600 mr-4">Subtotal:</span>
                      <span className="text-xl font-bold">$35.00</span>
                    </div>
                  </div>
                ) : (
                  <h3 className="flex self-center justify-center">
                    No products in the cart.
                    <p></p>
                  </h3>
                )}
              </div>
            </div>
            <Link to="/user" className="hidden md:block truncate w-28">
              {storedUser ? (
                `Hello ${storedUser.user.email}`
              ) : (
                <FaRegUser className="text-[1.5rem] " />
              )}
            </Link>
            <Link to="/user" className="block md:hidden ">
              <FaRegUser className="text-[1.5rem] " />
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
