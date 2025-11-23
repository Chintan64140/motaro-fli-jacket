const PriceDetails = () => {
  const priceData = [
    {
      label: "Price (1 item)",
      icon: true,
      value: "₹1,299",
    },
    {
      label: "Discount",
      icon: false,
      value: "- ₹800",
    },
    {
      label: "Platform Fee",
      icon: true,
      value: "₹7",
    },
  ];

  return (
    <div className="w-full">
      <h3 className="font-semibold text-lg flex items-center">
        Price Details
        <span className="ml-2 rotate-[-90deg]">
          <svg width="16" height="16" fill="none" viewBox="0 0 17 17">
            <path
              d="m6.627 3.749 5 5-5 5"
              stroke="#111112"
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </h3>

      <div className="mt-3 space-y-3">
        {priceData.map((item, index) => (
          <div key={index} className="flex justify-between items-center">
            {/* Left Side */}
            <div className="flex items-center gap-1">
              <span className="font-medium">{item.label}</span>

              {item.icon && (
                <img
                  src="https://rukminim2.flixcart.com/www/30/30/promos/10/04/2020/f1887cd2-f5dc-4103-880d-8c24ea271f91.png?q=90"
                  className="w-[15px] h-[15px] object-contain"
                />
              )}
            </div>

            {/* Right Side */}
            <span className="font-semibold">{item.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PriceDetails;
