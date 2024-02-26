"use client";

import React, { useEffect, useState } from "react";
import {
  JsonView,
  allExpanded,
  darkStyles,
  defaultStyles,
} from "react-json-view-lite";
import { GetBlockchain } from "@/lib/data";
import 'react-json-view-lite/dist/index.css';

type Props = {};

const BlockchainCard = (props: Props) => {
  const [blockchain, setBlockchain] = useState();
  const [loading, setLoading] = useState(false);

  async function getBlockchain() {
    try {
      setLoading(true);
      setBlockchain(await GetBlockchain());
      setLoading(false);
    } catch (error) {
      console.error("Error Deleting product:", error);
    }
  }
  useEffect(() => {
    getBlockchain();
  }, []);

  return (
    <div className="max-w-full max-h-full  rounded overflow-hidden shadow-lg bg-[#EEEEEE] ml-4">
      <div
        className=" px-4 py-4 flex justify-center items-center"
        style={{ maxHeight: "300px", overflowY: "auto", overflowX: "hidden"  }}
      >
        {blockchain ? (
          <JsonView
            data={blockchain}
            shouldExpandNode={allExpanded}
            style={defaultStyles}
          />
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default BlockchainCard;
