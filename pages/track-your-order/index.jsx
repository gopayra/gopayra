import React, { useState, useEffect } from "react";
import DownlaodOurApp from "../../components/common/DownlaodOurApp";
import MissionAndVision from "../../components/common/MissionAndVision";

function TrackOrder() {
  const [orderId, setOrderId] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [isOrderReady, setIsOrderReady] = useState(false);

  function handleInputChange(event) {
    const inputValue = event.target.value.replace(/\s/g, "");
    if (/^[a-zA-Z0-9]*$/.test(inputValue)) {
      setOrderId(inputValue);
    }
  }

  function handleTrackOrder(event) {
    event.preventDefault();
    setIsProcessing(true);

    // simulate processing time with setTimeout
    setTimeout(() => {
      setIsProcessing(false);
      setIsOrderReady(true);
    }, 2000);
  }

  return (
    <>
      <div className="min-h-[669px] flex flex-col justify-center items-center px-4 bg-gopayra mb-24">
        <div className="mt-20 py-24 map-bg-white">
          <div className="w-full max-w-xl p-6 text-center">
          <h1 className="text-6xl font-semibold text-white mb-6">
            Track Your Order
          </h1>
          <p className="text-white mb-10">
            Track your CN details in one place with real-time updates. Track
            your product by CN Number, Sender Phone, Receiver Phone or Ref No.
          </p>
          <form onSubmit={handleTrackOrder} className="mb-6">
            <label htmlFor="orderId" className="sr-only">
              Order ID
            </label>
            <div className="flex">
              <input
                type="text"
                id="orderId"
                name="orderId"
                value={orderId}
                onChange={handleInputChange}
                placeholder="Enter your order ID"
                className="py-2 px-3 rounded-l-md w-full focus:outline-none focus:ring-2 focus:ring-blue-600"
                required
              />
              <button
                type="submit"
                className="bg-black text-white rounded-r-md px-4 py-2 hover:text-black hover:bg-gray-300 focus:outline-gopayra focus:bg-gopayraLight transition duration-300"
              >
                Track
              </button>
            </div>
          </form>
          {isProcessing && (
            <div className="text-center">
              <svg
                className="animate-spin h-10 w-10 mx-auto text-gray-700"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647zM20 12a8 8 0 01-8 8v4c6.627 0 12-5.373 12-12h-4zm-2-5.291A7.962 7.962 0 0120 12h4c0-3.042-1.135-5.824-3-7.938l-3 2.647z"
                ></path>
              </svg>
              <p className="mt-4 text-gray-700">Processing your order...</p>
            </div>
          )}
          </div>
        </div>
      </div>

      <MissionAndVision />

      <DownlaodOurApp />
    </>
  );
}

export default TrackOrder;
