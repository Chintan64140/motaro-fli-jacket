export default function ShippingPolicy() {
  return (
    <main className="container mx-auto px-4 py-12">
      <article className="prose max-w-none lg:prose-lg mx-auto bg-white ">
        
        <header>
          <h1 className="text-3xl font-extrabold text-gray-900">Shipping Policy</h1>
        </header>

        <h2 className="text-xl font-semibold mt-8">Where All Do We Deliver?</h2>
        <p>
          We deliver to all and any postal address around India. Courier companies do
          not deliver to P.O. Box addresses, so please provide a full street address with
          pin code / zip code.
        </p>
        <p>
          Deliveries are made during normal working hours of courier companies, which vary
          from state to state. No shipments are made on Sundays and public holidays as our
          logistics partners do not pick up on those days.
        </p>

        <h2 className="text-xl font-semibold mt-8">Transit Times</h2>
        <p>
          If you order multiple items, you may receive them in multiple boxes on different
          days due to varying item availability and locations. Sometimes items are shipped
          separately for added safety.
        </p>

        <h2 className="text-xl font-semibold mt-8">Transit Risk</h2>
        <p>
          We ship all parcels fully insured at no extra cost. If the courier fails to deliver,
          you do not suffer any loss. However, we are not responsible for stolen packages or
          damages after parcels are left at the customer's address.
        </p>

        <h2 className="text-xl font-semibold mt-8">Shipment & Tracking Details</h2>
        <p>
          You will receive an email regarding the shipment of your order once items are
          handed over to the courier. This email will include the tracking number and courier
          website details.
        </p>
        <p>
          Tracking numbers may take 24–48 business hours to become active. If it takes longer,
          you may contact us at:
        </p>
        <p className="font-medium">
          Email:{" "}
          <a
            href="mailto:support@montaroenterprice.com"
            className="text-blue-600 underline"
          >
            support@montaroenterprice.com
          </a>
        </p>

        <h2 className="text-xl font-semibold mt-8">Address Change Requests</h2>
        <p>
          Once an order is placed, no alterations can be made. However, address change
          requests may be accepted if made within 24 hours of placing the order.
        </p>

        <h2 className="text-xl font-semibold mt-8">Multiple Address Order</h2>
        <p>
          Sending products to multiple addresses is currently not available. You can place
          separate orders for different delivery addresses.
        </p>

        <h2 className="text-xl font-semibold mt-8">Incorrect or Incomplete Address</h2>
        <p>
          Some courier companies charge penalties for incorrect addresses (e.g., mismatched
          pin codes). Customers must bear such costs. Please ensure the shipping address is
          correct.
        </p>
        <p>
          If your order requires reshipment due to an incorrect address, reshipping charges
          will be applicable.
        </p>

        <h2 className="text-xl font-semibold mt-8">Packing Method</h2>
        <p>
          All products are poly-packed, bubble-wrapped, and placed in a corrugated box.
          Orders are shipped using air or surface courier services, typically delivered
          within 5–7 working days after dispatch.
        </p>

        <h2 className="text-xl font-semibold mt-8">Time to Ship</h2>
        <p>
          Approximate shipping times are mentioned with each product. Items may be shipped
          earlier or later depending on stock availability. Email us with item codes for
          accurate estimates.
        </p>
        <p>
          Most orders are processed within 48–72 hours and delivered within 7–9 business
          days.
        </p>

        <h2 className="text-xl font-semibold mt-8">Shipping Delays</h2>
        <p>
          The availability shown is an approximate dispatch timeline. If an item is out of
          stock or delayed, we will notify you by email. Orders with multiple items may ship
          separately.
        </p>
        <p>
          In rare cases of long delays, we may refund the unfulfilled part of your order.
          Refunds/returns/exchanges are not accepted for delays beyond our control, but store
          credit may be offered.
        </p>

        <h2 className="text-xl font-semibold mt-8">Billing Address vs Shipping Address</h2>
        <p>
          Billing address is where you receive your credit card statements. It is not required
          for Cash on Delivery orders. Shipping address is where the order will be delivered.
        </p>

        <h2 className="text-xl font-semibold mt-8">Lost Shipment</h2>
        <p>
          If your shipment is lost in transit, we wait 15 days before reprocessing or
          reshipping the order. For questions, contact us at the email above.
        </p>
      </article>
    </main>
  );
}
