import React from "react";

const DEFAULT_ITEMS = [
  { label: "Winter'25", src: "https://cmsimages.shoppersstop.com/Navigation_icon_2_c65d8259dc/Navigation_icon_2_c65d8259dc.gif", alt: "Winter'25" },
  { label: "Our Brands", src: "https://cmsimages.shoppersstop.com/Navigation_icon_50b521c5ee/Navigation_icon_50b521c5ee.png", alt: "Our Brands" },
  { label: "Men", src: "https://cmsimages.shoppersstop.com/men_navigation_icon_435c2f90a9/men_navigation_icon_435c2f90a9.png", alt: "Men" },
  { label: "Women", src: "https://cmsimages.shoppersstop.com/women_navigation_icon_36e153fbbf/women_navigation_icon_36e153fbbf.png", alt: "Women" },
  { label: "Watches", src: "https://cmsimages.shoppersstop.com/watches_navigation_icon_f22c581bb4/watches_navigation_icon_f22c581bb4.png", alt: "Watches" },
  { label: "Beauty", src: "https://cmsimages.shoppersstop.com/beauty_navigation_icon_b284dd2996/beauty_navigation_icon_b284dd2996.png", alt: "Beauty" },
  { label: "Footwear", src: "https://cmsimages.shoppersstop.com/footwear_navigation_icon_c9e6b486ad/footwear_navigation_icon_c9e6b486ad.png", alt: "Footwear" },
  { label: "Gifts", src: "https://cmsimages.shoppersstop.com/gift_navigation_icon_a4424c8600/gift_navigation_icon_a4424c8600.png", alt: "Gifts" },
  { label: "Bags", src: "https://cmsimages.shoppersstop.com/handbag_navigation_icon_b2dc69f3c1/handbag_navigation_icon_b2dc69f3c1.png", alt: "Bags" },
  { label: "Kids", src: "https://cmsimages.shoppersstop.com/kids_navigation_icon_19d112dd32/kids_navigation_icon_19d112dd32.png", alt: "Kids" },
  { label: "Home", src: "https://cmsimages.shoppersstop.com/homestop_navigation_icon_ff645f4a49/homestop_navigation_icon_ff645f4a49.png", alt: "Home" },
  { label: "Luxe", src: "https://cmsimages.shoppersstop.com/luxe_navigation_icon_0442b03323/luxe_navigation_icon_0442b03323.png", alt: "Luxe" },
  { label: "Bargains", src: "https://cmsimages.shoppersstop.com/bargains_navigation_icon_e824b9fda8/bargains_navigation_icon_e824b9fda8.png", alt: "Bargains" },
];

const CategoryScroller = ({ items = DEFAULT_ITEMS }) => {
  return (
    <div className="px-4 pr-0 md:px-0">
      <div className="bg-transparent no-scrollbar hide-scrollbar flex gap-2 overflow-x-scroll pr-1 md:items-center md:justify-center md:gap-3 lg:gap-4 xl:gap-5">
        {items.map((it, idx) => (
          <div
            key={idx}
            className="bg-transparent items-center flex shrink-0 flex-col gap-2 text-center"
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                // optional: handle keyboard activation
              }
            }}
            onClick={() => {
              // optional: handle click (navigate/filter)
            }}
          >
            <img
              alt={it.alt || it.label}
              src={it.src}
              className="size-[58px] cursor-pointer md:h-[78px] md:w-20 lg:h-[108px] lg:w-28 xl:h-[140px] xl:w-36"
              loading="eager"
            />
            <div className="block roboto text-xs font-normal capitalize !leading-[14px] text-ssBlack lg:mt-3 xl:text-base select-none md:select-text">
              {it.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryScroller;
