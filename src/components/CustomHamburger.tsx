// src/components/CustomHamburger.tsx

/**
 * A presentational component rendering a custom, asymmetrical hamburger icon.
 * Follows the established brand standard using the gold accent color.
 */
export default function CustomHamburger() {
  return (
    // Establishes the container dimensions for the icon
    <div className="flex flex-col space-y-3 w-8"> 
      {/* Top bar: Occupies the full width of the container */}
      <div className="w-full h-0.5 bg-brand-gold"></div>
      
      {/* Bottom bar alignment logic */}
      <div className="flex justify-end">
         {/* Bottom bar: Shorter width, right-aligned within the flex container */}
         <div className="w-4 h-0.5 bg-brand-gold"></div>
      </div>
    </div>
  );
}
