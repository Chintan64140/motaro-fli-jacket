"use client";
import React, { useEffect, useState } from "react";
import { useConfirmedOrders } from "../../Context/ConfimedorderContext";
import moment from "moment";
import { day7after } from "../../func";

const Allorders = () => {
  const { confirmedOrders } = useConfirmedOrders();
  const [ready, setReady] = useState(false);

  console.log(confirmedOrders);

  useEffect(() => {
    setReady(true);
  }, []);

  if (!ready) return null; // prevents SSR mismatch

  function getOrderStatus(orderDate) {
    // 1. Create a Moment object for the order date and the current date
    // Moment(orderDate) handles strings, Date objects, or existing moment objects.
    const placedDate = moment(orderDate);
    const today = moment();

    // 2. Calculate the difference in full days
    const daysElapsed = today.diff(placedDate, "days");

    // 3. Determine status based on the time elapsed
    // - 5+ days: In Delivery
    // - 3+ days: Shipped
    // - 1+ day: Packed
    // - 0 days: Processing
    if (daysElapsed >= 5) {
      return "In Delivery ";
    } else if (daysElapsed >= 3) {
      return "Shipped ";
    } else if (daysElapsed >= 1) {
      return "Packed ";
    } else {
      return "Placed";
    }
  }

  return (
    <div className="monts w-full">
      <div className="w-full flex flex-col gap-4 justify-center items-center p-4">
        <p className="text-[16px] monts font-[600]">Your Orders</p>
        {confirmedOrders?.map((item, index) => (
          <div
            key={index}
            className="border p-3 py-2 gap-2 flex flex-col  border-divider w-full rounded border-[#b5b5b5]"
          >
            <p className="text-[10px]">
              <span className="font-[600]"> Order ID:-</span> #{item.id}
            </p>
            <div className="flex justify-between">
              <p className="text-[13px]">
                Date:-{" "}
                {moment(item.orderDetails.date).format("DD, MMM YY hh:mm")}
              </p>
              <p className="text-[13px]">
                Order Status:-{" "}
                <span className="font-[600]">
                  {getOrderStatus(item.orderDetails.date)}
                </span>
              </p>
            </div>
            <div className="flex justify-between">
              <p className="text-[13px]">
                Order Amount:-{" "}
                <span className="font-[600]">
                  ₹{item?.orderDetails?.totalAmount?.totalSell}
                </span>
              </p>
              <p className="text-[15px]">
                Order will Arrive On:-{" "}
                <span className="font-[600]">
                  {day7after(item.orderDetails.date)}
                </span>
              </p>
            </div>
            <div className="w-full">
              {item.orderDetails.items.map((it, index) => {
                return (
                  <div key={index}>
                    <div className="flex justify-start">
                      <img
                        src={it.imagesData[0].src}
                        className="w-20 rounded border border-[#b5b5b5]"
                      />
                      <div className="pl-3">
                        <p className="text-[13px] font-[600]">{it.name}</p>
                        <p className="text-[13px] font-[400]">
                          Size:- {it.size}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Allorders;
