import React from 'react';
import OfferCard from './OfferCard';

const Offer = () => {
  return (
    <div className="w-full container mx-auto px-4 py-[var(--section-y-padding)]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <OfferCard
          imageSrc="/offer/offerOneImg.png"
          tagText="Free delivery"
          tagBgColor="#FFD480"
          title="50% Off Summer Sale"
          description="Get half price on all summer collection items."
          buttonText="shop sale"
          contentBgColor="#FFE5E5D9"
        />
        <OfferCard
          imageSrc="/offer/offerTwoImg.png"
          tagText="60% off"
          tagBgColor="var(--primary-color)"
          title="Organic Food"
          description="Save up to 60% off on your first order"
          buttonText="Order Now"
          contentBgColor="#D2EFE1D9"
        />
      </div>
    </div>
  );
};

export default Offer;