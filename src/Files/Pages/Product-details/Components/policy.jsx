const Policy = ({ features }) => (
  <div
    className="css-175oi2r !border-dt !border-b !border-[#eaeaea] !m-4 "
    style={{
      flexFlow: "wrap",
      flex: "1 1 0%",
      paddingLeft: "16px",
      paddingRight: "16px",
      placeContent: "center",
    }}
  >
    {features.map((item, index) => (
      <div className="grid-formation grid-column-3" key={index}>
        <div className="css-175oi2r">
          <div style={{ height: "100%", width: "100%" }}>
            <div>
              <div
                className="_1psv1zeb9 _1o6mltlbs _7dzyg20 _1psv1ze9l _1psv1ze7i _1psv1ze36 _1psv1ze5f"
                href={item.link}
                style={{
                  alignItems: "stretch",
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
                  backgroundColor: "rgb(255, 255, 255)",
                  justifyContent: "center",
                }}
              >
                <div
                  className="_1psv1zeb9 _1psv1ze0 _1psv1ze90 _1psv1ze6r _1psv1ze29 _1psv1ze4i _1o6mltlbs"
                  style={{
                    display: "flex",
                    flexBasis: "auto",
                    flexDirection: "column",
                    flexShrink: 0,
                    alignItems: "center",
                    minHeight: "0px",
                    minWidth: "0px",
                    position: "relative",
                    zIndex: 0,
                    boxSizing: "border-box",
                    borderWidth: "0px",
                    placeContent: "center flex-end",
                  }}
                >
                  {/* SVG removed */}
                  <div
                    dangerouslySetInnerHTML={{
                      __html: item.icon,
                    }}
                  />

                  <div
                    className="v1zwn21i v1zwn27 _1psv1zeb9 _1psv1ze0"
                    font="default-fk-font-m"
                    style={{
                      color: "rgb(51, 51, 51)",
                      boxSizing: "border-box",
                      display: "inline",
                      whiteSpace: "pre-wrap",
                      overflowWrap: "break-word",
                      borderWidth: "0px",
                      textAlign: "center",
                      placeItems: "center",
                      alignContent: "center",
                      maxHeight: "32px",
                    }}
                  >
                    {item.title}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    ))}
  </div>
);
export default Policy;
