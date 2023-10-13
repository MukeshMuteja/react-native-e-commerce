import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { PRODUCT_API } from "../../utility/constant/API";

/* The code is creating an asynchronous thunk function called `fetchProduct`. Thunk functions are used
in Redux to handle asynchronous actions. */
export const fetchProduct = createAsyncThunk(
    'products/fetch',
    async () => {
      const res = await axios.get(PRODUCT_API);
      const data = await res.data
      return data
    }
  )