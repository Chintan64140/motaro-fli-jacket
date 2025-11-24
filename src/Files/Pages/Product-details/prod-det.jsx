import React, { useEffect, useState } from "react";
import { getRandom10, toKeyValueArray } from "../../func";
import ProductCard from "../../Components/productCard";
import { toast } from "react-toastify";
import SizeRow from "./Components/sizerow";
import Name from "./Components/name";
import { Price } from "./Components/price";
import Policy from "./Components/policy";
import { customerSupportIcon, returnIcon } from "./Components/Svgs/return";
import Specifications from "./Components/prod-specification";
import ActionButtons from "./Components/cartBtns";

export function ProductCardDetails({
  product,
  cartQty,
  prodincart,
  addToCart,
  removeFromCart,
  selectedSize,
  setSelectedSize,
  similar,
}) {
  //   const result =
  const prod = { ...product };

  const features = [
    {
      title: "7-Day Return",
      link: "https://www.flipkart.com/easy-return-policy-store",
      icon: returnIcon,
    },
    // {
    //   title: "Cash on Delivery",
    //   link: "https://www.flipkart.com/item/payments-callout/itemId?pageKey=payments-callout&marketplace=Flipkart&pin=-1&lid=LSTJCKHGAB8GVHFTYXVMV3GBB&pid=JCKHGAB8GVHFTYXV",
    // },
    {
      title: "Customer support",
      link: "https://www.flipkart.com/customer-support-policy-store",
      icon: customerSupportIcon,
    },
  ];

  return (
    <div className="mx-auto max-w-full ">
      <div className="bg-transparent">
        {/* IMAGE CAROUSEL */}

        {/* FIXED BOTTOM BUTTONS */}

        <div className="block md:hidden fixed bottom-0 z-[99] w-full">
          {prodincart ? (
            <div className="absolute bottom-0 w-full">
              <div
                className="bg-white flex flex-row items-center justify-between px-2 py-3 md:px-0"
                style={{
                  boxShadow: "rgba(0, 0, 0, 0.05) 0px -2px 4px 0px",
                }}
              >
                {/* Quantity Controls */}
                <div className="flex basis-[19%] items-center justify-between gap-4 pl-4">
                  {/* Minus Button */}
                  <div className="flex cursor-pointer justify-center rounded-full border-[1.5px] border-neutral-400 p-2">
                    <div
                      className="w-3 md:w-[13.71px]"
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
                  <div className="flex justify-center rounded-full border-[1.5px] border-neutral-400 p-2 cursor-not-allowed">
                    <div
                      className="w-3 md:w-[13.71px]"
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

                <div className="flex basis-3/5 items-center justify-evenly w-full">
                  <button
                    onClick={() => {
                      window.location.href = "/cart";
                    }}
                    className="inline-flex  items-center justify-center whitespace-nowrap text-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none bg-blackSS shadow text-white h-9 font-medium rounded-sm gap-2 disabled:bg-neutral-300 disabled:opacity-100 w-[90%] p-6"
                    style={{
                      background:
                        "linear-gradient(90deg, rgb(255, 228, 92), rgb(255, 193, 3))",
                    }}
                  >
                    <div
                      dir="auto "
                      className="css-1rynq56 w-full !flex justify-center h-full items-center"
                      style={{
                        color: "rgb(51, 51, 51)",
                        fontSize: "14px",
                        lineHeight: "18px",
                        fontFamily: "inter_bold",
                      }}
                    >
                      <p className="text-sm font-medium uppercase leading-4 tracking-sm md:text-base md:leading-4 py-2">
                        Go to Cart
                      </p>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <ActionButtons
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
            />
            // <div
            //   className="max-md:px-3 flex items-center gap-2 bg-white md:gap-6 xs:mx-0 xs:pl-3 px-0"
            //   style={{ boxShadow: "rgba(0,0,0,0.05) 0px -2px 4px" }}
            // >
            //   <div className="flex  w-full justify-between gap-4 my-3 flex-row-reverse">
            //     <button
            //       onClick={() => {
            //         if (selectedSize) {
            //           addToCart({ ...product, size: selectedSize });
            //         } else {
            //           toast.error("Select Size", {
            //             position: "bottom-center",
            //             autoClose: 3000,
            //           });
            //         }
            //       }}
            //       className=" items-center justify-center whitespace-nowrap text-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none shadow text-white h-9 font-medium rounded-sm gap-0 disabled:bg-neutral-300 disabled:opacity-100 flex w-full  md:min-h-[56px] md:py-[17.5px] !px-1 !py-2"
            //       style={{
            //         background:"#ffd710ff"
            //           // "linear-gradient(90deg, #e1c849ff, rgb(255, 193, 3))",
            //       }}
            //     >
            //       <div className="bg-transparent flex items-center gap-2">
            //         <img
            //           src="https://www.shoppersstop.com/icons/bag_black.svg"
            //           className="size-6"
            //         />
            //         <p className="text-md text-black font-bold uppercase">Add to bag</p>
            //       </div>
            //     </button>
            //   </div>
            // </div>
          )}
        </div>

        {/* PRODUCT NAME + PRICE */}
        <div className="">
          <div className="flex flex-col">
            <Name name={prod.name} brand={prod.brand} />
            <Price
              price={prod?.priceObj?.selling_price}
              mrp={prod?.priceObj?.mrp}
              discount={prod?.priceObj?.discount}
            />
          </div>

          {/* SIZE SELECTOR */}
          <div className="flex flex-col max-w-[460px] monts pt-6">
            <div>
              <div className="flex items-center gap-3 justify-between">
                <span className="text-[14px] font-[600] inter text-[#333] ml-[16px]">
                  Select Size
                </span>
              </div>

              <div className="hide-scrollbar flex gap-3 overflow-x-auto pt-2">
                <SizeRow
                  selectedSize={selectedSize}
                  setSelectedSize={setSelectedSize}
                  sizes={prod?.sizes}
                />
              </div>
            </div>
          </div>

          <Specifications spec={prod.specifications} />

          <Policy features={features} />
          {/* RETURN INFO */}

          {/* SIMILAR PRODUCTS HEADER */}
          <div className="mt-10 block md:hidden">
            <p className="mx-[16px] text-[#333] text-[19px] inter font-[700]  mt-8">
              Similar Products
            </p>

            <div className="carousel mt-5 flex overflow-auto gap-2 px-4">
              {similar.map((item, index) => {
                console.log(item, "asjhasjkhdsjkash");

                const imagess = item.imgdata.images.filter(
                  (iii) => iii.type == "background"
                );

                const pric_e = item.priceObj;

                return (
                  <div key={index} className="min-w-[185px] h-[auto]">
                    <ProductCard
                      imageContainerStyle="!rounded-[4px]"
                      imageClass={"!rounded-[4px]"}
                      product={item}
                      id={item.id}
                      brand={item.brand}
                      title={item.name}
                      price={pric_e.selling_price}
                      oldPrice={pric_e.mrp}
                      discount={pric_e.discount}
                      image={imagess[0].src}
                      link={`/prod`}
                      rating={
                        item.rating && item.rating_count
                          ? `${item.rating} | ${item.rating_count}`
                          : ""
                      }
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="h-[70px] md:h-[0px]"></div>
      </div>
    </div>
  );
}
