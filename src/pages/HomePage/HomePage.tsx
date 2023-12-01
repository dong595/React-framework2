import Banner from "@/Components/Banner";
import { getProducts } from "@/apis/product";
import { IProduct } from "@/interfaces/product";
import { useQueryString } from "@/utils/utils";
import classNames from "classnames";
import { FaCartPlus, FaHeart } from "react-icons/fa6";
import { GrCaretNext, GrCaretPrevious } from "react-icons/gr";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
const LIMIT = 4;

const HomePage = () => {
  const queryString: { page?: string } = useQueryString();
  const page = Number(queryString.page) || 1;
  const query = useQuery({
    queryKey: ["PRODUCTS", page],
    queryFn: () => getProducts(page, LIMIT),

    onSuccess: () => {
      console.log("success");
    },
    onError: (error) => {
      console.log(error);
    },
  });
  const totalProductsCount = Number(query.data?.totalCount || 0);
  const totalPage = Math.ceil(totalProductsCount / LIMIT);
  return (
    <div className=" flex flex-col">
      <Banner />{" "}
      <div className="bg-white ">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="mb-2 mt-0 text-4xl font-medium leading-tight text-primary">
            Customers also purchased
          </h2>
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {query.data?.data.map((product: IProduct) => {
              return (
                <Link
                  to={`http://localhost:5173/products/${product.id}`}
                  key={product.id}
                >
                  <section className="mx-auto w-fit p-12">
                    {/* Card */}
                    <div className="w-72 h-fit group">
                      <div className="relative overflow-hidden">
                        <img
                          className="h-96 w-full rounded object-cover"
                          src={product.imgUrl}
                          alt=""
                        />
                        <div className="absolute h-full w-full bg-white/20 text-2xl flex items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                          <button className="bg-black/50 text-white py-2 px-5 hover:text-red-500">
                            <FaCartPlus />
                          </button>
                          <button className="bg-black/50 text-white py-2 px-5 hover:text-red-500">
                            <FaHeart />
                          </button>
                        </div>
                      </div>
                      <h2 className="mt-3 text-xl capitalize">
                        {product.name}
                      </h2>
                      <del className="text-red-700 text-lg">
                        $ {product.price}
                      </del>
                      <p className="text-xl mt-2 ml-1 inline-block">$35</p>
                    </div>
                  </section>
                </Link>
              );
            })}
          </div>
          <div className="flex items-center gap-1 mt-4 mb-4 justify-start">
            {page === 1 ? (
              <span>
                <GrCaretPrevious />
              </span>
            ) : (
              <Link to={`/?page=${page - 1}`}>
                <GrCaretPrevious />
              </Link>
            )}
            {Array(totalPage)
              .fill(0)
              .map((_, index) => {
                const pageNumber = index + 1;
                const isActive = page === pageNumber;
                return (
                  <li key={index} className="list-none">
                    <Link
                      to={`/?page=${pageNumber}`}
                      className={classNames(
                        "border bg-gray-300 hover:bg-gray-500 px-2 py-1 ",
                        {
                          "bg-gray-500 text-white": isActive,
                        }
                      )}
                    >
                      {pageNumber}
                    </Link>
                  </li>
                );
              })}

            {page === totalPage ? (
              <span>
                <GrCaretNext />
              </span>
            ) : (
              <Link to={`/?page=${page + 1}`}>
                <GrCaretNext />
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
