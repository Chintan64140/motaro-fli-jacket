import React from "react";

export default function ReturnRefundPolicy({ email, name, address, mobile }) {
  return (
    <main className="container mx-auto px-4 py-12">
      <article className="max-w-3xl mx-auto bg-white   bsorder border-neutral-200 dark:border-neutral-700">
        <header className="mb-8">
          <h1 className="text-4xl font-extrabold text-neutral-900 ">
            Return & Refund Policy
          </h1>
        </header>

        <div className="space-y-6 text-neutral-700 darrk:text-neutral-300 leading-relaxed">
          <p className="font-medium text-lg">
            What Are Our Refund / Cancellation / Return Policies?
          </p>

          <p className="italic text-red-600 dark:text-red-400">
            Note: Customers must record a parcel opening video when receiving
            the parcel. No video = No return.
          </p>

          <p>
            We make every effort to fulfill all orders. However, certain orders
            may be cancelled due to:
          </p>

          <ul className="list-disc pl-6 space-y-1">
            <li>Limitations on stock quantity</li>
            <li>Pricing or product information errors</li>
            <li>Fraud risk identified by our system</li>
          </ul>

          <p>
            If your order is cancelled after payment, the amount will be
            refunded back to your original payment method.
          </p>

          <p>
            If you wish to cancel your order, contact customer support
            immediately. Orders already processed or shipped cannot be
            cancelled.
          </p>

          {/* ---------------- REFUNDS ---------------- */}
          <section>
            <h2 className="text-2xl font-semibold mt-8 mb-3">1. Refunds</h2>

            <p>Refunds will be issued in the same mode of payment:</p>

            <ul className="list-disc pl-6 space-y-1">
              <li>Credit/Debit Card or Net Banking → Refund to same account</li>
              <li>Cash on Delivery (COD) → Refund to preferred bank account</li>
            </ul>

            <p className="mt-3">
              Refunds typically take <strong>5–6 business days</strong> to
              reflect.
            </p>

            <p>
              For any refund-related questions, email:{" "}
              <a href={`mailto:${email}`} className="text-primary underline">
                {email}
              </a>
            </p>
          </section>

          {/* ---------------- RETURNS ---------------- */}
          <section>
            <h2 className="text-2xl font-semibold mt-8 mb-3">
              2. Returns Policy
            </h2>

            <p>
              The entire return process takes about{" "}
              <strong>6–8 business days</strong>.
            </p>

            <p className="font-medium">
              Products can be returned within <strong>30 days</strong> if:
            </p>

            <ul className="list-disc pl-6 space-y-1">
              <li>Product is damaged or defective</li>
              <li>Wrong product received</li>
              <li>Not in good condition upon arrival</li>
            </ul>

            <p>
              Returned items must be unused, in original packaging, with all
              tags and invoice.
            </p>

            <p className="text-red-600 dark:text-red-400">
              Do not accept delivery if outer packaging is damaged.
            </p>

            <p>Products damaged after use are not eligible for return.</p>

            <p>If replacement is not possible, a full refund will be issued.</p>

            <p>
              Reverse pickup usually takes 3–6 business days but may take
              longer.
            </p>

            <p>
              If reverse pickup is unavailable, you must courier the product to
              us. Courier fees up to <strong>₹120</strong> will be refunded upon
              receipt submission.
            </p>

            <p className="font-medium">
              The customer is responsible for ensuring the product reaches our
              warehouse safely.
            </p>

            <p>
              Refund will be initiated only after the returned item passes
              quality check.
            </p>

            <p className="text-yellow-600 dark:text-yellow-400">
              Accounts with excessive returns may have COD disabled or charged
              ₹99 for shipping.
            </p>

            <p>Used, washed, or tampered products cannot be returned.</p>

            <p>
              You must request return/exchange within <strong>30 days</strong>{" "}
              of delivery.
            </p>

            <p>
              A courier airway bill will be provided at pickup — keep it safe
              for reference.
            </p>
          </section>

          {/* ---------------- CANCELLATION ---------------- */}
          <section>
            <h2 className="text-2xl font-semibold mt-8 mb-3">
              3. Cancellation Policy
            </h2>

            <p>
              To cancel an order, contact customer support via phone or email.
            </p>

            <p>
              Once confirmed, a cancellation message will be sent to your
              registered email/mobile.
            </p>
          </section>

          {/* ---------------- CONTACT ---------------- */}
          <section>
            <h2 className="text-2xl font-semibold mt-8 mb-3">
              Contact Support
            </h2>

            <p>
              Email:{" "}
              <a href={`mailto:${email}`} className="text-primary underline">
                {email}
              </a>
            </p>  

            <p>
              Phone: <strong>+91 {mobile}</strong>
            </p>

            <h3 className="text-xl font-semibold mt-4">Address:</h3>
            <p>DV INFOTECH (Techbesb.in)</p>
            <p>{address}</p>
            <p>Surat, Gujarat - 395002</p>
          </section>
        </div>
      </article>
    </main>
  );
}
