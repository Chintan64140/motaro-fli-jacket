"use client";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";


// -----------------------
// 🎯 VALIDATION SCHEMA
// -----------------------
const schema = yup.object({
  name: yup
    .string()
    .required("Name is required")
    .min(3, "Minimum 3 characters")
    .max(30, "Maximum 30 characters"),

  mobile: yup
    .string()
    .required("Mobile number required")
    .matches(/^[6-9]\d{9}$/, "Enter valid mobile number"),

  pin: yup
    .string()
    .required("Pin code required")
    .matches(/^\d{6}$/, "Enter valid 6-digit pin code"),

  address: yup
    .string()
    .required("Address is required")
    .max(255, "Max 255 characters"),

  addressType: yup.string().required("Please select address type"),

  defaultAddress: yup.boolean(),
});


export default function AddressForm() {
  const [loadingPincode, setLoadingPincode] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      name: "",
      mobile: "",
      pin: "",
      city: "",
      state: "",
      address: "",
      defaultAddress: false,
      addressType: "",
    },
  });

  const pinValue = watch("pin");


  // ------------------------
  // 📌 AUTO-FILL PINCODE API
  // ------------------------
  useEffect(() => {
    if (pinValue.length === 6) {
      setLoadingPincode(true);

      fetch(`https://api.postalpincode.in/pincode/${pinValue}`)
        .then((res) => res.json())
        .then((data) => {
          if (data[0].Status === "Success") {
            const post = data[0].PostOffice[0];

            setValue("city", post.District);
            setValue("state", post.State);
          } else {
            setValue("city", "");
            setValue("state", "");
          }
        })
        .finally(() => setLoadingPincode(false));
    }
  }, [pinValue, setValue]);


  // ------------------------
  // 📌 ON SUBMIT
  // ------------------------
  const onSubmit = (data) => {
    console.log("Final Submit Data:", data);

    alert("Address Submitted Successfully!");
  };


  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mx-[90px] xs:mx-4 xs:pt-8">
      {/* NAME */}
      <div className="relative h-12 mt-4">
        <input
          {...register("name")}
          className="peer w-full h-full border border-neutral-400 rounded pl-4 bg-transparent outline-none"
          placeholder=" "
        />
        <label className="floating-label">Name</label>
        {errors.name && <p className="error">{errors.name.message}</p>}
      </div>

      {/* MOBILE */}
      <div className="relative h-12 mt-6">
        <span className="absolute left-4 top-[12px] text-blackSS z-10 select-none">+91</span>
        <input
          {...register("mobile")}
          className="peer w-full h-full border border-neutral-400 rounded pl-12 bg-transparent outline-none"
          placeholder=" "
        />
        <label className="floating-label">Mobile No.</label>
        {errors.mobile && <p className="error">{errors.mobile.message}</p>}
      </div>

      {/* PIN */}
      <div className="relative h-12 mt-6">
        <input
          {...register("pin")}
          maxLength={6}
          className="peer w-full h-full border border-neutral-400 rounded pl-4 bg-transparent outline-none"
          placeholder=" "
        />
        <label className="floating-label">Pin Code</label>
        {errors.pin && <p className="error">{errors.pin.message}</p>}

        {loadingPincode && <p className="text-xs text-blue-500 mt-1">Checking pincode…</p>}
      </div>

      {/* CITY & STATE */}
      <div className="flex gap-4 mt-6 xs:flex-col">
        <div className="relative h-12 w-full">
          <input
            {...register("city")}
            disabled
            className="peer w-full h-full border border-neutral-400 rounded pl-4 bg-gray-100 outline-none"
            placeholder=" "
          />
          <label className="floating-label">City</label>
        </div>

        <div className="relative h-12 w-full">
          <input
            {...register("state")}
            disabled
            className="peer w-full h-full border border-neutral-400 rounded pl-4 bg-gray-100 outline-none"
            placeholder=" "
          />
          <label className="floating-label">State</label>
        </div>
      </div>

      {/* ADDRESS */}
      <div className="relative mt-6">
        <textarea
          {...register("address")}
          rows="2"
          maxLength={255}
          className="peer w-full border border-neutral-400 rounded px-4 py-3 bg-transparent outline-none"
          placeholder=" "
        ></textarea>
        <label className="floating-label">Address</label>
        {errors.address && <p className="error">{errors.address.message}</p>}
      </div>

      {/* DEFAULT ADDRESS CHECKBOX */}
      <div className="flex items-center gap-2 mt-6">
        <input
          type="checkbox"
          {...register("defaultAddress")}
          className="size-4"
        />
        <span className="text-sm text-neutral-700">Use this as default shipping address</span>
      </div>

      {/* ADDRESS TYPE */}
      <div className="mt-6 text-lg text-neutral-700">Address Type</div>

      <div className="flex gap-4 mt-3">
        {["Home", "Work", "Other"].map((item, i) => (
          <label key={i} className="flex items-center gap-2">
            <input
              {...register("addressType")}
              type="radio"
              value={item}
              className="size-4"
            />
            <span>{item}</span>
          </label>
        ))}
      </div>
      {errors.addressType && <p className="error">{errors.addressType.message}</p>}

      {/* SUBMIT BUTTON */}
      <button
        type="submit"
        className="mt-8 w-full bg-black text-white py-3 text-lg rounded"
      >
        Save Address
      </button>

      {/* COMMON STYLE */}
      <style>{`
        .floating-label {
          @apply absolute left-2 top-2 bg-white px-2 text-sm text-neutral-500 
          transition-all duration-300 
          peer-placeholder-shown:top-1/2 
          peer-placeholder-shown:-translate-y-1/2 
          peer-placeholder-shown:scale-100 
          peer-focus:top-1 
          peer-focus:-translate-y-4 
          peer-focus:scale-75 
          peer-focus:text-blue-500 
          scale-75;
        }

        .error {
          @apply text-xs text-red-500 mt-1;
        }
      `}</style>
    </form>
  );
}
