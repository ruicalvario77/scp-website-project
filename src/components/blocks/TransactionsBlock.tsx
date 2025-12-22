// src/components/blocks/TransactionsBlock.tsx
export default function TransactionsBlock() {
  return (
    <section className="bg-brand-navy text-white py-16 px-8">
      <div className="container mx-auto">
        <h4 className="text-section-title text-brand-gold mb-4">Transactions</h4>
        <h2>Proven track. Trusted partner.</h2>
        
        {/* Statistics Grid */}
        <div className="grid md:grid-cols-4 gap-8 mt-12">
          <div>
            <div className="text-section-subtitle text-brand-gold">380+</div>
            <p className="text-small mt-1">Transactions</p>
          </div>
          <div>
            <div className="text-section-subtitle text-brand-gold">&gt;$7bn</div>
            <p className="text-small mt-1">Capital raised</p>
          </div>
          <div>
            <div className="text-section-subtitle text-brand-gold">&gt;$4.7bn</div>
            <p className="text-small mt-1">M&A advisory</p>
          </div>
          {/* Add 2017 Founded and 100% Owned stats here */}
        </div>
        
        <button className="btn-primary bg-brand-gold text-brand-navy mt-12">
          Recent transactions
        </button>
      </div>
    </section>
  );
}
