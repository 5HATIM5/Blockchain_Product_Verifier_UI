import React, { useState } from "react";
import SideBarLink from "./SideBarLink";
import { AddProductIcon, AllProductIcon } from "@/app/assets/icons";
import ProductList from "./ProductList";
import { ProductForm } from "./ProductForm";
import { Tab } from "@headlessui/react";
type Props = {};


const Sidebar = (props: Props) => {
  let [categories] = useState({
    "All Products": [
      {
        id: 1,
        component: <ProductList />,
        icon: <AllProductIcon />,
      },
    ],
    "Add Products": [
      {
        id: 2,
        component: <ProductForm />,
        icon: <AddProductIcon />,
      },
    ],
  });

  function classNames(...classNames: string[]) {
    return classNames.filter(Boolean).join(" ");
  }

  return (
    <div className="relative flex flex-col bg-clip-border rounded-md bg-white text-gray-700 h-[calc(100vh-3rem)] w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5">
      <div className="mb-2 p-4">
        <h5 className="block antialiased tracking-normal font-sans text-xl font-semibold leading-snug text-gray-900">
          Product Actions
        </h5>
      </div>
      <nav className="flex flex-col min-w-[240px] p-2 font-sans text-base font-normal text-gray-700">
        {Object.entries(categories).map(([category, items]) => (
          <Tab
            key={category}
            className={({ selected }) =>
              classNames(
                "w-full rounded-lg py-3 text-sm font-medium leading-5 ",
                "outline-none ",
                selected
                  ? "bg-white shadow "
                  : "hover:text-white hover:bg-gray-400"
              )
            }
          >
            <SideBarLink tabName={category} icon={items[0].icon} />
          </Tab>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
