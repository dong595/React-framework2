import Banner from "@/Components/Banner";
import { getProducts } from "@/apis/product";
import { IProduct } from "@/interfaces/product";
import { useQueryString } from "@/utils/utils";
import classNames from "classnames";
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
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            Customers also purchased
          </h2>
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {query.data?.data.map((product: IProduct) => {
              return (
                <Link
                  to={`http://localhost:5173/products/${product.id}`}
                  key={product.id}
                >
                  <div className="group relative">
                    <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                      <img
                        src={product.imgUrl}
                        alt="Front of men's Basic Tee in black."
                        className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                      />
                    </div>
                    <div className="mt-4 flex justify-between">
                      <div>
                        <h3 className="text-sm text-gray-700">
                          <p>
                            <span
                              aria-hidden="true"
                              className="absolute inset-0"
                            />
                            {product.name}
                          </p>
                        </h3>
                        <p className="mt-1 text-sm text-gray-500">Black</p>
                      </div>
                      <p className="text-sm font-medium text-gray-900">
                        $ {product.price}
                      </p>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
          <div className="flex items-center gap-2 mt-4 mb-4">
            {page === 1 ? (
              <span>
                <GrCaretPrevious />
              </span>
            ) : (
              <Link to={`http://localhost:5173/?page=${page - 1}`}>
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
                      to={`http://localhost:5173/?page=${pageNumber}`}
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
              <Link to={`http://localhost:5173/?page=${page + 1}`}>
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
