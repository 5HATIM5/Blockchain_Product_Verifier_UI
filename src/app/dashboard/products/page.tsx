"use client";

import React from "react";
import "../../globals.css";
import { ProductForm } from "@/app/ui/Components/Products/ProductForm";
import ProductList from "@/app/ui/Components/Products/ProductList";
import { Tab } from "@headlessui/react";
import { useState } from "react";
import Sidebar from "@/app/ui/Components/Products/Sidebar";

type Props = {};

const ProductsPage = (props: Props) => {
  let [categories] = useState({
    "All Products": [
      {
        id: 1,
        component: <ProductList />,
      },
    ],
    "Add Products": [
      {
        id: 2,
        component: <ProductForm />,
      },
    ],
  });

  return (
    <div className="min-h-screen">
      <header className="bg-white shadow">
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
          <h1 className="text-2xl font-bold tracking-tight text-gray-800">
            Products Info
          </h1>
        </div>
      </header>

      <main className="flex">
        <Tab.Group>
          <Tab.List className={"mt-4"}>
            <Sidebar />
          </Tab.List>
          <Tab.Panels className="mt-2 w-full">
            {Object.values(categories).map((posts, id) => (
              <Tab.Panel key={id} className={""}>
                <>
                  {posts.map((post, id) => (
                    <span key={id}>{post.component}</span>
                  ))}
                </>
              </Tab.Panel>
            ))}
          </Tab.Panels>
        </Tab.Group>
      </main>

    </div>
  );
};

export default ProductsPage;
