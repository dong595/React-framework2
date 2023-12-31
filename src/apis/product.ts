import { IProduct } from "@/interfaces/product";
import instance from "./instance";

export const getProducts = async (
  page: number | string,
  limit: number | string
) => {
  try {
    const response = await instance.get("/products", {
      params: { _page: page, _limit: limit },
    });
    const totalCount = response.headers["x-total-count"];
    return { data: response.data, totalCount };
  } catch (error) {
    console.log(`['FETCH_PRODUCTS_ERROR']`, error);
  }
};
export const getProduct = async (id: number) => {
  try {
    const response = await instance.get(`/products/${id}`);
    return response.data;
  } catch (error) {
    console.log(`['FETCH_PRODUCT_ERROR']`, error);
  }
};
export const updateProduct = async (id: number | string, product: IProduct) => {
  console.log(product);
  try {
    const response = await instance.patch(`/products/${id}`, product);
    return response.data;
  } catch (error) {
    console.log(`['UPDATE_PRODUCT_ERROR']`, error);
  }
};
export const addProduct = async (product: IProduct) => {
  try {
    const response = await instance.post("/products/", product);
    return response.data;
  } catch (error) {
    console.log(`['ADD_PRODUCT_ERROR']`, error);
  }
};
export const deleteProduct = async (product: IProduct) => {
  try {
    const response = await instance.delete(`/products/${product.id}`);
    return response.data;
  } catch (error) {
    console.log(`['DELETE_PRODUCT_ERROR']`, error);
  }
};
