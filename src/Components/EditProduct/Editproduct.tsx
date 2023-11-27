import { QueryClient, useMutation, useQuery } from "react-query";
import { ErrorMessage } from "@hookform/error-message";
import { Button } from "../ui/button";
import { useForm } from "react-hook-form";
import { IProduct } from "@/interfaces/product";
import { getProduct, updateProduct } from "@/apis/product";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

const EditProduct = () => {
  const { id } = useParams(); // Đảm bảo rằng id được truyền vào đúng dạng

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  const queryClient = new QueryClient();

  const { data, isLoading, isError } = useQuery({
    queryKey: ["PRODUCT", id],
    queryFn: () => getProduct(id as unknown as number),
    enabled: id !== undefined,
  });

  useEffect(() => {
    if (data) {
      setValue("name", data.name);
      setValue("imgUrl", data.imgUrl);
      setValue("price", data.price);
      setValue("description", data.description);
    }
  }, [data, setValue]);

  const mutation = useMutation({
    mutationFn: (data: IProduct) => updateProduct(id as string, data),

    onSuccess: () => {
      queryClient.invalidateQueries(["PRODUCT", id]);
    },
  });

  const onSubmit = (data: IProduct) => {
    toast.success("🦄 Update product success!", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    mutation.mutate(data);
  };

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error...</div>;

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="mx-2">
        <div className="mb-6">
          <label
            htmlFor="name"
            className={`block mb-2 text-sm font-medium ${
              errors.name ? "text-red-700" : "text-gray-700"
            }`}
          >
            Name
          </label>
          <input
            {...register("name", {
              pattern: {
                value: /^(?!\s+$)[\s\S]+$/,
                message: "Vui lòng nhập đúng định dạng.",
              },
              required: " không được để trống tên",
              minLength: {
                value: 6,
                message: "phải dài ít nhất 6 kí tự",
              },
            })}
            type="text"
            id="name"
            className={`border ${
              errors.name
                ? "border-red-500 bg-red-50 text-red-900 placeholder-red-700"
                : "border-blue-500 bg-blue-50 text-blue-900 placeholder-blue-700"
            } block w-full p-2.5 py-4 rounded-lg focus:ring`}
            placeholder="Enter your name"
          />
          <ErrorMessage
            errors={errors}
            name="name"
            render={({ message }) => {
              return message ? <p className="text-red-700">{message}</p> : null;
            }}
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="imgUrl"
            className={`block mb-2 text-sm font-medium ${
              errors.imgUrl ? " text-red-700 " : " text-gray-700 "
            }`}
          >
            Your Image
          </label>
          <input
            {...register("imgUrl", {
              pattern: {
                value: /^(?!\s+$)[\s\S]+$/,
                message: "Vui lòng nhập đúng định dạng.",
              },
              required: " không được để trống ảnh",
              minLength: {
                value: 6,
                message: "imgUrl must be at least 6 characters long",
              },
            })}
            type="text"
            id="imgUrl"
            className={`" border ${
              errors.imgUrl
                ? "border-red-500 bg-redd-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 focus:border-red-500"
                : " border-blue-500 bg-blue-50 text-blue-900 placeholder-blue-700 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500"
            }  block w-full p-2.5 py-4"`}
            placeholder="Enter your imgUrl"
          />
          <ErrorMessage
            errors={errors}
            name="imgUrl"
            render={({ message }) => {
              return message ? <p className="text-red-700">{message}</p> : null;
            }}
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="price"
            className={`block mb-2 text-sm font-medium ${
              errors.price ? " text-red-700 " : " text-gray-700 "
            }`}
          >
            Your price
          </label>
          <input
            {...register("price", {
              pattern: {
                value: /^(?!\s+$)[\s\S]+$/,
                message: "Vui lòng nhập đúng định dạng.",
              },
              required: " không được để trống giá tiền",
              minLength: {
                value: 0,
                message: "phải dài ít nhất 6 kí tự",
              },
            })}
            type="text"
            id="price"
            className={`" border ${
              errors.price
                ? "border-red-500 bg-redd-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 focus:border-red-500"
                : " border-blue-500 bg-blue-50 text-blue-900 placeholder-blue-700 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500"
            }  block w-full p-2.5 py-4"`}
            placeholder="Enter your price"
          />
          <ErrorMessage
            errors={errors}
            name="price"
            render={({ message }) => {
              return message ? <p className="text-red-700">{message}</p> : null;
            }}
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="description"
            className={`block mb-2 text-sm font-medium ${
              errors.description ? " text-red-700 " : " text-gray-700 "
            }`}
          >
            Your description
          </label>
          <input
            {...register("description", {
              pattern: {
                value: /^(?!\s+$)[\s\S]+$/,
                message: "Vui lòng nhập đúng định dạng.",
              },
              required: " không được để trống mô tả",
              minLength: {
                value: 6,
                message: "mô tả phải dài ít nhất 6 kí tự",
              },
            })}
            type="text"
            id="description"
            className={`" border ${
              errors.description
                ? "border-red-500 bg-redd-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 focus:border-red-500"
                : " border-blue-500 bg-blue-50 text-blue-900 placeholder-blue-700 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500"
            }  block w-full p-2.5 py-4"`}
            placeholder="Enter your description"
          />
          <ErrorMessage
            errors={errors}
            name="description"
            render={({ message }) => {
              return message ? <p className="text-red-700">{message}</p> : null;
            }}
          />
        </div>
        <Button className="mt-4" type="submit">
          Update
        </Button>
      </form>
    </>
  );
};

export default EditProduct;
