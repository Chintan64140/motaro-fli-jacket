import React from "react";

export default function PrivacyPolicy({
  siteUrl,
  companyName,
  contactEmail,
  address,
}) {
  return (
    <main className="container mx-auto  py-12 monts">
      <article
        className="
          max-w-3xl mx-auto 
          
          p-4
          rounded-2xl shadow-lg 
         
          transition-all duration-300
        "
      >
        <header className="mb-8">
          <h1 className="text-4xl font-extrabold text-neutral-900 ">
            Privacy Policy
          </h1>
          <p className="mt-3 text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
            This Privacy Policy describes how your personal information is
            collected, used, and shared when you visit or make a purchase from
            <a
              href={siteUrl}
              className="underline text-primary font-medium hover:opacity-75 ml-1"
            >
              {siteUrl}
            </a>{" "}
            (the “Site”).
          </p>
        </header>

        {/* ----------- SECTION ----------- */}
        <section className="space-y-4 mb-10">
          <h2 className="text-2xl font-semibold">
            Personal Information We Collect
          </h2>

          <h3 className="text-xl font-medium">Device Information</h3>
          <p className="leading-relaxed">
            When you visit the Site, we automatically collect certain
            information about your device including browser, IP address, time
            zone, and cookies. We may also collect information through social
            media logins depending on permissions granted.
          </p>

          <p className="leading-relaxed">
            As you browse, we collect page views, referring websites or search
            terms, and user interaction details — called{" "}
            <strong>“Device Information.”</strong>
          </p>

          <h3 className="text-xl font-medium">Tracking Technologies</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>
              <strong>Cookies</strong> — store browsing data and identifiers.
            </li>
            <li>
              <strong>Log files</strong> — track actions on the Site (IP,
              browser, ISP, timestamps).
            </li>
            <li>
              <strong>Web beacons / pixels</strong> — record how you browse.
            </li>
            <li>
              <strong>Embedded scripts</strong> — measure interactions.
            </li>
          </ul>

          <p className="leading-relaxed">
            These help us analyze trends, administer the Site, enhance user
            experience, and run marketing campaigns.
          </p>

          <h3 className="text-xl font-medium">Order Information</h3>
          <p>
            When making a purchase, we collect name, billing/shipping address,
            payment details (not stored), email, and phone — collectively known
            as <strong>“Order Information.”</strong>
          </p>

          <p>
            <strong>“Personal Information”</strong> includes both Device
            Information and Order Information.
          </p>
        </section>

        {/* ----------- SECTION ----------- */}
        <section className="space-y-4 mb-10">
          <h2 className="text-2xl font-semibold">
            How We Use Your Personal Information
          </h2>

          <p>We use Order Information to:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Fulfill orders, process payments, and arrange shipping.</li>
            <li>Send invoices and confirmations.</li>
          </ul>

          <p>We may also use personal data to:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Communicate and send marketing updates (with consent).</li>
            <li>Screen orders for fraud and risks.</li>
            <li>Enhance user experience and improve the Site.</li>
          </ul>

          <p>
            Device Information helps detect fraud (e.g., IP tracking) and
            optimize our marketing.
          </p>
        </section>

        {/* ----------- SECTION ----------- */}
        <section className="space-y-4 mb-10">
          <h2 className="text-2xl font-semibold">
            Sharing Your Personal Information
          </h2>
          <p>
            We share data with service providers (shipping, payments, hosting,
            analytics) strictly for service-related purposes.
          </p>

          <p>
            Information may be shared to comply with laws, protect rights, or
            during mergers or acquisitions.
          </p>
        </section>

        {/* ----------- SECTION ----------- */}
        <section className="space-y-4 mb-10">
          <h2 className="text-2xl font-semibold">Opt-Outs & Choices</h2>

          <p>You may opt out of interest-based advertising:</p>

          <ul className="list-disc pl-5 space-y-1">
            <li>
              <a
                href="https://www.facebook.com/settings/?tab=ads"
                target="_blank"
                rel="noreferrer"
                className="text-primary underline hover:opacity-75"
              >
                Facebook Ads Settings
              </a>
            </li>
            <li>
              <a
                href="https://www.google.com/settings/ads/anonymous"
                target="_blank"
                rel="noreferrer"
                className="text-primary underline hover:opacity-75"
              >
                Google Ads Settings
              </a>
            </li>
            <li>
              <a
                href="https://about.ads.microsoft.com/en-us/resources/policies/personalized-ads"
                target="_blank"
                rel="noreferrer"
                className="text-primary underline hover:opacity-75"
              >
                Microsoft Ads
              </a>
            </li>
          </ul>

          <p>
            To stop marketing emails, click <strong>unsubscribe</strong> or
            contact{" "}
            <a
              href={`mailto:${contactEmail}`}
              className="underline text-primary"
            >
              {contactEmail}
            </a>
            .
          </p>
        </section>

        {/* ----------- SECTION ----------- */}
        <section className="space-y-4 mb-10">
          <h2 className="text-2xl font-semibold">Your Rights</h2>
          <p>
            European residents may request access, correction, updates, or
            deletion of personal data. Contact us at{" "}
            <a
              href={`mailto:${contactEmail}`}
              className="underline text-primary"
            >
              {contactEmail}
            </a>
            .
          </p>
        </section>

        {/* ----------- SECTION ----------- */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold">Data Retention</h2>
          <p>We retain order information as long as reasonably necessary.</p>
        </section>

        {/* ----------- SECTION ----------- */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold">Minors</h2>
          <p>
            Users under 13 are not allowed to submit personal information. Any
            such data will be deleted.
          </p>
        </section>

        {/* ----------- SECTION ----------- */}
        <section>
          <h2 className="text-2xl font-semibold">Changes</h2>
          <p>We may update this Privacy Policy periodically.</p>
        </section>

        {/* ----------- FOOTER ----------- */}
        <footer className="mt-10 pt-6 border-t border-neutral-200 dark:border-neutral-700">
          <h3 className="text-xl font-semibold mb-2">Contact Us</h3>
          <p className="mb-3">For any questions, contact:</p>

          <address className="not-italic space-y-1">
            <div>{companyName}</div>
            <div>{address}</div>
            <div>
              <a
                href={`mailto:${contactEmail}`}
                className="underline text-primary"
              >
                {contactEmail}
              </a>
            </div>
            <div>
              <a href={siteUrl} className="underline text-primary">
                {siteUrl}
              </a>
            </div>
          </address>
        </footer>
      </article>
    </main>
  );
}
