import { getProduct } from "@/apis/product";
import { FaCartPlus, FaHeart, FaInstagram } from "react-icons/fa6";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { CiFacebook, CiStar } from "react-icons/ci";
import { IoIosChatbubbles } from "react-icons/io";
import { IProduct } from "@/interfaces/product";
export default function Details() {
  const { id } = useParams(); // Đảm bảo rằng id được truyền vào đúng dạng
  const { data, isLoading, isError } = useQuery({
    queryKey: ["PRODUCT", id],
    queryFn: () => getProduct(id as unknown as number),
    enabled: id !== undefined,
  });
  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error...</div>;
  const handleAddToCart = (product: IProduct) => {
    let products = [];
    const existingData = localStorage.getItem("product");
    if (existingData) {
      products = JSON.parse(existingData);
    }
    products.push(product);
    localStorage.setItem("product", JSON.stringify(products));
  };
  return (
    <section className="text-gray-700 body-font overflow-hidden bg-white">
      <div className="container px-5 pt-2 pb-4 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <img
            alt="ecommerce"
            className="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200"
            src={data.imgUrl}
          />
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h2 className="text-sm title-font text-gray-500 tracking-widest">
              BRAND NAME
            </h2>
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
              {data.name}
            </h1>
            <div className="flex mb-4">
              <span className="flex items-center">
                <CiStar className="text-yellow-500" />
                <CiStar className="text-yellow-500" />
                <CiStar className="text-yellow-500" />
                <CiStar className="text-yellow-500" />
                <CiStar />
                <span className="text-gray-600 ml-3">4 Reviews</span>
              </span>
              <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200">
                <a className="text-gray-500">
                  <CiFacebook />
                </a>
                <a className="ml-2 text-gray-500">
                  <FaInstagram />
                </a>
                <a className="ml-2 text-gray-500">
                  <IoIosChatbubbles />
                </a>
              </span>
            </div>
            <p className="leading-relaxed">{data.description}</p>
            <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5">
              <div className="flex">
                <span className="mr-3">Color</span>
                <button className="border-2 border-gray-300 rounded-full w-6 h-6 focus:outline-none" />
                <button className="border-2 border-gray-300 ml-1 bg-gray-700 rounded-full w-6 h-6 focus:outline-none" />
                <button className="border-2 border-gray-300 ml-1 bg-red-500 rounded-full w-6 h-6 focus:outline-none" />
              </div>
              <div className="flex ml-6 items-center">
                <span className="mr-3">Size</span>
                <div className="relative">
                  <select className="rounded border appearance-none border-gray-400 py-2 focus:outline-none focus:border-red-500 text-base pl-3 pr-10">
                    <option>SM</option>
                    <option>M</option>
                    <option>L</option>
                    <option>XL</option>
                  </select>
                  <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      className="w-4 h-4"
                      viewBox="0 0 24 24"
                    >
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
            <div className="flex">
              <span className="title-font font-medium text-2xl text-gray-900">
                $ {data.price}
              </span>
              <button
                onClick={() => handleAddToCart(data)}
                type="button"
                className="flex items-center ml-auto text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded"
              >
                <FaCartPlus className="flex text-xl items-center" />
              </button>
              <button className="rounded-full hover:text-pink-500 hover:bg-pink-300 w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                <FaHeart className="flex text-xl items-center" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
