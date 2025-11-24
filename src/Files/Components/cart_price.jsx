import React from "react";

const PriceDetails = ({
  priceArray,
  totalPrice,
  totalDis,
  containerClassname,
}) => {
  return (
    <div
      className={`css-175oi2r r-14lw9ot r-1q9bdsx r-1udh08x !pt-6 !m-4 !mt-0 ${containerClassname}`}
    >
      <div className="css-175oi2r r-14lw9ot">
        <div className="css-175oi2r">
          <div>
            <div className="css-175oi2r r-1awozwy r-18u37iz r-1wtj0ep r-kzbkwu r-1qhn6m8 r-i023vh r-m1ore8">
              <div
                dir="auto"
                className="css-1rynq56 r-e1m9g3 r-1vgyyaa r-ubezar r-1rsjblm"
              >
                Price Details{" "}
              </div>
            </div>
          </div>

          <div className="css-175oi2r">
            <div
              className="css-175oi2r"
              style={{ display: "flex", opacity: 1 }}
            >
              <div className="css-175oi2r">
                <div className="css-175oi2r r-1k9g4g2 r-qwd59z r-eg6o18 r-rs99b7 r-109y4c4 r-1ydw1k6 r-1c6vhvp"></div>

                {/* Price (1 item) */}
                <div className="css-175oi2r r-eqz5dr r-f1odvy r-14gqq1x r-1qhn6m8 r-13qz1uu">
                  <div className="css-175oi2r r-eqz5dr r-88pszg r-y3xmzu flex flex-col gap-4">
                    {priceArray.map((item, id) => {
                      return (
                        <div
                          key={id}
                          className="css-175oi2r r-1awozwy r-18u37iz r-1wtj0ep"
                        >
                          <div className="css-175oi2r r-18u37iz r-1habvwh">
                            <div>
                              <div
                                dir="auto"
                                className="css-1rynq56 r-op4f77 r-1et8rh5 r-1b43r93 r-1rsjblm"
                              >
                                {item.name}
                              </div>
                            </div>
                          </div>

                          <div className="css-175oi2r">
                            <div>
                              <div className="css-175oi2r r-1awozwy r-18u37iz r-1h0z5md">
                                <div className="css-175oi2r r-1awozwy r-18u37iz r-1777fci r-1d4mawv">
                                  <div
                                    className="css-175oi2r"
                                    style={{
                                      flexDirection: "row",
                                      alignItems: "flex-end",
                                    }}
                                  >
                                    <div
                                      dir="auto"
                                      className="css-1rynq56 r-op4f77 r-1rsjblm r-1vzi8xi r-1et8rh5 r-1b43r93"
                                    >
                                      {typeof item.amount == "number"
                                        ? `₹${item.amount.toLocaleString()}`
                                        : item.amount}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Total section */}
        <div className="css-175oi2r">
          <div className="css-175oi2r">
            <div className="css-175oi2r r-1k9g4g2 r-qwd59z r-eg6o18 r-rs99b7 r-109y4c4 r-1ydw1k6 r-1c6vhvp"></div>
            <div className="css-175oi2r r-eqz5dr r-f1odvy r-14gqq1x r-1qhn6m8 r-13qz1uu"></div>

            <div className="css-175oi2r r-1awozwy r-18u37iz r-ur6pnr r-1wtj0ep r-ymttw5 r-1ji8njp">
              <div
                dir="auto"
                className="css-1rynq56 r-op4f77 r-1vgyyaa r-1b43r93 r-1rsjblm r-1vzi8xi"
              >
                Total Amount{" "}
              </div>
              <div className="css-175oi2r r-18u37iz r-1awozwy">
                <div
                  className="css-175oi2r"
                  style={{ flexDirection: "row", alignItems: "flex-end" }}
                >
                  <div
                    dir="auto"
                    className="css-1rynq56 r-op4f77 r-1vzi8xi r-1vgyyaa r-1b43r93 r-1rsjblm"
                  >
                    {`₹${totalPrice.toLocaleString()}`}
                  </div>
                </div>
              </div>
            </div>

            <div className="css-175oi2r r-1awozwy r-qb67uj r-1xfd6ze r-18u37iz r-1777fci r-1ifxtd0 r-1ow6zhx r-88pszg r-edyy15">
              <div
                dir="auto"
                className="css-1rynq56 r-op4f77 r-1b43r93 r-1rsjblm"
              >
                You will save ₹{totalDis} on this order{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriceDetails;
