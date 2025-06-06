import React, { useEffect, useState } from 'react';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import Card from './Card';
import RegistrationCard from './RegistrationCard';
const DailySells = () => {
    const [timeLeft, setTimeLeft] = useState(12 * 60 * 60); // 12 hours in seconds

    useEffect(() => {
        const interval = setInterval(() => {
            setTimeLeft(prev => {
                if (prev <= 1) {
                    clearInterval(interval);
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const formatTime = (seconds) => {
        const hrs = String(Math.floor(seconds / 3600)).padStart(2, '0');
        const mins = String(Math.floor((seconds % 3600) / 60)).padStart(2, '0');
        const secs = String(seconds % 60).padStart(2, '0');
        return `${hrs} : ${mins} : ${secs}`;
    };

    return (
        <div className='w-full container mx-auto py-[var(--section-y-padding)]'>
            <div className='flex items-center justify-between gap-4 pb-[50px]'>
                <div className='max-w-[65%] flex items-center justify-between gap-8'>
                    <h3 className="text-[32px] font-semibold">Daily Best Sells</h3>
                    <ul className='flex gap-4 text-[16px] font-medium items-center '>
                        <li className='px-2 py-1'>Featured</li>
                        <li className='px-2 py-1'>Popular</li>
                        <li className='px-2 py-1'>New</li>
                    </ul>
                    <div className="text-[18px] font-medium bg-[#F35244] text-white px-4 py-2">
                        <div
                            className="text-[18px] font-medium"
                            dangerouslySetInnerHTML={{
                                __html: `Expires in:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${formatTime(timeLeft)}`
                            }}
                        />
                    </div>
                </div>
                <div className='w-auto flex gap-4 items-center'>
                    {/* Dummy Slide Arrows */}
                    <button className="  bg-[#f0f0f0] shadow p-2 rounded-full cursor-not-allowed">
                        <FaArrowLeft />
                    </button>
                    <button className="  bg-[#f0f0f0] shadow p-2 rounded-full cursor-not-allowed">
                        <FaArrowRight />
                    </button>
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 '>
                <Card />
                <RegistrationCard />
            </div>
        </div>
    );
};

export default DailySells;
