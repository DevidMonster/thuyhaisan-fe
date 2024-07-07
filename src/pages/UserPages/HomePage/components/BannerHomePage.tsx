// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import Banner1 from '../../../../assets/images/banner-home-desktop.png';
import Banner2 from '../../../../assets/images/banner-lang-chai-xua-vn-banner-ne2t.jpg';
import Banner3 from '../../../../assets/images/chao-don-tet-2023-chin-su-ra-mat-nuoc-mam-ca-com-mua-xuan-phien-ban-gioi-han-202301101340409201.jpg';
import Banner4 from '../../../../assets/images/maxresdefault.jpg';

// TODO update the banner images get from S3 and remove the local images

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Pagination, Autoplay } from 'swiper/modules';
const BANNER_URL = [
   Banner1,
   Banner2,
   Banner3,
   Banner4
];
export default function BannerHomePage() {
   return (
      <>
         <div className='cont mx-auto'>
            <Swiper
               slidesPerView={1}
               spaceBetween={30}
               loop={true}
               autoplay={{
                  delay: 3000,
                  disableOnInteraction: false
               }}
               modules={[Pagination, Autoplay]}
               className='mySwiper'
            >
               {BANNER_URL.map((url, index) => (
                  <SwiperSlide key={index}>
                     <div className='banner-item w-full max-h-[600px]'>
                        <img
                           className='w-full h-full max-md:object-cover max-md:object-left object-cover'
                           src={url}
                           alt='banner'
                        />
                     </div>
                  </SwiperSlide>
               ))}
            </Swiper>
         </div>
      </>
   );
}
