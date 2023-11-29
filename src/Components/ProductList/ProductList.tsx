import { useMutation, useQuery, useQueryClient } from "react-query";
import { Link } from "react-router-dom";
import { IProduct } from "../../interfaces/product";
import { deleteProduct, getProducts } from "../../apis/product";
import { Button } from "../ui/button";
import { toast } from "react-toastify";
import { FaRegPenToSquare } from "react-icons/fa6";
import { FaRegTrashAlt } from "react-icons/fa";
import { MdOutlineAddToPhotos } from "react-icons/md";

const ProductList = () => {
  const queryClient = useQueryClient();
  const query = useQuery({
    queryKey: ["PRODUCTS"],
    queryFn: () => getProducts(),

    onSuccess: () => {
      console.log("success");
    },
    onError: (error) => {
      console.log(error);
    },
  });

  const mutation = useMutation({
    mutationFn: (product: IProduct) => deleteProduct(product),
    onSuccess: () => {
      queryClient.invalidateQueries(["PRODUCT"]);
    },
  });
  const hanldeRemove = (product: IProduct) => {
    const confirm = window.confirm(
      `Are you sure you want to remove this product`
    );
    if (!confirm) return;
    toast.success("Product removed successfully");
    mutation.mutate(product);
  };
  if (query.isLoading) <div>loading...</div>;
  if (query.isError) <div>erorr...</div>;

  return (
    <>
      <Link to={`/admin/products/add`}>
        <Button className="hover:bg-blue-500">
          <MdOutlineAddToPhotos />{" "}
        </Button>
      </Link>
      <table className="min-w-full  text-sm font-light text-center">
        <thead className="border-b font-medium dark:border-neutral-500">
          <tr>
            <th scope="col" className="px-6 py-4 text-center uppercase">
              {" "}
              <input type="checkbox" name="" id="" />
            </th>
            <th scope="col" className="px-6 py-4 text-center uppercase">
              name
            </th>
            <th scope="col" className="px-6 py-4 text-center uppercase">
              image
            </th>
            <th scope="col" className="px-6 py-4 text-center uppercase">
              price
            </th>
            <th scope="col" className="px-6 py-4 text-center uppercase">
              description
            </th>
            <th scope="col" className="px-6 py-4 text-center uppercase">
              action
            </th>
          </tr>
        </thead>
        <tbody>
          {query.data?.map((product: IProduct, index: number) => {
            return (
              <tr className="border-b dark:border-neutral-500" key={product.id}>
                <td className="whitespace-nowrap px-6 py-4 font-medium">
                  {index + 1}
                </td>
                <td className="whitespace-nowrap px-6 py-4">{product.name}</td>
                <td className=" whitespace-nowrap px-6 py-4 text-center ">
                  <img
                    className="w-[250px] mx-auto h-[250px] "
                    src={product.imgUrl}
                    alt={product.name}
                  />
                </td>
                <td className=" whitespace-nowrap px-6 py-4 ">
                  <p className="truncate w-28 mx-auto ">{product.price}</p>
                </td>
                <td className="whitespace-nowrap px-6 py-4">
                  <p className="truncate w-72 mx-auto">{product.description}</p>
                </td>
                <td className="whitespace-nowrap px-6 py-4 ">
                  <div className="flex items-center justify-center gap-2">
                    <Link to={`/admin/products/${product.id}/edit`}>
                      <Button className="hover:bg-green-500">
                        <FaRegPenToSquare />
                      </Button>
                    </Link>
                    <Button
                      className="hover:bg-red-500"
                      onClick={() => hanldeRemove(product)}
                    >
                      <FaRegTrashAlt />{" "}
                    </Button>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default ProductList;
