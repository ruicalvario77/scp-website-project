// src/components/CustomHamburger.tsx (Updated)

export default function CustomHamburger() {
  return (
    // Outer div ensures alignment within the button's space
    <div className="flex flex-col space-y-3 w-8"> 
      {/* Top line: Full width (w-full is same as w-6 here) */}
      <div className="w-full h-0.5 bg-brand-gold"></div>
      
      {/* Bottom line container: Ensures the short line aligns to the right */}
      <div className="flex justify-end">
         {/* The actual short gold line */}
         <div className="w-4 h-0.5 bg-brand-gold"></div>
      </div>
    </div>
  );
}
