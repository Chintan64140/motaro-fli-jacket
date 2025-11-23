import React, { useState } from "react";
import { toast } from "react-toastify";

export default function ProductPreview({
  images = [],
  selectedSize,
  addToCart,
  product,
  prodincart,
  cartQty,
  removeFromCart,
}) {
  const [active, setActive] = useState(0);
  console.log(product, "productproductproduct");

  return (
    <div className="hide-scrollbar sticky top-[120px] shrink-0 overflow-y-auto">
      <div>
        {/* MAIN WRAPPER */}
        <div className="mt-5 flex gap-4 border-none">
          {/* LEFT – THUMBNAILS */}
          <div className="max-h-screen basis-[22%] lg:basis-[19%] xl:basis-[17%]">
            <div className="bg-transparent max-h-[59vh] overflow-y-auto p-0">
              <div className="flex flex-col overflow-auto gap-4 hide-scrollbar overflow-y-auto">
                {images.map((img, index) => (
                  <div
                    key={index}
                    onClick={() => setActive(index)}
                    className={`relative cursor-pointer  overflow-hidden rounded 
                        transition-all duration-200
                      ${
                        active === index
                          ? "border-2 border-[#333747]"
                          : "border-2 border-transparent"
                      }`}
                  >
                    <img
                      src={img}
                      alt=""
                      className="h-[22.5vh] w-full  object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT – LARGE IMAGE */}
          <div className="max-h-[59vh] basis-[78%] lg:basis-[81%] xl:basis-[83%] flex items-center justify-center">
            <img
              src={images[active]}
              alt="main"
              className="size-full object-contain"
            />
          </div>
        </div>

        {/* BUTTONS */}
        <div className="w-full p-0">
          <div className="max-md:px-3 flex items-center gap-2 bg-white md:gap-6 px-0">
            <div className="my-4 flex w-full justify-between md:gap-4">
              {/* ADD TO BAG */}

              {prodincart ? (
                <div className="w-full">
                  <div
                    className="bg-white flex flex-row items-center justify-between px-2 py-3 md:px-0"
                    style={{
                      boxShadow: "rgba(0, 0, 0, 0.05) 0px -2px 4px 0px",
                    }}
                  >
                    {/* Quantity Controls */}
                    <div className="flex basis-[19%] items-center justify-between gap-4">
                      {/* Minus Button */}
                      <div className="flex cursor-pointer justify-center rounded-full border-[1.5px] border-neutral-400 p-2">
                        <div
                          className=""
                          onClick={() => {
                            removeFromCart(prodincart.id);
                          }}
                        >
                          <img
                            alt="minus"
                            src="https://www.shoppersstop.com/icons/minus.svg"
                            className="w-full"
                            loading="lazy"
                          />
                        </div>
                      </div>

                      {/* Count */}
                      <div className="text-base font-medium text-neutral-950 select-none md:select-text">
                        {cartQty}
                      </div>

                      {/* Plus Button Disabled */}
                      <div className="flex justify-center rounded-full border-[1.5px] border-neutral-400 p-2  cursor-pointer">
                        <div
                          className=""
                          onClick={() => {
                            addToCart(prodincart);
                          }}
                        >
                          <img
                            alt="plus"
                            src="https://www.shoppersstop.com/icons/plus.svg"
                            className="w-full"
                            loading="lazy"
                          />
                        </div>
                      </div>
                    </div>

                    {/* View Bag Button */}
                    <div className="flex basis-3/5 items-center justify-evenly w-full">
                      <button
                        onClick={() => {
                          window.location.href = "/cart";
                        }}
                        className="items-center cursor-pointer w-full justify-center whitespace-nowrap text-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none shadow text-white h-9 font-medium rounded-sm gap-0 disabled:bg-neutral-300 disabled:opacity-100 flex w-full bg-neutral-800 md:min-h-[56px] md:py-[17.5px] px-1 py-0"

                        // className="inline-flex bg-[#221f20] items-center justify-center whitespace-nowrap text-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none bg-blackSS shadow text-white h-9 font-medium rounded-sm gap-2 disabled:bg-neutral-300 disabled:opacity-100 w-[90%] p-6"
                      >
                        <img
                          alt="bag_white"
                          src="https://www.shoppersstop.com/icons/bag_white.svg"
                          loading="lazy"
                        />
                        <p className="text-xs font-medium uppercase">
                          View Bag
                        </p>
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="flex  w-full justify-between gap-4 my-3 flex-row-reverse">
                  <button
                    onClick={() => {
                      if (selectedSize) {
                        addToCart({ ...product, size: selectedSize });
                      } else {
                        toast.error("Select Size", {
                          position: "bottom-center",
                          autoClose: 3000,
                        });
                      }
                    }}
                    className="items-center cursor-pointer w-full justify-center whitespace-nowrap text-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none shadow text-white h-9 font-medium rounded-sm gap-0 disabled:bg-neutral-300 disabled:opacity-100 flex w-full bg-neutral-800 md:min-h-[56px] md:py-[17.5px] px-1 py-0"
                  >
                    <div className="bg-transparent flex items-center gap-2">
                      <img
                        src="https://www.shoppersstop.com/icons/bag_white.svg"
                        className="size-5"
                      />
                      <p className="text-xs font-medium uppercase">
                        Add to bag
                      </p>
                    </div>
                  </button>
                </div>
              )}
              {/* WISHLIST */}
              {/* <button className="flex cursor-pointer w-full items-center justify-center gap-2 border border-black text-neutral-900 bg-transparent shadow-sm rounded-sm h-9 px-4 py-2 font-medium md:min-h-[56px] md:py-[15px]">
                <img
                  src="https://www.shoppersstop.com/icons/pdp_wishlist_add.svg"
                  alt=""
                  className="size-5"
                />
                <span className="uppercase text-xs tracking-sm">Wishlist</span>
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
