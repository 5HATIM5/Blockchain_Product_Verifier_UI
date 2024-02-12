import React, { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { useQRCode } from "next-qrcode";

type Props = {
  productName: string;
  onClose: () => void;
};

const QrPopUp = (props: Props) => {
  const [isOpen, setIsOpen] = useState(true);
  const { Canvas } = useQRCode();

  const handlePrint = () => {
    window.print();
  };

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={() => setIsOpen(false)}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full flex justify-center flex-col items-center max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <Dialog.Title>QR Code</Dialog.Title>
                <Dialog.Description>
                  This is your unique Generated QR code for {props.productName}
                </Dialog.Description>
                <div className="qr-container">
                <Canvas
                  text={"Download MTZ Mobile App "}
                  options={{
                    errorCorrectionLevel: "M",
                    margin: 3,
                    scale: 4,
                    width: 200,
                    color: {},
                  }}
                />
                </div>
              

                <div className="mt-4 flex justify-between items-center w-1/2 px-7">
                  <button
                    onClick={handlePrint}
                    className="inline-flepx justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                  >
                    Print
                  </button>
                  <button
                    onClick={props.onClose}
                    className="inline-flex justify-center rounded-md border border-transparent bg-red-100 px-4 py-2 text-sm font-medium text-red-900 hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2"
                  >
                    Close
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default QrPopUp;
