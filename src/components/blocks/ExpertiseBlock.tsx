// src/components/blocks/ExpertiseBlock.tsx
export default function ExpertiseBlock() {
  return (
    <section className="bg-brand-cloud py-16 px-8">
      <div className="container mx-auto">
        <h4 className="text-section-title text-brand-navy mb-12">Expertise</h4>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 bg-white shadow-sm">
            <h5 className="text-section-title text-brand-blue mb-4">Research & strategy</h5>
            <p className="text-small">
              Leverage proprietary market, company, and commodity insights for improved strategic and investment decision-making.
            </p>
          </div>
          <div className="p-6 bg-white shadow-sm">
            <h5 className="text-section-title text-brand-blue mb-4">Investment banking</h5>
            <p className="text-small">
              Access public and private capital, with advisory services across M&A, strategic transactions, and corporate restructuring.
            </p>
          </div>
          <div className="p-6 bg-white shadow-sm">
            <h5 className="text-section-title text-brand-blue mb-4">Sales & trading</h5>
            <p className="text-small">
              Source liquidity and execute large volume trades efficiently at speed, with corporate hedging and currency strategies.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
