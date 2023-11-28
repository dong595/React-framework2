import { IUser } from "@/interfaces/user";
import instance from "./instance";

export const signup = async (user: IUser) => {
  try {
    const response = await instance.post(`/signup`, user);
    return response.data;
  } catch (error) {
    console.log("SIGNUP_ERROR", error);
  }
};
export const signin = async (user: IUser) => {
  try {
    const response = await instance.post(`/signin`, user);
    return response.data;
  } catch (error) {
    console.log("LOGIN_ERROR", error);
  }
};
