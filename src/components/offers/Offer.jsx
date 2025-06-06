import React from 'react'
import OfferCard from './OfferCard'

const Offer = () => {
  return (
    <div className='w-full container mx-auto grid grid-cols-2 gap-4'>
        <OfferCard 
          className="custom-class-for-first-card"
          
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
          contentBgColor="#D2EFE1D9"
          buttonText="Order Now"
        />
    </div>
  )
}

export default Offer