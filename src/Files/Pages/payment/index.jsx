import React, { useEffect, useState } from "react";
import CartHeader from "../../Components/cartHeader";
// import PriceDetails from "../../Components/cartPrice-Details";
import { useOrder } from "../../Context/OrderContext";
import { useCart } from "../../Context/CartContext";
import { useConfirmedOrders } from "../../Context/ConfimedorderContext";
import PriceDetails from "../../Components/cart_price";
import PlaceBtn from "../../Components/place-btn";
import { toast } from "react-toastify";

const Payment = () => {
  const onConfirm = () => {
    clearCart();
    clearOrders();
  };

  const { orders, clearOrders } = useOrder();
  const { clearCart, cart } = useCart();
  const { addConfirmedOrder, updateConfirmedOrder, confirmedOrders } =
    useConfirmedOrders();
  const [totalPrice, setTotalPrice] = useState();

  const finalConfirmOrder = confirmedOrders.filter(
    (item) => item.status == "Pending"
  );
  console.log(
    confirmedOrders,
    "confirmedOrdersconfirmedOrders",
    finalConfirmOrder
  );

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

  const [selectedPay, setSelectedPay] = useState("");
  // const paySelected = subsc//riptionPlans.find((item) => item.label == query);

  // const subTotal = totalPrice?.totalSell;
  const subTotal = 1.0;
  const nameOfPay = "Naughty-";

  const paymentOption = [
    {
      id: "Gpay",
      label: "Gpay (Currently Unavailable)",
      icon: "https://play-lh.googleusercontent.com/0dn-CnZkqyLm5PpjdHBrYR9hvnGDNgoLTe8yfrSaPWUx7ZBVGI4C_18-jL06oNCRRCK3=w480-h960-rw",
      link_: `gpay://pay?ver=01&mode=02&orgId=00079&tid=&tr=2739544A&tn=2739544A&pa=0790885A0199717.bqr@kotak&pn=${nameOfPay}&mc=5651&am=${subTotal?.toFixed(
        2
      )}&mid=0790885A0199717&mtid=2739544A&qrMedium=04`,
    },
    {
      id: "phone-pe",
      label: "Phonepe (Extra 10% Cashback)",
      icon: "https://play-lh.googleusercontent.com/6iyA2zVz5PyyMjK5SIxdUhrb7oh9cYVXJ93q6DZkmx07Er1o90PXYeo6mzL4VC2Gj9s=w480-h960-rw",
      // link_: `phonepe://pay?ver=01&mode=02&orgId=00079&tid=&tr=2739544A&tn=2739544A&pa=0790885A0199717.bqr@kotak&pn=${nameOfPay}&mc=5651&am=${subTotal?.toFixed(
      //   2
      // )}&mid=0790885A0199717&mtid=2739544A&qrMedium=04`,
      // link_: `phonepe://pay?pa=9876543210@hdfcbank&am=${subTotal?.toFixed(
      //   2
      // )}&cu=INR&tn=Payment%20for%20Service`,
      link_: `phonepe://pay?pa=4015610007554810.cc@idfcbank&pn=Montaro&am=${subTotal?.toFixed(
        2
      )}&cu=INR&tn=Bill`,
    },
    {
      id: "paytm",
      label: "Paytm",
      icon: "https://play-lh.googleusercontent.com/IWU8HM1uQuW8wVrp6XpyOOJXvb_1tDPUDAOfkrl83RZPG9Ww3dCY9X1AV6T1atSvgXc=w480-h960-rw",
      // link_: `paytm://pay?ver=01&mode=02&orgId=00079&tid=&tr=2739544A&tn=2739544A&pa=0790885A0199717.bqr@kotak&pn=${nameOfPay}&mc=5651&am=${subTotal?.toFixed(
      //   2
      // )}&mid=0790885A0199717&mtid=2739544A&qrMedium=04`,
      link_: `phonepe://pay?pa=4015610007554810.cc@idfcbank&pn=Montaro&am=${subTotal?.toFixed(
        2
      )}&cu=INR&tn=Bill`,
    },
  ];

  console.log(totalPrice);

  const priceArray = [
    {
      name: `Price (${cart.length} Item)`,
      amount: totalPrice?.totalMRP,
    },
    {
      name: `Discount`,
      amount: totalPrice?.totalDis,
    },
    {
      name: `Delivery Fee`,
      amount: "Free",
    },
  ];

  return (
    <div className="bg-[#f9f9f9] h-full relative pb-[60px]">
      <CartHeader green={2} />
      <div className="pt-4 ">
        {totalPrice && (
          <PriceDetails
            containerClassname={"shadow"}
            priceArray={priceArray}
            totalPrice={totalPrice?.totalSell}
            totalDis={totalPrice?.totalDis}
          />
        )}
        <div className="flex justify-center items-start flex-col  py-4 bg-[#fff] shadow m-4 rounded-2xl !mt-8">
          {paymentOption.map((item, index) => {
            const isGpay = item.label.includes("Gpay");

            return (
              <div
                key={index}
                onClick={(event) => {
                  if (isGpay) {
                  } else {
                    setSelectedPay(item);
                  }
                }}
                className={`  px-6 border-[#b5b5b5] py-5 rodunded  flex w-full justify-start gap-[10px] items-center`}
                //   style={{ backgroundColor: plan.bgColor }}
                style={{
                  opacity: isGpay ? 0.5 : 1,
                  borderBottom:
                    index !== paymentOption.length - 1
                      ? "1px solid rgba(211, 211, 211, 1)"
                      : "0px",
                }}
              >
                <input
                  type="radio"
                  name="paymentMethod"
                  disabled={isGpay}
                  value={item.id}
                  checked={selectedPay?.id === item.id}
                  onChange={() => setSelectedPay(item)}
                  className="form-radio h-4 w-4 accent-yellow-400"
                />
                <img src={item.icon} className="w-[26px] rounded-full" />
                <p className="text-[16px]">{item.label}</p>
              </div>
            );
          })}
        </div>
      </div>
      {totalPrice && (
        <PlaceBtn
          totalPrice={totalPrice}
          onClick={() => {
            if (selectedPay) {
              window.open(selectedPay.link_, "_blank");
              setTimeout(() => {
                window.location.href = "/order-confirmed";
              }, 3000);
            } else {
              toast.error("Select Payment Option", {
                position: "bottom-center",
                autoClose: 3000,
              });
            }
          }}
        />
      )}
    </div>
  );
};

export default Payment;
