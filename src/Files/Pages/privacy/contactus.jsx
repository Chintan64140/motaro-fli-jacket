import React from "react";

const ContactUs = () => {
  return (
    <div className="flex !p-4 monts flex-col gap-4  px-2 py-4 md:w-[38%] md:gap-6 md:rounded-xl md:p-4 lg:rounded-2xl lg:p-6 xl:gap-8">
      {/* OUR OFFICE */}
      <div>
        <div className="text-xs font-bold uppercase leading-xs tracking-large text-black md:text-lg md:!leading-[30px] select-none md:select-text">
          OUR OFFICE
        </div>
        <div className="mt-2.5 text-xs font-normal leading-xl text-ssBlackHeavy md:mt-1.5 md:text-sm md:leading-xxl md:text-neutral-600 lg:text-base xl:text-base">
          Shoppers Stop Limited
          <br />
          119, Kashi Textile Market
          <br />
          Opp, STM , Ring Road
          <br />
          Surat - 395002, Gujarat.
        </div>
      </div>

      {/* PHONE */}
      <div>
        <div className="text-xs font-bold uppercase leading-xs tracking-large text-black md:text-lg md:!leading-[30px] select-none md:select-text">
          PHONE
        </div>
        <div className="mt-2.5 text-xs font-normal leading-xl text-ssBlackHeavy md:mt-1.5 md:text-sm md:leading-xxl md:text-neutral-600 lg:text-base xl:text-base">
          Call us on Customer Care no.:{" "}
          <a href="tel:+919825612942" className="underline">
            9825612942
          </a>
          <br />
          Email us at{" "}
          <a href="mailto:support@montaroenterprise.com" className="underline">
            support@montaroenterprise.com
          </a>
          <br />
          (Operational Timings: 08:00 AM to 10:00 PM)
          <br />
        </div>
      </div>

      {/* GRIEVANCE */}
      <div>
        <div className="text-xs font-bold uppercase leading-xs tracking-large text-black md:text-lg md:!leading-[30px] select-none md:select-text">
          For Grievance Related Queries:
        </div>
        <div className="mt-2.5 text-xs font-normal leading-xl text-ssBlackHeavy md:mt-1.5 md:text-sm md:leading-xxl md:text-neutral-600 lg:text-base xl:text-base">
          Important: Grievance desk must be approached post contacting the
          “Customer Care” of Shoppers Stop with a complaint number where desired
          resolution was not received.
          <br />
          <br />
          Any first time query would be redirected to Customer Care.
          <br />
          <br />
          Email ID: support@cglatest.com (Operational Timings:
          Mon-Fri: 10:00am to 5:00pm)
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
