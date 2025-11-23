export default function AboutUs() {
  return (
    <main className="container mx-auto px-4 py-12">
      <article className="prose max-w-none lg:prose-lg mx-auto bg-white ">
        <header>
          <h1 className="text-3xl font-extrabold text-neutral-900">About Us</h1>
          <p className="mt-2 text-sm text-neutral-500">
            Learn more about who we are, what we do, and why we do it.
          </p>
        </header>

        <section className="mt-8">
          <h2 className="text-2xl font-bold text-neutral-900">Who We Are</h2>
          <p className="mt-3 text-neutral-700">
            At <span className="font-semibold">The Montaro</span>, we believe
            shopping should be effortless, inspiring, and enjoyable. What
            started as a small passion project has grown into a trusted online
            destination for customers who appreciate quality, style, and
            convenience.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold text-neutral-900">What We Do</h2>
          <p className="mt-3 text-neutral-700">
            We curate a diverse selection of lifestyle essentials, fashion, and
            modern accessories designed to elevate your everyday life. Each item
            we offer is carefully chosen and quality-checked to make sure you
            receive nothing but the best.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold text-neutral-900">Our Promise</h2>
          <ul className="mt-4 space-y-2 text-neutral-700 list-disc pl-6">
            <li>Premium-quality & authentic products</li>
            <li>Fast and reliable delivery</li>
            <li>Secure checkout experience</li>
            <li>Easy, hassle-free returns</li>
            <li>Friendly customer support</li>
          </ul>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold text-neutral-900">Why Choose Us</h2>
          <p className="mt-3 text-neutral-700">
            Our customers trust us because we focus on transparency, quality,
            and a seamless shopping experience. From curated collections to
            real-time order tracking, every detail is built with you in mind.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold text-neutral-900">Our Vision</h2>
          <p className="mt-3 text-neutral-700">
            Our vision is to become a global lifestyle brand that inspires
            confidence and convenience — making every shopping experience
            smarter, simpler, and more delightful.
          </p>
        </section>
      </article>
    </main>
  );
}
