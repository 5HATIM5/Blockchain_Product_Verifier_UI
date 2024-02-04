import { MineBlockchain, StoreProduct } from "@/lib/data";
import React, { useState, useRef, useEffect } from "react";
import Popover from "./Popover";

type Props = {};

export const ProductForm = (props: Props) => {
  const [newBlock, setNewBlock] = useState();
  const [product, setProduct] = useState();
  const [productImage, setProductImage] = useState();

  const [popup, setPopup] = useState(false);

  const ref = useRef<HTMLFormElement>(null);

  const validateFileType = (event: { target: any }) => {
    const fileInput = event.target;
    const allowedExtensions = ["png", "gif", "jpeg", "jpg"];

    if (fileInput.files.length > 0) {
      const fileName = fileInput.files[0].name;
      const fileExtension = fileName.split(".").pop().toLowerCase();

      if (!allowedExtensions.includes(fileExtension)) {
        alert("Invalid file type. Allowed types: png, gif, jpeg, jpg");
        fileInput.value = ""; // Clear the input to prevent submission
      }

      setProductImage(event.target.files[0]);
      console.log(event.target.files[0]);
    }
  };

  async function AddProductData(productData: FormData) {
    const ProductFormData = {
      name: productData.get("name"),
      // ingredients: formData.get("ingredients"),
      production_location: productData.get("location"),
      price: productData.get("price"),
      production_date: productData.get("production_date"),
      block_hash: "",
    };

  
    setNewBlock(await MineBlockchain(ProductFormData.name as string,ProductFormData));
    // setProduct(await StoreProduct(ProductFormData));

    if (newBlock) {
      console.log(newBlock)
      ProductFormData.block_hash = newBlock["block_hash"];
      setProduct(await StoreProduct(ProductFormData));
    }
    setPopup(true);
  }

  // async function AddProductImage(product_id: number, ProductImage: File) {
  //   console.log(product_id, ProductImage);
  // }

  useEffect(() => {
    setPopup(false);
  }, []);

  return (
    <main className="flex min-h-screen flex-col justify-start items-center p-7">
      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] pb-10 z-[-1]">
        <h1 className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert text-3xl uppercase">
          Add Product To Blockchain
        </h1>
      </div>

      <div className="flex justify-center items-center">
        <form
          ref={ref}
          action={async (formData) => {
            await AddProductData(formData);
            ref.current?.reset();
          }}
        >
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="text"
              name="name"
              id="name"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=""
              required
            />
            <label
              htmlFor="name"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Product Name
            </label>
          </div>
          {/* <div className="relative z-0 w-full mb-6 group">
            <input
              type="text"
              name="ingredients"
              id="ingredients"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=""
              required
            />
            <label
              htmlFor="ingredients"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Ingredients
            </label>
          </div> */}
          <div className="relative z-0 w-full mb-6 group">
            <input
              name="location"
              id="location"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="location"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Production Location
            </label>
          </div>
          <div className="grid md:grid-cols-2 md:gap-6">
            <div className="relative z-0 w-full mb-6 group">
              <input
                type="number"
                name="price"
                id="price"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="price"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Price
              </label>
            </div>
            <div className="relative z-0 w-full mb-6 group">
              <input
                type="date"
                name="production_date"
                id="production_location"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="production_date"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Production Date
              </label>
            </div>
          </div>

          <label className="block mb-6">
            <label
              className="block mb-2 text-sm text-gray-500 dark:text-gray-400"
              htmlFor="file"
            >
              Upload Image (PNG, JPEG allowed only)
            </label>
            <input
              type="file"
              name="product_image"
              id="product_image"
              accept="image/png, image/gif, image/jpeg"
              onChange={validateFileType}
              className="block w-full text-sm text-slate-500 file:mr-4 file:py-2.5 file:px-5 file:rounded file:border-0 file:text-sm file:font-semiboldfile:bg-violet-50 file:text-violet-700 hover:file:bg-violet-100"
            />
          </label>
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Submit
          </button>
        </form>
      </div>
      {popup && <Popover />}
    </main>
  );
};
