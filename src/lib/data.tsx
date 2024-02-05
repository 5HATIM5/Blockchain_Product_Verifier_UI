import React from "react";

type Props = {};

export const GetBlockchain = async () => {
  try {
    const res = await fetch(`https://mortiz-blockchain-api.vercel.app/blockchain/`, {
      method: "GET",
    });
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

export const ValidateBlockchain = async () => {
  // try {
  //   const res = await fetch(`http://127.0.0.1:8000/validate/`, {
  //     method: "GET",
  //   });
  //   const data = await res.json();
  //   return data;
  // } catch (error) {
  //   console.error("Error fetching data:", error);
  // }
};

export const GetLastBlock = async () => {
  // try {
  //   const res = await fetch(`http://127.0.0.1:8000/blockchain/last/`, {
  //     method: "GET",
  //   });
  //   const data = await res.json();
  //   return data;
  // } catch (error) {
  //   console.error("Error fetching data:", error);
  // }
};

export const MineBlockchain = async (productName: string,ProductFormData:object) => {
  // try {
  //   const res = await fetch(
  //     `http://127.0.0.1:8000/mine_block/?data=${productName}`,
  //     {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(ProductFormData),
  //     }
  //   );
  //   const data = await res.json();
  //   return data;
  // } catch (error) {
  //   console.error("Error fetching data:", error);
  // }
};

export const GetProducts = async () => {
  try {
    const res = await fetch(`https://mortiz-blockchain-api.vercel.app/products/`, {
      method: "GET",
    });
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

export const GetProductsById = async (product_id: number) => {
  // try {
  //   const res = await fetch(`http://127.0.0.1:8000/products/${product_id}`, {
  //     method: "GET",
  //   });
  //   const data = await res.json();
  //   return data;
  // } catch (error) {
  //   console.error("Error fetching data:", error);
  // }
};

export const StoreProduct = async (productData: object) => {
  // try {
  //   const res = await fetch(`http://127.0.0.1:8000/store/product/`, {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(productData),
  //   });
  //   const data = await res.json();
  //   return data;
  // } catch (error) {
  //   console.error("Error fetching data:", error);
  // }
};

export const StoreProductImage = async (
  product_id: number,
  product_image: File
) => {
  // try {
  //   const res = await fetch(
  //     `http://127.0.0.1:8000/store/product/image?product_id=${product_id}`,
  //     {
  //       method: "POST",
  //       body: JSON.stringify(product_image),
  //     }
  //   );
  //   const data = await res.json();
  //   return data;
  // } catch (error) {
  //   console.error("Error fetching data:", error);
  // }
};

export const UpdateProduct = async (product_id:string, productData: object) => {
  // try {
  //   const res = await fetch(`http://127.0.0.1:8000/product/${product_id}`, {
  //     method: "PUT",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(productData),
  //   });
  //   const data = await res.json();
  //   console.log(data);
  //   return data;
  // } catch (error) {
  //   console.error("Error fetching data:", error);
  // }
};