// src/components/blocks/ContactFormBlock.tsx
export default function ContactFormBlock() {
  return (
    <section className="bg-brand-navy text-white py-16 px-8">
      <div className="container mx-auto grid md:grid-cols-2 gap-12">
        {/* Left Side: Contact Info */}
        <div>
          <h2>Get in Touch</h2>
          <p className="text-small mt-4">
            Subscribe to SCP Insights for thought leadership on precious metals and real assets.
          </p>
          <div className="mt-8 space-y-3 text-small">
            <p>t. 416-637-2707</p>
            <p>e. info@scp-rf.com</p>
            <p>a. 70 York Street, Suite 700, Toronto, ON M5J 1S9</p>
          </div>
        </div>

        {/* Right Side: Form Placeholder */}
        <div>
          <form className="space-y-4">
            <input type="text" placeholder="Name" className="w-full p-3 text-brand-navy" />
            <input type="email" placeholder="Email" className="w-full p-3 text-brand-navy" />
            <input type="text" placeholder="Subject" className="w-full p-3 text-brand-navy" />
            <textarea placeholder="Message" rows={4} className="w-full p-3 text-brand-navy"></textarea>
            <button type="submit" className="btn-primary bg-brand-gold text-brand-navy">
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
