import React from "react";
import { IProduct } from "../interfaces/product";

export const ProductContext = React.createContext<IProduct[]>([]);
