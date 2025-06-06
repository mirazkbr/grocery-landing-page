import React from 'react'

const RegistrationCard = () => {
    return (
        <div className="w-full h-auto bg-[url('/sales/regPattern.png')] bg-cover bg-center">
            <div className='w-full h-full flex flex-col items-center justify-between text-center p-4 bg-[#FFF7E6CC]'>
                <div>
                    <h3 className='text-[32px] font-bold text-[var(--black-color)]'>10% off</h3>
                    <p className='text-[16px] font-medium text-[var(--black-color)]'>For new member sign up at the first time</p>
                </div>
                <div className='w-full max-w-[400px] my-4 flex flex-col gap-4'>
                    <input
                        type="text"
                        placeholder='Enter your email address'
                        className='w-full px-4 py-2 border border-gray-300 bg-white focus:outline-none  focus:ring-[var(--primary-color)]'
                    />

                    <button className='w-full block bg-[var(--primary-color)] text-white px-5 py-3 cursor-pointer'>
                        Register Now
                    </button>
                </div>

            </div>
        </div>
    )
}

export default RegistrationCard