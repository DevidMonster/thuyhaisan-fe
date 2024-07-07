import { AiFillSafetyCertificate } from 'react-icons/ai';
import { BsTruck } from 'react-icons/bs';
import { RiProductHuntFill } from 'react-icons/ri';
import { LiaCertificateSolid } from "react-icons/lia";
const MyService = () => {
   return (
      <div className=''>
         <section className='section-services lg:my-[60px] md:my-[40px] max-md:my-[20px]'>
            <div className='cont mx-auto px-[15px] 3xl:w-[1380px] 2xl:w-[1320px] xl:w-[1170px]   lg:w-[970px]  md:w-[750px]'>
               <div className='list-service flex flex-wrap lg:justify-between md:justify-around md:gap-y-[30px] max-md:gap-[12px]'>
                  <div className='service-item max-md:w-full p-[20px] border-[1px] border-[rgba(0,0,0,10%)] lg:w-[calc(25%-30px)]  md:w-[calc(50%-30px)] rounded-[5px] flex items-center'>
                     <div className='service-icon text-color1st text-[30px]'>
                        <BsTruck></BsTruck>
                     </div>
                     <div className='service-text ml-[20px]'>
                        <p className='service-title text-[#333333] font-bold text-[18px]'>Giao hàng uy tín</p>
                        <p className='text-[16px]'>Đảm bảo giao đến tận nơi</p>
                     </div>
                  </div>
                  <div className='service-item max-md:w-full p-[20px] border-[1px] border-[rgba(0,0,0,10%)] lg:w-[calc(25%-30px)]  md:w-[calc(50%-30px)] rounded-[5px] flex items-center'>
                     <div className='service-icon text-color1st text-[30px]'>
                        <LiaCertificateSolid />
                     </div>
                     <div className='service-text ml-[20px]'>
                        <p className='service-title text-[#333333] font-bold text-[18px]'>Chứng nhận C/O</p>
                     </div>
                  </div>
                  <div className='service-item max-md:w-full p-[20px] border-[1px] border-[rgba(0,0,0,10%)] lg:w-[calc(25%-30px)]  md:w-[calc(50%-30px)] rounded-[5px] flex items-center'>
                     <div className='service-icon text-color1st text-[30px]'>
                        <AiFillSafetyCertificate />
                     </div>
                     <div className='service-text ml-[20px]'>
                        <p className='service-title text-[#333333] font-bold text-[18px]'>Đảm bảo Chất lượng</p>
                     </div>
                  </div>
                  <div className='service-item max-md:w-full p-[20px] border-[1px] border-[rgba(0,0,0,10%)] lg:w-[calc(25%-30px)]  md:w-[calc(50%-30px)] rounded-[5px] flex items-center'>
                     <div className='service-icon text-color1st text-[30px]'>
                        <RiProductHuntFill></RiProductHuntFill>
                     </div>
                     <div className='service-text ml-[20px]'>
                        <p className='service-title text-[#333333] font-bold text-[18px]'>Sản phẩm chất lượng cao</p>
                        <p className='text-[16px]'>Nguồn gốc rõ ràng</p>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </div>
   );
};

export default MyService;
