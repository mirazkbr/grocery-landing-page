import React from 'react';

const AppBanner = () => {
  return (
    <div className="w-full bg-[url('/appBanner/app-pattern.png')] bg-cover bg-center">
      <div className="w-full bg-[#C5EAD9C7]">
        <div className="container mx-auto px-4 py-8 md:py-12 lg:py-16">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-10">
            {/* Text Content */}
            <div className="w-full lg:w-1/2 flex flex-col items-start justify-center gap-5 text-center lg:text-left">
              <h2 className="text-[28px] sm:text-[36px] md:text-[44px] lg:text-[55px] font-bold text-[var(--black-color)] leading-tight">
                Shop Faster With Groceyish App
              </h2>
              <p className="text-[16px] sm:text-[18px] md:text-[20px] font-medium text-[var(--second-grey-color)]">
                Available on both IOS & Android
              </p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-4 mt-2">
                <img
                  src="/appBanner/appStore.png"
                  alt="App Store"
                  className="h-10 sm:h-12 cursor-pointer hover:opacity-90"
                />
                <img
                  src="/appBanner/playStore.png"
                  alt="Google Play"
                  className="h-10 sm:h-12 cursor-pointer hover:opacity-90"
                />
              </div>
            </div>

            {/* App Image */}
            <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
              <img
                src="/appBanner/app-UI.png"
                alt="Groceyish App"
                className="w-full max-w-md h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppBanner;