"use client";
import React, { useEffect } from "react";

const OrderConfirmPage = () => {

    useEffect(()=>{
        setTimeout(() => {
            window.location.href = '/orders'
        }, 6000);
    },[])

  return (
    <>
      <div className="h-[calc(100vh-104px)] flex flex-col justify-center items-center">
        <img className="w-40 h-40" src="/assets/orderConfirmed.png" />
        <p className="text-[30px] poppins mt-4 font-[600]">Order Confirmed</p>

        <img src="/assets/loading.gif" className="w-10" />

        <p className="text-[12px] poppins mt-1 font-[400] text-[#676767]">
          (You'll redirect to All order Screen)
        </p>
      </div>
    </>
  );
};

export default OrderConfirmPage;
