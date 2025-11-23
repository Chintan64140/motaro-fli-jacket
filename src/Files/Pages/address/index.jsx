"use client";
import React, { useState } from "react";

import { useOrder } from "../../Context/OrderContext";
import { useConfirmedOrders } from "../../Context/ConfimedorderContext";
import { useCart } from "../../Context/CartContext";
import CartHeader from "../../Components/cartHeader";
import PriceDetails from "../../Components/cartPrice-Details";

const errorMsg = (Lable) => {
  return <p className="text-[12px] text-[red]">{Lable} is missing!</p>;
};

const AddressPage = () => {
  const { orders, clearOrders } = useOrder();
  const { clearCart, cart } = useCart();
  const { addConfirmedOrder } = useConfirmedOrders();
  const [addPayload, setAddPayload] = useState({
    name: "",
    mobile: "",
    pin: "",
    address: "",
    addtype: "",
  });
  console.log(orders, cart, "poasdijsiojcsd");

  const [submitted, setSubmitted] = useState(false);
  const allFilled = Object.values(addPayload).every((value) => value !== "");
  const currentOrder = orders[0];
  const totalAmount = currentOrder?.totalAmount;
  const toDis = orders.reduce(
    (sum, item) => sum + item.totalAmount.totalDis,
    0
  );
  const totalMRP = orders.reduce(
    (sum, item) => sum + item.totalAmount.totalMRP,
    0
  );
  const totalSell = orders.reduce(
    (sum, item) => sum + item.totalAmount.totalSell,
    0
  );

  const priceOObj = {
    totalDis: toDis,
    totalMRP: totalMRP,
    totalSell: totalSell,
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setAddPayload((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleTypeSelect = (type) => {
    setAddPayload((prev) => ({
      ...prev,
      addtype: type,
    }));
  };

  const showError = (key, Lable) => {
    return submitted ? (addPayload[key] ? "" : errorMsg(Lable)) : "";
  };

  return (
    <>
      <div>
        <CartHeader green={1} />
        <div className="monts grid min-h-[72px] grid-cols-1 place-content-between gap-6 px-4 md:mx-14 md:grid-cols-3">
          {/* LEFT SIDE */}
          <div className="flex items-start justify-between ">
            <div className="flex w-full flex-col gap-6">
              {/* Delivery Options */}
              <div className="flex flex-col">
                <div className="flex flex-col gap-5">
                  <div className="text-[10px] md:text-xs lg:text-sm xl:text-base font-bold !leading-[19.2px] tracking-wider text-neutral-900 select-none md:select-text">
                    DELIVERY OPTIONS AVAILABLE
                  </div>

                  <div
                    role="radiogroup"
                    aria-required="false"
                    dir="ltr"
                    className="grid grid-cols-1 flex-wrap place-content-center place-items-start gap-4 md:grid-cols-3"
                    tabIndex={-1}
                    style={{ outline: "none" }}
                  >
                    {/* Standard Delivery */}
                    <div className="w-full">
                      <div className="space-x-2 flex flex-row items-center content-center">
                        <button
                          type="button"
                          role="radio"
                          aria-checked="true"
                          data-state="checked"
                          value="0"
                          className="aspect-square size-[19.12px] rounded-full border border-primary text-primary shadow focus:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                          id="-1"
                          tabIndex={-1}
                          disabled
                        >
                          <div className="flex size-[18px] h-full items-center justify-center">
                            <span
                              data-state="checked"
                              className="size-2 rounded-full bg-[#5f5f5f]"
                            ></span>
                          </div>
                        </button>

                        <label htmlFor="-1" className="opacity-60">
                          <div className="max-md:max-w-full flex flex-row items-center gap-4 self-stretch">
                            <img
                              alt="img"
                              src="https://www.shoppersstop.com/icons/delivery_time.svg"
                              className="aspect-square my-auto w-8 max-w-full shrink-0 overflow-hidden object-contain object-center"
                              loading="lazy"
                            />
                            <div className="text-sm font-medium capitalize !leading-[16.8px] tracking-wide text-neutral-900">
                              Standard Delivery
                            </div>
                          </div>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 text-sm font-normal text-red-600 select-none md:select-text">
                  Please add an address to proceed
                </div>

                {/* No Address */}
                {/* <div className="flex w-full flex-col">
                  <div className="mt-6 rounded-t-sm border-[0.5px] border-b-0 border-neutral-400 p-4">
                    <div className="text-sm md:text-base lg:text-lg text-ssBlack mt-8 text-center font-medium leading-[157%] tracking-[0.15px] xl:text-lg">
                      You have no saved addresses.
                    </div>
                    <div className="text-xs md:text-sm lg:text-base xl:text-lg font-normal mt-1 text-center leading-[166%] tracking-xs text-neutral-500">
                      Please add an address for quick checkout
                    </div>
                  </div>

                  <div className="rounded-b-sm border-[0.5px] border-neutral-400 bg-transparent p-4 font-bold tracking-wider text-blackSS">
                    <button className="inline-flex items-center justify-center whitespace-nowrap text-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none shadow h-9 rounded-sm gap-0 disabled:bg-neutral-300 disabled:opacity-100 w-full rounded-t-sm border-[0.5px] border-neutral-400 bg-transparent p-4 font-bold tracking-wider text-blackSS md:min-h-[40px] md:w-auto md:py-[19.34px]">
                      <p className="text-xs uppercase leading-4 tracking-sm md:text-sm font-medium md:!leading-4">
                        ADD NEW ADDRESS
                      </p>
                    </button>
                  </div>
                </div> */}
              </div>
            </div>
          </div>

          <div>
            <div className="bg-transparent  w-full ">
              <div className="text-sm font-medium capitalize mb-2 !leading-[16.8px] tracking-wide text-neutral-900">
                Please Enter Address
              </div>
              {/* NAME */}
              <div className="w-full">
                <div className="relative h-12 md:h-14 w-full text-blackSS">
                  <input
                    type="text"
                    id="Name"
                    name="name"
                    onChange={handleChange}
                    maxLength={30}
                    className="peer block w-full h-full appearance-none rounded border border-neutral-400 bg-transparent pl-4 text-base font-normal text-blackSS focus:border-blue-500 focus:outline-none"
                    placeholder=" "
                  />
                  <label
                    htmlFor="Name"
                    className="absolute left-1 top-2 z-10 origin-[0] -translate-y-5 scale-75 bg-white px-2 text-base text-neutral-500 transition-all duration-300
            peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100
            peer-focus:top-1 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:text-blue-500"
                  >
                    Name
                  </label>
                  {showError("name", "Name")}
                </div>
              </div>

              {/* MOBILE NUMBER */}
              <div className="w-full">
                <div className="relative h-12 md:h-14 mt-6 w-full text-blackSS">
                  <input
                    type="text"
                    id="Mobile"
                    name="mobile"
                    onChange={handleChange}
                    maxLength={10}
                    className="peer block w-full h-full appearance-none rounded border border-neutral-400 bg-transparent pl-12 text-base font-normal text-blackSS focus:border-blue-500 focus:outline-none"
                    placeholder=" "
                  />
                  <span className="absolute top-[12px] md:top-[17px] left-4 text-base text-blackSS select-none z-10">
                    +91
                  </span>

                  <label
                    htmlFor="Mobile"
                    className="absolute left-1 top-2 z-10 origin-[0] -translate-y-5 scale-75 bg-white px-2 text-base text-neutral-500 transition-all duration-300
            peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100
            peer-focus:top-1 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:text-blue-500"
                  >
                    Mobile No.
                  </label>
                  {showError("mobile", "Mobile No.")}
                </div>
              </div>

              {/* PIN CODE */}
              <div className="w-full">
                <div className="relative h-12 md:h-14 mt-6 w-full text-blackSS">
                  <input
                    type="text"
                    id="Pin"
                    maxLength={6}
                    name="pin"
                    onChange={handleChange}
                    className="peer block w-full h-full appearance-none rounded border border-neutral-400 bg-transparent pl-4 text-base font-normal text-blackSS focus:border-blue-500 focus:outline-none"
                    placeholder=" "
                  />
                  <label
                    htmlFor="Pin"
                    className="absolute left-1 top-2 z-10 origin-[0] -translate-y-5 scale-75 bg-white px-2 text-base text-neutral-500 transition-all duration-300
            peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100
            peer-focus:top-1 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:text-blue-500"
                  >
                    Pin Code
                  </label>
                  {showError("pin", "Pin-code")}
                </div>
              </div>

              {/* CITY + STATE */}
              <div className="bg-transparent mt-6 flex gap-6 xs:flex-col">
                <div className="w-full">
                  <div className="relative h-12 md:h-14 w-full text-blackSS">
                    <input
                      type="text"
                      id="City"
                      className="peer block w-full h-full appearance-none rounded border border-neutral-400 bg-transparent pl-4 text-base font-normal text-blackSS"
                      placeholder=" "
                      name="city"
                      onChange={handleChange}
                    />
                    <label
                      htmlFor="City"
                      className="absolute left-1 top-2 z-10 origin-[0] -translate-y-5 scale-75 bg-white px-2 text-base text-neutral-500 transition-all duration-300"
                    >
                      City
                    </label>
                    {showError("city", "City")}
                  </div>
                </div>

                <div className="w-full">
                  <div className="relative h-12 md:h-14 w-full text-blackSS">
                    <input
                      type="text"
                      id="State"
                      className="peer block w-full h-full appearance-none rounded border border-neutral-400 bg-transparent pl-4 text-base font-normal text-blackSS"
                      placeholder=" "
                      name="state"
                      onChange={handleChange}
                    />
                    <label
                      htmlFor="State"
                      className="absolute left-1 top-2 z-10 origin-[0] -translate-y-5 scale-75 bg-white px-2 text-base text-neutral-500 transition-all duration-300"
                    >
                      State
                    </label>
                    {showError("state", "State")}
                  </div>
                </div>
              </div>

              {/* ADDRESS */}
              <div className="w-full mt-6">
                <div className="relative w-full">
                  <textarea
                    rows="2"
                    id="Address"
                    maxLength={255}
                    name="address"
                    onChange={handleChange}
                    className="peer block w-full resize-none rounded-lg border border-neutral-400 bg-transparent px-4 py-3 text-sm text-blackSS focus:outline-none focus:ring-0"
                    placeholder=" "
                  ></textarea>

                  <label
                    htmlFor="Address"
                    className="absolute left-1 top-2 z-10 origin-[0] -translate-y-4 scale-75 bg-white px-2 text-sm text-neutral-500 transition-all duration-300
            peer-placeholder-shown:top-[18px] peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100"
                  >
                    Address
                  </label>
                  {showError("address", "Address")}
                </div>

                <span className="flex justify-end text-[10px] text-neutral-900">
                  <span>{addPayload.address.length}</span>/
                  <span className="text-neutral-400">255</span>
                </span>
              </div>

              {/* ADDRESS TYPE */}
              <div className="mt-6 text-lg mx-2 text-neutral-500 xs:text-sm">
                Address Type
              </div>

              <div className="mt-4 flex gap-2 mx-2">
                {["Home", "Work", "Other"].map((type, i) => (
                  <div className="w-full" key={i}>
                    <div className="flex items-center space-x-2">
                      <button
                        type="button"
                        role="radio"
                        value={type}
                        onClick={() => handleTypeSelect(type)}
                        className={`size-[19px] rounded-full border border-primary flex items-center justify-center 
            ${addPayload.addtype === type ? "bg-primary" : "bg-white"}
          `}
                      >
                        {addPayload.addtype === type && (
                          <span className="size-2 rounded-full bg-black"></span>
                        )}
                      </button>

                      <label className="text-sm md:text-base text-neutral-900">
                        {type}
                      </label>
                    </div>
                  </div>
                ))}
              </div>
              {showError("addtype", "Address Type")}
            </div>
          </div>

          {/* RIGHT SIDE PRICE BOX */}
          <div>
            <PriceDetails
              totalPrice={priceOObj}
              onClick={() => {
                setSubmitted(true);

                if (allFilled) {
                  for (let index = 0; index < orders.length; index++) {
                    const element = orders[index];
                    addConfirmedOrder({
                      id: element.id, // which order to update
                      status: "Pending",
                      payment: "Pending", // new data you want to update
                      address: { ...addPayload },
                      orderDetails: { ...element },
                    });
                  }

                  window.location.href = "/cart/payment";
                } else {
                  console.log("is All Ok NOOOOOOOOO");
                }
              }}
            />
            <div className="my-5 hidden md:flex mx-4 items-center border-b border-b-0 border-neutral-200 pb-8">
              <div className="bg-transparent flex items-start justify-between">
                <label className="basis-[90%] peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-base font-normal leading-xxl text-neutral-900 order-2 cursor-pointer">
                  {" "}
                </label>

                <button
                  type="button"
                  role="checkbox"
                  value="on"
                  className="peer size-4 shrink-0 rounded-[2px] border border-black shadow focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground"
                  id=""
                >
                  <span
                    className="flex items-center justify-center text-current"
                    //   style="pointer-events: none;"
                  >
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 15 15"
                      fill="#000000ff"
                      xmlns="http://www.w3.org/2000/svg"
                      className="size-4"
                    >
                      <path
                        d="M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z"
                        fill="#000000ff"
                        fillRule="evenodd"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </span>
                </button>
              </div>

              <div className="bg-transparent">
                <div className="ml-2 text-sm font-normal leading-xxl text-neutral-900 select-none md:select-text">
                  Place your order through cash on delivery
                </div>
              </div>
            </div>
          </div>

          <div className="my-5 flex md:hidden items-center border-b border-b-0 border-neutral-200 pb-8">
            <div className="bg-transparent flex items-start justify-between">
              <label className="basis-[90%] peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-base font-normal leading-xxl text-neutral-900 order-2 cursor-pointer">
                {" "}
              </label>

              <button
                type="button"
                role="checkbox"
                value="on"
                className="peer size-4 shrink-0 rounded-[2px] border border-black shadow focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground"
                id=""
              >
                <span
                  className="flex items-center justify-center text-current"
                  //   style="pointer-events: none;"
                >
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="#000000ff"
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-4"
                  >
                    <path
                      d="M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z"
                      fill="#000000ff"
                      fillRule="evenodd"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </span>
              </button>
            </div>

            <div className="bg-transparent">
              <div className="ml-2 text-sm font-normal leading-xxl text-neutral-900 select-none md:select-text">
                Place your order through cash on delivery
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddressPage;
