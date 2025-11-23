import React from "react";
import CategoryScroller from "../Components/CategoryScroller";
import Carousel from "../Components/rtl_carousel";
import ProductCard from "../Components/productCard";
import products from "../Data/products.json";
import { SearchBar } from "../Components/searchBar";

const DEFAULT_ITEMS = [
  {
    label: "Fashion",
    src: "https://rukminim2.flixcart.com/fk-p-flap/116/116/image/f03c562321e764bb.jpg?q=80",
    alt: "Fashion",
  },

  {
    label: "Appliances",
    src: "https://rukminim2.flixcart.com/fk-p-flap/116/116/image/51b0d5f9aabc2462.jpg?q=80",
    alt: "Appliances",
  },
  {
    label: "Beauty",
    src: "https://rukminim2.flixcart.com/fk-p-flap/116/116/image/d31d524f681630af.jpg?q=80",
    alt: "Beauty",
  },
  {
    label: "Electronics",
    src: "https://rukminim2.flixcart.com/fk-p-flap/116/116/image/a080ac3397f3612d.png?q=80",
    alt: "Electronics",
  },
  {
    label: "Toys, Baby...",
    src: "https://rukminim2.flixcart.com/fk-p-flap/116/116/image/d4d87d1307cd2a29.jpg?q=80",
    alt: "Toys, Baby...",
  },

  {
    label: "Mobiles",
    src: "https://rukminim2.flixcart.com/fk-p-flap/116/116/image/a6189afdd765a687.jpg?q=80",
    alt: "Mobiles",
  },
  {
    label: "Food & Health",
    src: "https://rukminim2.flixcart.com/fk-p-flap/116/116/image/f9ebd80a4825f28e.jpg?q=80",
    alt: "Food & Health",
  },
  {
    label: "Home & Kitchen",
    src: "https://rukminim2.flixcart.com/fk-p-flap/116/116/image/506347d817d14025.jpg?q=80",
    alt: "Home & Kitchen",
  },

  {
    label: "Furniture",
    src: "https://rukminim2.flixcart.com/fk-p-flap/116/116/image/9be859f78d39cc22.jpg?q=80",
    alt: "Furniture",
  },
  {
    label: "Sports",
    src: "https://rukminim2.flixcart.com/fk-p-flap/116/116/image/c632b839ac6d183e.jpg?q=80",
    alt: "Sports",
  },
];

const HeroImage = [
  "https://rukminim2.flixcart.com/fk-p-flap/1580/770/image/4db52c66f1b3734e.jpeg?q=80",
  "https://rukminim2.flixcart.com/fk-p-flap/764/372/image/abbcd1baf1b1d2a7.jpg?q=80",
  "https://rukminim2.flixcart.com/fk-p-flap/764/372/image/53a669cfe955808b.jpg?q=80",

  "https://rukminim2.flixcart.com/fk-p-flap/1580/770/image/b6f5aa620f2b7163.jpeg?q=80",
  "https://rukminim2.flixcart.com/fk-p-flap/1580/770/image/8ef545cbbf40d710.jpeg?q=80",
  "https://rukminim2.flixcart.com/fk-p-flap/1580/770/image/0506364bdd1ca808.jpeg?q=80",

  "https://rukminim2.flixcart.com/fk-p-flap/1580/770/image/fe5641546059d994.png?q=80",
  "https://rukminim2.flixcart.com/fk-p-flap/1580/770/image/470239ac20669b63.jpg?q=80",
  "https://rukminim2.flixcart.com/fk-p-flap/1580/770/image/11e23ebaf776af04.jpeg?q=80",
  "https://rukminim2.flixcart.com/fk-p-flap/1580/770/image/71668bcc21ef73c7.jpg?q=80",
];

const Landing = () => {
  console.log(products, "productsproducts");

  return (
    <div className="pt-2">
      <div className="p-3">
        <Carousel
          animate={true}
          images={HeroImage}
          dotsDistance="-10px"
          styles={{
            height: "186px",
            borderRadius: "10px",
          }}
        />
      </div>

      <div className="py-6 pb-0">
        <CategoryScroller items={DEFAULT_ITEMS} />
      </div>
      <div>
        <SearchBar />
      </div>
      <div className="flex w-full flex-wrap justify-center !mt-2 gap-4">
        {products.map((product, index) => (
          <div key={index} className="css-175oi2r r-18u37iz p-[8px_16px]">
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Landing;
