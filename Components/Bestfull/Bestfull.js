import Image from "next/image";
import bestfullElips from '/public/BestFullEllipse 137.png'
import bestfullpink from '/public/bestfullPink.png'
import bestManImage from '/public/bestfullImage.png'
import bestFullDew from '/public/bestfullDew.png'
import bestIcone from '/public/Group (1).png'
import manusplus from '/public/Manus+.png'
import situp from '/public/crucified-pose.png'
import { FaAngleRight, FaArrowRight } from "react-icons/fa";

function Bestfull() {
    return (
        <div>
             <div className="w-[1241px] h-[496.38px] mx-auto relative mt-[120px] hidden lg:block">
            <div>
            <Image alt='pic' className="w-[381px] h-[439.14px]
                    absolute top-0 left-[50px]  z-10
                    mt-[43px]
                    " src={bestFullDew}/>
                    <Image alt='pic' className="w-[381px] h-[381px] absolute top-0 left-[60px] mt-[70px] " src={bestfullElips} />
                    <Image alt='pic' className="w-[414.08px] h-[307.39px] absolute top-[190px] right-[845px]" src={bestfullpink}/>
                    <Image alt='pic' className="w-[416px] h-[496px] absolute top-0  z-10" src={bestManImage} />
                    <div className="w-[60px] h-[60px] rounded-[50px] z-50 absolute top-[19px] left-[37px] relative" style={{background:'linear-gradient(35.49deg, #DD69C7 15.2%, #FFC0F3 87.25%)'}}>
                        <Image alt='pic' className="w-[33.1px] h-[35px] absolute top-[13px] left-[12.95px]" src={bestIcone} />
                        <div className='w-[60px] h-[60px] relative rounded-[100px] top-[200px] left-[395px] z-20' style={{ background: 'linear-gradient(50.31deg, #4BACE1 15.91%, #D8F1FF 92.82%)',boxShadow:'0px 4px 14px rgba(0, 0, 0, 0.09)' }}>
                                            <Image alt='pic' className='w-[15.81px] h-[35px] absolute top-[13px] left-[19.59px]  ' src={manusplus} />
                                        </div>
                    </div>
                    <div className="w-[203px] h-[80px] bg-[#FFFFFF] rounded-[10px] absolute top-[378px] z-50 left-[-80px]  " style={{boxShadow:'0px 20px 80px rgba(51, 78, 123, 0.3)'}}>
                                       <div className='w-[60px] h-[60px]  rounded-[60px] relative left-[20px] mt-[10px]
                                        
                                        ' style={{ background: 'linear-gradient(45.98deg, #5478EF 19.69%, #D6DFFF 92.63%)',boxShadow:'0px 20px 80px rgba(51, 78, 123, 0.3)' }}>
                                                <Image alt='pic' className='w-[26.81px] h-[35px] absolute top-[13px] left-[17.19px] ' src={situp} />
                                            </div>
                                            <div>
                                                <span className="
                                                w-[66px] h-7 font-bold 
                                                text-base 
                                                leading-7
                                                text-[#262524]
                                                absolute top-0
                                                left-[100px]
                                                mt-[12px]
                                                ">
                                                    800 kall
                                                </span>
                                                <span className="w-[48px] h-[28px] text-xs
                                                font-normal
                                                leading-7
                                                white-[ #262524]
                                                opacity-50
                                                absolute top-0
                                                left-[100px]
                                                mt-[40px]

                                                ">
                                                Burn fat
                                                </span>
                                            </div>
                                       </div>
            </div>
            {/* best full body----------------------- */}
                <div className="absolute left-[695px]">
<span className="w-[558px] h-[146px] text-base text-[46px] leading-[73px] text-[#262524]">Best full body <br /> workout to lose fat</span>
<p className="w-[553px] h-[112px] font-normal text-base leading-7 text-[#262524] opacity-50 text-justify mt-[30px]">Exercise is a very important need for our body. Health and fitness will be obtained if you can do regular exercise and run a healthy routine. Even at home we still have to be diligent in exercising, either alone or with your friends at home</p>
<button className='lg:h-14 lg:w-[246px] w-44 h-10 bg-[#264373] flex items-center justify-around mt-[40px]' style={{ boxShadow: '0px 20px 80px rgba(51, 78, 123, 0.3)', borderRadius: "10px" }}>
                                <span className='lg:text-base  text-xs text-white'>Get started</span>
                                <FaArrowRight className='lg:w-[26px] lg:h-[26px] w-4 h-4 p-1 text-white' style={{colo
                                :' #264373'}} /></button>
                </div>
             </div>
        </div>
    );
}

export default Bestfull;