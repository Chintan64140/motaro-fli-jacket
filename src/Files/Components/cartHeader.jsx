import React from "react";

const CartHeader = ({ green }) => {
  const headermenus = [
    {
      name: "Bag",
      href: "/cart",
    },
    {
      name: "Address",
      href: "/cart/address",
    },

    {
      name: "payment",
      href: "/cart/payment",
    },
  ];

  return (
    <>
      <header className="h-[60px] md:h-[120px]">
        <div className="relative" data-testid="render-cart-header-test">
          <div className="relative  z-20 w-full bg-white">
            {/* Top Black Bar */}

            {/* Logo + Steps */}
            <div className="cart-header__shadow">
              <div className="grid min-h-[32px] grid-cols-1 px-2 md:mx-16 md:grid-cols-4">
                <div className="flex items-center justify-between md:col-span-3">
                  {/* Desktop Logo */}
                  {/* Center content */}
                  <div className="m-auto flex flex-col align-middle">
                    {/* Main Logo */}

                    {/* Cart Steps */}
                    <div className="m-auto flex items-center gap-6 md:my-auto xs:px-6">
                      {headermenus.map((item, index) => {
                        return (
                          <a
                            key={index}
                            
                            className={`border-b-2 py-1 text-left text-[10px] font-medium uppercase leading-[12.21px] md:w-[104px] md:text-sm md:leading-[17.09px] w-[88px] ${
                              index <= green
                                ? "border-b-green-600 text-green-600"
                                : "border-b-blackSS text-blackSS"
                            } `}
                          >
                            {item.name}
                          </a>
                        );
                      })}

                      {/* <a
                        href="/cart/address"
                        className={`border-b-2 py-1 text-left text-[10px] font-medium uppercase leading-[12.21px] md:w-[104px] md:text-sm md:leading-[17.09px] w-[88px] border-b-blackSS text-blackSS`}
                      >
                        address
                      </a>

                      <a
                        href="/cart/payment"
                        className={`border-b-2 py-1 text-left text-[10px] font-medium uppercase leading-[12.21px] md:w-[104px] md:text-sm md:leading-[17.09px] w-[88px] border-b-blackSS text-blackSS`}
                      >
                        payment
                      </a> */}
                    </div>
                  </div>
                </div>

                <div className="hidden md:block"></div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default CartHeader;
