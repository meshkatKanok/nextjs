import group from '/public/crucified-pose.png'
import group1 from '/public/Group.png'
import group2 from '/public/Group (1).png'
import Image from 'next/image';
import { FaArrowRight } from 'react-icons/fa';

function SectionThree() {
    return (
        <div>
            <div className="lg:w-[1236px] lg:h-[274px] 
            w-[326px] h-[412px]
            mx-auto mt-[130px] rounded-[30px] grid lg:grid-cols-3 grid-cols-1 items-center" style={{ background: 'linear-gradient(87.05deg, #6462F0 0%, #9190E9 95.5%)' }}>
                <div className='flex items-center justify-center'>
                    <div className='relative lg:ml-[85px] ml-7'>
                        <div className='lg:w-[100px] lg:h-[100px] w-20 h-20 bg-white backdrop-blur-[32px] opacity-20 rounded-[10px] '>
                        </div>
                        <Image alt='pic' className='absolute lg:top-[25px] lg:w-[38.31px] lg:h-[50px] lg:mb-[25px] lg:ml-[30.85px] ml-[24.68px] top-5 lg:mr-[30.85px] w-[30.64px] h-[32.66px] top-5' src={group} />
                    </div>

                    <div className='ml-[30px] mr-14 lg:mr-0 '>
                        <div>
                            <span className='lg:w-[170px] lg:h-[56px] font-bold lg:text-xl leading-[28px] text-white' style={{ fontFamily: 'Poppins' }}>Get that 11 line <br /> in 30 days</span>
                            <br />
                            <button className='flex items-center justify-center w-[93px]h-7 text-base text-white opacity-50 lg:mt-4 mt-2 '>Learn more <FaArrowRight className='h-[15px] w-[15px] ml-4' /></button>
                        </div>
                    </div>
                </div>
                {/* ---------------------------------------------- Get THat 11 line in 30 days  1--------- */}
                <div className='flex items-center justify-center'>
                    <div className='relative ml-px lg:ml-0'>
                        <div className='lg:w-[100px] lg:h-[100px] h-20 w-20 bg-white backdrop-blur-[32px] opacity-20 rounded-[10px] '>
                        </div>
                        <Image alt='pic' className='absolute lg:top-[25px] lg:w-[42.14px] lg:h-[50px] 
                        w-[33.71px] h-10
                        lg:mb-[25px] lg:ml-[28.93px] lg:mr-[28.93px] top-5 lg:left-0 left-[23.14px]' src={group1} />
                    </div>

                    <div className='ml-[30px]'>
                        <div>
                            <span className='lg:w-[170px] h-[56px] w-[160px] font-bold lg:text-xl leading-[28px] text-white ' style={{ fontFamily: 'Poppins' }}>14 Days <br /> sherd challenge</span>
                            <br />
                            <button className='flex items-center justify-center w-[93px]h-7 text-base text-white opacity-50 lg:mt-4 mt-2'>Learn more <FaArrowRight className='h-[15px] w-[15px] ml-[52px] ' /></button>
                        </div>
                    </div>
                </div>
                {/* ------------------------------------------------ */}
                <div className='flex items-center justify-center'>
                    <div className='relative  '>
                        <div className='lg:w-[100px] lg:h-[100px] w-20 h-20 bg-white backdrop-blur-[32px] opacity-20 rounded-[10px] '>
                        </div>
                        <Image alt='pic' className='absolute lg:top-[25px] lg:w-[38.31px] lg:h-[40.83px] lg:mb-[25px] lg:ml-[30.85px] lg:mr-[30.85px] top-5  left-[21.09px] lg:left-0' src={group2} />
                    </div>

                    <div className='ml-[30px]  lg:mr-[80px] mr-[33px]'>
                        <div>
                            <span className='lg:w-[170px] w-[109px] h-[56px] font-bold lg:text-xl leading-[28px] text-white ' style={{ fontFamily: 'Poppins' }}>Get flat belly <br /> in 30 days</span>
                            <br />
                            <button className='flex items-center justify-center w-[93px]h-7 text-base text-white opacity-50 lg:mt-4 mt-2'>Learn more <FaArrowRight className='h-[15px] w-[15px] ml-6 text-[#262524] ' /></button>
                        </div>
                    </div>
                </div>
                {/* ------------------------------------ */}

            </div>
        </div>
    );
}

export default SectionThree;