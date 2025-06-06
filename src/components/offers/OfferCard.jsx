import React from 'react'

const OfferCard = ({ 
  className = '',
  imageSrc = '/offer/offerOneImg.png',
  tagText = 'free delivery',
  tagBgColor = '#FFD480',
  title = 'Free delivery over $50',
  description = 'Shop $50 product and get free delivery anywhre.',
  buttonText = 'shop now',
  contentBgColor = '#FFF5E1D9'
}) => {
  return (
    <div className={`w-full h-auto bg-[url("/offer/offerPattern.png")] bg-cover bg-center relative ${className}`}>
        <div className='w-auto h-full absolute bottom-0 right-0 z-0'>
          <img src={imageSrc} alt="" className='w-full h-full object-cover'/>
        </div>
        <div className={`z-10 p-10`} style={{backgroundColor: contentBgColor}}>
            <div className={`p-2 w-[100px] inline-block rounded-[2px] text-center text-white text-[12px]`} style={{backgroundColor: tagBgColor}}>{tagText}</div>
            <h4 className='text-[28px] font-semibold text-[var(--black-color)] py-2'>{title}</h4>
            <p className='text-[var(--second-grey-color)] text-[18px] font-medium max-w-1/2 py-2'>{description}</p>
            <button className='bg-[var(--primary-color)] text-white px-5 py-3 mt-4 cursor-pointer'>{buttonText}</button>
        </div>
    </div>
  )
}

export default OfferCard