import { FaAngleRight, FaArrowCircleRight, FaBeer, FaCaretRight, FaPlayCircle } from 'react-icons/fa';
import Image from 'next/image';
import img1 from '/public/Mask Groupd.png'
import img2 from '/public/Mask Group (1).png'
import img3 from '/public/Mask Group (2).png'
import img4 from '/public/Mask Group.png'
import elips from '/public/Ellipse 136.png'
import squareDew from '/public/Group 3840.png'
import TrainerImage from '/public/image 77.png'
import CraveImage from '/public/Vector 32.png'
import circleIcone from '/public/Group (1).png'
import manusplus from '/public/Manus+.png'
import situp from '/public/setup icone.png'

import { global } from 'styled-jsx/css';
import ResponsiveBannerImage from './ResponsiveBannerImage';

function Banner() {
    return (
        <div>
            <section>
                <div className='lg:grid lg:grid-cols-2 '>
                    <div className='lg:w-[1279px] lg:h-[581.94px] lg:ml-[95px]  mx-auto lg:mt-[192px] mt-[60px] w-[327px] h-[243px]'>
                        <span className="banner-healthy lg:w-[568px] lg:text-[56px] sm:leading-[140px] lg:leading-[73px] text-[50px] sm:mx-auto sm:w-[327px] ">Healthy in side <br /> <span className='text-[#8382EB]'>fresh</span> out side</span>
                        <p className='lg:w-[400px] lg:h-[84px] text-justify text-[#262524] lg:text-base text-normal lg:mt-[23px] w-[288px] h-[66px] text-sm mt-[16px] opacity-60' style={{ fontFamily: 'Poppins' }}>Exercise is a very important need for our body. Health and fitness will be obtained if you can do regular exercise and run a healthy routine.</p>
                        <div className='flex items-center mt-10 lg:mt-[22px] lg:mb-[51px] mb-[40px]'>
                            <button className='lg:h-14 lg:w-[246px] w-44 h-10 bg-[#264373] flex items-center justify-around' style={{ boxShadow: '0px 20px 80px rgba(51, 78, 123, 0.3)', borderRadius: "10px" }}>
                                <span className='lg:text-base  text-xs text-white'>Get started</span>
                                <FaAngleRight style={{color:'#264373'
                                }} className='lg:w-[26px] lg:h-[26px] w-4 h-4  bg-white rounded-3xl p-1' /></button>
                            <button className='lg:first-letter lg:w-[174px] lg:h-14 bg-[#FFFFFF] flex items-center align-center justify-evenly lg:ml-[35px] ml-[22px] w-[125px] h-10 ' style={{ borderRadius: '10px', boxShadow: '0px 20px 80px rgba(51, 78, 123, 0.3)' }}>
                                <FaCaretRight className=' text-white bg-[#264373] lg:w-[26px] lg:h-[26px] p-1 rounded-3xl h-4 w-4 ' />
                                <span className='text-xs lg:text-base text-[#264373]'>Learn more</span>
                            </button>
                        </div >

                        <span className='w-[45px] h-18px text-xs text-[#262524]'>Brands:</span>
                        <div className='flex align-center  items-center lg:mt-[29.41px] '>
                            <Image className='lg:w-[58.81px] w-[45.32px] h-[21.25px] lg:h-[21px]' alt='pic' src={img1} />
                            <Image className='lg:ml-[50px] lg:w-[53.87px] lg:h-[36.37px] w-[41.5px] h-[42.09px] ml-[23.11px]' alt='pic' src={img2} />
                            <Image className='lg:ml-[50px] lg:w-[85px] lg:h-[63.94px] w-[61.63px] h-[31.98px] ml-[23.11px]' alt='pic' src={img3} />
                            <Image className='lg:ml-[50px] lg:w-[119.7px] lg:h-[39.6px] w-[92.22px] h-[23.15px] ml-[23.11px]' alt='pic' src={img4} />

                        </div>

                    </div>
                    <div>
                        {/* frist banner image------------ */}
                        <ResponsiveBannerImage />
                        <div className='w-[584px] h-[580px] ml-[127px] relative hidden lg:block'>

                            <div className=' relative'>
                                <Image className={`${global.bgTrainerImg} absolute mt-[98px] left-[61px]  z-10`} src={TrainerImage} />
                                <Image className={`${global.bgImg2} absolute top-[242px]`} src={elips}></Image>
                                <Image className={`${global.bgImg} absolute top-[185px]`} src={squareDew} />
                                <Image className={`${global.bgCarv} absolute top-[355px] left-[11px]`} src={CraveImage} />
                                <div>
                                    {/* banner image 150+ work---------------- */}
                                    <div>
                                        <div className='w-[187px] h-[80px]  bg-white rounded-[10px] flex items-center justify-center absolute
                                    top-[177px] z-10  right-[485px]
                                    
                                    ' style={{ boxShadow: '0px 20px 80px rgba(51, 78, 123, 0.3)' }}>
                                            <div className='w-[60px] h-[60px] rounded-[100px] relative ' style={{ background: 'linear-gradient(45deg, #F8A422 13.75%, #FEDEAC 92.08%)' }}>
                                                <Image className='w-[33.1px] h-[35px] mx-auto   absolute top-[13px] left-[12.95px]' src={circleIcone} />

                                            </div>
                                            <div className='ml-[14px]'>
                                                <span className='w-[38px] h-[28px] text-base font-bold leading-7 text-[#262524]'>150+ <br /></span>
                                                <span className='w-[58px] h-[28px] font-nor
                                                 leading-7 text-[#262524]                                                 ] opacity-50'>Members</span>
                                            </div>
                                        </div>

                                        <div className='w-[60px] h-[60px] relative rounded-[100px] top-[200px] left-[410px] z-20' style={{ background: 'linear-gradient(50.31deg, #4BACE1 15.91%, #D8F1FF 92.82%)',boxShadow:'0px 4px 14px rgba(0, 0, 0, 0.09)' }}>
                                            <Image className='w-[15.81px] h-[35px] absolute top-[13px] left-[19.59px]  ' src={manusplus} />
                                        </div>
                                    </div>
                                    {/* banner image 150+ work--------------End-- */}
                                </div>

                            </div>
                            {/* banner picture second part----------------- */}
                            <div className='flex items-center absolute top-[467px] '>
                                <div className='w-[60px] h-[60px] shadow-[0px_20px_80px_ rgba(51, 78, 123, 0.3)] rounded-[60px] relative right-[63px]

                            ' style={{ background: 'linear-gradient(45.98deg, #5478EF 19.69%, #D6DFFF 92.63%)',boxShadow:'0px 20px 80px rgba(51, 78, 123, 0.3)' }}>
                                    <Image className='w-[35px] h-[16.87px] absolute top-[21.06px] left-[12px] ' src={situp} />
                                </div>
                                <div className='w-[187px] h-[157px] flex items-center flex-col bg-white z-50 rounded-[10px] absolute left-[317px]' style={{ boxShadow: "0px 20px 80px rgba(51, 78, 123, 0.3)" }}>
                                    <div className='w-[66px] h-[66px] bg-[#6765F0] mt-[18px] rounded-[100px]
                         '></div>
                                    <span className='w-[138px] h-[28px] font-bold text-base left-7 text-[#262524] text-center mt-[11px]'>Zaqky Simorang</span>
                                    <span className='w-[43px] font-normal text-base text-[#262524] opacity-50 text-center'>Trainer</span>
                                </div>
                            </div>
                            {/* banner picture second part----------------- */}
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
}

export default Banner;