"use client";

import { ValidateBlockchain } from "@/lib/data";
import React, {  useState } from "react";
import Popover from "../Blockchain/Popover";

type Props = {
};

const Card = (props: Props) => {
  const [valid, setvalid] = useState(false);

  async function checker() {
    const blockchain = await ValidateBlockchain();
    console.log(blockchain);
    // setvalid(blockchain);
  }

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white ml-4">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">Validate Blockchain</div>
        <p className="text-gray-700 text-base">
          Check to see if the Blockchain is valid
        </p>
      </div>

      <div className="px-6 pb-3">
        <button
          onClick={checker}
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Check
        </button>
      </div>
      {valid && <Popover validation={valid} />}
    </div>
  );
};

export default Card;
