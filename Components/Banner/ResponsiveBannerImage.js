import Image from "next/image";
import { global } from "styled-jsx/css";
import responsivCilecle from '/public/Ellipse responsive.png'
import responsiveDew from '/public/responsiveDewImage.png'
import MobilebannerImage from '/public/responsiveman image.png'
import responsivevictor from '/public/Vector responsive.png'
import circleIcone from '/public/Group (1).png'
import manusplus from '/public/Manus+.png'
import situp from '/public/setup icone.png'
import Vector from '/public/Vector.png'

function ResponsiveBannerImage() {
    return (
        <div>
            <div className="w-[342.34px] h-[340px]  mt-[80.74px]  block lg:hidden ml-[70px]" st>
                <div className="relative">
                    <Image alt='pic' className="w-[209.86px] h-[340px] z-40 absolute top-[135px] left-[35.76px]" src={MobilebannerImage} />
                    <div className="absolute top-[200px]">
                        <Image alt='pic' className={`${global.responsiveCirlce}w-[254.41px] h-[254.41px] z-10 absolute top-[20px]`} src={responsivCilecle} />
                        <Image alt='pic' className="w-[230.8px] h-[266.02px] top-0 z-40" src={responsiveDew} />
                        <Image alt='pic' className="w-[250.31px] h-[189.34px] absolute top-[85px] left-[25px]" src={responsivevictor} />
                    </div>

                </div>
                
  {/* responsive banner mid part---------------------------------- */}

                <div className='w-[109.62px] h-[46.9px]  bg-white rounded-[5.86px] flex items-center justify-center absolute
                                    top-[620px] z-40  
                                    left-[15px]
                                    
                                    ' style={{ boxShadow: '0px 20px 80px rgba(51, 78, 123, 0.3)' }}>
                    <div className='w-[35.17px] h-[35.17px] rounded-[100px] relative ' style={{ background: 'linear-gradient(45deg, #F8A422 13.75%, #FEDEAC 92.08%)' }}>
                        <Image className='w-[19.4px] h-[20.52px] mx-auto   absolute top-[7.62px] left-[7.03px]' src={circleIcone} />

                    </div>
                    <div className='ml-[8.21px]'>
                        <span className='w-[22.28px] h-[16.41px]  text-[9.37px] text-base font-bold mb-[7px]  text-[#262524]'>150+ <br /> </span>
                        <h2 className='w-[34px] h-[16.41px] text-[7.03px] font-normal
        leading-[0.01rem] text-[ #262524] opacity-50'>Members</h2>
                    </div>
                </div>
                
  {/* banner picture second part----------------- */}
  <div className='flex items-center absolute top-[850px] '>
                            <div className='w-[35.17px] h-[35.17px]  rounded-[60px] relative right-[30px] z-40

                            ' style={{background:'linear-gradient(45.98deg, #5478EF 19.69%, #D6DFFF 92.63%)',boxShadow:'0px 11.7241px 46.8966px rgba(51, 78, 123, 0.3)'}}>
                                  <Image className='w-[20.52px] h-[9.89px] absolute top-[12.35px] left-[7.03px] ' src={situp}/>
                            </div>
                            <div className='w-[109.62px] h-[92.03px] flex items-center flex-col bg-white z-50 rounded-[5px] absolute left-[185px]' style={{boxShadow:"0px 20px 80px rgba(51, 78, 123, 0.3)"}}>
                         <div className='w-[38.69px] h-[38.69px] bg-[#6765F0] mt-[10.55px] rounded-[100px] relative
                         '>
                            <Image className="w-[13.33px] h-[13.33px] absolute top-[12.85px] left-[12.33px]" src={Vector}/>
                         </div>
                         <span className='w-[80.9px] h-[16.41px] font-bold text-[9.37px] left-7 text-[ #262524] text-center mt-[6.45px]'>Zaqky Simorang</span>
                         <span className='w-[25.21px] h-[16.41px] font-normal text-[7px] text-[#262524] opacity-50  '>Trainer</span>
                            </div>
                        </div>
                        {/* banner picture second part----------------- */}

            </div>
            {/* responsive banner mid part---------------------------------- */}
            <div>
               

                <div className='w-[35.17px] h-[35.17px] relative rounded-[100px] bottom-[145px]  left-[307px] z-40' style={{boxShadow:'linear-gradient(50.31deg, #4BACE1 15.91%, #D8F1FF 92.82%)',
                background: 'linear-gradient(50.31deg, #4BACE1 15.91%, #D8F1FF 92.82%)'
            }}>
                    <Image className='w-[9.27px] h-[20.52px] absolute top-[7.62px] left-[11.49px]  ' src={manusplus} />
                </div>
            </div>
        </div>
    );
}

export default ResponsiveBannerImage;