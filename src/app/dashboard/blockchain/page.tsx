import React from "react";
import "../../globals.css";
import Card from "@/app/ui/Components/Dashboard/Card";
import BlockchainCard from "@/app/ui/Components/Blockchain/BlockchainCard";

type Props = {};

const BlockchainPage = (props: Props) => {
  return (
    <div className="min-h-screen">
      <header className="bg-white shadow">
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
          <h1 className="text-2xl font-bold tracking-tight text-gray-800">
           Blockchain
          </h1>
        </div>
      </header>
      <div className="flex pt-4">
        <Card/>
        {/* <BlockchainCard/> */}
      </div>
    </div>
  );
};

export default BlockchainPage;
