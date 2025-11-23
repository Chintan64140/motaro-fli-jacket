import React from "react";

const PriceDetails = ({ totalPrice, onClick }) => {
  return (
    <>
      <div className="mb-4 ">
        <div
          className="flex monts items-center justify-between rounded-t-sm border px-6 py-3 "
          style={{ borderColor: "#eae9ef" }}
        >
          <div className="text-sm font-bold uppercase leading-[14.4px] text-neutral-900 md:!text-base md:font-medium md:!leading-[19.2px] select-none md:select-text">
            Price Details
          </div>
        </div>
        <div className="xs:!hide-scrollbar xs:border-1 border-[#eae9ef] monts border-x xs:border-divider">
          <div>
            <div className="flex items-center justify-between px-4 py-3 font-normal !leading-[18px] md:px-6 md:text-sm md:!leading-[21px]">
              <p className="md:text-[10px] lg:text-xs xl:text-sm flex items-center gap-2  font-normal leading-[18px] text-neutral-500 md:!leading-[21px] select-none md:select-text">
                Total MRP{" "}
              </p>
              <div className="md:text-[10px] lg:text-xs xl:text-sm font-medium leading-[18px] text-blackSS md:!leading-[21px] select-none md:select-text">
                ₹{totalPrice?.totalMRP?.toLocaleString()}
              </div>
            </div>
          </div>
          <div className="h-px w-full border-divider my-2 border-t border-dashed border-[#eae9ef]"></div>
          <div>
            <div className="flex items-center justify-between px-4 py-1 md:px-6">
              <p className="text-sm md:text-[10px] lg:text-xs xl:text-sm flex items-center gap-2 text-sm font-normal leading-[18px] text-neutral-500 md:!leading-[21px] select-none md:select-text">
                Offer Discount{" "}
              </p>
              <div className="md:text-[10px] lg:text-xs xl:text-sm text-sm font-medium leading-[18px] text-blackSS md:!leading-[21px] select-none md:select-text">
                - ₹ {totalPrice?.totalDis?.toLocaleString()}
              </div>
            </div>
          </div>
          <div>
            <div className="flex items-center justify-between bg-burntCoralLight border-[#eae9ef] mt-1.5 px-4 py-2 !leading-[21px] md:px-6 xs:text-xs xs:font-medium xs:leading-[18px]">
              <div className="text-sm md:text-[10px] text-[12px] lg:text-xs xl:text-sm font-medium text-red-700 xs:text-xs xs:font-medium xs:leading-[18px] select-none md:select-text">
                Your Total Savings
              </div>
              <div className="text-sm md:text-[10px] lg:text-xs text-[12px] xl:text-sm font-medium text-red-700 xs:text-xs xs:font-medium xs:leading-[18px] select-none md:select-text">
                ₹ {totalPrice?.totalDis?.toLocaleString()}
              </div>
            </div>
          </div>
          <div className="h-px w-full border-divider border my-2 border-t border-dashed border-[#eae9ef]"></div>
          <div>
            <div className="flex items-center justify-between mx-4 py-3 md:mx-6">
              <p className="md:text-[10px] lg:text-xs xl:text-sm flex items-center gap-2 text-sm font-normal leading-[18px] text-neutral-500 md:!leading-[21px] select-none md:select-text">
                Delivery Fee{" "}
              </p>
              <div className="md:text-[10px] lg:text-xs xl:text-sm text-sm font-medium leading-[18px] text-blackSS md:!leading-[21px] select-none md:select-text">
                Free
              </div>
            </div>
          </div>
          <div className="h-px w-full border-t border-divider border-[#eae9ef]"></div>
        </div>
        <div className="flex items-center border-[#eae9ef] justify-between rounded-b-sm border border-t-0 px-4 py-3 md:px-6">
          <div className="md:text-[10px] lg:text-xs xl:text-sm text-sm font-medium capitalize leading-[21px] text-blackSS md:!text-base md:!leading-6 select-none md:select-text">
            Total Payable amount
          </div>
          <div className="md:text-[10px] lg:text-xs xl:text-sm text-sm font-bold capitalize leading-[21px] text-blackSS md:!text-base md:!leading-6 select-none md:select-text">
            ₹ {totalPrice?.totalSell?.toLocaleString()}
          </div>
        </div>
        <div className=" hidden md:flex bg-transparent items-center flex w-full px-6 flex-row justify-between py-5">
          <div className="bg-transparent flex flex-col">
            <div className="text-[18px] font-medium leading-[21px] text-ssBlack select-none md:select-text">
              ₹ {totalPrice?.totalSell?.toLocaleString()}
            </div>
          </div>
          <button
            onClick={onClick}
            className="inline-flex cursor-pointer items-center justify-center !bg-[#221f20] whitespace-nowrap text-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none bg-blackSS shadow text-white h-9 px-4 font-medium rounded-sm gap-0 disabled:bg-neutral-300 disabled:opacity-100 w-2/4 py-4"
          >
            <p className="uppercase tracking-sm text-white text-xs font-medium leading-4 tracking-wide">
              PLACE ORDER
            </p>
          </button>
        </div>
        <div className="block md:hidden fixed bottom-0 left-0 bottom-0 w-full z-10">
          <div
            className="flex flex-col items-center bg-white px-7  w-full"
            style={{
              boxShadow: "rgba(0, 0, 0, 0.05) 0px -2px 4px 0px",
            }}
          >
            <div className="bg-transparent flex w-full flex-row justify-between py-5">
              <div className="bg-transparent flex flex-col">
                <div className="text-md font-medium leading-[21px] text-ssBlack select-none md:select-text">
                  ₹ {totalPrice?.totalSell?.toLocaleString()}
                </div>
              </div>
              <button
                onClick={onClick}
                className="inline-flex cursor-pointer items-center justify-center !bg-[#221f20] whitespace-nowrap text-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none bg-blackSS shadow text-white h-9 px-4 font-medium rounded-sm gap-0 disabled:bg-neutral-300 disabled:opacity-100 w-2/4 py-4"
              >
                <p className="uppercase tracking-sm text-white text-xs font-medium leading-4 tracking-wide">
                  PLACE ORDER
                </p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PriceDetails;
