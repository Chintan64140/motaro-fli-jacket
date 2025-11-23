"use client";
import React, { useEffect, useState } from "react";
import Carousel from "../../Components/rtl_carousel";
import products from "../../Data/products.json";
import { ProductCardDetails } from "./prod-det";
import ProductImageGallery from "../../Components/utd_carousel";
import { getRandom10 } from "../../func";
import ProductCard from "../../Components/productCard";
import { useCart } from "../../Context/CartContext";
import { useSearchParams } from "react-router-dom";
// import { ProductCardDetails2 } from "../../Components/productPage";

const ProductPage = ({}) => {
  // const { id } = useParams();
  const [searchParams] = useSearchParams();

  const id = searchParams.get("id");

  // const id = searchParams.get("id");
  const [productDetails, setProductDetails] = useState();
  const [selectedSize, setSelectedSize] = useState("");
  const [similar, setSimilar] = useState([]);

  useEffect(() => {
    setSimilar(getRandom10(products));
  }, [products]);

  console.log(selectedSize, "selectedSizeselectedSize");

  useEffect(() => {
    if (products && id) {
      // setProductDetails();
      const prod = products.find((iit) => iit.id == id);
      const images = prod?.imgdata?.images?.filter(
        (img) => img.type === "background"
      );

      const prods = { ...prod, imagesData: images };
      setProductDetails(prods);
    }
  }, [id, products]);
  const { cart, addToCart, removeFromCart, clearCart } = useCart();
  useEffect(() => {
    setSimilar(getRandom10(products));
  }, [products]);
  // console.log(productDetails);
  if (productDetails) {
    const prodincart = cart.find((prod) => prod.id == productDetails.id);
    const cartQty = prodincart?.quantity;

    return (
      <div>
        <div className="flex flex-col md:flex-row lg:flex-row gap-4 md:px-10 ">
          <div className="w-[100%] xs:w-full sm:w-full  md:w-[50%] lg:w-[50%] xl:w-[50%] 2xl:w-[50%]">
            <div className="block md:hidden">
              <Carousel
                animate={false}
                images={productDetails.imagesData.map((iit) => iit.src)}
                rating={productDetails.rating}
              />
            </div>
            <div className="hidden md:block">
              <ProductImageGallery
                images={productDetails.imagesData.map((iit) => iit.src)}
                addToCart={addToCart}
                selectedSize={selectedSize}
                product={productDetails}
                prodincart={prodincart}
                cartQty={cartQty}
                removeFromCart={removeFromCart}
              />
            </div>
          </div>

          <div className="pt-4 max-w-[100%] xs:max-w-full sm:max-w-full lg:max-w-[50%] md:max-w-[50%] xl:max-w-[50%] 2xl:max-w-[50%]">
            <ProductCardDetails
              product={productDetails}
              cartQty={cartQty}
              prodincart={prodincart}
              addToCart={addToCart}
              removeFromCart={removeFromCart}
              selectedSize={selectedSize}
              setSelectedSize={setSelectedSize}
              similar={similar}
            />
          </div>
        </div>
        <div className="flex justify-center">
          <div className="mt-10 hidden md:block max-w-[90%] mb-8">
            <p className="mx-[16px] text-[#333] text-[19px] inter font-[700] mb-8 mt-8">
              Similar Products
            </p>

            <div className="carousel mt-5 flex flex-nowrap overflow-x-auto gap-4">
              {similar.map((item, index) => {
                const imagess = item.imgdata.images.filter(
                  (iii) => iii.type == "background"
                );

                const pric_e = item.priceObj;

                return (
                  <div key={index} className="min-w-[200px]">
                    <ProductCard
                      product={item}
                      id={item.id}
                      brand={item.brand}
                      title={item.name}
                      price={pric_e.selling_price}
                      oldPrice={pric_e.mrp}
                      discount={pric_e.discount}
                      image={imagess[0].src}
                      link={`/prod`}
                      rating={
                        item.rating && item.rating_count
                          ? `${item.rating} | ${item.rating_count}`
                          : ""
                      }
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default ProductPage;
