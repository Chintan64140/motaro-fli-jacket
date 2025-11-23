import React from "react";
import { toKeyValueArray } from "../../../func";

const Specifications = ({ spec }) => {
  return (
    <div>
      <p className="mx-[16px] text-[#333] text-[19px] inter font-[700] mb-8 mt-8">All details</p>

      <div className="grid grid-cols-2">
        {toKeyValueArray(spec).map((item, index) => (
          <div
            className="grid-formation-dynamic roboto"
            style={{ minWidth: "50%", maxWidth: "100%" }}
          >
            <div
              className="_1psv1zeb9 _1psv1ze0 _1psv1zei0 _1psv1ze90 _1psv1ze29 _1psv1ze4i _1psv1zegc _1psv1zedi"
              style={{
                display: "flex",
                flexBasis: "auto",
                flexDirection: "column",
                flexShrink: 0,
                alignItems: "stretch",
                minHeight: 0,
                minWidth: 0,
                position: "relative",
                zIndex: 0,
                boxSizing: "border-box",
                borderWidth: 0,
              }}
            >
              <div
                className="v1zwn21j v1zwn27 _1psv1zeb9 _1psv1ze0 _1psv1ze9x _1psv1ze7o"
                font="default-fk-font-m"
                style={{
                  color: "rgb(112, 112, 112)",
                  boxSizing: "border-box",
                  display: "inline",
                  whiteSpace: "pre-wrap",
                  overflowWrap: "break-word",
                  borderWidth: 0,
                }}
              >
                {item.key}
              </div>

              <div
                className="v1zwn21i v1zwn26 _1psv1zeb9 _1psv1ze0 _1psv1ze9x _1psv1ze7o _1psv1ze53"
                font="s"
                style={{
                  color: "rgb(51, 51, 51)",
                  boxSizing: "border-box",
                  display: "inline",
                  whiteSpace: "pre-wrap",
                  overflowWrap: "break-word",
                  borderWidth: 0,
                  flexShrink: 1,
                }}
              >
                {item.value}
              </div>

              <div
                className="_1psv1zeb9 _1psv1ze0 _7dzyg21r _1o6mltl1r _1psv1zefr _1psv1ze4i _1psv1zek9 _1psv1zedi _1psv1zei0 _1psv1ze90 _1psv1ze6r"
                style={{
                  display: "flex",
                  flexBasis: "auto",
                  flexDirection: "column",
                  flexShrink: 0,
                  alignItems: "stretch",
                  minHeight: 0,
                  minWidth: 0,
                  position: "absolute",
                  zIndex: 0,
                  boxSizing: "border-box",
                  borderWidth: 0,
                  bottom: 0,
                  backgroundColor: "rgb(240, 240, 240)",
                  borderBottomColor: "rgb(240, 240, 240)",
                  height: "1px",
                  overflow: "hidden",
                  left: "16px",
                  right: "16px",
                }}
              >
                <div
                  className="v1zwn23a v1zwn21 _1psv1zeb9 _1psv1ze0"
                  font="s"
                  style={{
                    color: "rgba(0, 0, 0, 0)",
                    boxSizing: "border-box",
                    display: "inline",
                    whiteSpace: "pre-wrap",
                    overflowWrap: "break-word",
                    borderWidth: 0,
                  }}
                >
                  Breil By Fort Collins
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Specifications;
