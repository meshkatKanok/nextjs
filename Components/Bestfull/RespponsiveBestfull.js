import Image from "next/image";
import circleRes from '/public/EllipseRes.png'
import RespinkImage from '/public/Vectorespink.png'
import resMAn from '/public/responsive1.png'
import resDew from '/public/resDew.png'
import manusplus from '/public/Manus+.png'
import situp from '/public/crucified-pose.png'
import bestIcone from '/public/Group (1).png'
import { FaAngleRight } from "react-icons/fa";

function RespponsiveBestfull() {
    return (
        
        
        <div className="lg:hidden block">
            {/* best full body----------------------- */}
 <div className="absolute left-[50px] w-[327px] h-[323px] mt-[100px]  ">
<span className="w-[277px] h-[117px] text-[50px] font-bold  leading-[140%] text-[#262524]" style={{fontFamily:'Sporting Grotesque'}}>Best full body <br /> workout to lose fat</span>
<p className="w-[327px] h-[110px] font-normal text-[12px] leading-[180%] text-[#262524] opacity-60 text-justify mt-[20px]">Exercise is a very important need for our body. Health and fitness will be obtained if you can do regular exercise and run a healthy routine. Even at home we still have to be diligent in exercising, either alone or with your friends at home</p>
<button className='lg:h-14 lg:w-[246px] w-44 h-10 bg-[#264373] flex items-center justify-around  mt-[30px]' style={{ boxShadow: '0px 20px 80px rgba(51, 78, 123, 0.3)', borderRadius: "10px" }}>
                                <span className='lg:text-base  text-xs text-white'>Get started</span>
                                <FaAngleRight className='lg:w-[26px] lg:h-[26px] w-4 h-4 text-[#264373]  bg-white rounded-3xl p-1' /></button>
                </div>

                <div className="w-[330.15px] h-[287px] mx-auto relative left-[40px] top-[580px]">
  <div className="relative ">
            <Image alt='pic'  className="w-[220.29] h-[220.29px] absolute top-[40.47px] left-[40px]" src={circleRes}/>
            <Image alt='pic' className="w-[239.42px] h-[177.73px] absolute top-[109.27px] right-[105px]" src={RespinkImage}/>
            <Image alt='pic' className="w-[240.53px] h-[286.78px] absolute top-0" src={resMAn}/>
            <Image alt='pic' className="w-[220.29px] h-[253.91px] absolute top-0" src={resDew}/>

            <div className="w-[34.69px] h-[34.69px] rounded-[28.90px] z-50 absolute top-[10.99px] left-[21.39px] relative" style={{background:'linear-gradient(35.49deg, #DD69C7 15.2%, #FFC0F3 87.25%)'}}>
                        <Image className="w-[19.14px] h-[20.24px] absolute top-[7.52px] left-[7.49px]" src={bestIcone} />
                        </div>


            <div className='w-[34.69px] h-[34.69px] relative rounded-[100px] top-[92px] left-[250px] z-20' style={{ background: 'linear-gradient(50.31deg, #4BACE1 15.91%, #D8F1FF 92.82%)',boxShadow:'0px 4px 14px rgba(0, 0, 0, 0.09)' }}>
                                            <Image alt='pic' className='w-[9.14px] h-[20.24px] absolute top-[7.52px] left-[11.33px]  ' src={manusplus} />
                                        </div>
           </div>
           <div className="w-[117.37px] h-[46.26px] bg-[#FFFFFF] rounded-[5px] absolute top-[228.56px] z-50 left-[-42px]  " style={{boxShadow:'0px 20px 80px rgba(51, 78, 123, 0.3)'}}>
                                       <div className='w-[34.69px] h-[34.69px]  rounded-[34.69px] relative left-[11.56px] top-[5.75px]
                                        
                                        ' style={{ background: 'linear-gradient(45.98deg, #5478EF 19.69%, #D6DFFF 92.63%)',boxShadow:'0px 20px 80px rgba(51, 78, 123, 0.3)' }}>
                                                <Image alt='pic' className='w-[15.5px] h-[20.24px] absolute top-[7.52px] left-[9.88px] ' src={situp} />
                                            </div>
                                            <div>
                                                <span className="
                                                w-[38.16px] h-[16.19px] font-bold 
                                                text-[9.25px] 
                                                leading-[16px]
                                                text-[#262524]
                                                absolute top-0
                                                left-[60px]
                                                top-[6.94px]
                                                ">
                                                    800 kall
                                                </span>
                                                <span className="w-[27.75px] h-[16.19px] text-[6.93px]
                                                font-normal
                                                leading-[16px]
                                                text-[#262524]
                                                opacity-50
                                                absolute top-0
                                                left-[60px]
                                                top-[23.13px]

                                                ">
                                                Burn fat
                                                </span>
                                            </div>
                                       </div>
        </div>


        </div>
    );
}

export default RespponsiveBestfull;