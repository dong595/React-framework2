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
      <table className="w-full border text-center mt-2">
        <thead>
          <tr>
            <th className=" border px-4 py-2 ">
              {" "}
              <input type="checkbox" name="" id="" />
            </th>
            <th className=" border px-4 py-2 uppercase font-medium ">name</th>
            <th className=" border px-4 py-2 uppercase font-medium ">image</th>
            <th className=" border px-4 py-2 uppercase font-medium ">price</th>
            <th className=" border px-4 py-2 uppercase font-medium ">
              description
            </th>
            <th className=" border px-4 py-2 uppercase font-medium ">action</th>
          </tr>
        </thead>
        <tbody>
          {query.data?.map((product: IProduct, index: number) => {
            return (
              <tr className="border" key={product.id}>
                <td className=" border px-6 py-2 ">{index + 1}</td>
                <td className=" border px-6 py-2 ">{product.name}</td>
                <td className=" border px-6 py-2 text-center ">
                  <img
                    className="w-[250px] mx-auto h-[250px] "
                    src={product.imgUrl}
                    alt={product.name}
                  />
                </td>
                <td className=" border px-6 py-2 ">{product.price}</td>
                <td className=" border px-6 py-2 ">
                  <p className="truncate w-72">{product.description}</p>
                </td>
                <td className="flex items-center justify-center gap-2 h-96">
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
