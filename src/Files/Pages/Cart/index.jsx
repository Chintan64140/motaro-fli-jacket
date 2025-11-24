"use client";
import React, { useEffect, useState } from "react";
import { useCart } from "../../Context/CartContext";
import { useOrder } from "../../Context/OrderContext";
import CartHeader from "../../Components/cartHeader";
import CartItem from "./cartitem";
// import PriceDetails from "../../Components/cartPrice-Details";
import PriceDetails from "../../Components/cart_price";
import SafeSecureInfo from "../../Components/safeInfo";
import PlaceBtn from "../../Components/place-btn";
import { v4 as uuidv4 } from "uuid";

const Cartpage = () => {
  const { cart } = useCart();
  const [totalPrice, setTotalPrice] = useState();
  const { addOrder } = useOrder();

  const placeOrder = () => {
    const newOrder = {
      id: uuidv4(),
      items: cart,
      total: 1200,
      status: "Pending",
      date: new Date().toISOString(),
      totalAmount: {
        ...totalPrice,
      },
      address: {},
      payment: "Pending",
    };

    addOrder(newOrder);
  };

  useEffect(() => {
    if (cart.length) {
      const totalMRP = cart.reduce(
        (sum, item) => sum + item.priceObj.mrp * item.quantity,
        0
      );
      const totalSell = cart.reduce(
        (sum, item) => sum + item.priceObj.selling_price * item.quantity,
        0
      );

      const totalDis = totalMRP - totalSell;
      const totalObj = {
        totalDis,
        totalMRP,
        totalSell,
      };

      setTotalPrice(totalObj);
    }
  }, [cart]);

  const totalItems = cart?.length;

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const priceArray = [
    {
      name: `Price (${cart.length} Item)`,
      amount: totalPrice.totalMRP,
    },
    {
      name: `Discount`,
      amount: totalPrice.totalDis,
    },
    {
      name: `Delivery Fee`,
      amount: "Free",
    },
  ];

  return (
    <>
      <div className="relative bg-[#f1f3f6] h-full">
        <CartHeader green={0} />
        <div className="grid pb-[60px] pt-5 text-[unset] relative min-h-[72px] grid-cols-1 place-content-between gap-0 md:mx-14 md:grid-cols-3">
          <div className="mb-6 w-full monts  bg-white  xs:order-4">
            <div className="bg-transparent">
              <div className="">
                <div className="flex flex-col gap-4">
                  {/* PRODUCT CARD */}
                  {cart.map((item, index) => {
                    return <CartItem product={item} key={index} />;
                  })}
                </div>
              </div>
            </div>
          </div>

          <PriceDetails
            priceArray={priceArray}
            totalPrice={totalPrice.totalSell}
            totalDis={totalPrice.totalDis}
          />

          <SafeSecureInfo />
        </div>
        <PlaceBtn
          onClick={() => {
            placeOrder();
            window.location.href = "/cart/address";
          }}
          totalPrice={totalPrice}
        />
      </div>
    </>
  );
};

export default Cartpage;
