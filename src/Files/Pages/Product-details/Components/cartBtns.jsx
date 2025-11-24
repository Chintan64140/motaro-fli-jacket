const ActionButtons = ({ onClick }) => {
  return (
    <div
      className="_1psv1zeb9 _1psv1ze0"
      style={{
        display: "flex",
        flexDirection: "column",
        flexShrink: 0,
        alignItems: "stretch",
        position: "relative",
        zIndex: 0,
        boxSizing: "border-box",
        borderTopRightRadius: 12,
        borderTopLeftRadius: 12,
      }}
    >
      <div className="css-175oi2r">
        <div
          className="_1psv1zeb9 _1psv1ze0 _7dzyg20 _1psv1ze9l _1psv1ze7o _1psv1ze2u _1psv1ze53"
          style={{
            display: "flex",
            flexDirection: "row",
            flexShrink: 0,
            alignItems: "stretch",
            position: "relative",
            zIndex: 0,
            boxSizing: "border-box",
            backgroundColor: "rgb(255, 255, 255)",
            borderTopRightRadius: 16,
            borderTopLeftRadius: 16,
          }}
        >
          <div
            className="css-175oi2r"
            style={{ display: "flex", flex: "1 1 0%", flexFlow: "row" }}
          >
            {/* Right: Buy at ₹ + rolling numbers */}
            <div className="grid-formation grid-column-1">
              <div
                onClick={() => {
                  onClick();
                }}
                className="_1psv1zeb9 _1psv1ze0 _1psv1zeku _1psv1ze6r"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  flexShrink: 0,
                  alignItems: "stretch",
                  position: "relative",
                  boxSizing: "border-box",
                  overflow: "hidden",
                }}
              >
                <div>
                  <div
                    className="css-175oi2r"
                    style={{
                      height: 44,
                      minWidth: 44,
                      borderRadius: 12,
                      borderColor: "rgb(224, 224, 224)",
                      alignItems: "center",
                      justifyContent: "center",
                      overflow: "hidden",
                      //   paddingLeft: 18,
                      //   paddingRight: 18,
                      display: "flex",
                      borderStyle: "solid",
                      opacity: 1,
                      position: "relative",
                    }}
                  >
                    <div
                      style={{
                        borderRadius: 0,
                        background:
                          "linear-gradient(90deg, rgb(255, 228, 92), rgb(255, 193, 3))",
                        width: "100%",
                        height: "100%",
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
                        Add to cart
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* end right */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActionButtons;
