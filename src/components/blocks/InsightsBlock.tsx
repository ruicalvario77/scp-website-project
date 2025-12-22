// src/components/blocks/InsightsBlock.tsx
export default function InsightsBlock() {
  return (
    <section className="py-16 px-8">
      <div className="container mx-auto">
        <h4 className="text-section-title text-brand-navy mb-4">Insights</h4>
        <h2>Unearthing opportunity</h2>
        
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {/* Insight Article #1 */}
          <div>
            <h5 className="text-highlight mb-2">Insight Article #1 Title Goes Here</h5>
            <p className="text-small">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt...
            </p>
            <a href="#" className="btn-small mt-2 inline-block">Read more</a>
          </div>
          {/* Add the other 2 articles here */}
        </div>
        <button className="btn-primary bg-brand-navy text-white mt-12">
          See all insights
        </button>
      </div>
    </section>
  );
}
