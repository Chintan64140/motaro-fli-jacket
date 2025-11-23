import React from "react";

import { Link } from "react-router-dom";
import "./flipstyles.css";

export default function ProductCard({
  product,
  imageClass,
  imageContainerStyle = "",
}) {
  // console.log(product, "adlkjskdjlkc");

  const imagess = product.imgdata.images.filter(
    (iii) => iii.type == "background"
  );

  return (
    <div>
      <Link to={`/prod?id=${product.id}`}>
        <div className="css-175oi2r r-1pi2tsx">
          <div
            data-observerid-94c2fba5-54af-453e-80f7-576320bd3096="6a5aaa5f-5728-4060-969a-ae17a181f27b"
            style={{ height: "100%", width: "100%" }}
          >
            <div style={{ height: "100%", width: "100%" }}>
              <div
                className="css-175oi2r r-1habvwh r-eqz5dr r-1h0z5md"
                style={{ width: "185px" }}
              >
                <div
                  className="css-175oi2r r-eqz5dr r-1u7ml5x r-1udh08x"
                  style={{ width: "185px", paddingBottom: "0px" }}
                >
                  <div
                    className="css-175oi2r r-13awgt0"
                    style={{ width: "185px" }}
                  >
                    <div
                      className={`css-175oi2r r-1awozwy r-1q9bdsx r-1h0z5md r-1udh08x ${imageContainerStyle}`}
                      style={{ width: "185px", height: "246.05px" }}
                    >
                      <div
                        className="css-175oi2r"
                        style={{
                          position: "absolute",
                          top: 0,
                          left: 0,
                          width: "100%",
                          height: "100%",
                          backgroundColor: "rgb(0, 0, 0)",
                          opacity: 0.04,
                          zIndex: 1,
                        }}
                      ></div>

                      <div
                        style={{
                          display: "flex",
                          position: "relative",
                          width: "185px",
                          height: "246.05px",
                        }}
                      >
                        <img
                          className={`${imageClass}`}
                          src={imagess[0].src}
                          alt=""
                          loading="lazy"
                          height="246.05"
                          width="185"
                          style={{
                            filter: "none",
                            opacity: 1,
                            transition: "filter 0.5s ease, opacity 0.5s ease",
                            width: "100%",
                            height: "100%",
                            margin: "auto",
                            objectFit: "contain",
                          }}
                        />
                      </div>
                    </div>

                    {/* Rating Box */}
                    {product.rating && product.rating_count && (
                      <div
                        className="css-175oi2r r-1p0dtai r-1d2f490 r-u8s1d"
                        style={{ height: "38px", zIndex: 1, padding: "6px" }}
                      >
                        <div
                          className="css-175oi2r"
                          style={{
                            flexDirection: "row",
                            padding: "2px",
                            borderRadius: "4px",
                            backgroundColor: "#fff",
                            alignItems: "center",
                            opacity: 0.88,
                          }}
                        >
                          <div
                            className="css-1rynq56"
                            style={{
                              color: "#000",
                              padding: "2px",
                              fontSize: "10px",
                              lineHeight: "16px",
                              fontFamily: "inter_semi_bold",
                            }}
                          >
                            {product.rating}
                          </div>

                          <div
                            className="css-175oi2r"
                            style={{ flexDirection: "row" }}
                          >
                            <div
                              style={{
                                display: "flex",
                                position: "relative",
                                width: "12px",
                                height: "12px",
                              }}
                            >
                              <img
                                src="https://rukminim2.flixcart.com/www/24/24/promos/15/12/2024/a72b6403-9a02-41f8-b683-a78d9f54a61e.png?q=90"
                                alt=""
                                loading="lazy"
                                height="12"
                                width="12"
                                style={{
                                  width: "100%",
                                  height: "100%",
                                  objectFit: "contain",
                                }}
                              />
                            </div>
                          </div>

                          <div
                            className="css-1rynq56"
                            style={{
                              color: "rgb(96, 98, 101)",
                              padding: "2px",
                              fontSize: "10px",
                            }}
                          >
                            | {product.rating_count}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Product Title + Brand */}
                  <div
                    className="css-175oi2r r-1habvwh r-eqz5dr r-1h0z5md r-1hvjb8t r-5njf8e"
                    style={{
                      width: "185px",
                      paddingTop: "10px",
                      paddingBottom: "0px",
                      paddingLeft: "0px",
                    }}
                  >
                    <div
                      className="css-175oi2r r-1awozwy r-6koalj r-18u37iz r-1hjwoze r-1wtj0ep r-1pcdyqj"
                      style={{ width: "181px" }}
                    >
                      <div className="css-1rynq56 !font-[700] roboto">
                        {product.brand}
                      </div>
                    </div>

                    <div
                      className="css-175oi2r r-18u37iz r-1pcdyqj"
                      style={{ width: "169px" }}
                    >
                      <div className="css-1rynq56 text-ellipsis break-keep !whitespace-nowrap truncate">
                        {product.name}
                      </div>
                    </div>

                    {/* Price Section */}
                    <div className="css-175oi2r r-1h8ys4a">
                      <div className="css-175oi2r r-18u37iz r-1wtj0ep r-1awozwy">
                        <div
                          className="css-175oi2r r-1w6e6rj r-1wbh5a2"
                          style={{
                            flexDirection: "row",
                            justifyContent: "flex-start",
                            alignItems: "center",
                          }}
                        >
                          {/* Discount */}
                          <div
                            className="css-175oi2r"
                            style={{ marginRight: "4px" }}
                          >
                            <div className="css-175oi2r">
                              <div
                                className="css-175oi2r r-11wrixw r-1awozwy r-18u37iz"
                                style={{ fontFamily: "inter_semi_bold" }}
                              >
                                <svg
                                  width="14"
                                  height="14"
                                  viewBox="0 0 12 12"
                                  fill="none"
                                >
                                  <path
                                    d="M6.73461 1V8.46236L9.5535 5.63352L10.5876 6.65767L5.99384 11.2415L1.41003 6.65767L2.42424 5.63352L5.25307 8.46236V1H6.73461Z"
                                    fill="#4BB550"
                                  ></path>
                                </svg>

                                <div
                                  className="css-1rynq56 r-11wrixw r-gy4na3"
                                  style={{
                                    fontFamily: "inter_semi_bold",
                                    fontSize: "14px",
                                    color: "rgb(75, 181, 80)",
                                  }}
                                >
                                  {product.priceObj.discount}%
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Original Price */}
                          <div
                            className="css-175oi2r"
                            style={{ marginRight: "4px" }}
                          >
                            <div
                              className="css-1rynq56 !text-[#878787] !line-through"
                              style={{
                                fontFamily: "inter_semi_bold",
                                fontSize: "14px",
                              }}
                            >
                              ₹{product.priceObj.mrp.toLocaleString()}
                            </div>
                          </div>

                          {/* Discounted Price */}
                          <div className="css-175oi2r">
                            <div
                              className="css-1rynq56"
                              style={{
                                fontFamily: "inter_semi_bold",
                                fontSize: "14px",
                              }}
                            >
                              ₹{product.priceObj.selling_price.toLocaleString()}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Additional Offer */}
                    <div
                      className="css-175oi2r r-18u37iz r-1awozwy r-1w6e6rj"
                      style={{ marginTop: "4px" }}
                    >
                      <div
                        className="css-175oi2r r-18u37iz r-1awozwy r-1w6e6rj"
                        style={{
                          marginTop: "4px",
                          padding: "4px",
                          borderRadius: "2px",
                          backgroundColor: "rgb(233, 222, 255)",
                        }}
                      >
                        <div
                          dir="auto"
                          className="css-1rynq56"
                          style={{
                            backgroundColor: "rgba(0, 0, 0, 0)",
                            fontSize: "12px",
                            color: "rgb(82, 9, 219)",
                            fontFamily:
                              '"Roboto Medium", Roboto-Medium, "Droid Sans", HelveticaNeue-Medium, "Helvetica Neue Medium", sans-serif-medium',
                            fontStyle: "normal",
                          }}
                        >
                          SuperCoin Deal
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Favorite Icon */}
                {/* <div
                className="css-175oi2r"
                style={{
                  backgroundColor: "#fff",
                  opacity: 0.88,
                  borderRadius: "20px",
                  borderWidth: "1px",
                  borderColor: "#fff",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "28px",
                  width: "28px",
                  position: "absolute",
                  right: "6px",
                  top: "6px",
                }}
              >
                <div style={{ width: "20px", height: "20px", display: "flex" }}>
                  <img
                    src="https://rukminim2.flixcart.com/www/40/40/promos/30/06/2025/ca99011a-0436-4c4c-a3e6-3a5d6ef01f75.png?q=90"
                    alt=""
                    loading="lazy"
                    height="20"
                    width="20"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "contain",
                    }}
                  />
                </div>
              </div> */}
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
