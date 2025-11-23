import React from "react";

export const Price = ({ price, discount, mrp }) => {
  return (
    <div>
      <div
        className="_1psv1zeb9 _1psv1ze0 _1psv1ze9x _1psv1ze7o _1psv1ze2u _1psv1ze53"
        style={{
          display: "flex",
          flexBasis: "auto",
          flexDirection: "column",
          flexShrink: 0,
          alignItems: "stretch",
          minHeight: "0px",
          minWidth: "0px",
          position: "relative",
          zIndex: 0,
          boxSizing: "border-box",
          borderWidth: "0px",
        }}
      >
        <div
          className="css-175oi2r"
          style={{
            marginBottom: "8px",
            alignSelf: "flex-start",
            overflow: "hidden",
            borderRadius: "4px",
            height: "22px",
            justifyContent: "center",
            maxWidth: "max-content",
          }}
        >
          <div
            className="css-175oi2r"
            style={{
              position: "absolute",
              inset: "0px",
            }}
          >
            <div
              style={{
                borderRadius: "0px",
                background:
                  "linear-gradient(90deg, rgb(0, 158, 74), rgb(0, 158, 74))",
                width: "100%",
                height: "100%",
              }}
            ></div>
          </div>

          <div
            className="css-175oi2r"
            style={{
              paddingRight: "8px",
              paddingLeft: "8px",
            }}
          >
            <div
              className="css-175oi2r"
              style={{
                flexDirection: "row",
                alignItems: "center",
                overflow: "hidden",
              }}
            >
              <div
                dir="auto"
                className="css-1rynq56 r-1udbk01 r-1iln25a"
                style={{
                  color: "rgb(255, 255, 255)",
                  maxWidth: "100%",
                  overflow: "hidden",
                  fontSize: "12px",
                  lineHeight: "16px",
                  fontFamily: "inter_bold",
                  whiteSpace: "nowrap",
                }}
              >
                SuperCoinDeal
              </div>
            </div>
          </div>
        </div>

        <a
          className="_1psv1zeb9 _1o6mltlbs"
          style={{
            alignItems: "center",
            boxSizing: "border-box",
            display: "flex",
            flexBasis: "auto",
            flexDirection: "row",
            flexShrink: 0,
            minHeight: "0px",
            minWidth: "0px",
            position: "relative",
            zIndex: 0,
            borderWidth: "0px",
          }}
        >
          <div className="css-175oi2r">
            <div
              className="_1psv1zeb9 _1psv1ze0"
              style={{
                display: "flex",
                flexBasis: "auto",
                flexDirection: "row",
                flexShrink: 0,
                alignItems: "center",
                minHeight: "0px",
                minWidth: "0px",
                position: "relative",
                zIndex: 0,
                boxSizing: "border-box",
                borderWidth: "0px",
                overflow: "hidden",
              }}
            >
              <svg width="20" height="20" fill="none" viewBox="0 0 12 12">
                <path
                  d="M6 1.875v8.25M2.625 6.75 6 10.125 9.375 6.75"
                  stroke="#008b37ff"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>

              <div
                className="v1zwn21x v1zwn20 _1psv1zeb9 _1psv1ze0 _1psv1zeif"
                font="default-fk-font-m"
                style={{
                  color: "rgb(0, 139, 55)",
                  boxSizing: "border-box",
                  display: "inline",
                  whiteSpace: "nowrap",
                  overflowWrap: "normal",
                  borderWidth: "0px",
                  alignContent: "center",
                  maxWidth: "100%",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
              >
                {discount}%
              </div>
            </div>
          </div>

          <div className="css-175oi2r">
            <div
              className="v1zwn21j v1zwn21 _1psv1zeb9 _1psv1ze0 _1psv1zeif"
              font="default-fk-font-m"
              style={{
                color: "rgb(112, 112, 112)",
                boxSizing: "border-box",
                display: "inline",
                whiteSpace: "pre-wrap",
                overflowWrap: "break-word",
                borderWidth: "0px",
                alignContent: "center",
                textDecorationLine: "line-through",
              }}
            >
              {mrp.toLocaleString()}
            </div>
          </div>

          <div className="css-175oi2r">
            <div
              className="v1zwn21i v1zwn20 _1psv1zeb9 _1psv1ze0"
              font="default-fk-font-m"
              style={{
                color: "rgb(51, 51, 51)",
                boxSizing: "border-box",
                display: "inline",
                whiteSpace: "pre-wrap",
                overflowWrap: "break-word",
                borderWidth: "0px",
                alignContent: "center",
              }}
            >
              ₹{price.toLocaleString()}
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};
