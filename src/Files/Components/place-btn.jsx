import React from "react";

const PlaceBtn = ({ totalPrice, onClick }) => {
  return (
    <div
      className="css-175oi2r r-13awgt0 r-eqz5dr mb-[0px] !fixed bottom-[0px] left-[0px] w-full"
      style={{
        backgroundColor: "rgb(255, 255, 255)",
        // margin: "0px 0px 10px",
        boxShadow: "rgba(0, 0, 0, 0.15) 0px -4px 4px -2px",
      }}
    >
      <div
        className="css-175oi2r"
        style={{ flexDirection: "column", flex: "1 1 0%" }}
      >
        <div
          className="css-175oi2r"
          style={{
            flexDirection: "row-reverse",
            padding: 8,
            alignItems: "center",
            justifyContent: "space-between",
            maxWidth: 430,
          }}
        >
          <div>
            <div
              className="css-175oi2r r-1awozwy r-18u37iz r-eu3ka r-1777fci r-1kneemv"
              style={{ backgroundColor: "rgb(255, 194, 0)", borderRadius: 4 }}
              onClick={onClick}
            >
              <div
                dir="auto"
                className="css-1rynq56 r-1vgyyaa r-ubezar r-1rsjblm"
                style={{ color: "rgb(32, 34, 36)" }}
              >
                Place order
              </div>
            </div>
          </div>

          <div>
            <div
              className="css-175oi2r"
              style={{
                flexDirection: "column",
                flex: "1 1 0%",
                marginLeft: 8,
                alignItems: "flex-start",
                justifyContent: "center",
              }}
            >
              <div className="css-175oi2r">
                <div
                  dir="auto"
                  className="css-1rynq56"
                  style={{ color: "rgb(17, 17, 18)" }}
                >
                  <span className="css-1qaijid r-1h7g6bg r-1et8rh5 r-1enofrn r-1rsjblm r-1d4mawv r-1vzi8xi r-142tt33 r-1a2p6p6">
                    {totalPrice.totalMRP}
                  </span>
                </div>

                <div
                  className="css-175oi2r"
                  style={{
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "row",
                  }}
                >
                  <div className="css-175oi2r r-1awozwy r-18u37iz r-1h0z5md">
                    <div className="css-175oi2r r-1awozwy r-18u37iz r-1777fci r-1d4mawv">
                      <div
                        className="css-175oi2r"
                        style={{ flexDirection: "row", alignItems: "flex-end" }}
                      >
                        <div
                          dir="auto"
                          className="css-1rynq56 r-op4f77 r-1vgyyaa r-adyw6z r-1rsjblm r-1vzi8xi"
                          style={{ marginRight: 0 }}
                        >
                          ₹{totalPrice.totalSell}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="css-175oi2r"
        style={{ height: 1, backgroundColor: "rgb(234, 234, 234)" }}
      ></div>
    </div>
  );
};

export default PlaceBtn;
