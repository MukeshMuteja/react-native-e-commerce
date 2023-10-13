import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

/* The code is creating an asynchronous thunk function called `fetchProduct`. Thunk functions are used
in Redux to handle asynchronous actions. */
export const fetchProduct = createAsyncThunk(
    'products/fetch',
    async () => {
      const res = await axios.get('https://my-json-server.typicode.com/benirvingplt/products/products');
      const data = await res.data
      return data
    }
  )