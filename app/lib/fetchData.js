// 'use client'
// import { useSelector } from "react-redux";
// import { selectCartItems } from "@/app/lib/store/features/cartSlice/cartSlice";

// const useLastProduct = () => {
//   const items = useSelector(selectCartItems);
//   return items.length > 0 ? items[items.length - 1] : null;
// };

// export default useLastProduct;
// app/lib/fetchData.js
import { client } from '../lib/sanity';

export async function getData() {
  const query = `
    *[_type == 'ecommerceStore'] | order(_createdAt asc) {
      name,
      description,
      price,
      image
    }
  `;
  const data = await client.fetch(query);
  return data;
}