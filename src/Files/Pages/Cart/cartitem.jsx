// CartItem.jsx
const CartItem = ({ product }) => {
  const immg = product.imagesData[0].src;

  return (
    <div className="flex flex-col gap-3  p-4 pt-6 bg-white">
      <div className="flex gap-3">
        <img src={immg} className="w-[72px] h-[72px] object-contain" />
        <div className="max-w-[calc(100%-72px)] flex flex-col gap-1">
          <p className="text-[16px] font-medium leading-5 truncate">
            {product.name}
          </p>
          <div className="text-xss text-gray-600 leading-5">Size: L</div>
          <div className="text-lg text-gray-600 leading-5">
            Quantity: {product.quantity}
          </div>

          {product.rating && product.rating_count && (
            <div className="flex items-center gap-2 mt-1">
              <div className="flex items-center gap-1">
                <div className="flex items-center justify-center px-1 py-[1px] rounded bg-green-600 text-white text-[11px]">
                  {product.rating} ★
                </div>
                <span className="text-[12px] text-gray-500">
                  ({product.rating_count})
                </span>
              </div>
            </div>
          )}
          <div className=" flex flex-col gap-2">
            <div className="flex items-center  gap-2">
              <div className="flex items-center gap-1">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 12 12"
                  fill="none"
                  className="shrink-0"
                >
                  <path
                    d="M6.73461 1V8.46236L9.5535 5.63352L10.5876 6.65767L5.99384 11.2415L1.41003 6.65767L2.42424 5.63352L5.25307 8.46236V1H6.73461Z"
                    fill="#008C00"
                  />
                </svg>
                <span className="text-[16px] font-semibold text-[#008C00]">
                  {product.priceObj.discount}%
                </span>
              </div>

              <span className="text-[16px] font-semibold text-[#828282ff] line-through">
                ₹{product.priceObj.mrp.toLocaleString()}
              </span>
              <span className="text-[18px] font-semibold text-gray-900">
                ₹{product.priceObj.selling_price.toLocaleString()}
              </span>
            </div>
          </div>
        </div>
        {/* <div className="w-full border-1">
          <div className="flex-1">
            <div className="flex-1 flex flex-col gap-3">
              <div className="text-[16px] font-medium leading-5 truncate">
                Breil By Fort Collins Full Sleeve Solid Men Jacket
              </div>
              <div className="text-xss text-gray-600 leading-5">Size: L</div>

              {product.rating && product.rating_count && (
                <div className="flex items-center gap-2 mt-1">
                  <div className="flex items-center gap-1">
                    <div className="flex items-center justify-center px-1 py-[1px] rounded bg-green-600 text-white text-[11px]">
                      {product.rating} ★
                    </div>
                    <span className="text-[12px] text-gray-500">
                      ({product.rating_count})
                    </span>
                  </div>
                </div>
              )}
            </div>

            <div className=" flex flex-col gap-2">
              <div className="flex items-center  gap-2">
                <div className="flex items-center gap-1">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 12 12"
                    fill="none"
                    className="shrink-0"
                  >
                    <path
                      d="M6.73461 1V8.46236L9.5535 5.63352L10.5876 6.65767L5.99384 11.2415L1.41003 6.65767L2.42424 5.63352L5.25307 8.46236V1H6.73461Z"
                      fill="#008C00"
                    />
                  </svg>
                  <span className="text-[16px] font-semibold text-[#008C00]">
                    61%
                  </span>
                </div>

                <span className="text-[16px] font-semibold text-[#828282ff] line-through">
                  ₹1,299
                </span>
                <span className="text-[18px] font-semibold text-gray-900">
                  ₹499
                </span>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default CartItem;
