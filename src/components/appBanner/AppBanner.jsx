import React from 'react'

const AppBanner = () => {
    return (
        <div className='w-full h-[650px] bg-[url("/appBanner/app-pattern.png")]'>
            <div className='w-full h-full bg-[#C5EAD9C7] '>
                <div className='w-full h-full container mx-auto py-10 flex items-center justify-between'>
                    <div className='w-1/2 h-full flex flex-col items-start justify-center gap-5'>
                        <h2 className=' text-[55px] font-bold text-[var(--black-color)]'>Shop Faster With Groceyish App</h2>
                        <p className='text-[20px] font-medium text-[var(--second-grey-color)]'>Available on both IOS & Android</p>
                        <div className='flex items-center'>
                            <img src="/appBanner/appStore.png" alt="" className='h-10 cursor-not-allowed' />
                            <img src="/appBanner/playStore.png" alt="" className='h-10 cursor-not-allowed' />
                        </div>
                    </div>
                    <div className='w-1/2 h-full '>
                        <img src='/appBanner/app-UI.png' alt='App Banner' className='w-auto h-full object-cover' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AppBanner