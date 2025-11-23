const SizeSelector = ({ sizes, selectedSize, setSelectedSize }) => {
  return (
    <div
      className="css-175oi2r"
      style={{
        flexDirection: "row",
        paddingLeft: 16,
        paddingRight: 16,
        alignItems: "stretch",
        display: "flex",
      }}
    >
      {sizes.map((item, index) => (
        <div
          key={index}
          className="css-175oi2r"
          style={{ paddingLeft: index === 0 ? 0 : 8 }}
          onClick={() => {
            setSelectedSize(item.size);
          }}
        >
          {/* <a
            href={item.link}
            className="_1psv1zeb9 _1o6mltlbs _1psv1zei0"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              position: "relative",
              borderWidth: 0,
            }}
          > */}
          {/* Box */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              width: 52,
              height: 46,
              borderRadius: 12,
              borderWidth: 1.2,
              borderColor: "rgb(224,224,224)",
              // backgroundColor: "#fff",
              overflow: "hidden",
              boxSizing: "border-box",
            }}
            className={`_1psv1zeb9 _1psv1ze0 ${
              selectedSize == item.size ? "text-[#fff]" : "text-black"
            } ${selectedSize == item.size ? "bg-[#221f20]" : "bg-[#fff]"}`}
          >
            {/* Size label */}
            <div
              style={{
                display: "inline-block",
              }}
            >
              {item.size}
            </div>
          </div>

          {/* Extra note like "1 left" */}
          {item.note && (
            <div
              style={{
                color: "rgb(214,69,7)",
                textAlign: "center",
                marginTop: 4,
                fontSize: 12,
              }}
            >
              {item.note}
            </div>
          )}
          {/* </a> */}
        </div>
      ))}
    </div>
  );
};

export default SizeSelector;
